import { Dropdown, Select, Space } from 'antd';
import { NavMenu } from '../index';

interface Iprops {
  navMenu: NavMenu;
  handleEvent: (type: string, title: string, data?: any) => any;
}

function NavBar(props: Iprops) {
  const { navMenu, handleEvent } = props;
  return (
    <Space>
      {navMenu?.type === 'select' && (
        <Select
          {...navMenu.selectProps}
          defaultValue={
            navMenu.selectProps?.defaultValue || (navMenu.selectProps?.options || [])[0]
          }
          mode={undefined}
          style={{ width: '240px' }}
          onChange={(value) => {
            handleEvent('selectChange', 'NavBar', value);
          }}
        />
      )}
      {navMenu?.type === 'dropdown' &&
        navMenu?.headerDropdowns?.map((i) => (
          <Dropdown
            key={i.text}
            {...i}
            menu={{
              ...i?.menu,
              onClick: (value) => {
                handleEvent('click', 'NavBar', value);
              },
            }}
          >
            <div>
              {i.text}
              {i.icon}
            </div>
          </Dropdown>
        ))}
    </Space>
  );
}

export default NavBar;
