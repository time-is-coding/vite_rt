// import { MockApi } from '@/mock/data/test';

import YQlogo from '@/assets/images/logo.png';
import DashboradLayout from '@/layouts/pc/DashboradLayout';
import {
  DownOutlined,
  LaptopOutlined,
  NotificationOutlined,
  SmileOutlined,
  SoundOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Dropdown, Input, Menu, MenuProps, message } from 'antd';
import React from 'react';

const { Search } = Input;

const navItems: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];

const navMenu = (
  <Dropdown menu={{ items: navItems }}>
    <div>
      Hover me
      <DownOutlined />
    </div>
  </Dropdown>
);
const navMenu2 = (
  <Dropdown menu={{ items: navItems }}>
    <div>
      Hover me
      <DownOutlined />
    </div>
  </Dropdown>
);
const version = <>version: 巴啦啦版本</>;
const notice = (
  <>
    <SoundOutlined />
  </>
);
const rightInfo = [version, notice];

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
const sidebar = (
  <Menu
    mode="inline"
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    style={{ height: '100%', borderRight: 0 }}
    items={items2}
  />
);

const onSearch = (v: string) => message.success(`搜索的内容是：${v}`);
const search = (
  <Search
    style={{ display: 'flex', alignItems: 'center' }}
    placeholder="input search text"
    onSearch={onSearch}
  />
);

function Dashboard() {
  return (
    <DashboradLayout
      brandName="巴啦啦项目"
      navMenu={<>{[navMenu, navMenu2].map((i) => i)}</>}
      logo={YQlogo}
      rightInfo={<>{rightInfo.map((i) => i)}</>}
      sidebar={sidebar}
      searchBar={search}
    >
      <>这是主体内容</>
    </DashboradLayout>
  );
}

export default Dashboard;
