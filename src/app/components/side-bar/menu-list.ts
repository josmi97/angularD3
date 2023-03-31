export class MenuItem {
    constructor(
        public name: string,
        public route: string,
        public toolTip: string,
        public icon: string = ''
    ) {}
}

export const menuList = [
    new MenuItem('Dashboard', 'dashboard', 'Dashboard', 'home'),
    new MenuItem('Product', 'product', 'Products', 'list')
];