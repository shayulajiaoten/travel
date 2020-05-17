<template>
  <div class="view_list">
    <div class="header">
      <div class="font">美食</div>
    </div>
    <div v-for="value in viewList" v-bind:key="value.id" @click="goDetail(value._id)">
      <!-- <router-link class="nav-link" to="/index/detail"> -->
      <div class="content">
        <div class="content_img">
          <img :src="value.img" alt />
        </div>
        <div class="title">{{value.title}}</div>
      </div>
      <!-- </router-link> -->
      <hr />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { fetchHotelList } from "../../api/index";
export default {
  name: "Hotel",
  data() {
    return {
      viewList: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      fetchHotelList().then(res => {
        this.viewList = res.data.data;
      });
    },
    goDetail(id) {
      this.$router.push(`/index/detail/hotel/${id}`)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "styles.scss";
</style>