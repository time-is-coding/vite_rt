import { Typography } from 'antd';

const { Title } = Typography;
interface Iprops {
  brandName: string;
}

function BrandName(props: Iprops) {
  const { brandName } = props;
  return (
    <Title level={4} style={{ margin: '0 16px 0 0' }}>
      {brandName}
    </Title>
  );
}

export default BrandName;
