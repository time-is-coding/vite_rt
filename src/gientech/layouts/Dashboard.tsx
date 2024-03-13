import { Layout } from 'antd';
import { ReactNode } from 'react';
const { Header, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 60,
  lineHeight: '60px',
  backgroundColor: '#04336b',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 320,
  lineHeight: '120px',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  width: 'auto',
};

const layoutStyle = {
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
  height: '100vh',
};

function DashboardLayout({
  children,
  HeaderNavBar,
  SideNavbar,
}: {
  children: ReactNode;
  HeaderNavBar?: ReactNode;
  SideNavbar?: ReactNode;
}) {
  return (
    <Layout style={layoutStyle}>
      <Header>{HeaderNavBar}</Header>
      <Layout className="relative w-full">
        {SideNavbar && <Sider style={siderStyle}>{SideNavbar}</Sider>}
        <Content className=" w-full">{children}</Content>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
