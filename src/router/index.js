import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'

const routes = [
	{
		path: '/',
		name: 'WelcomePage',
		component: WelcomePage,
	},
	{
		path: '/Register',
		name: 'RegisterPage',
		component: () => import('../views/RegisterPage'),
	},
	{
		path: '/Login',
		name: 'LoginPage',
		component: () => import('../views/LoginPage'),
	},
	{
		path: '/Dashboard',
		name: 'DashboardPage',
		component: () => import('../views/DashboardPage'),
	},

	
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
