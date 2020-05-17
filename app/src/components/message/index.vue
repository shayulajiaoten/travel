<template>
  <div class="view_list">
    <div class="header">
      <div class="font">旅游资讯</div>
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
import { fetchMessageList } from "../../api/index";
export default {
  name: "Message",
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
      fetchMessageList().then(res => {
        this.viewList = res.data.data;
      });
    },
    goDetail(id) {
      this.$router.push(`/index/detail/message/${id}`)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "styles.scss";
</style>