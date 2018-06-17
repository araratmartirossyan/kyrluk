<template>
  <div class="tab-carousel">
    <ul>
      <li
        v-for="({ title, id }, key) in categories"
        :key="key"
        :class="{
          'is-active': activeTab === key
        }"
        @click="callAction(key, id)"
      >
        {{title}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TabCarousel',
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    activeTab: 0
  }),
  methods: {
    ...mapActions([
      'fetchPosts'
    ]),
    callAction(key, id) {
      this.activeTab = key
      this.fetchPosts(key + 1)
    }
  }
}
</script>

<style>
.tab-carousel {
  width: 100%;
  height: 40px;
  z-index: 999;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 3px 1px rgba(0,0,0,.18);
  top: -17px;
}
.tab-carousel ul {
  display: flex;
  -ms-flex-wrap: nowrap;
  -webkit-overflow-scrolling: touch;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 0;
  padding-top: 9px;
  padding-left: 15px;
}
.tab-carousel ul li {
  list-style-type: none;
  flex: 0 0 auto;
  padding-bottom: 7px;
  margin-right: 10px;
}
.is-active {
  border-bottom: 4px solid #020202;
}
</style>
