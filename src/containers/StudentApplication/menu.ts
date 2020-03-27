import {SidebarItem} from "../../components/ApplicationSidebar/types";

export const sidebarItems: SidebarItem[][] =
    [
        [
            {
                itemTitle: 'Профиль',
                itemIcon: 'dashboard',
                path: '/s/profile',
                isActive: false
            },
            {
                itemTitle: 'Портфолио',
                itemIcon: 'assignment',
                path: '/s/portfolio',
                isActive: false
            }
        ],
        [
            {
                itemTitle: 'Пользователи',
                itemIcon: 'perm_identity',
                path: '/s/users',
                isActive: true
            },
        ],
    ];
