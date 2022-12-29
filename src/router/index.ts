import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BlogList from '../components/BlogList.vue'
import AboutMe from '../components/AboutMe.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'BlogList',
        component: BlogList
    },
    /*{
        path: '/about-me',
        name: 'AboutMe',
        component: AboutMe
    }*/
];

const router = createRouter({
    history: createWebHistory(), routes
});

export default router;