/**
 * The published version of the Luxid crates, and the toolchain they need.
 *
 * This lives in its own module rather than in `content/index.ts` on purpose:
 * `index.ts` re-exports every content component, and those components need the
 * versions. Importing them from `index.ts` would make the cycle
 * `index -> SomeContent -> index` evaluate `LUXID_VERSIONS` before it is
 * initialised, which throws at module load.
 *
 * A release only has to touch this file.
 */
export const LUXID_VERSIONS = {
  /** Workspace version — every `luxid-*` crate is published in lockstep. */
  luxid: '0.1.3',
  /** The `rust-version` floor declared in the workspace manifest. */
  rust: '1.94',
} as const;
