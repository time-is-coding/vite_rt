/* eslint-disable react-hooks/rules-of-hooks */
import { lazy } from 'react';
const DocsPage = lazy(() => import('@/pages/dashboard'));
export default [
  {
    path: 'dashboard',
    name: '控制台',
    // element: useSuspence(<DocsPage />),
  },
];
