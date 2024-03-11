import ReactDOM from 'react-dom/client';
import App from './App';
// import { Provider } from 'react-redux';
// import { store } from './storage/state';
import './index.css';
// import 'virtual:svg-icons-register';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import '@/assets/fontCss/iconfont.css';

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//     },
//   },
// });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <Provider store={store}>
  //   <QueryClientProvider client={queryClient}>
  <App />
  //   </QueryClientProvider>
  // </Provider>
);
