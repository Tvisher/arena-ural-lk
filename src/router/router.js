import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import InfoPage from '@/pages/InfoPage.vue';
import TabItem from '@/pages/TabItem.vue';
import UserSettings from '@/pages/UserSettings.vue';
import NotificationSettings from '@/pages/NotificationSettings.vue';

const routes = [
    {
        path: '/',
        name: 'InfoPage',
        component: InfoPage,
        redirect: '/calendar',
        children: [
            {
                path: '/:tabId',
                name: 'TabItem',
                component: TabItem,
            },
        ],
    },

    {
        path: '/user-settings',
        name: 'UserSettings',
        component: UserSettings,
    },
    {
        path: '/notification-settings',
        name: 'NotificationSettings',
        component: NotificationSettings,
    },
]

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
})

export default router;
