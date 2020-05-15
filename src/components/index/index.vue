<template>
  <div class="bb_container">
    <div class="header">
      <div class="logo container">
        <img src="../../assets/images\timg.jpg" />
        旅游网
      </div>
      <div class="container bb_nav">
        <ul class="nav bg-dark">
          <li class="nav-item li_first">
            <router-link class="nav-link" to="/index">首页</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/index/view">旅游景点</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/index/route">旅游线路</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/index/message">旅游资讯</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/index/food">美食</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/index/hotel">酒店</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
  
</template>

<script>
export default {
  name: "Index",
  props: {}
};
</script>

<style lang="scss" scoped>
@import "styles.scss";
</style>