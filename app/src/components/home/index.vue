<template>
  <div class="bb_container">
    <div class="main">
      <div class="sidebar_left">
        <span class="view">旅游景点</span>
        <div class="list-group" v-for="item in view" :key="item._id">
          <div class="list-group-item" @click="goView(item._id)">{{item.title}}</div>
        </div>
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
          <a href="/#/index/message">更多资讯&gt;</a>
        </span>
        <div class="list-group" v-for="item in message" :key="item._id">
          <div class="list-group-item" @click="goMessage(item._id)">{{item.title}}</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer_left">
        <div class="route">
          <div class="nav">
            <div class="hot">热门路线</div>
            <div v-for="item in route" :key="item._id" class="distination">
              <div>{{item.title}}</div>
            </div>
          </div>
          <div class="route_content">
            <div class="dest1">
              <div class="dest1_header" @click="goRoute(forceRoute._id)">
                <div class="name">{{forceRoute.title}}</div>
                <div style="height:64px">{{forceRoute.content| ellipsis}}</div>
              </div>
              <div class="img">
                <img style="width:330px;height:202.6px" :src="forceRoute.img" alt />
              </div>
            </div>
            <div class="dest_other">
              <div v-for="item in centerRoute" :key="item._id">
                <div class="other_select" @click="goRoute(item._id)">
                  <div class="other_select_name">{{item.title}}</div>
                  <div class="other_select_img">
                    <img style="width:161px;" :src="item.img" alt />
                  </div>
                </div>
                <hr />
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
              <h2 style=" text-align: initial">古镇</h2>
              <p>固镇县历史悠久，汉高祖刘邦在此设立谷阳县，遗迹尚存；北魏太和年间改设谷阳镇，后演变为固镇；前202年，著名的“垓下之战”发生在固镇境内，开启了汉王朝400年基业，留下了“四面楚歌”、“霸王别姬”等动人故事；“垓下遗址”被列为国家级重点文物保护单位；考古学家发现了4600余年前的垓下史前城址，被称之为“大汶口文化第一城”； [3] 京沪高铁、101省道贯穿全境，宁洛高速、合徐高速傍依而过，蚌固一级公路建成通车，水运经浍河可入长江。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_right">
        <div class="other_view" v-for="item in rightView" :key="item._id">
          <div class="img" @click="goView(item._id)">
            <img style="width:320px;height:208px" :src="item.img" alt />
          </div>
          <div class="name">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import {
  fetchFoodList,
  fetchViewList,
  fetchHotelList,
  fetchMessageList,
  fetchRouteList
} from "../../api/home";
export default {
  name: "Home",
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 55) {
        return value.slice(0, 55) + ".....";
      }
      return value;
    }
  },
  data() {
    return {
      food: [],
      view: [],
      rightView: [],
      hotel: [],
      message: [],
      route: [],
      centerRoute: [],
      forceRoute: {},
      swiperOptions: {
        loop: true,
        observer: true,
        autoplay: {
          disableOnInteraction: false
        },
        speed: 1000,
        pagination: {
          el: ".swiper-pagination"
        }
        // Some Swiper option/callback...
      }
    };
  },
  created() {
    fetchFoodList().then(res => {
      this.food = res.data.data;
    });
    fetchViewList().then(res => {
      this.view = res.data.data;
      this.rightView = this.view.slice(0, 3);
    });
    fetchHotelList().then(res => {
      this.hotel = res.data.data;
    });
    fetchMessageList().then(res => {
      this.message = res.data.data;
    });
    fetchRouteList().then(res => {
      this.route = res.data.data;
      this.centerRoute = this.route.slice(1, 4);
      console.log(this.centerRoute);

      this.forceRoute = this.route[0];
    });
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  methods: {
    goView(id) {
      this.$router.push(`/index/detail/view/${id}`);
    },
    goMessage(id) {
      this.$router.push(`/index/detail/message/${id}`);
    },
    goRoute(id) {
      this.$router.push(`/index/detail/route/${id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "styles.scss";
</style>