<template>
  <div class="parent">
    <nav-bar-wground></nav-bar-wground>
    <div class="container my-9">
      <div class="row px-13">
        <div class="col-md-6">
          <div class="breadcrumb">
            <span class="fw-bold ml-2">
              <router-link to="/"> الرئيسية </router-link>
            </span>
            <span class="ml-1" style="color: gray">|</span>
            <span class="fw-bolder">
              <a href=""> منتجات</a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid my-10 position-relative">
      <img class="back-img" src="../assets/CategoryPatren.svg" alt="" />
      <div class="container px-15 header">
        <div class="row">
          <div class="col-md-12 mb-5">
            <h4 class="fw-bold mb-3">تشكيلة الصيف:</h4>
            <h4 class="fw-bold">
              أناقة صيفية لا مثيل لها مع تشكيلة عبايات شال الصيفية
            </h4>
          </div>
          <div class="col-md-10">
            <p style="font-weight: 600">
              اســـتمتعي بأحدث تشـــكيلة عبايات صيفية من شـــال تجمع تشـــكيلتنا
              بين الأناقة والراحة لتقديم عبايات صيفية خفيفة وناعمة تناســـب جو
              الصيف ً لتوفير أقصى درجات الراحة والأناقة في الطقس الحار الدافئ.
              تسوقي الآن من تشكيلة الصيف واستمتعي بعبايات مصممة خصيص
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-10">
      <div class="row">
        <!-- <button @click="toggleFilter">منقى</button> -->
        <div class="col-md-3">
          <v-expansion-panels v-model="panel" :readonly="readonly" multiple>
            <v-expansion-panel class="pa-0" elevation="0">
              <v-expansion-panel-title
                color="#fff"
                expand-icon="mdi-plus"
                collapse-icon="mdi-minus"
                >الفئة</v-expansion-panel-title
              >
              <v-expansion-panel-text class="">
                <div class="div" v-for="n in 4" :key="n">
                  <a href="#" class="">
                    <input type="checkbox" id="category-1" value="جلابيات" />
                    <span>الجلابيات</span>
                  </a>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel elevation="0">
              <v-expansion-panel-title
                expand-icon="mdi-plus"
                collapse-icon="mdi-minus"
                >التصميم
              </v-expansion-panel-title>
              <v-expansion-panel-text class="design">
                <ul>
                  <li v-for="(n, i) in 15" :key="i">
                    <a href="#">
                      <input type="radio" name="" id="" aria-checked="true" />
                      بشت
                    </a>
                  </li>
                </ul>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel elevation="0">
              <v-expansion-panel-title
                expand-icon="mdi-plus"
                collapse-icon="mdi-minus"
                >السعر</v-expansion-panel-title
              >
              <v-expansion-panel-text>
                <v-range-slider></v-range-slider>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel elevation="0">
              <v-expansion-panel-title
                expand-icon="mdi-plus"
                collapse-icon="mdi-minus"
                >المناسبه</v-expansion-panel-title
              >
              <v-expansion-panel-text>
                <ul>
                  <li v-for="(n, i) in 5" :key="i">
                    <a href="#">
                      <input type="radio" name="" id="" aria-checked="true" />
                      رسميه
                    </a>
                  </li>
                </ul>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <div class="col-md-9 product">
          <div class="row">
            <div class="col-md-4 mb-10" v-for="n in 8" :key="n">
              <div class="card position-relative overflow-hidden">
                <div class="store-state position-absolute">
                  <span>مخرون قليل</span>
                </div>
                <div
                  @click="showproductDetal"
                  class="card-header pa-0 overflow-hidden"
                >
                  <img
                    class="w-100"
                    src="../assets/od54Tb5Qr7ykPoyEnPoKj5f24nglwmNwaBCwGh5I.webp"
                    alt=""
                  />
                </div>
                <div class="card-body bg-white">
                  <h5>عبايه شانتون لف</h5>
                  <h4>مميزه بتصميم عصرى</h4>
                  <div class="price d-flex align-center gap-3 mt-3">
                    <p class="newPrice">470 رس</p>
                    <p class="oldPrice">670 رس</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <panner-wth-text></panner-wth-text>

    <footer-com></footer-com>
  </div>
</template>

<script setup>
import NavBarWground from "@/components/NavBarWground.vue";
import FooterCom from "@/components/FooterCom.vue";
import PannerWthText from "@/components/PannerWthText.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const panel = ref([0]);

const router = useRouter();
const showproductDetal = () => {
  router.push("/ProductDetails");
};
// const filter = ref(true);

// const toggleFilter = () => {
//   filter.value = !filter.value;
// };
</script>

<style scoped>
.breadcrumb span a {
  color: #000;
  text-decoration: none;
}
.breadcrumb span {
  font-size: 13px;
  font-weight: bolder;
}
.parent .container-fluid .back-img {
  position: absolute;
  z-index: -1;
  top: 25%;
  opacity: 0.9;
}
.v-expansion-panel--active
  > .v-expansion-panel-title:not(.v-expansion-panel-title--static) {
  min-height: 15px !important;
}
.v-expansion-panel-text a {
  text-decoration: none;
  display: block;
  color: #999;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}
ul {
  list-style: none;
  padding: 0;
}
ul li {
  margin-bottom: 5px;
}
.product .row .col-md-4 .card {
  border: 0.5px solid #eee;
  border-radius: 0 0 0 45px !important;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 3px 3px !important;
}
.product .row .col-md-4 .card .card-body {
  border-radius: 0 0 0 45px !important;
}
.card-header img {
  transition: 0.5s;
  cursor: pointer;
}
.card-header img:hover {
  scale: 1.2;
}
.store-state {
  top: 5%;
}
.store-state span {
  background-color: rgb(235 200 6);
  color: #000;
  font-size: 8px;
  font-weight: bolder;
  padding: 3px 18px;
  border-radius: 0 0 0 15px;
}
.card-body {
  padding: 10px 15px;
}
.card-body h5 {
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0;
}
.card-body h4 {
  margin: 5px 0;
  font-size: 16px;
  font-weight: bold;
}
.price .newPrice {
  color: #ed48ff;
  font-weight: bolder;
  font-size: 16px;
}
.price .oldPrice {
  text-decoration: line-through;
  text-decoration-color: #00deff;
  font-weight: bolder;
  font-size: 16px;
}

.container .row .head h4 {
  font-weight: bolder;
}
.container .row .artical p {
  font-size: 18px;
  width: 95%;
}
.container .row .artical p span {
  font-weight: bold;
  margin-left: 5px;
}
</style>
