'use client';

import { SideNavItem } from '@/types/components.type';
import { LayoutDashboard, ListTodo, Wallet } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './logo';

const SideNav = () => {
  const pathname = usePathname();
  const navItems: SideNavItem[] = [
    {
      icon: <LayoutDashboard size={18} />,
      title: 'Dashboard',
      href: '/dashboard',
    },
    {
      icon: <ListTodo size={18} />,
      title: 'Todo List',
      href: '/todo-list',
    },
    {
      icon: <Wallet size={18} />,
      title: 'Money Management',
      href: '/money-management',
    },
  ];
  return (
    <div className="w-54 bg-white flex flex-col gap-7 px-2 py-3">
      <Logo />
      <div className="w-full flex flex-col flex-1 gap-3">
        <span className="text-body-sm font-semibold text-ink-400">Main Menu</span>
        <div className="flex flex-col gap-1 w-full">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`flex items-center gap-2 px-2 py-2 w-full rounded-xs text-body font-medium transition-colors hover:bg-primary-50 ${
                  isActive
                    ? 'bg-primary-main text-white'
                    : 'text-ink-500'
                }`}
              >
                {item.icon}
                <div>{item.title}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
