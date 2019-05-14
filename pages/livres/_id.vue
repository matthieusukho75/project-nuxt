<template>
  <div class="container" v-if="currentLivre">
    <h1>{{ currentLivre.title }}</h1>
    <p>{{ currentLivre.author}}</p>
    <div>
      <nuxt-link :to="{name: 'livres-list'}">
        <button>Retour</button>
      </nuxt-link>
    </div>
  </div>
</template>

    
<script>
import axios from "~/plugins/axios";

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(`/livres/${params.id}`);
    return {
      currentLivre: data
    };
  },
  data() {
    return {
      currentLivre: null
    };
  },

  head() {
    return {
      title: `${this.currentLivre.title} | Mon site internet`,
    };
  }
};
</script>

<style>
.container {
  width: 980px;
  margin: 0px;
}
</style>