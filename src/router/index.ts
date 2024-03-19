import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "forside",
    meta: { title: 'Rådgivende ingeniør med speciale i statiske beregninger' },
    component: () => import("../views/Forside.vue"),
  },
  {
    path: "/fem-design",
    name: "fem-design",
    meta: { title: 'FEM-design | Finite Element program til bygningskonstruktioner' },
    component: () => import("../views/FemDesign.vue"),
  },
  {
    path: "/kontakt",
    name: "kontakt",
    meta: { title: 'Kontakt | BRØNS' },
    component: () => import("../views/Kontakt.vue"),
  },
  {
    path: "/murvaerkprojektering",
    name: "murvaerkprojektering",
    meta: { title: 'Murværkprojektering - Kontakt Brøns Ingeniørfirma ApS' },
    component: () => import("../views/MurvaerkProjektering.vue"),
  },
  {
    path: "/om-os",
    name: "om-os",
    meta: { title: 'Om os | BRØNS' },
    component: () => import("../views/OmOs.vue"),
  },
  {
    path: "/referencer",
    name: "referencer",
    meta: { title: 'Referencer | BRØNS' },
    component: () => import("../views/Referencer.vue"),
  },
  {
    path: "/stålrammer",
    name: "stålrammer",
    meta: { title: 'Stålrammer | BRØNS' },
    component: () => import("../views/Stålrammer.vue"),
  },
  {
    path: "/statiske-beregninger",
    name: "statiske-beregninger",
    meta: { title: 'Statiske beregninger til bærende konstruktioner' },
    component: () => import("../views/StatiskeBeregninger.vue"),
  },
  {
    path: "/diverse",
    name: "diverse",
    meta: { title: 'Diverse | BRØNS' },
    component: () => import("../views/Diverse.vue"),
  },
  {
    path: "/ydelser",
    name: "ydelser",
    meta: { title: 'Ydelser | BRØNS' },
    component: () => import("../views/Ydelser.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to);
  if(typeof to.meta.title === 'string') document.title = to.meta.title;
  next();
});

export default router;
