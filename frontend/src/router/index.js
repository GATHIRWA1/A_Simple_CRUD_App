import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../components/home.vue'
import login from '../components/login.vue'
import signup from '../components/signup.vue'
import employees from '../components/employees.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },

    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/register',
        name: 'signup',
        component: signup
    },
    {
        path: '/employees',
        name: 'employees',
        component: employees
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router