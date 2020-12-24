<template>
  <div id="home">
    <div class="user-info">
      <h2>Olá, {{ user.name }} ;)</h2>
      <p>Bem vindo ao Séries Wished</p>
    </div>
    <div class="home-links">
      <router-link
        :key="i"
        class="home-link"
        :to="{ name: route.name }"
        v-for="(route, i) in routes"
      >
        <i class="material-icons md-48">{{ route.meta.icon }}</i>
        <span>{{ route.meta.label }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState("auth", ["user"]),
    routes() {
      return this.$router.options.routes.filter((route) => {
        return route.meta && route.meta.showNavbar;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin flex-center($columns: false) {
  display: flex;
  align-items: center;
  justify-content: center;

  @if $columns {
    flex-direction: column;
  }
}

#home {
  width: 100%;
  height: 100vh;
  @include flex-center(true);
  justify-content: space-around;

  .user-info {
    text-align: center;
  }

  .home-links {
    width: 100%;
    @include flex-center();
    .home-link {
      flex: 0 0 25%;
      margin: 0 15px;
      padding: 50px 0;
      transition: 0.4s;
      background-color: #ddd;
      color: var(--white);
      @include flex-center(true);
      &:hover {
        transform: scale(1.1);
        text-decoration: none;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
      }
    }

    .home-link:first-child {
      background-color: var(--blue);
    }
    .home-link:nth-child(2) {
      background-color: var(--orange);
    }
    .home-link:last-child {
      background-color: var(--red);
    }
  }
}
</style>
