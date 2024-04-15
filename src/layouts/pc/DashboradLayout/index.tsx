import { ConfigProvider, Flex, Typography } from 'antd';

import { ReactNode, useMemo } from 'react';
const { Title } = Typography;
interface IStyle {
  navHeight: number;
  themeColor: string;
  bgColor: string;
  sidenavWidth: number;
}
interface ISideBar {
  state: 'full' | 'mini' | 'hide';
  data: any;
}
interface IProps {
  children?: ReactNode;
  classname?: string;
  navMenu?: any;
  logo?: any;
  brandName?: string;
  sidebar?: ISideBar;
  mode?: 'dark' | 'light';
  style?: IStyle;
  searchBar?: ReactNode;
}

function DashboradLayout(props: IProps) {
  const { mode = 'light' } = props;

  const initialStyle: IStyle = useMemo(
    () => ({
      navHeight: props.style?.navHeight || 60,
      themeColor:
        mode === 'light' ? props.style?.bgColor || '#04336B' : props.style?.bgColor || '#0F172A',
      sidenavWidth: props.style?.sidenavWidth || 200,
      bgColor:
        mode === 'light' ? props.style?.bgColor || '#F6F6F6' : props.style?.bgColor || '#060C1B',
    }),
    [props.style, mode]
  );

  return (
    <ConfigProvider
      theme={{
        // cssVar: true,
        components: {
          Typography: {
            titleMarginBottom: 0,
            titleMarginTop: 0,
          },
        },
        token: {
          colorText: '#23211',
        },
      }}
    >
      <Flex
        className="!font-sans"
        style={{
          position: 'fixed',
          margin: '0 0 0 0',
          padding: '0 0 0 0',
          width: '100%',
          height: '100%',
          backgroundColor: mode === 'dark' ? 'black' : 'white', // 根据主题动态设置背景颜色
        }}
      >
        <Flex vertical className="h-full min-w-[1200px] w-full flex-col">
          <header
            className="flex px-[20px] items-center justify-between"
            style={{
              height: `${initialStyle.navHeight}px`,
              backgroundColor: initialStyle.themeColor,
            }}
          >
            <div className="left flex items-center justify-start">
              <Title level={4}>应用名称</Title>
            </div>
          </header>
          <section
            style={{
              display: 'flex',
              height: `calc(100vh - ${initialStyle.navHeight}px)`,
              backgroundColor: initialStyle.bgColor,
            }}
          >
            <div className={`w-[${initialStyle.sidenavWidth}px]`}>sideMenu</div>
            <div>children</div>
          </section>
        </Flex>
      </Flex>
    </ConfigProvider>
  );
}

export default DashboradLayout;
