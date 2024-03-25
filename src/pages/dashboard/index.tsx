import Navbar from '@/gientech/components/Navbar';
import DashboardLayout from '@/gientech/layouts/Dashboard';
// import { MockApi } from '@/mock/data/test';

function Dashboard() {
  return (
    <DashboardLayout HeaderNavBar={<Navbar />}>
      <>
        {/* <div>{MockApi.CreateUserUserPost.name}</div>
        <div>{MockApi.CreateUserUserPost.email}</div> */}
      </>
    </DashboardLayout>
  );
}

export default Dashboard;
