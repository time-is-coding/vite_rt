export function useMiddlewareLogin(props: any): boolean {
  console.log('中间件被调用', props);
  return true;
}
