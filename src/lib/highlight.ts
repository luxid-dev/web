/**
 * A small, dependency-free syntax highlighter.
 *
 * The docs site previously mounted a Monaco editor for every code block, which
 * meant shipping a full IDE to render twenty lines of Rust. This tokenises the
 * source once, escapes it, and returns HTML — no editor, no worker, no layout
 * thrash.
 *
 * Everything is escaped *inside* the tokeniser, so no raw source text can ever
 * reach the DOM as markup.
 */

export type Language =
  | 'rust'
  | 'toml'
  | 'html'
  | 'javascript'
  | 'bash'
  | 'sh'
  | 'shell'
  | 'ini'
  | 'env'
  | 'json'
  | 'sql'
  | 'yaml'
  | 'markdown'
  | 'xml'
  | 'css'
  | 'text';

/** Token classes map to CSS custom properties defined in index.css. */
type TokenType =
  | 'comment'
  | 'string'
  | 'keyword'
  | 'directive'
  | 'attribute'
  | 'type'
  | 'function'
  | 'variable'
  | 'number'
  | 'operator'
  | 'punctuation'
  | 'tag'
  | 'property'
  | 'plain';

interface Rule {
  type: TokenType;
  pattern: RegExp;
  /** When set, the capture group at this index is the token; the rest is plain. */
  group?: number;
}

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const wrap = (type: TokenType, text: string): string =>
  type === 'plain' ? escapeHtml(text) : `<span class="tok tok-${type}">${escapeHtml(text)}</span>`;

// Strict keywords first, then the reserved ones, so an example that mentions
// `become` or `gen` still colours consistently. Both sides are `\b`-anchored at
// the use site, so alternation order does not matter.
const RUST_KEYWORDS =
  'as|async|await|break|const|continue|crate|dyn|else|enum|extern|false|fn|for|if|impl|in|' +
  'let|loop|match|mod|move|mut|pub|ref|return|self|Self|static|struct|super|trait|true|type|' +
  'union|unsafe|use|where|while|' +
  'abstract|become|box|do|final|gen|macro|macro_rules|override|priv|try|typeof|unsized|virtual|yield';

const RUST_TYPES =
  'bool|char|f32|f64|i8|i16|i32|i64|i128|isize|str|u8|u16|u32|u64|u128|usize|String|Vec|Option|Result|Box|Arc|Rc|HashMap|BTreeMap';

const RULES: Record<string, Rule[]> = {
  rust: [
    // Doc comments first, so `///` is not eaten by the `//` rule.
    { type: 'comment', pattern: /\/\/\/[^\n]*|\/\/![^\n]*|\/\*[\s\S]*?\*\/|\/\/[^\n]*/ },
    { type: 'attribute', pattern: /#!?\[[^\]\n]*\]/ },
    // Raw strings before ordinary ones, or `r#"..."#` loses its hashes.
    { type: 'string', pattern: /r#*"(?:[^"]|"(?!#))*"#*|"(?:\\.|[^"\\])*"|b?'(?:\\.|[^'\\])'/ },
    // A lifetime, not a character literal: no closing quote.
    { type: 'variable', pattern: /'[a-z_][a-zA-Z0-9_]*\b(?!')/ },
    // Macros keep their bang, so `json!` reads as one token.
    { type: 'function', pattern: /\b[a-z_][a-zA-Z0-9_]*!(?=[([{])/ },
    // Keywords come before the call rule: `match (a, b)` and `return (x)` are
    // not function calls, and the tokeniser takes the first rule that matches
    // at the cursor.
    { type: 'keyword', pattern: new RegExp(`\\b(?:${RUST_KEYWORDS})\\b`) },
    { type: 'function', pattern: /\b[a-z_][a-zA-Z0-9_]*(?=\s*\()/ },
    { type: 'type', pattern: new RegExp(`\\b(?:${RUST_TYPES})\\b`) },
    { type: 'type', pattern: /\b[A-Z][A-Za-z0-9_]*\b/ },
    { type: 'number', pattern: /\b\d[\d_]*(?:\.\d+)?(?:[iuf](?:8|16|32|64|128|size))?\b/ },
    { type: 'operator', pattern: /=>|->|::|\.\.=?|&&|\|\||[=!<>]=?|[+\-*/%!?&|^]/ },
    { type: 'punctuation', pattern: /[{}[\]();,:#]/ },
  ],

  toml: [
    { type: 'comment', pattern: /#[^\n]*/ },
    { type: 'tag', pattern: /^\s*\[\[?[^\]\n]*\]\]?/m },
    { type: 'property', pattern: /^[ \t]*[A-Za-z_"][\w.\-"]*(?=\s*=)/m },
    // Keys inside an inline table: `luxid = { version = "0.1.2", ... }`.
    { type: 'property', pattern: /(?<=[{,]\s{0,4})[A-Za-z_][\w.-]*(?=\s*=)/ },
    // Multi-line strings before single-line ones, or the fences are eaten.
    { type: 'string', pattern: /"""[\s\S]*?"""|'''[\s\S]*?'''/ },
    { type: 'string', pattern: /"(?:\\.|[^"\\])*"|'[^'\n]*'/ },
    // RFC 3339 dates, which TOML treats as a first-class type.
    { type: 'number', pattern: /\b\d{4}-\d{2}-\d{2}(?:[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?\b/ },
    { type: 'keyword', pattern: /\b(?:true|false)\b/ },
    { type: 'number', pattern: /\b\d[\d_]*(?:\.\d+)?\b/ },
    { type: 'operator', pattern: /=/ },
    { type: 'punctuation', pattern: /[[\]{},.]/ },
  ],


  bash: [
    { type: 'comment', pattern: /#[^\n]*/ },
    // A copied prompt. Dim, so the command beside it is what stands out.
    { type: 'punctuation', pattern: /^\s*[$>#](?=\s)/m },
    { type: 'string', pattern: /'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"/ },
    { type: 'variable', pattern: /\$\{[^}]*\}|\$[A-Za-z_][A-Za-z0-9_]*/ },
    // `make:model`, `db:sync`, `migrate:rollback` — the subcommand is the verb
    // a reader is actually looking for, so it gets its own colour.
    { type: 'function', pattern: /\b[a-z][a-z0-9_-]*:[a-z][a-z0-9_-]*\b/ },
    {
      type: 'keyword',
      pattern:
        /(?<![\w-])(?:cargo|luxid|rustup|rustc|npm|npx|pnpm|yarn|git|curl|wget|cd|ls|mkdir|rmdir|rm|cp|mv|cat|echo|touch|chmod|chown|tar|unzip|open|kill|ps|grep|find|sed|awk|sudo|systemctl|service|export|source|docker|docker-compose|kubectl|psql|mysql|sqlite3|jq|make|brew|apt|apt-get|dnf|pacman|ssh|scp|rsync)(?![\w-])/,
    },
    // `--` on its own separates cargo's arguments from the binary's.
    { type: 'operator', pattern: /(?<=^|\s)--(?=\s|$)/ },
    { type: 'directive', pattern: /(?<=^|\s)--?[A-Za-z][A-Za-z0-9-]*(?:=[^\s]*)?/ },
    // Paths and URLs are literal arguments, so they share the string slot —
    // `function` is already spoken for by subcommands on the same line.
    { type: 'string', pattern: /\bhttps?:\/\/[^\s"'`]+/ },
    { type: 'string', pattern: /(?<=^|\s)(?:~|\.{1,2})?\/[^\s"'`|&;]*/ },
    { type: 'string', pattern: /\b[\w.-]+\.(?:rs|toml|json|lock|md|env|sh|sql|yml|yaml)\b/ },
    { type: 'number', pattern: /\b\d+\b/ },
    { type: 'operator', pattern: /&&|\|\||[|&><;]/ },
  ],

  ini: [
    { type: 'comment', pattern: /[;#][^\n]*/ },
    { type: 'tag', pattern: /^\[[^\]\n]*\]/m },
    { type: 'property', pattern: /^[ \t]*[A-Za-z_][\w.]*(?=\s*=)/m },
    { type: 'string', pattern: /"(?:\\.|[^"\\])*"/ },
    { type: 'number', pattern: /\b\d+\b/ },
    { type: 'operator', pattern: /=/ },
  ],

  json: [
    { type: 'property', pattern: /"(?:\\.|[^"\\])*"(?=\s*:)/ },
    { type: 'string', pattern: /"(?:\\.|[^"\\])*"/ },
    { type: 'keyword', pattern: /\b(?:true|false|null)\b/ },
    { type: 'number', pattern: /-?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/ },
    { type: 'punctuation', pattern: /[{}[\],:]/ },
  ],

  sql: [
    { type: 'comment', pattern: /--[^\n]*|\/\*[\s\S]*?\*\// },
    { type: 'string', pattern: /'(?:''|[^'])*'/ },
    {
      type: 'keyword',
      pattern:
        /\b(?:SELECT|FROM|WHERE|INSERT|INTO|VALUES|UPDATE|SET|DELETE|CREATE|TABLE|ALTER|DROP|INDEX|JOIN|LEFT|RIGHT|INNER|OUTER|ON|AND|OR|NOT|NULL|ORDER|GROUP|BY|LIMIT|OFFSET|AS|DISTINCT|COUNT|PRIMARY|KEY|FOREIGN|REFERENCES|DEFAULT|UNIQUE|ENGINE|CHARSET)\b/i,
    },
    { type: 'number', pattern: /\b\d+\b/ },
    { type: 'punctuation', pattern: /[(),;.*]/ },
  ],

  yaml: [
    { type: 'comment', pattern: /#[^\n]*/ },
    { type: 'property', pattern: /^[ \t-]*[A-Za-z_][\w.-]*(?=\s*:)/m },
    { type: 'string', pattern: /'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"/ },
    { type: 'keyword', pattern: /\b(?:true|false|null|yes|no)\b/ },
    { type: 'number', pattern: /\b\d+(?:\.\d+)?\b/ },
    { type: 'punctuation', pattern: /[:\-[\]{},]/ },
  ],

  css: [
    { type: 'comment', pattern: /\/\*[\s\S]*?\*\// },
    { type: 'string', pattern: /'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"/ },
    { type: 'tag', pattern: /@[a-z-]+/ },
    { type: 'property', pattern: /[-a-zA-Z]+(?=\s*:)/ },
    { type: 'number', pattern: /-?\b\d+(?:\.\d+)?(?:px|rem|em|%|s|ms|vh|vw)?\b/ },
    { type: 'punctuation', pattern: /[{}();:,]/ },
  ],

  javascript: [
    { type: 'comment', pattern: /\/\*[\s\S]*?\*\/|\/\/[^\n]*/ },
    { type: 'string', pattern: /'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|`(?:\\.|[^`\\])*`/ },
    {
      type: 'keyword',
      pattern:
        /\b(?:const|let|var|function|return|if|else|for|while|class|extends|import|from|export|default|new|await|async|try|catch|throw|typeof|instanceof|null|undefined|true|false)\b/,
    },
    { type: 'function', pattern: /\b[a-zA-Z_$][\w$]*(?=\s*\()/ },
    { type: 'type', pattern: /\b[A-Z][A-Za-z0-9_]*\b/ },
    { type: 'number', pattern: /\b\d+(?:\.\d+)?\b/ },
    { type: 'operator', pattern: /=>|===|!==|[=!<>]=?|[+\-*/%?|&]/ },
    { type: 'punctuation', pattern: /[{}[\]();,.:]/ },
  ],
};


RULES.html = [
  { type: 'comment', pattern: /<!--[\s\S]*?-->/ },
  { type: 'string', pattern: /'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"/ },
  { type: 'tag', pattern: /<\/?[a-zA-Z][\w-]*|\/?>/ },
  { type: 'property', pattern: /\b[a-zA-Z-]+(?==)/ },
];

RULES.xml = RULES.html;

/**
 * `.env` files.
 *
 * Previously an alias for `ini`, which was close but wrong: env files have no
 * `[sections]`, values are unquoted more often than not, and `${VAR}`
 * interpolation matters. Keys carry the weight here, so they get the property
 * colour and the value stays quiet.
 */
RULES.env = [
  { type: 'comment', pattern: /#[^\n]*/ },
  { type: 'keyword', pattern: /^\s*export\b/m },
  { type: 'property', pattern: /^[ \t]*[A-Za-z_][A-Za-z0-9_]*(?=\s*=)/m },
  { type: 'operator', pattern: /=/ },
  { type: 'variable', pattern: /\$\{[^}]*\}|\$[A-Za-z_][A-Za-z0-9_]*/ },
  { type: 'string', pattern: /"(?:\\.|[^"\\])*"|'[^'\n]*'/ },
  // Connection strings and URLs are the most common value in a Luxid `.env`.
  { type: 'string', pattern: /\b[a-z][a-z0-9+.-]*:\/\/[^\s"']*/ },
  { type: 'keyword', pattern: /\b(?:true|false|null)\b/ },
  { type: 'number', pattern: /\b\d+\b/ },
];

/**
 * Terminal output — the `text` blocks.
 *
 * These are not prose: they are route tables, migration status, file trees and
 * error messages, and each has structure worth seeing. The route table is the
 * shape that drove the rules — method, path, handler and middleware count each
 * land in a different colour, so the table reads as columns rather than as a
 * wall of monospace.
 */
RULES.text = [
  { type: 'comment', pattern: /^\s*#[^\n]*/m },
  // Severity labels, as `rustc` and the Luxid CLI print them.
  { type: 'keyword', pattern: /\b(?:error|warning|note|help)(?=:)/ },
  // HTTP methods, at the start of a `cargo luxid routes` row.
  { type: 'keyword', pattern: /^\s*(?:GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)\b/m },
  // What the CLI reports having done.
  { type: 'function', pattern: /^\s*(?:applied|pending|updated|created|wrote|removed|skipped|listening|running|ok|failed|error)\b/m },
  { type: 'string', pattern: /\bhttps?:\/\/[^\s"'`]+/ },
  // Backticked identifiers inside an error message.
  { type: 'type', pattern: /`[^`\n]*`/ },
  // Qualified handlers: `PostsController::index`.
  { type: 'type', pattern: /\b[A-Za-z_][A-Za-z0-9_]*(?:::[A-Za-z_][A-Za-z0-9_]*)+/ },
  // Route paths, and paths in a file tree. Same slot as in `bash`, and kept
  // clear of `function` so `updated src/entities/posts.rs` shows two colours.
  { type: 'string', pattern: /(?<=^|\s)(?:~|\.{1,2})?\/[^\s"'`]*/ },
  { type: 'string', pattern: /\b[\w.-]+\.(?:rs|toml|json|lock|md|env|sh|sql|yml|yaml)\b/ },
  { type: 'string', pattern: /\b[\w-]+\/(?=\s|$)/ },
  // Box-drawing glyphs in a file tree, and the arrow in a cycle report.
  { type: 'punctuation', pattern: /[\u2500-\u257f\u2192\u2190]+/ },
  { type: 'number', pattern: /\b\d+\b/ },
  { type: 'punctuation', pattern: /[[\]]/ },
];

/**
 * Aliases. The docs write ```sh``` far more often than ```bash```, and a
 * missing key here means a block renders with no highlighting at all rather
 * than failing loudly — so every spelling in use maps to a grammar.
 */
RULES.sh = RULES.bash;
RULES.shell = RULES.bash;
RULES.zsh = RULES.bash;
RULES.console = RULES.bash;
RULES.terminal = RULES.bash;
RULES.txt = RULES.text;
RULES.output = RULES.text;
RULES.dotenv = RULES.env;

RULES.markdown = [
  { type: 'comment', pattern: /^>.*$/m },
  { type: 'keyword', pattern: /^#{1,6}\s.*$/m },
  { type: 'string', pattern: /`[^`\n]*`/ },
  { type: 'function', pattern: /\*\*[^*\n]+\*\*/ },
  { type: 'tag', pattern: /\[[^\]\n]*\]\([^)\n]*\)/ },
];

/**
 * Highlight a block of source into HTML.
 *
 * Rules are tried in order at each position; the first that matches at the
 * cursor wins, which is why comments and strings are listed first — they must
 * swallow anything that looks like a keyword inside them.
 */
export function highlight(code: string, language: Language | string = 'rust'): string {
  const rules = RULES[language];

  if (!rules) {
    return escapeHtml(code);
  }

  // Anchor every pattern so it can only match at the cursor, and make it
  // sticky so `lastIndex` controls where the match is attempted.
  const anchored = rules.map((rule) => ({
    type: rule.type,
    regex: new RegExp(rule.pattern.source, rule.pattern.flags.replace(/[gy]/g, '') + 'y'),
  }));

  let out = '';
  let plain = '';
  let index = 0;

  while (index < code.length) {
    let matched = false;

    for (const rule of anchored) {
      rule.regex.lastIndex = index;
      const match = rule.regex.exec(code);

      if (match && match[0].length > 0) {
        if (plain) {
          out += escapeHtml(plain);
          plain = '';
        }
        out += wrap(rule.type, match[0]);
        index += match[0].length;
        matched = true;
        break;
      }
    }

    if (!matched) {
      plain += code[index];
      index += 1;
    }
  }

  if (plain) {
    out += escapeHtml(plain);
  }

  return out;
}

/** Friendly label shown on a code block's header when no filename is given. */
export const languageLabel = (language: string): string =>
  ({
    rust: 'Rust',
    toml: 'TOML',
    bash: 'Terminal',
    sh: 'Terminal',
    shell: 'Terminal',
    zsh: 'Terminal',
    console: 'Terminal',
    terminal: 'Terminal',
    ini: 'INI',
    env: '.env',
    dotenv: '.env',
    json: 'JSON',
    sql: 'SQL',
    yaml: 'YAML',
    html: 'HTML',
    xml: 'XML',
    css: 'CSS',
    javascript: 'JavaScript',
    markdown: 'Markdown',
    text: 'Output',
    txt: 'Output',
    output: 'Output',
  })[language] ?? language.toUpperCase();
