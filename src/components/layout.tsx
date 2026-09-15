import SideNav from './sidenav';

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen w-full bg-ink-25">
      <SideNav />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
};

export default Layout;
