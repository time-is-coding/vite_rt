const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: any[],
  type?: 'group',
  disabled?: false
) => {
  return {
    key,
    icon,
    children,
    label,
    type,
    disabled,
  };
};
const getMenuData = (routes: any[]) => {
  return routes.map((route) => ({
    label: route.name,
    key: route.path,
    icon: route.menuConfig?.icon,
    path: route.path,
  }));
};
const generateMenu = (routes: any[]): any[] => {
  const result: any[] = [];
  routes.forEach((route) => {
    // 当前路由有menuConfig
    if (route.menuConfig) {
      const children = route.children ? generateMenu(route.children) : undefined;
      result.push(
        getItem(
          route.menuConfig.label,
          route.menuConfig.key,
          route.menuConfig.icon,
          children,
          route.menuConfig.type,
          route.menuConfig.disabled
        )
      );
    } else if (route.children) {
      // 当前路由没有menuConfig，但是子路由有
      const childrenWithMenuConfig = route.children.filter((r: any) => r.menuConfig);
      if (childrenWithMenuConfig.length) {
        const subMenu = generateMenu(route.children);
        if (subMenu.length) {
          result.push(...subMenu);
        }
      }
    }
  });
  return result;
};

export { generateMenu, getMenuData };
