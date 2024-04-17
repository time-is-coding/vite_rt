import {
  Badge,
  ConfigProvider,
  Divider,
  Dropdown,
  DropdownProps,
  Input,
  Layout,
  Menu,
  MenuProps,
  Select,
  SelectProps,
  Space,
  Typography,
  theme,
} from 'antd';

import { MenuUnfoldOutlined, SoundOutlined } from '@ant-design/icons';
import { SearchProps } from 'antd/es/input';
import { ReactNode, useMemo, useState } from 'react';
const { Header, Sider, Content } = Layout;
const { Title } = Typography;
const { Search } = Input;
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

interface IProps {
  children?: ReactNode;
  navMenu?: NavMenu;
  logo?: string;
  brandName?: string;
  sidebarProps?: MenuProps;
  mode?: 'dark' | 'light';
  style?: IStyle;
  searchProps?: SearchProps;
  notice?: {
    onClick: (item: any) => void;
    value?: NoticeProps[];
  };
  avatar?: {
    url: string;
    onClick?: (item: any) => void;
    value?: NoticeProps[];
  };
  otherInfo?: ReactNode[];
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
  } = props;

  const {
    token: { colorBgContainer, padding },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false);

  const handleNoticeClick = (value: { key: string | number; text: string }) => {
    notice && notice.onClick(value);
  };
  const noticeDropDownProps = useMemo(() => {
    if (!notice || !notice.value) return [];
    return {
      menu: {
        items: notice.value.map((i) => ({
          key: i.key,
          label: <div onClick={() => handleNoticeClick(i)}>{i.text}</div>,
          icon: i?.icon,
        })),
      },
    };
  }, [notice]);
  const avatarDropDownProps = useMemo(() => {
    if (!avatar || !avatar.value) return [];
    return {
      menu: {
        items: avatar.value.map((i) => ({
          key: i.key,
          label: <div onClick={() => handleNoticeClick(i)}>{i.text}</div>,
          icon: i?.icon,
        })),
      },
    };
  }, [avatar]);
  const trigger = useMemo(() => {
    return collapsed ? (
      <>
        <MenuUnfoldOutlined rotate={180} />
      </>
    ) : (
      <div>
        点击收起菜单&nbsp;&nbsp;
        <MenuUnfoldOutlined />
      </div>
    );
  }, [collapsed]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBorder: '#04336b',
          colorText: '#232111',
          colorTextDisabled: '#999',
          colorTextPlaceholder: '#999',
          colorBgContainerDisabled: '#666',
          colorBgBase: 'rgb(4, 51, 107)',
        },
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
          Select: {
            selectorBg: '#00004d',
            colorText: '#fff',
            optionActiveBg: '#00004d',
            optionSelectedBg: '#00004d',
            optionSelectedColor: '#fff',
          },
          Input: {
            addonBg: '#00004d',
            colorBgContainer: '#00004d',
            colorText: '#fff',
            hoverBorderColor: '#04336b',
          },
          Button: {
            defaultBg: '#00004d',
            defaultColor: '#fff',
            colorText: '#fff',
            defaultActiveBg: '#00004d',
            colorIcon: '#fff',
            defaultHoverBg: '#00004d',
          },
          Dropdown: {
            colorText: '#fff',
          },
          Badge: {
            colorText: '#fff',
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
            {logo && (
              <img src={logo} alt="" width={80} height={32} style={{ objectFit: 'cover' }} />
            )}
            <Divider type="vertical" />
            {brandName && (
              <Title level={4} className="m-0 mr-4">
                {brandName}
              </Title>
            )}
            <Space>
              {navMenu?.type === 'select' && (
                <Select
                  {...navMenu.selectProps}
                  defaultValue={
                    navMenu.selectProps?.defaultValue || (navMenu.selectProps?.options || [])[0]
                  }
                  mode={undefined}
                  className="w-[240px]"
                />
              )}
              {navMenu?.type === 'dropdown' &&
                navMenu?.headerDropdowns?.map((i) => (
                  <Dropdown key={i.text} {...i}>
                    <div>
                      {i.text}
                      {i.icon}
                    </div>
                  </Dropdown>
                ))}
            </Space>
          </div>
          <div className="right flex items-center justify-start">
            <Space>
              {searchProps && (
                <Search {...searchProps} style={{ display: 'flex', alignItems: 'center' }} />
              )}
              {otherInfo && otherInfo.map((i, index) => <div key={index}>{i}</div>)}
              {notice && notice?.value && (
                <Dropdown {...noticeDropDownProps}>
                  <Badge count={notice.value.length} size="small">
                    <SoundOutlined />
                  </Badge>
                </Dropdown>
              )}
              {notice && !notice?.value && <SoundOutlined />}
              {avatar && avatar?.value && (
                <Dropdown {...avatarDropDownProps}>
                  <div
                    style={{ display: 'flex', alignItems: 'center' }}
                    onClick={() => avatar?.onClick && avatar?.onClick('')}
                  >
                    <img
                      src={avatar.url}
                      alt=""
                      width={30}
                      height={30}
                      style={{ borderRadius: '50%', objectFit: 'cover' }}
                    />
                  </div>
                </Dropdown>
              )}
              {avatar && !avatar?.value && (
                <div
                  style={{ display: 'flex', alignItems: 'center' }}
                  onClick={() => avatar?.onClick && avatar?.onClick('')}
                >
                  <img
                    src={avatar.url}
                    alt=""
                    width={30}
                    height={30}
                    style={{ borderRadius: '50%', objectFit: 'cover' }}
                  />
                </div>
              )}
            </Space>
          </div>
        </Header>
        <Layout>
          <Sider
            style={{ background: colorBgContainer }}
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            trigger={trigger}
          >
            {sidebarProps && (
              <Menu
                {...sidebarProps}
                style={{ height: '100%', borderRight: 0 }}
                mode="inline"
                multiple={false}
              />
            )}
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
