import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/views/Welcome.vue';
import Skills from '../components/Skills.vue';
import Proyectos from '../components/Proyectos.vue';
import Contacto from '../components/Contacto.vue';
import Lo_puedo from '../components/Lopuedo.vue';

const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/Skills',
		component: Skills,
	},
	{
		path: '/Proyectos',
		component: Proyectos,
	},
	{
		path: '/Que_hacemos',
		component: Lo_puedo,
	},
	{
		path: '/Contacto',
		component: Contacto,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
