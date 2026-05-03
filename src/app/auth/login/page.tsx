import Logo from '@/components/logo';
import React from 'react';

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-screen h-screen bg-linear-135 from-primary to-secondary relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-start gap-6 bg-white px-4 py-6 rounded-md">
        <Logo />
        <span className="text-lg font-bold">Login</span>
        <div className="flex flex-col gap-3.5">
          <input />
        </div>
      </div>
    </div>
  );
};

export default page;
