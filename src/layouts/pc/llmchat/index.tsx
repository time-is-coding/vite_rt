import {
  HistoryOutlined,
  LeftOutlined,
  PlusCircleOutlined,
  SendOutlined,
  SettingFilled,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, ConfigProvider, Divider, Flex, Input, Layout, Tooltip } from 'antd';
import React, { useLayoutEffect, useRef, useState } from 'react';
import ChatBox from './ChatBox';
import './betterScrollbar.css';
const { TextArea } = Input;
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
const iconStyle = {
  zIndex: 99,
  position: 'absolute',
  top: '45%',
  left: '205px',
  fontSize: '16px', // 假定的值，可以根据需要调整
};

const LLMChat: React.FC = () => {
  const elementRef = useRef<any>(null); // 用于访问组件的根元素
  const [collapsed, setCollapsed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [minHeight, setMinHeight] = useState('100vh'); // 默认使用'100vh'
  const [minWidth, setMinWidth] = useState('100%');
  useLayoutEffect(() => {
    const updateParentHeight = () => {
      if (elementRef.current && elementRef.current.parentNode) {
        // 只有当父元素的ID不是'root'时才执行
        if (elementRef.current.parentNode.id !== 'root') {
          const parentHeight = elementRef.current.parentNode.clientHeight; // 获取父元素的高度
          const parentWidth = elementRef.current.parentNode.clientWidth; // 获取父元素的高度
          const newMinHeight = parentHeight > 0 ? '100%' : '100vh';
          const newMinWidth = parentWidth > 0 ? '100%' : '1200px';
          setMinHeight(newMinHeight); // 根据父元素高度更新 minHeight
          setMinWidth(newMinWidth); //
        } else {
          const newMinHeight = '100vh';
          const newMinWidth = '1200px';
          setMinWidth(newMinWidth); //
          setMinHeight(newMinHeight); // 根据父元素高度更新 minHeight
        }
      } else {
        const newMinWidth = '1200px';
        setMinWidth(newMinWidth); //
        const newMinHeight = '100vh';
        setMinHeight(newMinHeight); // 根据父元素高度更新 minHeight
      }
      console.log(minHeight);
    };

    updateParentHeight();
    window.addEventListener('resize', updateParentHeight); // 窗口大小改变时更新高度

    return () => {
      window.removeEventListener('resize', updateParentHeight);
    };
  }, []);
  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13 && event.ctrlKey) {
      event.preventDefault(); // 阻止默认行为，如换行
      console.log(event.target.value); // 这里可以替换为你想要的任何逻辑
      // 例如，你可以在这里调用一个函数来发送数据或更新状态
    }
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorSplit: '#E6E6E6',
          colorBorder: '#EFEFEF',
          colorText: '#232111',
          colorTextDisabled: '#999',
          colorTextPlaceholder: '#999',
          colorBgContainerDisabled: '#666',
          colorBgBase: 'rgb(4, 51, 107)',
        },
        components: {
          Input: {
            colorBorder: '#FFFFFF',
            hoverBorderColor: '#1D70F5',
          },
          Layout: {
            siderBg: '#FAFBFF',
          },
        },
      }}
    >
      <Layout ref={elementRef} style={{ minHeight: minHeight, minWidth }}>
        <Sider
          collapsedWidth={0}
          collapsed={collapsed}
          // onCollapse={() => setCollapsed(!collapsed)}
          style={{ minHeight: '100vh' }}
        >
          <div
            onClick={() => setCollapsed(!collapsed)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              height: '100%',
              zIndex: 99,
              position: 'absolute',
              top: '45%',
              left: `'200px`,
              cursor: 'pointer',
              transformOrigin: 'left center',
            }} // 这里同样使用了具体的字符串值 'relative'
          >
            <LeftOutlined
              style={{
                fontSize: '16px',
                position: 'absolute',
                top: 0,
                left: 0,
                transformOrigin: 'left center',
                transform: `${collapsed ? 'rotate(180deg) translateX(-15px)' : 'rotate(0deg) translateX(200px)'}`,
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
            />
          </div>
          <Flex vertical justify="center" style={{ padding: 20 }}>
            <Button type="primary" icon={<PlusCircleOutlined />}>
              新建对话
            </Button>
            <Divider style={{ color: '#E6E6E6', margin: '15px 0' }}></Divider>
          </Flex>
        </Sider>
        <Layout
          style={{
            position: 'relative',
            height: '100%',
            background:
              'radial-gradient(at left bottom, rgb(254, 226, 226), rgb(219, 234, 254), rgb(241, 245, 249))',
          }}
        >
          <Content style={{ height: '100%', position: 'relative' }}>
            <Flex justify="end" style={{ padding: '15px 30px' }}>
              <Tooltip title="Comment">
                <Button size="small" icon={<SettingFilled />} />
              </Tooltip>
              <Tooltip title="Comment">
                <Button size="small" icon={<HistoryOutlined />} />
              </Tooltip>
            </Flex>
            <div style={{ position: 'relative', height: `calc(${minHeight} - 40px)` }}>
              <div
                className="chat-box scroll-container"
                style={{
                  position: 'relative',
                  height: `85%`,
                  // margin: '15px 0',
                  paddingBottom: '140px',
                }}
              >
                <div style={{ padding: '0 120px' }}>
                  <ChatBox type="markdown" data={{ content: 'kdfksdkfsdlf' }} />
                  <ChatBox type="text" data={{ content: 'kdfksdkfsdlf' }} />
                  <ChatBox
                    type="chart"
                    data={{
                      mode: 'interval:simple',
                      content: [
                        { year: '1951 年', sales: 38 },
                        { year: '1952 年', sales: 52 },
                        { year: '1956 年', sales: 61 },
                        { year: '1957 年', sales: 145 },
                        { year: '1958 年', sales: 48 },
                        { year: '1959 年', sales: 38 },
                        { year: '1960 年', sales: 38 },
                        { year: '1962 年', sales: 38 },
                      ],
                    }}
                  />
                  <ChatBox
                    type="chart"
                    data={{
                      mode: 'interval:simple',
                      content: [
                        { year: '1951 年', sales: 38 },
                        { year: '1952 年', sales: 52 },
                        { year: '1956 年', sales: 61 },
                        { year: '1957 年', sales: 145 },
                        { year: '1958 年', sales: 48 },
                        { year: '1959 年', sales: 38 },
                        { year: '1960 年', sales: 38 },
                        { year: '1962 年', sales: 38 },
                      ],
                    }}
                  />{' '}
                  <ChatBox
                    type="chart"
                    data={{
                      mode: 'interval:simple',
                      content: [
                        { year: '1951 年', sales: 38 },
                        { year: '1952 年', sales: 52 },
                        { year: '1956 年', sales: 61 },
                        { year: '1957 年', sales: 145 },
                        { year: '1958 年', sales: 48 },
                        { year: '1959 年', sales: 38 },
                        { year: '1960 年', sales: 38 },
                        { year: '1962 年', sales: 38 },
                      ],
                    }}
                  />{' '}
                  <ChatBox
                    type="chart"
                    data={{
                      mode: 'interval:simple',
                      content: [
                        { year: '1951 年', sales: 38 },
                        { year: '1952 年', sales: 52 },
                        { year: '1956 年', sales: 61 },
                        { year: '1957 年', sales: 145 },
                        { year: '1958 年', sales: 48 },
                        { year: '1959 年', sales: 38 },
                        { year: '1960 年', sales: 38 },
                        { year: '1962 年', sales: 38 },
                      ],
                    }}
                  />{' '}
                  <ChatBox
                    type="chart"
                    data={{
                      mode: 'interval:simple',
                      content: [
                        { year: '1951 年', sales: 38 },
                        { year: '1952 年', sales: 52 },
                        { year: '1956 年', sales: 61 },
                        { year: '1957 年', sales: 145 },
                        { year: '1958 年', sales: 48 },
                        { year: '1959 年', sales: 38 },
                        { year: '1960 年', sales: 38 },
                        { year: '1962 年', sales: 38 },
                      ],
                    }}
                  />{' '}
                  <ChatBox
                    type="chart"
                    data={{
                      mode: 'interval:simple',
                      content: [
                        { year: '1951 年', sales: 38 },
                        { year: '1952 年', sales: 52 },
                        { year: '1956 年', sales: 61 },
                        { year: '1957 年', sales: 145 },
                        { year: '1958 年', sales: 48 },
                        { year: '1959 年', sales: 38 },
                        { year: '1960 年', sales: 38 },
                        { year: '1962 年', sales: 38 },
                      ],
                    }}
                  />{' '}
                  <ChatBox
                    type="chart"
                    data={{
                      mode: 'interval:simple',
                      content: [
                        { year: '1951 年', sales: 38 },
                        { year: '1952 年', sales: 52 },
                        { year: '1956 年', sales: 61 },
                        { year: '1957 年', sales: 145 },
                        { year: '1958 年', sales: 48 },
                        { year: '1959 年', sales: 38 },
                        { year: '1960 年', sales: 38 },
                        { year: '1962 年', sales: 38 },
                      ],
                    }}
                  />{' '}
                  <ChatBox
                    type="chart"
                    data={{
                      mode: 'interval:simple',
                      content: [
                        { year: '1951 年', sales: 38 },
                        { year: '1952 年', sales: 52 },
                        { year: '1956 年', sales: 61 },
                        { year: '1957 年', sales: 145 },
                        { year: '1958 年', sales: 48 },
                        { year: '1959 年', sales: 38 },
                        { year: '1960 年', sales: 38 },
                        { year: '1962 年', sales: 38 },
                      ],
                    }}
                  />{' '}
                  <ChatBox
                    type="chart"
                    data={{
                      mode: 'interval:simple',
                      content: [
                        { year: '1951 年', sales: 38 },
                        { year: '1952 年', sales: 52 },
                        { year: '1956 年', sales: 61 },
                        { year: '1957 年', sales: 145 },
                        { year: '1958 年', sales: 48 },
                        { year: '1959 年', sales: 38 },
                        { year: '1960 年', sales: 38 },
                        { year: '1962 年', sales: 38 },
                      ],
                    }}
                  />{' '}
                  <ChatBox
                    type="chart"
                    data={{
                      mode: 'interval:simple',
                      content: [
                        { year: '1951 年', sales: 38 },
                        { year: '1952 年', sales: 52 },
                        { year: '1956 年', sales: 61 },
                        { year: '1957 年', sales: 145 },
                        { year: '1958 年', sales: 48 },
                        { year: '1959 年', sales: 38 },
                        { year: '1960 年', sales: 38 },
                        { year: '1962 年', sales: 38 },
                      ],
                    }}
                  />{' '}
                  <ChatBox
                    type="chart"
                    data={{
                      mode: 'interval:simple',
                      content: [
                        { year: '1951 年', sales: 38 },
                        { year: '1952 年', sales: 52 },
                        { year: '1956 年', sales: 61 },
                        { year: '1957 年', sales: 145 },
                        { year: '1958 年', sales: 48 },
                        { year: '1959 年', sales: 38 },
                        { year: '1960 年', sales: 38 },
                        { year: '1962 年', sales: 38 },
                      ],
                    }}
                  />
                </div>
              </div>

              <Flex
                style={{
                  width: '100%',
                  padding: '30px  120px',
                  position: 'absolute',
                  bottom: 0,
                }}
                justify="center"
                align="end"
                gap={'middle'}
              >
                <TextArea
                  style={{
                    width: '100%',
                    padding: '12px',
                    paddingRight: 135,
                    position: 'relative',
                  }}
                  className="scroll-container"
                  autoSize={{ minRows: 5, maxRows: 8 }}
                  placeholder="输入您想查询的内容"
                  rows={8}
                  onKeyDown={handleKeyDown}

                  // count={{ max: 500, show: true }}
                ></TextArea>
                <Button
                  style={{ height: '34px', position: 'absolute', bottom: 38, right: 136 }}
                  type="primary"
                  icon={<SendOutlined />}
                >
                  发送
                </Button>
              </Flex>
            </div>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default LLMChat;
