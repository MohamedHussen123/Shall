<template>
  <div>
    <div class="parent container-fluid px-0">
      <swiper
        :autoplay="{
          delay: 1000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }"
        :loop="true"
        :slidesPerView="7"
        :spaceBetween="1"
        :modules="modules"
        :pagination="{
          clickable: true,
        }"
        class="mySwiper"
        :breakpoints="{
          '0': {
            slidesPerView: 1,
          },
          '580': {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          '767': {
            slidesPerView: 3,
            spaceBetween: 1,
          },
          '1124': {
            slidesPerView: 4,
            spaceBetween: 1,
          },
          '1224': {
            slidesPerView: 5,
            spaceBetween: 1,
          },
          '1424': {
            slidesPerView: 5,
            spaceBetween: 1,
          },
        }"
      >
        <swiper-slide v-for="data in dateForSlider" :key="data">
          <v-card class="position-relative">
            <img :src="data.imgUrl" alt="" />
            <div class="imgdese position-absolute px-4" style="bottom: 15px">
              <v-card-text class="card-title" style="color: #00deff">
                {{ data.title }}
              </v-card-text>
              <v-card-text class="card-desc">
                {{ data.desc }}
              </v-card-text>
              <v-card-actions class="card-btn">
                <button @click="console.log('as')">تسوقي الآن</button>
              </v-card-actions>
            </div>
          </v-card>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
// import bootstrap
import "../assets/css/bootstrap.min.css";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      dateForSlider: [
        {
          imgUrl:
            "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
          title: "الجلابيات",
          desc: "اكتسبي أناقة محافلك مع جلابيات شال الراقية، حيث تجمع بين فخامة التصميم وجمال الأقمشة. اكتشفي تشكيلتنا المميزة وأظهري جمالك بأسلوب شال الفريد",
        },
        {
          imgUrl:
            "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
          title: "الجلابيات",
          desc: "اكتسبي أناقة محافلك مع جلابيات شال الراقية، حيث تجمع بين فخامة التصميم وجمال الأقمشة. اكتشفي تشكيلتنا المميزة وأظهري جمالك بأسلوب شال الفريد",
        },
        {
          imgUrl:
            "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
          title: "الجلابيات",
          desc: "اكتسبي أناقة محافلك مع جلابيات شال الراقية، حيث تجمع بين فخامة التصميم وجمال الأقمشة. اكتشفي تشكيلتنا المميزة وأظهري جمالك بأسلوب شال الفريد",
        },
        {
          imgUrl:
            "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
          title: "الجلابيات",
          desc: "اكتسبي أناقة محافلك مع جلابيات شال الراقية، حيث تجمع بين فخامة التصميم وجمال الأقمشة. اكتشفي تشكيلتنا المميزة وأظهري جمالك بأسلوب شال الفريد",
        },
        {
          imgUrl:
            "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
          title: "الجلابيات",
          desc: "اكتسبي أناقة محافلك مع جلابيات شال الراقية، حيث تجمع بين فخامة التصميم وجمال الأقمشة. اكتشفي تشكيلتنا المميزة وأظهري جمالك بأسلوب شال الفريد",
        },
        {
          imgUrl:
            "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
          title: "الجلابيات",
          desc: "اكتسبي أناقة محافلك مع جلابيات شال الراقية، حيث تجمع بين فخامة التصميم وجمال الأقمشة. اكتشفي تشكيلتنا المميزة وأظهري جمالك بأسلوب شال الفريد",
        },
        {
          imgUrl:
            "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
          title: "الجلابيات",
          desc: "اكتسبي أناقة محافلك مع جلابيات شال الراقية، حيث تجمع بين فخامة التصميم وجمال الأقمشة. اكتشفي تشكيلتنا المميزة وأظهري جمالك بأسلوب شال الفريد",
        },
        {
          imgUrl:
            "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
          title: "الجلابيات",
          desc: "اكتسبي أناقة محافلك مع جلابيات شال الراقية، حيث تجمع بين فخامة التصميم وجمال الأقمشة. اكتشفي تشكيلتنا المميزة وأظهري جمالك بأسلوب شال الفريد",
        },
        {
          imgUrl:
            "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
          title: "الجلابيات",
          desc: "اكتسبي أناقة محافلك مع جلابيات شال الراقية، حيث تجمع بين فخامة التصميم وجمال الأقمشة. اكتشفي تشكيلتنا المميزة وأظهري جمالك بأسلوب شال الفريد",
        },
      ],
    };
  },

  setup() {
    return {
      modules: [Autoplay, Pagination],
    };
  },
};
</script>

<style scoped>
.parent {
  /* background-color: aqua; */
  height: fit-content;
}

.swiper-slide {
  height: 100%;
}
.swiper-slide img {
  height: 100%;
  width: 100%;
}
/* swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal */
.swiper-pagination {
  position: relative !important;
}
.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
}
.card-title {
  font-weight: 900;
  font-size: 21px;
  margin: 0;
  width: 100%;
  padding: 0 0px 5px;
}
.card-desc {
  margin: 0;
  padding: 5px 0px 10px;
  font-weight: 600;
  font-size: 15px;
  color: #fff;
}

.card-btn {
  width: fit-content;
  padding: 0 1px;
}
.card-btn button {
  background-color: #fff;
  padding: 10px 35px;
  border-radius: 0px 0px 0px 20px;
  font-weight: bolder;
  font-size: 16px;
}
</style>
