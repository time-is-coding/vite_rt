import { ReactNode } from 'react';
// import { MDXEditor } from '@mdxeditor/editor'
// import '@mdxeditor/editor/style.css'
function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="prose prose-zinc prose-sm prose-headings:text-white  px-12">
      {children}
    </div>
  );
}

export default DocsLayout;
