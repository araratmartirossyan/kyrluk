<template>
  <div id="app">
    <v-ons-toolbar cover-content>
      <div class="center">Tulenia</div>
    </v-ons-toolbar>
    <div class="tabs">
      <TabCarousel :categories="categories" />
    </div>
    <div class="content-layout">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TabCarousel from './components/shared/TabCarousel'

export default {
  name: 'App',
  components: {
    TabCarousel
  },
  methods: {
    ...mapActions([
      'fetchCategories'
    ])
  },
  computed: {
    ...mapGetters([
      'categories'
    ])
  },
  created() {
    this.fetchCategories()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.toolbar {
  background: #856a6a;
}
.toolbar__title {
  color: #fff;
}
</style>
