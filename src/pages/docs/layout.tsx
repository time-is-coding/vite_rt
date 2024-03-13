import { Col, Row } from 'antd';
import { ReactNode } from 'react';
// import { MDXEditor } from '@mdxeditor/editor'
// import '@mdxeditor/editor/style.css'
function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <Row wrap={false}>
      <Col flex="1 1 200px" className=" bg-white">
        <div className="w-full flex-grow mx-auto bg-white prose prose-zinc prose-sm  py-5  px-12">
          {children}
        </div>
      </Col>
      <Col flex="0 1 300px">sidebar</Col>
    </Row>
  );
}

export default DocsLayout;
