<template>
  <div>
    <div class="mt-15">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-12 col-12 pt-4 d-flex align-center">
            <div class="text w-100">
              <h5 class="w-75 text-sm-center">
                <span class="d-block mb-1"> جــديد <b>الــعبايـــات</b> </span>
                اكتشفي جمالك مع أحدث تصاميم عبايـــات شـــــال! كل قطعـــة
                تجســــد التميـــز والأناقـــة، مُصممـــة خــصيصــا لتعزيـــز
                إطلالتـــك اليوميـــة بلمــســــــة فريدة وجذابة
              </h5>
              <div class="">
                <a class="showAll text-white px-6 py-2">مشاهدة الكل</a>
              </div>
            </div>
          </div>
          <div class="col-md-9 col-sm-12 text-sm-center">
            <!-- <div class="parent container-fluid px-0">
              <swiper
                :autoplay="{
                  delay: 2000,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: false,
                }"
                :slidesPerView="3"
                :spaceBetween="1"
                :modules="modules"
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
                    slidesPerView: 3,
                    spaceBetween: 1,
                  },
                  '1224': {
                    slidesPerView: 3,
                    spaceBetween: 1,
                  },
                  '1424': {
                    slidesPerView: 3,
                    spaceBetween: 1,
                  },
                }"
              >
                <swiper-slide v-for="data in dateForSlider" :key="data">
                  <v-card class="position-relative">
                    <img :src="data.imgUrl" alt="" />
                    <div
                      class="imgdese position-absolute px-4"
                      style="bottom: 15px"
                    >
                      <v-card-text class="card-title" style="color: #00deff">
                        {{ data.title }}
                      </v-card-text>
                      <v-card-text class="card-desc">
                        {{ data.desc }}
                      </v-card-text>
                      <v-card-actions class="card-btn">
                        <button @click="console.log('as')">اشترى الان</button>
                      </v-card-actions>
                    </div>
                  </v-card>
                </swiper-slide>
              </swiper>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import bootstrap
import "../assets/css/bootstrap.min.css";

//  Import Swiper Vue.js components
// import { Swiper, SwiperSlide } from "swiper/vue";
// import { Autoplay } from "swiper/modules";

// Import Swiper styles
// import "swiper/css";

export default {
  //   components: {
  //     Swiper,
  //     SwiperSlide,
  //   },
  data() {
    return {
      /* dateForSlider: [
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
      ], */
    };
  },

  /* setup() {
    return {
      modules: [Autoplay],
    };
  }, */
};
</script>

<style scoped>
.text h5 {
  color: #777;
  font-weight: 500;
  line-height: 1.1;
  font-size: 20px;
}
.text .showAll {
  background-color: #2d2d2ded;
  text-decoration: none;
  border-radius: 0 0 0 20px;
  font-size: 21px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  cursor: pointer;
}
/* .parent {
  height: fit-content;
}
.swiper-slide {
  overflow: hidden;
}
.swiper-slide img {
  height: 100%;
  width: 100%;
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
  padding: 5px 15px;
  border-radius: 0px 0px 0px 15px;
} */
</style>
