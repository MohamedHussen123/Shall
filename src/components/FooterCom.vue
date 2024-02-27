<template>
  <!-- color:#ed48ff -->
  <div class="container-fluid px-0">
    <div class="container px-md-5 px-sm-1">
      <h2>
        أراء

        <strong> العملاء </strong>
      </h2>
      <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :centeredSlides="false"
        :autoplay="{
          delay: 1500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :loop="true"
        :navigation="false"
        :modules="modules"
        class="mySwiper px-1 px-sm-5"
        :breakpoints="{
          '0': {
            slidesPerView: 1,
          },
          '580': {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          '767': {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          '1124': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          '1224': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          '1424': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }"
      >
        <swiper-slide
          class="mySwiperSlide py-3"
          v-for="n in dateForSlider"
          :key="n"
        >
          <div class="card_ position-relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
              />
            </svg>
            <div class="card-contan">
              <div class="image">
                <img
                  src="../assets/JXnOg1eIcVcwk92sV455SSTgbzz9EDoDVz3U6uMf.png"
                  alt=""
                />
              </div>
              <div class="review px-3 d-flex flex-column">
                <div>
                  <p style="" class="m-0 font-weight-bolder">سمر الاسمري</p>
                  <p class="m-0">التقييم</p>
                  <v-rating
                    class="ma-0 pa-0"
                    hover
                    color="#ed48ff"
                    density="combact"
                    :length="5"
                    size="x-small"
                    :model-value="5"
                    active-color="#ed48ff"
                  />
                  <p class="m-0 p-0" style="font-size: 14px">
                    غسلتها بالماء الساخن تتحمل الحرارة وسهله في الكوي.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="justify-space-between mt-5"></div>
      <div class="row feature d-flex justify-content-around">
        <div class="col-md-3 col-sm-6 p-0">
          <div class="w-100 d-flex align-center">
            <div class="features-image p-0">
              <img
                class=""
                src="../assets/6Fo1fcm8zVnmDc1tEIEH5HCS9GywjkpLcom6wgQb.svg"
                alt=""
              />
            </div>
            <div class="desc p-0">
              <p class="m-0 p-0">وسائل دفع متعددة</p>
              <p class="m-0 p-0">جميع وسائل الدفع متوفرة</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 p-0">
          <div class="icons w-100 d-flex align-center">
            <div class="features-image p-0">
              <img
                class=""
                src="../assets/630FvmvqDuhcYpWCshDXV8AgZJyjRBOdQLgXebLk.svg"
                alt=""
              />
            </div>
            <div class="desc p-0">
              <p class="m-0 p-0">وسائل دفع متعددة</p>
              <p class="m-0 p-0">جميع وسائل الدفع متوفرة</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 p-0">
          <div class="icons w-100 d-flex align-center">
            <div class="features-image p-0">
              <img
                class=""
                src="../assets/QpmdkyVnUSVXSrt5pUhBG44SBeRMs9KTksuKG0G0.svg"
                alt=""
              />
            </div>
            <div class="desc p-0">
              <p class="m-0 p-0">وسائل دفع متعددة</p>
              <p class="m-0 p-0">جميع وسائل الدفع متوفرة</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 p-0">
          <div class="icons w-100 d-flex align-center">
            <div class="features-image p-0">
              <img
                class=""
                src="../assets/KbcSfINV9hqWEPM0mAD9nYmFpCQFwXyImuM5LjO5.svg"
                alt=""
              />
            </div>
            <div class="desc p-0">
              <p class="m-0 p-0">وسائل دفع متعددة</p>
              <p class="m-0 p-0">جميع وسائل الدفع متوفرة</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sections-between-space"></div>
    <div class="footer" style="background-color: #282828">
      <div class="container py-5">
        <div class="row">
          <div class="col-md-2">
            <h5
              style="font-size: 14px"
              class="fw-bolder text-capitalize text-white"
            >
              تابعينا
            </h5>
            <div class="social-icons d-flex gap-2 mt-3">
              <a href="#">
                <b>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                    <path
                      d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"
                    />
                  </svg>
                </b>
              </a>
              <a href="#">
                <b>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                    <path
                      d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"
                    />
                  </svg>
                </b>
              </a>
              <a href="#">
                <b>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                    <path
                      d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                    />
                  </svg>
                </b>
              </a>
              <a href="#">
                <b>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                    <path
                      d="M496.9 366.6c-3.4-9.2-9.8-14.1-17.1-18.2-1.4-.8-2.6-1.5-3.7-1.9-2.2-1.1-4.4-2.2-6.6-3.4-22.8-12.1-40.6-27.3-53-45.4a102.9 102.9 0 0 1 -9.1-16.1c-1.1-3-1-4.7-.2-6.3a10.2 10.2 0 0 1 2.9-3c3.9-2.6 8-5.2 10.7-7 4.9-3.2 8.8-5.7 11.2-7.4 9.4-6.5 15.9-13.5 20-21.3a42.4 42.4 0 0 0 2.1-35.2c-6.2-16.3-21.6-26.4-40.3-26.4a55.5 55.5 0 0 0 -11.7 1.2c-1 .2-2.1 .5-3.1 .7 .2-11.2-.1-22.9-1.1-34.5-3.5-40.8-17.8-62.1-32.7-79.2A130.2 130.2 0 0 0 332.1 36.4C309.5 23.5 283.9 17 256 17S202.6 23.5 180 36.4a129.7 129.7 0 0 0 -33.3 26.8c-14.9 17-29.2 38.4-32.7 79.2-1 11.6-1.2 23.4-1.1 34.5-1-.3-2-.5-3.1-.7a55.5 55.5 0 0 0 -11.7-1.2c-18.7 0-34.1 10.1-40.3 26.4a42.4 42.4 0 0 0 2 35.2c4.1 7.8 10.7 14.7 20 21.3 2.5 1.7 6.4 4.2 11.2 7.4 2.6 1.7 6.5 4.2 10.3 6.7a11.1 11.1 0 0 1 3.3 3.3c.8 1.6 .8 3.4-.4 6.6a102 102 0 0 1 -8.9 15.8c-12.1 17.7-29.4 32.6-51.4 44.6C32.4 348.6 20.2 352.8 15.1 366.7c-3.9 10.5-1.3 22.5 8.5 32.6a49.1 49.1 0 0 0 12.4 9.4 134.3 134.3 0 0 0 30.3 12.1 20 20 0 0 1 6.1 2.7c3.6 3.1 3.1 7.9 7.8 14.8a34.5 34.5 0 0 0 9 9.1c10 6.9 21.3 7.4 33.2 7.8 10.8 .4 23 .9 36.9 5.5 5.8 1.9 11.8 5.6 18.7 9.9C194.8 481 217.7 495 256 495s61.3-14.1 78.1-24.4c6.9-4.2 12.9-7.9 18.5-9.8 13.9-4.6 26.2-5.1 36.9-5.5 11.9-.5 23.2-.9 33.2-7.8a34.6 34.6 0 0 0 10.2-11.2c3.4-5.8 3.3-9.9 6.6-12.8a19 19 0 0 1 5.8-2.6A134.9 134.9 0 0 0 476 408.7a48.3 48.3 0 0 0 13-10.2l.1-.1C498.4 388.5 500.7 376.9 496.9 366.6zm-34 18.3c-20.7 11.5-34.5 10.2-45.3 17.1-9.1 5.9-3.7 18.5-10.3 23.1-8.1 5.6-32.2-.4-63.2 9.9-25.6 8.5-42 32.8-88 32.8s-62-24.3-88.1-32.9c-31-10.3-55.1-4.2-63.2-9.9-6.6-4.6-1.2-17.2-10.3-23.1-10.7-6.9-24.5-5.7-45.3-17.1-13.2-7.3-5.7-11.8-1.3-13.9 75.1-36.4 87.1-92.6 87.7-96.7 .6-5 1.4-9-4.2-14.1-5.4-5-29.2-19.7-35.8-24.3-10.9-7.6-15.7-15.3-12.2-24.6 2.5-6.5 8.5-8.9 14.9-8.9a27.6 27.6 0 0 1 6 .7c12 2.6 23.7 8.6 30.4 10.2a10.7 10.7 0 0 0 2.5 .3c3.6 0 4.9-1.8 4.6-5.9-.8-13.1-2.6-38.7-.6-62.6 2.8-32.9 13.4-49.2 26-63.6 6.1-6.9 34.5-37 88.9-37s82.9 29.9 88.9 36.8c12.6 14.4 23.2 30.7 26 63.6 2.1 23.9 .3 49.5-.6 62.6-.3 4.3 1 5.9 4.6 5.9a10.6 10.6 0 0 0 2.5-.3c6.7-1.6 18.4-7.6 30.4-10.2a27.6 27.6 0 0 1 6-.7c6.4 0 12.4 2.5 14.9 8.9 3.5 9.4-1.2 17-12.2 24.6-6.6 4.6-30.4 19.3-35.8 24.3-5.6 5.1-4.8 9.1-4.2 14.1 .5 4.2 12.5 60.4 87.7 96.7C468.6 373 476.1 377.5 462.9 384.9z"
                    />
                  </svg>
                </b>
              </a>
            </div>
          </div>
          <div class="col-md-5 our-opinian">
            <h5 class="text-white fw-bolder" style="font-size: 14px">
              رؤيتنا..
            </h5>
            <p class="text-white">
              نؤمن أن كل امرأة تحمل جمالًا فريدًا يستحق الاحتفاء. هذه هي القوة
              التي تحركنا في شال من خلال تقديم عبايات مصممة بحرفية عالية
              وبتصاميم فريدة، نسعى لأن تكوني ليس فقط جميلة، ولكن الأجمل. مع شال،
              ليس فقط ترتدين عباية، بل تحتضنين جمالك الداخلي وتبرزينه للعالم
            </p>
          </div>
          <div class="col-md-4 subscribe">
            <h5 class="text-white fw-bolder" style="font-size: 14px">
              اشتركي معنا ليصلك كل جديد..
            </h5>
            <form class="w-100 d-flex align-start mt-2">
              <input
                type="email"
                placeholder="أدخلي عنوان البريد الإلكتروني"
                name="user_email"
                id="email"
              />
              <button type="submit">الإشتراك</button>
            </form>
          </div>
          <div class="col-md-1"></div>
        </div>
      </div>
      <section class="py-5" style="background-color: #191919">
        <div class="container">
          <div class="row">
            <div class="col-md-6 d-flex gap-1 align-center pl-8 helpfull-links">
              <router-link to="/commomQuestion"> الأسئلة الشائعة </router-link>
              <span>|</span>
              <router-link to="/refundpolicy"> سياسه الارجاع </router-link>
              <span>|</span>
              <router-link to="/contact-us"> تواصل معنا </router-link>
              <span>|</span>
              <router-link to="/contact-us"> طرق الدفع </router-link>
              <span>|</span>
              <router-link to="/whoWeare"> من نحن </router-link>
              <span>|</span>
              <a href="#"> خارطه الموقع </a>
            </div>
            <div class="col-md-6 d-flex align-center justify-center methods">
              <div>
                <h5 class="text-white">طرق الدفع</h5>
                <img
                  src="../assets/lh1yfZX04XLNNL1tSKDQMz1blBE3auWpN1Cxl2mY.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="copy-rights py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6 d-flex align-center gap-5">
              <img
                style="width: 100px"
                src="../assets/salogos.org.png"
                alt=""
              />
              <p class="text-white fw-bolder m-0" style="font-size: 10px">
                <a href="" class="text-white" style="text-decoration: none">
                  جميع الحقوق محفوظة لشال .. copyright @ 2020 shal.store All
                  rights reserved
                </a>
              </p>
            </div>
            <div
              class="col-md-6 text-white d-flex align-center justify-content-center"
            >
              <a
                href=""
                target="blank"
                class="text-white fw-bolder"
                style="text-decoration: none; font-size: 10px"
              >
                <span> شهادة ضريبة القيمة المضافة </span>
                <span>|</span>
                <span> رقم التسجيل الضريبي: 302252702100003 </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!--  end of features -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./style.css";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

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
.swiper {
  width: 100%;
  height: 220px;
}
.swiper .swiper-slide svg {
  width: 25px;
  fill: #ed48ff;
  position: absolute;
  top: -15px;
  left: 0;
}

.card_ {
  background-color: #fff;

  border: solid 0.1px rgb(213, 213, 213) !important;
  padding: 5px 5px 15px;
  border-radius: 0px 0px 0px 55px;
}
.card-contan {
  display: flex;
  align-items: start;
  justify-content: start;
}
.card-contan .image img {
  width: 50px;
}
.review p:not(:last-child) {
  font-size: 13px;
  font-weight: bold;
}
.review .last-child {
  font-size: 12px;
}
.features-image img {
  width: 90px;
  height: 90px;
}
.feature .col-md-3 .desc p {
  font-size: 11px;
  font-weight: 900;
}

.footer .container .row .col-md-2 .social-icons a {
  text-decoration: none;
  margin-left: 10px;
}
.footer .container .row .col-md-2 .social-icons a b svg {
  width: 13px;
  fill: white;
}
.footer .container .row .our-opinian h5 {
  font-size: 15px;
  font-weight: bolder;
}
.footer .container .row .our-opinian p {
  font-size: 12px;
}
.footer .container .row .subscribe h5 {
  font-size: 15px;
  font-weight: bolder;
}
.footer .container .row .subscribe form input {
  font-size: 12px;
  width: 80%;
  background-color: #f6f6f6;
  padding: 7.5px 2px;
  border: none;
  outline: none;
}
.footer .container .row .subscribe form button {
  color: white;
  font-weight: bolder;
  padding: 5px 8px 10px 25px;
  border-radius: 0px 0px 0px 20px;
  font-size: 12px;
  border: unset;
  background: linear-gradient(to right, #ed48ff, #00deff);
}
.footer section .container .helpfull-links {
  display: flex;
  align-items: center;
}
.footer section .container .helpfull-links a {
  text-decoration: none;
  color: #fff;
  font-weight: bolder;
  font-size: 10px;
  width: 100%;
  margin: 0 4px;
  text-align: center;
}
.footer section .container .helpfull-links span {
  font-weight: bolder;
  font-size: 14px;
  color: #fff !important;
}
.footer section .container .helpfull-links a span:last-of-type {
  margin-right: 5px;
  font-weight: bolder;
}
.footer section .container .methods img {
  width: 300px;
}
.footer section .container .methods h5 {
  font-size: 10px;
  font-weight: bolder;
}
.footer .copy-rights .container .row .col-md-6 {
}
.v-icon--size-default {
  font-size: 14px !important;
}
/* mdi-star mdi v-icon notranslate v-theme--light v-icon--size-default */
</style>
