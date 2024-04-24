import { SoundOutlined } from '@ant-design/icons';
import { Badge, Dropdown } from 'antd';
import { useMemo } from 'react';
import { NoticeProps } from '..';

interface Iprops {
  notice: NoticeProps[];
  handleEvent: (type: string, title: string, data?: any) => any;
}

function Notice(props: Iprops) {
  const { notice, handleEvent } = props;
  const noticeDropDownProps = useMemo(() => {
    if (!notice) return [];
    return {
      menu: {
        items: notice.map((i) => ({
          key: i.key,
          label: (
            <div
              onClick={() => {
                handleEvent('click', 'Notice', i);
              }}
            >
              {i.text}
            </div>
          ),
          icon: i?.icon,
        })),
      },
    };
  }, [notice]);
  return (
    <>
      {notice?.length ? (
        <Dropdown {...noticeDropDownProps}>
          <Badge count={notice?.length || 0} size="small">
            <SoundOutlined />
          </Badge>
        </Dropdown>
      ) : (
        <SoundOutlined />
      )}
    </>
  );
}

export default Notice;
