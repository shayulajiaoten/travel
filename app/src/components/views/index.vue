<template>
  <div class="view_list">
    <div class="header">
      <div class="font">旅游景点</div>
    </div>
    <div v-for="value in temp" v-bind:key="value.id">
      <router-link class="nav-link" to="/index/detail">
        <div class="content">
          <div class="content_img">
            <img :src="value.img" alt />
          </div>
          <div class="title">{{value.title}}</div>
        </div>
      </router-link>
      <hr />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Views",
  data() {
    return {
      temp: [
        {
          id: 1,
          img: "src/assets/images/timg.jpg",
          title: "集美休闲康养两日游指南,带你玩乐美食两不误！"
        },
        {
          id: 2,
          img: "src/assets/images/timg.jpg",
          title: "集美休闲康养两日游指南,带你玩乐美食两不误！"
        },
        {
          id: 3,
          img: "src/assets/images/timg.jpg",
          title: "集美休闲康养两日游指南,带你玩乐美食两不误！"
        },
        {
          id: 4,
          img: "src/assets/images/timg.jpg",
          title: "集美休闲康养两日游指南,带你玩乐美食两不误！"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "styles.scss";
</style>