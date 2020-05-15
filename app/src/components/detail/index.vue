<template>
  <div class="view_list">
    <div class="header">
      <div class="font">{{}}</div>
    </div>

    <div class="content">
      <div class="navigation">
        <router-link class="nav-link" to="/index">首页></router-link>
        <div v-on:click="back"><a href="#">{{}}></a></div>
        <div>正文</div>
      </div>
      <div class="detail">
        <div class="title">{{}}</div>
        <img src="src\assets\images\lzlm.jpeg" alt />
        <div class="font">{{}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  methods: {
    back: () => {
      window.history.go(-1)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "styles.scss";
</style>