import { LayoutDashboard } from 'lucide-react';
import Logo from './logo';

type Props = {};

const SideNav = (props: Props) => {
  return (
    <div className="w-54 bg-white flex flex-col gap-7 px-2 py-3">
      <Logo />
      <div className='w-full flex flex-col flex-1 gap-3'>
        <span className='text-body-sm font-semibold'>Main Menu</span>
        <div className="flex flex-col gap-1 w-full">
          <div className="flex gap-1 px-2 py-2 w-full rounded-xs">
            <LayoutDashboard/>
            <div className=''>Dashboard</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
