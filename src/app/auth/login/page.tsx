import React from 'react';

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-screen h-screen bg-linear-135 from-primary to-secondary relative">
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-start gap-4 bg-white px-2 py-1 rounded-md'>
      <span className='text-lg font-semibold'>Login</span>
      </div>
    </div>
  );
};

export default page;
