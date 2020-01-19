import {SidebarItem} from "../../components/ApplicationSidebar/types";

export const sidebarItems: SidebarItem[][] =
    [
        [
            {
                itemTitle: 'Лобби',
                itemIcon: 'dashboard',
                path: '/s/dashboard',
                isActive: false
            }
        ],
        [
            {
                itemTitle: 'Расписание занятий',
                itemIcon: 'alarm_on',
                path: '/path1',
                isActive: false,
            },
            {
                itemTitle: 'Расписание зачетов',
                itemIcon: 'offline_bolt',
                path: '/path2',
                isActive: false
            },
            {
                itemTitle: 'Расписание экзаменов',
                itemIcon: 'watch_later',
                path: '/path3',
                isActive: false
            },
        ],
        [
            {
                itemTitle: 'Список преподавателей',
                itemIcon: 'account_box',
                path: '/s/lecturers',
                isActive: false
            },
            {
                itemTitle: 'Список студентов',
                itemIcon: 'perm_identity',
                path: '/s/students',
                isActive: true
            },
            {
                itemTitle: 'Коды для Google Classroom',
                itemIcon: 'class',
                path: '/path6',
                isActive: false
            },
        ],
    ];
