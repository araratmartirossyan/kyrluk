<template id="main">
  <div class="content_page">
    <v-ons-card
      v-for="({
        like_count,
        views_count,
        image,
        title,
        id,
        text
      }, key) in catched"
      :key="key"
      v-if="catched"
    >
      <div class="title">
        {{title}}
      </div>
      <div class="text" v-if="!image">
        {{text}}
      </div>
      <img
        :src="image"
        alt="Onsen UI"
        style="width: 100%"
        v-if="!isVideo(image) && image"
      >
      <video
        class="video"
        :src="image"
        v-if="isVideo(image) && image"
        autoplay
        loop
      />
      <div class="content">
        <div class="btn-block">
          <div class="icon" @click="like(id)">
            <v-ons-icon
              :icon="getIcon(id)"
              style="color: #ddd;"
              size="20px"
            />
            <span>{{like_count}}</span>
          </div>
          <div class="icon">
            <!-- <v-ons-icon
              icon="eye"
              style="color: #ddd;"
              size="20px"
            />
            <span>{{views_count}}</span> -->
          </div>
        </div>
      </div>
    </v-ons-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'List',
  data: () => ({
    catched: []
  }),
  methods: {
    ...mapActions([
      'like'
    ]),
    isVideo(url) {
      const fileExtension = url && url.split('.').slice(-1)[0]
      return fileExtension === 'mp4'
    },
    getIcon(id) {
      const likes = JSON.parse(localStorage.getItem('likedItems')) || []
      return likes.includes(id) ? 'heart' : 'heart-o'
    }
  },
  watch: {
    posts() {
      this.catched = this.posts
    }
  },
  computed: {
    ...mapGetters([
      'posts'
    ])
  }
}
</script>

<style>
  .header {
    display: flex;
  }
  .header__title {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  .header__title span {
    font-size: 12px;
    color: #abaaaa;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  .avatar {
    background: #d23232;
    width: 50px;
    height: 50px;
    border-radius: 2354px;
    margin-left: 15px;
  }
  .title {
    font-size: 14px;
    padding: 10px 15px 5px 10px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  .card {
    margin: 8px 0;
    border-radius: 0px;
    padding: 0 0 5px 0;
  }
  .btn-block {
    display: flex;
    justify-content: space-between;
    padding: 5px 15px 5px 15px;
  }
  .icon span {
    margin-left: 4px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 19px;
    color: rgb(192, 191, 191);
  }
  .card:first-child {
    margin-top: 90px;
  }
  .content_page {
    position: absolute;
    overflow: scroll;
    top: 0;
    height: 100%;
    background: #ddd;
  }
  .video {
    width: 100%;
  }
  .text {
    font-size: 13px;
    padding: 0 10px 10px 10px;
  }
</style>
