type MenuItem = {
    id: number; // 菜单项的唯一标识符
    name: string; // 菜单项的名称
    label: string; // 菜单显示的标签
    parentId: number; // 父菜单项的 ID
    path: string; // 菜单项的路径
    permission: string | null; // 菜单项的权限
    sort: number; // 菜单项的排序
    icon: string; // 菜单项的图标
    children: MenuItem[]; // 子菜单项，递归类型
  };

export default MenuItem;