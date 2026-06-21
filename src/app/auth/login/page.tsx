'use client';
import Button from '@/components/button';
import InputForm from '@/components/input-form';
import Logo from '@/components/logo';

type Props = {};

const page = (props: Props) => {
  return (
    <div className=" flex flex-col justify-start gap-6 bg-white px-4 py-6 rounded-md max-w-md w-full">
      <Logo />
      <h2 className="text-header-2">Login</h2>
      <div className="flex flex-col gap-4">
        <InputForm label="Email" type="email" />
        <InputForm label="Password" type="password" />
        <Button label="Log in"/>
      </div>
    </div>
  );
};

export default page;
