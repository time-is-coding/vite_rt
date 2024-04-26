import { Avatar, Flex, Typography } from 'antd';
const { Text } = Typography;
interface IProps {
  type: 'markdown' | 'chart' | 'img' | 'text' | 'card' | 'table';
  data: IData;
  role?: 'AI' | 'USER';
  loading?: boolean;
}
interface IData {
  content: any; // 假设content的类型是string，你可以根据需要改变类型
  [key: string]: any; // 允许接口拥有任意数量的额外属性，类型为any
}
//chat type interval,line,point
const ChatBox = (props: IProps) => {
  const { role = 'USER' } = props;
  return (
    <Flex gap={'small'} style={{ marginBottom: 12 }}>
      <Flex vertical align="center" gap={3}>
        <Avatar style={{ cursor: 'default' }} size={32}>
          {role}
        </Avatar>
        <Text style={{ fontSize: 8 }} type="secondary">
          {role}
        </Text>
      </Flex>
      <div
        style={{
          padding: '24px',
          background: 'rgba(255, 255, 255, 0.5)', // 设置半透明背景
          borderRadius: '10px', // 你可以根据需要替换为具体的borderRadiusLG值
          backdropFilter: 'blur(10px)', // 应用模糊效果
          border: '1px solid rgba(255, 255, 255, 0.3)', // 可选的轻微边框增加美感
        }}
      >
        {}
      </div>
    </Flex>
  );
};

export default ChatBox;
