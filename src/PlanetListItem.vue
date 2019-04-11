<template>
  <div>
    <strong>{{ planet.name }}</strong>
    <span>{{ planet.population }}</span>
    <router-link v-bind:to="{ path: '/planet', query: { url: planet.url } }">
      Go!
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["planet"]
};
</script>
