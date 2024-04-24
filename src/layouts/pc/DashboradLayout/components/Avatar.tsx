import { Dropdown } from 'antd';
import { useMemo } from 'react';
import { NoticeProps } from '..';

interface Iprops {
  avatar: {
    url: string;
    value?: NoticeProps[];
  };
  handleEvent: (type: string, title: string, data?: any) => any;
}

function Avatar(props: Iprops) {
  const { avatar, handleEvent } = props;
  const avatarDropDownProps = useMemo(() => {
    if (!avatar || !avatar.value) return [];
    return {
      menu: {
        items: avatar.value.map((i) => ({
          key: i.key,
          label: (
            <div
              onClick={() => {
                handleEvent('click', 'AvatarDropdown', i);
              }}
            >
              {i.text}
            </div>
          ),
          icon: i?.icon,
        })),
      },
    };
  }, [avatar]);
  return (
    <>
      {avatar?.value ? (
        <Dropdown {...avatarDropDownProps}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={avatar.url}
              alt=""
              width={30}
              height={30}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
          </div>
        </Dropdown>
      ) : (
        <div
          style={{ display: 'flex', alignItems: 'center' }}
          onClick={() => handleEvent('click', 'AvatarImg', '')}
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
    </>
  );
}

export default Avatar;
