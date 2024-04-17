import avatarUrl from '@/assets/images/avatar.png';
import logo from '@/assets/images/logo.png';
import DashboradLayout, { NavMenu } from '@/layouts/pc/DashboradLayout';
import {
  DownOutlined,
  LaptopOutlined,
  NotificationOutlined,
  SmileOutlined,
  SoundOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { MenuProps } from 'antd';
import { SearchProps } from 'antd/es/input/Search';
import React from 'react';

const navItems: MenuProps['items'] = [
  {
    key: '1',
    label: <a>1st menu item</a>,
  },
  {
    key: '2',
    label: <a>2nd menu item (disabled)</a>,
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: '3',
    label: <a>3rd menu item (disabled)</a>,
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];

const version = <>version: 巴啦啦版本</>;
const otherInfo = [version];

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);

const sidebarProps = {
  defaultSelectedKeys: ['1'],
  defaultOpenKeys: ['sub1'],
  items: items2,
  onClick: (item: any) => {
    console.log(`这是我给你返回的内容`, item);
  },
};

const onSearch = (v: string) => console.log(`搜索的内容是：${v}`);

const searchProps: SearchProps = {
  placeholder: '这是描述',
  // disabled: true,
  onSearch,
};

const navMenu: NavMenu = {
  type: 'dropdown',
  selectProps: {
    defaultValue: 'jack',
    options: [
      { value: 'jack', label: 'Jack' },
      { value: 'lucy', label: 'Lucy' },
      { value: 'Yiminghe', label: 'yiminghe' },
      { value: 'disabled', label: 'Disabled', disabled: true },
    ],
  },
  headerDropdowns: [
    {
      text: '下拉菜单1',
      menu: { items: navItems },
      icon: <DownOutlined />,
    },
    {
      text: '下拉菜单2',
      menu: { items: navItems },
      icon: <DownOutlined />,
    },
  ],
};

const notice = {
  onClick: (item: any) => console.log('你点击的是', item),
  value: [
    {
      key: '通知1',
      text: '这是第一条通知',
      icon: <SoundOutlined />,
    },
    {
      key: '通知2',
      text: '这是第二条通知',
    },
  ],
};

const avatar = {
  url: avatarUrl,
  onClick: (item: any) => console.log('你点击的是', item),
  value: [
    {
      key: '通知1',
      text: '我的',
      icon: <SoundOutlined />,
    },
    {
      key: '通知2',
      text: '设置',
    },
  ],
};

function Dashboard() {
  return (
    <DashboradLayout
      brandName="巴啦啦项目"
      navMenu={navMenu}
      logo={logo}
      sidebarProps={sidebarProps}
      searchProps={searchProps}
      notice={notice}
      otherInfo={otherInfo}
      avatar={avatar}
    >
      <>这是主体内容</>
    </DashboradLayout>
  );
}

export default Dashboard;
