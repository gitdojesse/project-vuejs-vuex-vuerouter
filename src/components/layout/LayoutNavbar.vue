<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" :to="{ name: 'home' }">
      Séries Wished
    </router-link>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <router-link
          exact
          :key="i"
          v-for="(route, i) in routes"
          tag="li"
          class="nav-item"
          exact-active-class="active"
          :to="{ name: route.name }"
        >
          <a href="#" class="nav-link">
            {{ route.meta.title }}
          </a>
        </router-link>
        <!-- <li class="nav-item active">
          <a class="nav-link" href="#">Home</a>
        </li> -->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "LayoutNavbar",
  computed: {
    routes() {
      return this.$router.options.routes.filter((route) => {
        return route.meta && route.meta.showNavbar;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
