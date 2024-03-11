import { Suspense } from 'react';

export default (el: React.ReactNode) => {
  return <Suspense fallback={<div>loading</div>}>{el}</Suspense>;
};
