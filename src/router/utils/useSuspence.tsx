import { Suspense } from 'react';

const useSuspence = (el: React.ReactNode) => {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex justify-center items-center">
          {/* loading........ */}
        </div>
      }
    >
      {el}
    </Suspense>
  );
};

export default useSuspence;
