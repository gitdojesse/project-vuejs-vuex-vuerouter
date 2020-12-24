export default [
  {
    name: "series",
    path: "/series",
    component: () => import("./Series"),
    meta: {
      showNavbar: true,
      title: "Series",
      icon: "dvr",
      label: "Todas as séries"
    }
  }
];
