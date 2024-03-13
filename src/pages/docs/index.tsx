import Navbar from '@/gientech/components/Navbar';
import DashboardLayout from '@/gientech/layouts/Dashboard';
import Guideline from './guideLine.mdx';
import DocsLayout from './layout';

function DocsPage() {
  return (
    <DashboardLayout HeaderNavBar={<Navbar />}>
      <DocsLayout>
        <Guideline />
      </DocsLayout>
    </DashboardLayout>
  );
}

export default DocsPage;
