import Layout from '@/components/layout';
import WelcomeTitle from '@/components/dashboard/welcome-title';
import MiniCalendar from '@/components/dashboard/mini-calendar';
import YearlyGoals from '@/components/dashboard/yearly-goals';
import TodayTasks from '@/components/dashboard/today-tasks';

const Dashboard = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col gap-4">
        <WelcomeTitle></WelcomeTitle>
        <div className="w-full flex gap-4">
          <MiniCalendar/>
          <YearlyGoals/>
          <TodayTasks/>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
