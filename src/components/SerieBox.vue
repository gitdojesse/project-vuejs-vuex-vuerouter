<template>
  <router-link
    class="card mb-4"
    :to="{ name: 'show-serie', params: { id: serie.id } }"
  >
    <img height="200px" :src="serie.image" class="card-image-top" />
    <div class="card-body">
      <h3 class="text-center mb-0">
        {{ serie.title }}
      </h3>
      <div class="row text-center mt-3">
        <div class="col">
          <button
            class="btn btn-sm btn-outline-primary"
            @click.prevent="toggleWatchlist()"
          >
            {{ serie.watchlist ? "Remover da" : "Adicionar na" }} watchlist
          </button>
        </div>
        <div class="col">
          <button
            class="btn btn-sm btn-outline-warning"
            @click.prevent="toggleWatchedlist()"
          >
            {{ serie.watched ? "Remover da" : "Adicionar na" }} watchedlist
          </button>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SerieBox",
  props: {
    serie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions("watchedlist", [
      "ActionAddOnWatchedlist",
      "ActionDeleteFromWatchedlist",
      "ActionFindWatchedlist",
    ]),
    ...mapActions("watchlist", [
      "ActionAddOnWatchlist",
      "ActionDeleteFromWatchlist",
      "ActionFindWatchlist",
    ]),
    async toggleWatchlist() {
      try {
        if (this.serie.watched) {
          await this.ActionDeleteFromWatchedlist(this.serie.id);
        }

        if (this.serie.watchlist) {
          await this.ActionDeleteFromWatchlist(this.serie.id);
          window.alert("Removido com sucesso");
        } else {
          await this.ActionAddOnWatchlist({ serieId: this.serie.id });
          window.alert("Adicionada com sucesso");
        }
        this.ActionFindWatchlist();
      } catch (error) {
        window.alert("Ocorreu algum erro");
        console.error(error);
      }
    },
    async toggleWatchedlist() {
      if (this.serie.watchlist) {
        await this.ActionDeleteFromWatchlist(this.serie.id);
      }

      try {
        if (this.serie.watched) {
          await this.ActionDeleteFromWatchedlist(this.serie.id);
          window.alert("Removido com sucesso");
        } else {
          await this.ActionAddOnWatchedlist({ serieId: this.serie.id });
          window.alert("Adicionada com sucesso");
        }
        this.ActionFindWatchedlist();
      } catch (error) {
        window.alert("Ocorreu algum erro");
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  transition: 0.4s;
  color: var(--dark);
  &:hover {
    text-decoration: none;
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.5);
  }
}
</style>
