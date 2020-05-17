<template>
  <div class="view_list">
    <div class="header">
      <div class="font">{{cnSort}}</div>
    </div>
    <div class="content">
      <div class="navigation">
        <router-link class="nav-link" to="/index">首页></router-link>
        <div v-on:click="back">
          <a href="#">{{cnSort}}></a>
        </div>
        <div>正文</div>
      </div>
      <div class="detail">
        <div class="title">{{message.title}}</div>
        <img :src="message.img" alt />
        <div class="font">{{message.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchDetail } from "../../api/index";
export default {
  name: "Detail",
  data() {
    return {
      id: "",
      message: {},
      cnSort: ""
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.sort = this.$route.params.sort;
    switch (this.sort) {
      case "view":
        this.cnSort = "景点";
        break;
      case "hotel":
        this.cnSort = "酒店";
        break;
      case 'route':
        this.cnSort = "线路";
        break;
      case 'message':
        this.cnSort = "资讯";
        break;
      case 'food':
        this.cnSort = "美食";
        break;
    }
    fetchDetail({ sort: this.sort, id: this.id }).then(res => {
      this.message = res.data.data;
    });
  },

  methods: {
    back: () => {
      window.history.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "styles.scss";
</style>