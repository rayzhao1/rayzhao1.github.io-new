export interface SidebarItem {
    title: string;
    path: string;
    icon?: any;
    iconClosed?: any;
    iconOpened?: any;
    subnav?: SidebarItem[]; // optional
}