import {
  ConfigProvider,
  Divider,
  DropdownProps,
  Flex,
  Layout,
  MenuProps,
  SelectProps,
  Space,
  theme,
} from 'antd';

import { SearchProps } from 'antd/es/input';
import React, { ReactNode } from 'react';
import { initJson } from './initJson';

const { Header, Content } = Layout;

const initObj = JSON.parse(initJson);

interface IStyle {
  navHeight: number;
  themeColor: string;
  bgColor: string;
  sidenavWidth: number;
}

export interface DropdownInfo {}

export interface HeaderDropdownProps extends DropdownProps {
  text: string;
  icon?: ReactNode;
}

export interface NavMenu {
  type: 'select' | 'dropdown';
  selectProps?: SelectProps;
  headerDropdowns?: HeaderDropdownProps[];
}

export interface NoticeProps {
  key: string | number;
  text: string;
  icon?: ReactNode;
}

export interface JsonComponentItem {
  system_components_name: string;
  system_key: string;
  system_show: boolean;
}

interface IProps {
  children?: ReactNode;
  navMenu?: NavMenu;
  logo?: string;
  brandName?: string;
  sidebarProps?: MenuProps;
  mode?: 'dark' | 'light';
  style?: IStyle;
  searchProps?: SearchProps;
  notice?: NoticeProps[];
  avatar?: {
    url: string;
    value?: NoticeProps[];
  };
  otherInfo?: ReactNode[];
  handleEvent: (type: string, title: string, data?: any) => any;
}

function DashboradLayout(props: IProps) {
  const {
    children,
    searchProps,
    brandName = '',
    navMenu,
    logo,
    sidebarProps,
    notice,
    otherInfo,
    avatar,
    handleEvent,
  } = props;

  const propsObj: any = {
    BrandName: { props: brandName, propName: 'brandName' },
    Avatar: { props: avatar, propName: 'avatar' },
    Logo: { props: logo, propName: 'logo' },
    SiderBar: { props: sidebarProps, propName: 'sidebarProps' },
    Notice: { props: notice, propName: 'notice' },
    OtherInfo: { props: otherInfo, propName: 'otherInfo' },
    SearchBar: { props: searchProps, propName: 'searchProps' },
    NavBar: { props: navMenu, propName: 'navMenu' },
  };

  const { style, showComponents }: { style: any; showComponents: JsonComponentItem[] } = initObj;

  const {
    token: { padding },
  } = theme.useToken();

  const renderCompont = (name: string) => {
    const show = showComponents.filter((i) => i.system_components_name === name)[0]?.system_show;
    if (!show) return <></>;

    const LazyComponent = React.lazy(() => import(`./components/${name}`));
    const curProps: any = {};
    curProps[propsObj[name].propName] = propsObj[name].props;
    return (
      <React.Suspense fallback={<></>}>
        {React.createElement(LazyComponent, { ...curProps, handleEvent: handleEvent })}
      </React.Suspense>
    );
  };

  return (
    <ConfigProvider theme={style}>
      <Layout
        style={{
          minHeight: '100vh',
          minWidth: '1200px',
        }}
      >
        <Header
          style={{
            display: 'flex',
            padding: '0 20px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Flex align="center" justify="start">
            {renderCompont('Logo')}
            <Divider type="vertical" />
            {renderCompont('BrandName')}
            {renderCompont('NavBar')}
          </Flex>
          <Flex align="center" justify="start">
            <Space>
              {renderCompont('SearchBar')}
              {renderCompont('OtherInfo')}
              {renderCompont('Notice')}
              {renderCompont('Avatar')}
            </Space>
          </Flex>
        </Header>
        <Layout>
          {renderCompont('SiderBar')}
          <Content
            style={{
              padding: padding || '20px',
              minHeight: '500px',
              overflow: 'auto',
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
