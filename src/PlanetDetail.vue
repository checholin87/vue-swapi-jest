<template>
  <div>
    <h2>Description of {{ planet.name }}</h2>
    <dl>
      <dt>Diameter</dt>
      <dd>{{ planet.name }}</dd>
      <dt>Climate</dt>
      <dd>{{ planet.climate }}</dd>
      <dt>Terrain</dt>
      <dd>{{ planet.terrain }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ["url"],
  data() {
    return {
      endpoint: this.url
    };
  },
  created() {
    this.$store.dispatch("planet", this.endpoint);
  },
  computed: {
    planet() {
      return this.$store.getters.planet;
    }
  }
};
</script>
