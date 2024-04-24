import { ReactNode } from 'react';

interface Iprops {
  otherInfo: ReactNode[];
}

function OtherInfo(props: Iprops) {
  const { otherInfo } = props;
  return (
    <>
      {otherInfo.map((i, index) => (
        <div key={index}>{i}</div>
      ))}
    </>
  );
}

export default OtherInfo;
