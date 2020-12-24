export default [
  {
    name: "watchedlist",
    path: "/watchedlist",
    component: () => import("./Watchedlist"),
    meta: {
      showNavbar: true,
      title: "Watchedlist",
      icon: "playlist_add_check",
      label: "Já assisti"
    }
  }
];
