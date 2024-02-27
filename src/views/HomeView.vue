<template>
  <div class="parent">
    <div
      class="header position-relative"
      style="height: 100vh; overflow: hidden"
    >
      <div class="overlay position-absolute">
        <p class="d-block">
          <span class="d-block"> {{ videoTxt }} </span>
          <span class="d-block"> {{ videoTxt_2 }} </span>
        </p>
      </div>
      <div
        class="video-wrap position-absolute"
        style="top: -18px; width: 100%; height: 100vh"
      >
        <video
          id="loopVideo"
          class=""
          style="width: 100%; height: 105%; object-fit: cover"
          autoplay
          loop
          muted
        >
          <source
            src="../assets/media/SHAL Store _ متجر شال.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <nav-bar></nav-bar>
    </div>
    <SliderComp />
    <cards-comp></cards-comp>
    <div class="container px-0 my-10" style="overflow-hidden">
      <div class="row px-0 d-flex align-start">
        <div class="col-md-8 text-sm-center px-0 text-md-right text-right">
          <BannerImage />
        </div>
        <div class="col-md-4 d-flex align-center">
          <text-banner></text-banner>
        </div>
      </div>
    </div>
    <cards-comp></cards-comp>
    <div class="container px-0 my-10" style="overflow-hidden">
      <div class="row px-0 d-flex align-start">
        <div class="col-md-8 text-sm-center px-0 text-md-right text-right">
          <BannerImage />
        </div>
        <div class="col-md-4 d-flex align-center">
          <text-banner></text-banner>
        </div>
      </div>
    </div>
    <cards-comp></cards-comp>
    <div class="container px-0 my-10" style="overflow-hidden">
      <div class="row px-0 d-flex align-start">
        <div class="col-md-8 text-sm-center px-0 text-md-right text-right">
          <BannerImage />
        </div>
        <div class="col-md-4 d-flex align-center">
          <text-banner></text-banner>
        </div>
      </div>
    </div>
    <FooterComp />
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import { ref } from "vue";
import SliderComp from "@/components/SliderComp.vue";
import CardsComp from "@/components/CardsComp.vue";
import TextBanner from "@/components/banner/TextBanner";
import BannerImage from "@/components/banner/BannerImage";
import FooterComp from "@/components/FooterCom.vue";
// import CardWithSlide from "@/components/CardWithSlide.vue";
let videoTxt = ref("كونى شال");
let videoTxt_2 = ref("كونى الأجمل");
console.log(videoTxt, videoTxt_2);

// const videoLoop = document.getElementById("loopVideo");
// console.log(videoLoop);
// videoLoop.play();
</script>

<style>
.parent {
  overflow: hidden;
}
.overlay {
  z-index: 80;
  top: 50%;
  right: 18%;
}
.overlay p span:first-child {
  color: #fff;
  font-size: 30px;
  font-weight: 500;
}
.overlay p span:last-child {
  color: #fff;
  font-size: 35px;
  font-weight: 900;
}
</style>
