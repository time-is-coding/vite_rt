import { Navigate, RouteObject } from 'react-router-dom';
import routes from './routes';
import DynamicHelmet from './DynamicHelmet';
import { useRoutesWithMiddleware } from 'react-router-middleware-plus';

export function RootRouter() {
  const r = useRoutesWithMiddleware(routes as RouteObject[]);
  return r ? (
    <>
      <DynamicHelmet />
      {r}
    </>
  ) : (
    <Navigate to="/not-found" />
  );
}
