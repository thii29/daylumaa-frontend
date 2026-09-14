import { LayoutDashboard, ListTodo, Wallet } from 'lucide-react';
import Logo from './logo';
import { SideNavItem } from '@/types/components.type';

type Props = {};

const SideNav = (props: Props) => {
  const navItems: SideNavItem[] = [
    {
      icon: <LayoutDashboard />,
      title: 'Dashboard',
    },
    {
      icon: <ListTodo />,
      title: 'Todo List',
    },
    {
      icon: <Wallet />,
      title: 'Money Management',
    },
  ];
  return (
    <div className="w-54 bg-white flex flex-col gap-7 px-2 py-3">
      <Logo />
      <div className="w-full flex flex-col flex-1 gap-3">
        <span className="text-body-sm font-semibold">Main Menu</span>
        <div className="flex flex-col gap-1 w-full">
          {navItems.map((item, index) => (
            <div key={index} className="flex gap-1 px-2 py-2 w-full rounded-xs">
              {item.icon}
              <div className="">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
