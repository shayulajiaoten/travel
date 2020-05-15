<template>
  <div class="bb_container">
    <!-- <div class="header">
      <div class="logo container">
        <img src="../../assets/images\timg.jpg" />
        旅游网
      </div>
      <div class="container bb_nav">
        <ul class="nav bg-dark">
          <li class="nav-item li_first">
            <a class="nav-link" href="/">首页</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/travel">旅游景点</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/line">旅游线路</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/more">旅游资讯</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/morefood">美食</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/hotel">酒店</a>
          </li>
        </ul>
      </div>
    </div> -->

    <div class="main">
      <div class="sidebar_left">
        <span class="view">旅游景点</span>
        <ul class="list-group">
          <li class="list-group-item">神农架</li>
          <li class="list-group-item">云南香格里拉</li>
          <li class="list-group-item">长白山</li>
          <li class="list-group-item">九寨沟</li>
          <li class="list-group-item">北戴河</li>
          <li class="list-group-item">龙门石窟</li>
        </ul>
      </div>
      <div class="content">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide>
            <img src="../../assets/images/1.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="../../assets/images\2.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="../../assets/images\3.jpg" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="sidebar_right">
        <span class="view">最新资讯</span>
        <span class="more">
          <a href="#">更多资讯&gt;</a>
        </span>
        <ul class="list-group">
          <li class="list-group-item">资讯1</li>
          <li class="list-group-item">资讯2</li>
          <li class="list-group-item">资讯3</li>
          <li class="list-group-item">资讯4</li>
          <li class="list-group-item">资讯5</li>
          <li class="list-group-item">资讯6</li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <div class="footer_left">
        <div class="route">
          <div class="nav">
            <div class="hot">热门路线</div>
            <div class="distination">
              <div>香格里拉</div>
              <div>香格里拉</div>
              <div>香格里拉</div>
              <div>香格里拉</div>
              <div>香格里拉</div>
              <div>香格里拉</div>
            </div>
          </div>
          <div class="route_content">
            <div class="dest1">
              <div class="dest1_header">
                <div class="name">白如泉</div>
                <div>白乳泉原名白龟泉，相传唐贞元年间，泉内曾有白龟流出，因此得名。因泉水甘美呈乳色，后人改名白乳泉。</div>
              </div>
              <div>
                <img style="width:330px;height:202.6px" src="../../assets/images\1.jpg" alt />
              </div>
            </div>
            <div class="dest_other">
              <div class="other_select">
                <div class="other_select_name">湖上生明月</div>
                <div class="other_select_img">
                  <img style="width:161px;" src="../../assets/images\1.jpg" alt />
                </div>
              </div>
              <div class="other_select">
                <div class="other_select_name">湖上生明月</div>
                <div class="other_select_img">
                  <img style="width:161px;" src="../../assets/images\1.jpg" alt />
                </div>
              </div>
              <div class="other_select">
                <div class="other_select_name">湖上生明月</div>
                <div class="other_select_img">
                  <img style="width:161px;" src="../../assets/images\1.jpg" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="commend">
          <div class="commend_header">
            <span>热门推荐</span>
          </div>
          <div class="img">
            <img style="width:200px;height:264px" src="../../assets/images\gzdt.jpg" alt />
            <div class="commend_font">
              <h2>古镇</h2>
              <p>固镇县历史悠久，汉高祖刘邦在此设立谷阳县，遗迹尚存；北魏太和年间改设谷阳镇，后演变为固镇；前202年，著名的“垓下之战”发生在固镇境内，开启了汉王朝400年基业，留下了“四面楚歌”、“霸王别姬”等动人故事；“垓下遗址”被列为国家级重点文物保护单位；考古学家发现了4600余年前的垓下史前城址，被称之为“大汶口文化第一城”； [3] 京沪高铁、101省道贯穿全境，宁洛高速、合徐高速傍依而过，蚌固一级公路建成通车，水运经浍河可入长江。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_right">
        <div class="other_view">
          <div class="img">
            <img style="width:320px;height:208px" src="../../assets/images\c1.jpeg" alt />
          </div>
          <div class="name">这是地点名</div>
        </div>
        <div class="other_view">
          <div class="img">
            <img style="width:320px;height:208px" src="../../assets/images\c1.jpeg" alt />
          </div>
          <div class="name">这是地点名</div>
        </div>
        <div class="other_view">
          <div class="img">
            <img style="width:320px;height:208px" src="../../assets/images\c1.jpeg" alt />
          </div>
          <div class="name">这是地点名</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
export default {
  name: "Home",
  props: {},
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        observer: true,
        // autoplay: {
        //   disableOnInteraction: false
        // },
        speed: 1000,
        pagination: {
          el: ".swiper-pagination"
        }
        // Some Swiper option/callback...
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "styles.scss";
</style>