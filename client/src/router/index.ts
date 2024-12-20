import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

export const routeNames = {
  MapsList: "Maps",
  Queue: "Queue",
  ObjectsList: "Objects",
  Upload: "Upload",
  Map: "Map",
  Object: "Object",
  Home: "Home",
  Auth: "Auth",
  Users: "Users",
  Profile: "Profile",
  Dumps: "Dumps",
};

export const routePaths = {
  [routeNames.MapsList]: "/",
  [routeNames.Queue]: "/queue",
  [routeNames.ObjectsList]: "/objects",
  [routeNames.Upload]: "/upload",
  [routeNames.Map]: "/map/:y?/:x?",
  [routeNames.Object]: "/object/:id",
  [routeNames.Home]: "/home",
  [routeNames.Auth]: "/auth",
  [routeNames.Users]: "/users",
  [routeNames.Profile]: "/profile",
  [routeNames.Dumps]: "/dumps",
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
      id: route.params.id,
    }),
  },
  {
    name: routeNames.Home,
    path: routePaths[routeNames.Home],
    component: () => import("@/views/HomeView.vue"),
  },

  {
    name: routeNames.Auth,
    path: routePaths[routeNames.Auth],
    component: () => import("@/views/AuthView.vue"),
  },

  {
    name: routeNames.Users,
    path: routePaths[routeNames.Users],
    component: () => import("@/views/UsersView.vue"),
  },

  {
    name: routeNames.Profile,
    path: routePaths[routeNames.Profile],
    component: () => import("@/views/ProfileView.vue"),
  },

  {
    name: routeNames.Dumps,
    path: routePaths[routeNames.Dumps],
    component: () => import("@/views/DumpView.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
