import {
  Blocks,
  BookOpen,
  Database,
  Layers,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
} from 'lucide-react';

/**
 * Chapter metadata for the whole documentation set.
 *
 * This module deliberately imports no content components. The sidebar, the
 * search palette and the docs chrome only need titles, paths and keywords —
 * and the search palette is mounted on the marketing pages too. Keeping the
 * metadata separate from `content/index.ts` stops those pages from
 * downloading every chapter's code just to build a search index.
 */

export interface DocChapter {
  id: string;
  title: string;
  path: string;
  /** Name of the exported content component, resolved at render time. */
  content: string;
  /** One line shown in search results and on section index cards. */
  description: string;
  /** Extra search terms that do not appear in the title. */
  keywords?: string[];
  /** Flags the recommended entry point. */
  quickStart?: boolean;
  /** Marks a chapter added in this documentation pass. */
  isNew?: boolean;
}

export interface DocSection {
  id: string;
  title: string;
  icon: typeof Rocket;
  chapters: DocChapter[];
}

export const docsChapters: DocSection[] = [
  {
    id: 'prologue',
    title: 'Prologue',
    icon: BookOpen,
    chapters: [
      {
        id: 'introduction',
        title: 'Introduction',
        path: '/docs/introduction',
        content: 'IntroductionContent',
        description: 'What Luxid is, and the four ideas the rest of the framework rests on.',
        keywords: ['about', 'why', 'philosophy', 'rust', 'laravel', 'adonisjs'],
        quickStart: true,
      },
      {
        id: 'installation',
        title: 'Installation',
        path: '/docs/installation',
        content: 'InstallationContent',
        description: 'Rust, the luxid binary, and your first project.',
        keywords: ['install', 'cargo', 'setup', 'rustup', 'getting started'],
      },
      {
        id: 'first-app',
        title: 'Your First App',
        path: '/docs/first-app',
        content: 'FirstAppContent',
        description: 'A working endpoint, and every file it touches.',
        keywords: ['quickstart', 'hello world', 'tour'],
      },
    ],
  },
  {
    id: 'basics',
    title: 'Handling Requests',
    icon: Workflow,
    chapters: [
      {
        id: 'routing',
        title: 'Routing',
        path: '/docs/routing',
        content: 'RoutingContent',
        description: 'Paths, groups, route parameters, and resource routes.',
        keywords: ['routes', 'router', 'get', 'post', 'resource', 'groups'],
      },
      {
        id: 'controllers',
        title: 'Controllers',
        path: '/docs/controllers',
        content: 'ControllersContent',
        description: 'Actions, HttpContext, and how a request flows through your code.',
        keywords: ['actions', 'context', 'handler', 'endpoint'],
      },
      {
        id: 'requests',
        title: 'Requests & Responses',
        path: '/docs/requests',
        content: 'RequestsContent',
        description: 'Reading input, writing output, headers and cookies.',
        keywords: ['input', 'query', 'body', 'json', 'response', 'cookie'],
      },
      {
        id: 'errors',
        title: 'Errors',
        path: '/docs/errors',
        content: 'ErrorHandlingContent',
        description: 'Why ? is enough, and what your clients see when things fail.',
        keywords: ['error', 'problem', 'rfc7807', 'status', '404', '422'],
      },
      {
        id: 'middleware',
        title: 'Middleware',
        path: '/docs/middleware',
        content: 'MiddlewareContent',
        description: 'Running code around every request, and passing data to actions.',
        keywords: ['middleware', 'next', 'guard', 'before', 'after'],
      },
    ],
  },
  {
    id: 'application',
    title: 'The Application',
    icon: Layers,
    chapters: [
      {
        id: 'services',
        title: 'Services',
        path: '/docs/services',
        content: 'ServicesContent',
        description: 'The container: shared objects, swappable in tests.',
        keywords: ['container', 'providers', 'singleton', 'scoped', 'di', 'inject'],
      },
      {
        id: 'configuration',
        title: 'Configuration',
        path: '/docs/configuration',
        content: 'ConfigurationContent',
        description: 'luxid.toml, environment variables, and ctx.config.',
        keywords: ['config', 'env', 'toml', 'settings', 'secrets'],
      },
    ],
  },
  {
    id: 'lucid',
    title: 'Lucid — Data',
    icon: Database,
    chapters: [
      {
        id: 'database',
        title: 'Database & Migrations',
        path: '/docs/database',
        content: 'MigrationsContent',
        description: 'Connecting, and changing your schema over time.',
        keywords: ['database', 'migration', 'sqlite', 'postgres', 'schema', 'db:sync'],
      },
      {
        id: 'models',
        title: 'Models & Queries',
        path: '/docs/models',
        content: 'ModelsContent',
        description: 'Reading and writing rows, with typed columns.',
        keywords: ['model', 'query', 'find', 'paginate', 'insert', 'update', 'orm'],
      },
      {
        id: 'relations',
        title: 'Relations',
        path: '/docs/relations',
        content: 'RelationshipsContent',
        description: 'Linking models, and defeating the N+1 problem.',
        keywords: ['relations', 'has_many', 'belongs_to', 'eager', 'with', 'n+1'],
      },
      {
        id: 'scopes-hooks',
        title: 'Scopes & Hooks',
        path: '/docs/scopes-and-hooks',
        content: 'ScopesHooksContent',
        description: 'Reusable query pieces, and lifecycle callbacks.',
        keywords: ['scope', 'hook', 'before_save', 'lifecycle'],
      },
      {
        id: 'validation',
        title: 'Validation',
        path: '/docs/validation',
        content: 'ValidationContent',
        description: 'Form requests, including rules that consult the database.',
        keywords: ['validate', 'rules', 'unique', 'exists', '422', 'form request'],
      },
    ],
  },
  {
    id: 'users',
    title: 'Users',
    icon: ShieldCheck,
    chapters: [
      {
        id: 'authentication',
        title: 'Authentication',
        path: '/docs/authentication',
        content: 'AuthenticationContent',
        description: 'Passwords, tokens, and who the request is.',
        keywords: ['auth', 'jwt', 'token', 'password', 'argon2', 'login'],
      },
      {
        id: 'sessions',
        title: 'Sessions',
        path: '/docs/sessions',
        content: 'SessionsContent',
        description: 'Cookie-backed state, and browser logins.',
        keywords: ['session', 'cookie', 'store', 'fixation'],
        isNew: true,
      },
      {
        id: 'authorization',
        title: 'Authorization',
        path: '/docs/authorization',
        content: 'AuthorizationContent',
        description: 'Policies: deciding what a user may do.',
        keywords: ['policy', 'authorize', 'can', 'permission', '403'],
        isNew: true,
      },
    ],
  },
  {
    id: 'shipping',
    title: 'Shipping',
    icon: Rocket,
    chapters: [
      {
        id: 'openapi',
        title: 'OpenAPI',
        path: '/docs/openapi',
        content: 'OpenApiContent',
        description: 'Documenting your API from the code that serves it.',
        keywords: ['openapi', 'swagger', 'schema', 'docs', '3.1'],
        isNew: true,
      },
      {
        id: 'testing',
        title: 'Testing',
        path: '/docs/testing',
        content: 'TestingContent',
        description: 'A suite that stays fast, parallel, and honest.',
        keywords: ['test', 'factory', 'rollback', 'acting_as', 'assert'],
        isNew: true,
      },
      {
        id: 'cli-reference',
        title: 'CLI Reference',
        path: '/docs/cli',
        content: 'CLIReferenceContent',
        description: 'Every command, and which of the two command lines it belongs to.',
        keywords: ['cli', 'luxid', 'cargo run', 'make:model', 'migrate', 'routes'],
      },
      {
        id: 'deployment',
        title: 'Performance & Deployment',
        path: '/docs/deployment',
        content: 'DeploymentContent',
        description: 'Measured overhead, and getting a binary into production.',
        keywords: ['deploy', 'performance', 'benchmark', 'release', 'docker'],
      },
    ],
  },
  {
    id: 'projects',
    title: 'Build Something',
    icon: Terminal,
    chapters: [
      {
        id: 'project-auth',
        title: 'Project: an Auth API',
        path: '/docs/project-auth',
        content: 'AuthProjectContent',
        description: 'Register, log in, protected routes — built from scratch.',
        keywords: ['tutorial', 'project', 'auth', 'register', 'login'],
        isNew: true,
      },
      {
        id: 'project-todo',
        title: 'Project: a Todo API',
        path: '/docs/project-todo',
        content: 'TodoProjectContent',
        description: 'Ownership, relations, filtering, and a full test suite.',
        keywords: ['tutorial', 'project', 'todo', 'crud', 'ownership'],
        isNew: true,
      },
    ],
  },
];

export const allDocs: DocChapter[] = docsChapters.flatMap((section) => section.chapters);

/** The chapter a bare `/docs` visit should land on. */
export const defaultDoc = allDocs[0];

export const findDocByPath = (pathname: string): DocChapter | undefined =>
  allDocs.find((doc) => doc.path === pathname);

export const findSectionForDoc = (doc: DocChapter | undefined): DocSection | undefined =>
  doc ? docsChapters.find((section) => section.chapters.some((c) => c.id === doc.id)) : undefined;

/** Previous and next chapters in reading order, for the pager. */
export const getAdjacentDocs = (doc: DocChapter | undefined) => {
  const index = doc ? allDocs.findIndex((d) => d.id === doc.id) : -1;

  return {
    previous: index > 0 ? allDocs[index - 1] : undefined,
    next: index >= 0 && index < allDocs.length - 1 ? allDocs[index + 1] : undefined,
  };
};
