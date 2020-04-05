import {SidebarItem} from "../../components/ApplicationSidebar/types";

export const unauthenticatedMenuItems: SidebarItem[][] =
    [
        [
            {
                itemTitle: 'Пользователи',
                itemIcon: 'perm_identity',
                path: '/s/users',
                isActive: true
            },
        ],
    ];