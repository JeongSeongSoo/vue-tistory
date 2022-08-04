// 2022.08.05[프뚜]: 01. 라우터 import
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    // 2022.08.05[프뚜]: 02. createWebHistory 사용
    history: createWebHistory(),

    // 2022.08.05[프뚜]: 03. path(uri), name, component(.vue) 순으로 정의
    routes: [
        {
            path: '/',
            name: 'Main',
            component: () => import('../pages/Main.vue')
        },
        {
            path: '/users',
            name: 'Users',
            component: () => import('../pages/users/Users.vue')
        },
    ]
});

export default router;
