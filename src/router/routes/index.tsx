import Dashboard from '@/pages/dashboard';
import DocsPage from '@/pages/docs';

//入口页面不用lazy，其他页面可以使用lazy
const routes = [
  {
    path: '/',
    meta: {
      title: 'gientech',
    },
    index: true,
  },
  {
    path: '/dashboard',
    name: '控制台',
    element: <Dashboard />,
  },
  {
    path: '/docs',
    name: '文档资料',
    element: <DocsPage />,
  },
  {
    path: '/not-found',
    element: <div className="h-full flex justify-center items-center">404</div>,
  },
];

export default routes;
