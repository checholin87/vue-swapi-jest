<template>
  <div>
    <form v-on:submit.prevent>
      <label for="search">search:</label>
      <input type="text" name="search" v-model="search" />
      <button type="button" v-on:click="go">go!</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    go() {
      this.$store.dispatch("search", this.search);
    }
  }
};
</script>
