import SideNav from '@/components/sidenav';

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="flex justify-between w-full h-screen bg-ink-25">
      <SideNav></SideNav>
    </div>
  );
};

export default Dashboard;
