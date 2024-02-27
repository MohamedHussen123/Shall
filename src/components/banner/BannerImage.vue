<template>
  <div>
    <div class="parent container-fluid px-0">
      <swiper
        :autoplay="{
          delay: 1500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }"
        :loop="true"
        :slidesPerView="7"
        :spaceBetween="25"
        :modules="modules"
        class="mySwiper"
        :breakpoints="{
          '0': {
            slidesPerView: 1,
          },
          '580': {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          '767': {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          '1124': {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          '1224': {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          '1424': {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }"
      >
        <swiper-slide
          class="position-relative"
          v-for="data in dateForSlider"
          :key="data"
        >
          <div
            @click.stop="drawer = !drawer"
            @click="sendItem(data)"
            class="px-2 py-1 svg-contain"
            style="background-color: #fff"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
              />
            </svg>
          </div>
          <div class="position-relative overflow-hidden" elevation="0">
            <img :src="data.imgUrl" alt="" />
          </div>
          <div class="stock-state">
            <span>مخرون قليل</span>
          </div>
          <div class="imgdese bg-white px-2 py-1" style="">
            <p class="card-title">
              {{ data.title }}
            </p>
            <p class="card-desc">
              {{ data.desc }}
            </p>
            <p class="price">
              <span>470 رس</span>
              <del>670 رس</del>
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <v-navigation-drawer
      class="quick-view px-2"
      :width="500"
      location="right"
      v-model="drawer"
      temporary
    >
      <div class="container position-relative">
        <div
          class="svg position-absolute"
          style="
            cursor: pointer;
            z-index: 1500;
            left: 15px;
            top: 15px;
            text-align: center;
            padding: 5px 16px 9px;
            border-radius: 50%;
            background-color: #fff;
          "
          @click.stop="drawer = !drawer"
        >
          <svg
            style="width: 10px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
          </svg>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div>
              <swiper
                class="mb-5"
                :autoplay="{
                  delay: 1500,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: false,
                }"
                :loop="true"
                :slidesPerView="7"
                :spaceBetween="25"
                :breakpoints="{
                  '0': {
                    slidesPerView: 1,
                  },
                  '580': {
                    slidesPerView: 1,
                    spaceBetween: 25,
                  },
                  '767': {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  '1124': {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  '1224': {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  '1424': {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                }"
              >
                <swiper-slide v-for="(image, i) in item.imgthubnail" :key="i">
                  <img class="" :src="image" alt="" />
                </swiper-slide>
              </swiper>
            </div>
            <div class="title">
              <router-link to="/productDetails">
                {{ item.title }}
              </router-link>
            </div>
            <div class="rating">
              <v-rating
                v-model="rating"
                class="ma-0"
                density="compact"
                :model-value="5"
                size="x-small"
                color="#000"
                active-color="#000"
              ></v-rating>
            </div>
            <div class="price">
              <span>262.20ر.س </span>
            </div>
            <div class="description">
              <p>
                اكتشفي الأناقة التقليدية المعاصرة مع عبايتنا الفريدة المصنوعة من
                القماش البحريني الأصيل، المعروف بجودته العالية وتاريخه العريق.
                تتميز هذه العباية بخصائص فريدة تجمع بين النعومة الاستثنائية
                والمظهر الراقي على الجسم، بالإضافة إلى ملمسها الناعم الذي يغني
                عن الكوي. كما أنها تأتي بتصميم دبل فيس عملي بلونين كلاسيكيين:
                الأسود والرصاصي السادة، مما يجعلها الخيار المثالي لبيئة العمل
                والخروجات اليومية. لا تفوتي فرصة إضافة هذه القطعة المميزة إلى
                مجموعتك. عباياتنا بقماش بحريني تعد استثمارًا في الأناقة التي
                تدوم طويلاً. متوفرة الآن لفترة محدودة فقط! تأكدي من اقتنائها
                اليوم قبل نفاد الكمية وتمتعي بتجربة تراثية فريدة مع لمسة عصرية
                تبرز جمالك في كل مناسبة
              </p>
            </div>
          </div>
          <div class="size_q py-3 row">
            <div class="col-md-3"><span>المقاس:</span></div>

            <div class="col-md-9">
              <div class="d-flex align-center">
                <v-btn-toggle
                  v-model="toggle"
                  density="combact"
                  color="black"
                  mandatory
                  class="d-flex gap-2"
                >
                  <v-btn rounded="md" value="52">52</v-btn>
                  <v-btn rounded="md" value="53">53</v-btn>
                  <v-btn rounded="md" value="54">54</v-btn>
                  <v-btn rounded="md" value="55">55</v-btn>
                </v-btn-toggle>
              </div>
            </div>
          </div>
          <div class="color row">
            <div class="col-md-3">
              <p style="color: #777">اللون:</p>
            </div>
            <div class="col-md-9">
              <div class="d-flex align-center">
                <v-btn-toggle
                  v-model="toggle_color"
                  density="combact"
                  color="black"
                  mandatory
                  class="d-flex gap-2"
                >
                  <v-btn rounded="sm" value="gray">gray </v-btn>
                  <v-btn rounded="sm" value="black">black </v-btn>
                </v-btn-toggle>
              </div>
            </div>
          </div>
          <div class="total-price row">
            <div class="col-md-3"><p>السعر الكلى</p></div>
            <div class="col-md-9"><span> 262.25 رس </span></div>
          </div>
          <div class="state">
            <button>نفذ من المخزون</button>
          </div>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
// import bootstrap
// import "../assets/css/bootstrap.min.css";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

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
          title: "عبايات شانتون لف",
          desc: "مميزه بتصميم عصرى",
          color: ["grey", "black"],
          imgthubnail: [
            "http://shal/public/uploads/all/sV9LJKQJvrhqDReb5cGak2jPad5HiXzF4WBKv9CC.webp",
            "http://shal/public/uploads/all/UXKzPLez7k90yvLQiY4d2ofcir30PV5qyZ7BPPCZ.webp",
          ],
        },
        {
          imgUrl:
            "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
          title: "عبايات شانتون لف",
          desc: "مميزه بتصميم عصرى",
          color: ["grey", "black"],
          imgthubnail: [
            "http://shal/public/uploads/all/sV9LJKQJvrhqDReb5cGak2jPad5HiXzF4WBKv9CC.webp",
            "http://shal/public/uploads/all/UXKzPLez7k90yvLQiY4d2ofcir30PV5qyZ7BPPCZ.webp",
          ],
        },
        {
          imgUrl:
            "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
          title: "عبايات شانتون لف",
          desc: "مميزه بتصميم عصرى",
          color: ["grey", "black"],
          imgthubnail: [
            "http://shal/public/uploads/all/sV9LJKQJvrhqDReb5cGak2jPad5HiXzF4WBKv9CC.webp",
            "http://shal/public/uploads/all/UXKzPLez7k90yvLQiY4d2ofcir30PV5qyZ7BPPCZ.webp",
          ],
        },
        {
          imgUrl:
            "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
          title: "عبايات شانتون لف",
          desc: "مميزه بتصميم عصرى",
          color: ["grey", "black"],
          imgthubnail: [
            "http://shal/public/uploads/all/sV9LJKQJvrhqDReb5cGak2jPad5HiXzF4WBKv9CC.webp",
            "http://shal/public/uploads/all/UXKzPLez7k90yvLQiY4d2ofcir30PV5qyZ7BPPCZ.webp",
          ],
        },
        {
          imgUrl:
            "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
          title: "عبايات شانتون لف",
          desc: "مميزه بتصميم عصرى",
          color: ["grey", "black"],
          imgthubnail: [
            "http://shal/public/uploads/all/sV9LJKQJvrhqDReb5cGak2jPad5HiXzF4WBKv9CC.webp",
            "http://shal/public/uploads/all/UXKzPLez7k90yvLQiY4d2ofcir30PV5qyZ7BPPCZ.webp",
          ],
        },
        {
          imgUrl:
            "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
          title: "عبايات شانتون لف",
          desc: "مميزه بتصميم عصرى",
          color: ["grey", "black"],
          imgthubnail: [
            "http://shal/public/uploads/all/sV9LJKQJvrhqDReb5cGak2jPad5HiXzF4WBKv9CC.webp",
            "http://shal/public/uploads/all/UXKzPLez7k90yvLQiY4d2ofcir30PV5qyZ7BPPCZ.webp",
          ],
        },
        {
          imgUrl:
            "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
          title: "عبايات شانتون لف",
          desc: "مميزه بتصميم عصرى",
          color: ["grey", "black"],
          imgthubnail: [
            "http://shal/public/uploads/all/sV9LJKQJvrhqDReb5cGak2jPad5HiXzF4WBKv9CC.webp",
            "http://shal/public/uploads/all/UXKzPLez7k90yvLQiY4d2ofcir30PV5qyZ7BPPCZ.webp",
          ],
        },
        {
          imgUrl:
            "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
          title: "عبايات شانتون لف",
          desc: "مميزه بتصميم عصرى",
          color: ["grey", "black"],
          imgthubnail: [
            "http://shal/public/uploads/all/sV9LJKQJvrhqDReb5cGak2jPad5HiXzF4WBKv9CC.webp",
            "http://shal/public/uploads/all/UXKzPLez7k90yvLQiY4d2ofcir30PV5qyZ7BPPCZ.webp",
          ],
        },
        {
          imgUrl:
            "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
          title: "عبايات شانتون لف",
          desc: "مميزه بتصميم عصرى",
          color: ["grey", "black"],
          imgthubnail: [
            "http://shal/public/uploads/all/sV9LJKQJvrhqDReb5cGak2jPad5HiXzF4WBKv9CC.webp",
            "http://shal/public/uploads/all/UXKzPLez7k90yvLQiY4d2ofcir30PV5qyZ7BPPCZ.webp",
          ],
        },
      ],
      drawer: null,
      item: {},
      toggle: "",
      toggle_color: "",
    };
  },
  methods: {
    sendItem(ele) {
      this.item = ele;
    },
  },

  setup() {
    return {
      modules: [Autoplay],
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
  overflow: hidden;
  border: 0px 1px 1px 1px solid #fff;
  border-radius: 0 0 0 45px;
}
.v-navigation-drawer__scrim {
  width: 0;
}
.swiper-slide img {
  height: 100%;
  width: 100%;
  transition: 0.5s ease-in-out;
}
.swiper-slide img:hover {
  scale: 1.1;
}
.stock-state {
  position: absolute;
  top: 60px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.stock-state span {
  background-color: rgb(235 200 6);
  color: #000;
  font-size: 8px;
  font-weight: bolder;
  padding: 3px 18px;
  border-radius: 0 0 0 15px;
}
.svg-contain {
  cursor: pointer;
  background-color: #fff;
  position: absolute;
  bottom: 28%;
  left: 15px;
  border-radius: 50%;
  border: 2px solid #ddd;
  z-index: 5;
}
svg {
  fill: #777;
  width: 20px;
  height: 20px;
}
.imgdese {
  border-radius: 0 0 0 45px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.card-title {
  font-weight: 900;
  font-size: 21px;
  margin: 0;
  width: 100%;
  padding: 0 0px 5px;
  color: #000;
}
.card-desc {
  margin: 0;
  padding: 5px 0px 10px;
  font-weight: 600;
  font-size: 15px;
  color: #000;
  margin-bottom: 15px;
}
.price span {
  color: #ed48ff;
  font-size: 21px;
  font-weight: bolder;
  margin-left: 10px;
}
.price del {
  text-decoration-color: #00deff;
  font-weight: bolder;
  opacity: 0.9;
}
.card-btn {
  width: fit-content;
  padding: 0 1px;
}
.card-btn button {
  background-color: #fff;
  padding: 5px 15px;
  border-radius: 0px 0px 0px 15px;
}
</style>
