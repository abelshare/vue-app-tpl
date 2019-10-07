import { BaseLayout } from '@/layouts/index';

const routes = [
  {
    path: '/',
    name: 'index',
    component: BaseLayout,
    children: [
      {
        path: 'demo',
        name: 'demo',
        component: () => import(/* webpackChunkName: "demo" */ '@/views/demo/Index')
      }
    ]
  }
];

export default routes;
