import { ConfigProvider, Divider, Layout, Space, Typography, theme } from 'antd';
const { Header, Sider, Content } = Layout;

import { ReactNode, useState } from 'react';
const { Title } = Typography;
interface IStyle {
  navHeight: number;
  themeColor: string;
  bgColor: string;
  sidenavWidth: number;
}
interface IProps {
  children?: ReactNode;
  classname?: string;
  navMenu?: ReactNode;
  logo?: string;
  brandName?: string;
  sidebar?: any;
  mode?: 'dark' | 'light';
  style?: IStyle;
  searchBar?: ReactNode;
  rightInfo?: ReactNode;
}

function DashboradLayout(props: IProps) {
  const {
    children,
    searchBar = <></>,
    brandName = '',
    navMenu = <></>,
    logo,
    rightInfo = <></>,
    sidebar,
  } = props;

  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, padding },
  } = theme.useToken();

  return (
    <ConfigProvider
      theme={{
        components: {
          Typography: {
            titleMarginBottom: 0,
            titleMarginTop: 0,
            colorTextHeading: '#fff',
            fontWeightStrong: 400,
          },
          Divider: {
            colorSplit: '#fff',
          },
        },
      }}
    >
      <Layout
        className="!font-sans"
        style={{
          minHeight: '100vh',
          minWidth: '1200px',
        }}
      >
        <Header className="flex px-[20px] items-center justify-between">
          <div className="left flex items-center justify-start">
            <img src={logo} alt="" />
            <Divider type="vertical" />
            <Title level={4} className="m-0 mr-4">
              {brandName}
            </Title>
            <Space>{navMenu}</Space>
          </div>
          <div className="right flex items-center justify-start">
            <Space>
              {searchBar}
              {rightInfo}
            </Space>
          </div>
        </Header>
        <Layout>
          <Sider
            style={{ background: colorBgContainer }}
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            {sidebar}
          </Sider>
          <Content
            style={{
              padding: padding,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default DashboradLayout;
