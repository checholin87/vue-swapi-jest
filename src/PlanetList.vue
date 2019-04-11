<template>
  <div>
    <h2>SWAPI PLANETS</h2>
    <planet-list-search />
    <ul>
      <li v-for="planet in planets" :key="planet.name">
        <planet-list-item v-bind:planet="planet" />
      </li>
    </ul>
  </div>
</template>

<script>
import PlanetListItem from "@/PlanetListItem";
import PlanetListSearch from "@/PlanetListSearch";

export default {
  components: { PlanetListItem, PlanetListSearch },
  created() {
    this.$store.dispatch("search", "");
  },
  computed: {
    planets() {
      return this.$store.getters.planets;
    }
  }
};
</script>
