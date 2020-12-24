<template>
  <div class="container-fluid">
    <h1 class="mt-3">Watchedlist</h1>
    <hr />
    <div class="row">
      <div class="col-3" :key="item.id" v-for="item in watchedlist">
        <serie-box :serie="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SerieBox from "../../components/SerieBox";

export default {
  name: "Watchedlist",
  components: {
    SerieBox,
  },
  computed: {
    ...mapState("watchedlist", ["watchedlist"]),
  },
  mounted() {
    this.ActionFindWatchedlist();
  },
  methods: {
    ...mapActions("watchedlist", ["ActionFindWatchedlist"]),
  },
};
</script>
<style lang="scss" scoped>
</style>
