import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

export const routeNames = {
  MapsList: "Maps",
  Queue: "Queue",
  ObjectsList: "Objects",
  Upload: "Upload",
  Map: "Map",
  Object: "Object",
  Home: "Home",
};

export const routePaths = {
  [routeNames.MapsList]: "/",
  [routeNames.Queue]: "/queue",
  [routeNames.ObjectsList]: "/objects",
  [routeNames.Upload]: "/upload",
  [routeNames.Map]: "/map/:y?/:x?",
  [routeNames.Object]: "/object/:id",
  [routeNames.Home]: "/home",
};

export const routes: RouteRecordRaw[] = [
  {
    name: routeNames.MapsList,
    path: routePaths[routeNames.MapsList],
    component: () => import("@/views/MapsListView.vue"),
  },
  {
    name: routeNames.Queue,
    path: routePaths[routeNames.Queue],
    component: () => import("@/views/QueueView.vue"),
  },
  {
    name: routeNames.ObjectsList,
    path: routePaths[routeNames.ObjectsList],
    component: () => import("@/views/ObjectsListView.vue"),
  },
  {
    name: routeNames.Upload,
    path: routePaths[routeNames.Upload],
    component: () => import("@/views/UploadView.vue"),
  },
  {
    name: routeNames.Map,
    path: routePaths[routeNames.Map],
    component: () => import("@/views/MapView.vue"),
    props: (route) => ({
      y: route.params.y,
      x: route.params.x,
    }),
  },
  {
    name: routeNames.Object,
    path: routePaths[routeNames.Object],
    component: () => import("@/views/ObjectView.vue"),
    props: (route) => ({
      id: route.params.id
    }),
  },
  {
    name: routeNames.Home,
    path: routePaths[routeNames.Home],
    component: () => import("@/views/HomeView.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
