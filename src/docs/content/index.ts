/**
 * The documentation barrel: every chapter's content component, plus the chapter
 * metadata re-exported for convenience.
 *
 * Importing from here pulls in every chapter's code, which is what `Docs.tsx`
 * needs to resolve a content component by name. Anything that only needs
 * titles and paths — the sidebar, the search palette, the docs chrome — should
 * import from `./chapters` instead, so the marketing pages are not made to
 * download the whole manual.
 */

/* Prologue */
export { default as IntroductionContent } from './IntroductionContent';
export { default as InstallationContent } from './InstallationContent';
export { default as FirstAppContent } from './FirstAppContent';

/* Handling requests */
export { default as RoutingContent } from './RoutingContent';
export { default as ControllersContent } from './ControllersContent';
export { default as RequestsContent } from './RequestsContent';
export { default as ErrorHandlingContent } from './ErrorHandlingContent';
export { default as MiddlewareContent } from './MiddlewareContent';

/* The application */
export { default as ServicesContent } from './ServicesContent';
export { default as ConfigurationContent } from './ConfigurationContent';

/* Lucid — data */
export { default as MigrationsContent } from './MigrationsContent';
export { default as ModelsContent } from './ModelsContent';
export { default as RelationshipsContent } from './RelationshipsContent';
export { default as ScopesHooksContent } from './ScopesHooksContent';
export { default as ValidationContent } from './ValidationContent';

/* Users */
export { default as AuthenticationContent } from './AuthenticationContent';
export { default as SessionsContent } from './SessionsContent';
export { default as AuthorizationContent } from './AuthorizationContent';

/* Shipping */
export { default as OpenApiContent } from './OpenApiContent';
export { default as TestingContent } from './TestingContent';
export { default as CLIReferenceContent } from './CLIReferenceContent';
export { default as DeploymentContent } from './DeploymentContent';

/* Build something */
export { default as AuthProjectContent } from './AuthProjectContent';
export { default as TodoProjectContent } from './TodoProjectContent';

export * from './chapters';
export { LUXID_VERSIONS } from './versions';
