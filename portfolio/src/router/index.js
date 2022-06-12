import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "home",
		component: () => import("@/views/HomeView.vue"),
	},
	{
		path: "/portfolio",
		name: "portfolio",
		component: () => import("@/views/PortfolioView.vue"),
	},
	{
		path: "/contact",
		name: "contact",
		component: () => import("@/views/ContactView.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
