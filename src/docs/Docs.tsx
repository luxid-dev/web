import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { defaultDoc, findDocByPath, findSectionForDoc } from './content/chapters';
import DocsLayout from './components/DocsLayout';
import * as Content from './content';

type ContentComponent = React.ComponentType;

/** Content components are looked up by the name recorded on each chapter. */
const resolveContent = (name: string): ContentComponent | undefined => {
  const candidate = (Content as Record<string, unknown>)[name];
  return typeof candidate === 'function' ? (candidate as ContentComponent) : undefined;
};

function MissingChapter({ path }: { path: string }) {
  return (
    <div className="py-6">
      <p className="mb-4 leading-7 text-zinc-500">
        No chapter is published at <code className="font-mono">{path}</code> yet.
      </p>
      <Link to={defaultDoc.path} className="font-medium underline underline-offset-2 hover:opacity-70">
        Back to the introduction →
      </Link>
    </div>
  );
}

export default function Docs() {
  const { pathname } = useLocation();

  const currentDoc = findDocByPath(pathname) ?? defaultDoc;
  const currentSection = findSectionForDoc(currentDoc);
  const ContentComponent = resolveContent(currentDoc.content);

  return (
    <DocsLayout currentDoc={currentDoc} currentSection={currentSection}>
      {ContentComponent ? <ContentComponent /> : <MissingChapter path={pathname} />}
    </DocsLayout>
  );
}
