export function useMiddleWareRoles({ children }: any): boolean {
  // 根据自己的页面，判断处理，async/await异步拉取用户数据即可。
  const isAdmin = localStorage.getItem('role') === 'admin';

  console.log(isAdmin, children, 'jajaoooooj');
  // 通过鉴权
  return true;
}
