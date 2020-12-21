<template>
  <div class="container-fluid">
    <h1 class="mt-3">Watchlist</h1>
    <hr />
    <div class="row">
      <div class="col-3" :key="item.id" v-for="item in watchlist">
        <serie-box :serie="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SerieBox from "../../components/SerieBox";

export default {
  name: "Watchlist",
  components: {
    SerieBox,
  },
  computed: {
    ...mapState("watchlist", ["watchlist"]),
  },
  mounted() {
    this.ActionFindWatchlist();
  },
  methods: {
    ...mapActions("watchlist", ["ActionFindWatchlist"]),
  },
};
</script>
<style lang="scss" scoped>
</style>
