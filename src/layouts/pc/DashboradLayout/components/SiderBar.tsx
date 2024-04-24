import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Menu, MenuProps, theme } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useMemo, useState } from 'react';

interface Iprops {
  sidebarProps: MenuProps;
  handleEvent: (type: string, title: string, data?: any) => any;
}

function SiderBar(props: Iprops) {
  const { sidebarProps, handleEvent } = props;

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false);

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
    <Sider
      style={{
        background: colorBgContainer || '#fff',
        height: 'calc(100vh - 116px)',
        overflow: 'auto',
      }}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      trigger={trigger}
    >
      <Menu
        {...sidebarProps}
        onClick={(value) => {
          handleEvent('click', 'SiderBar', value);
        }}
        style={{ height: '100%', borderRight: 0 }}
        mode="inline"
        multiple={false}
      />
    </Sider>
  );
}

export default SiderBar;
