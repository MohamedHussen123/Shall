<template>
  <div>
    <nav-bar-wground></nav-bar-wground>
    <div class="container my-8">
      <div class="row px-8">
        <div class="col-md-6">
          <div class="breadcrumb">
            <span class="fw-bold ml-2">
              <router-link to="/"> الرئيسية </router-link>
            </span>
            <span class="ml-1" style="color: gray">|</span>
            <span class="fw-bolder">
              <a href=""> العروض</a>
            </span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <img
            class="w-100"
            src="../assets/oCIQETQL7QJP0oLAl662UsKkRoGnQ0JGIyVT8aol.png"
            alt=""
          />
        </div>
        <div class="col-md-5 col-sm-6">
          <div class="header">
            <h4 style="font-size: 21px; font-weight: 700" class="mb-3">
              أفضل العروض للعبايات مع متجر شال
            </h4>
            <h4 style="font-size: 19px; font-weight: 600">
              جمال وأناقة العبايات بأسعار خيالية
            </h4>
          </div>
          <div class="desc my-6">
            <p style="font-weight: 600; line-height: 1.7">
              حيـــث الجـــودة والأناقـــة تجتمعـــان بأســـعار لا تقـــاوم.
              تصفحـــي مجموعتنـــا الرائعة من العبايـــات المتنوعة، من
              العبايـــات الســـوداء الكلاســـيكية إلـــى التصاميـــم الحديثة
              الفريدة.
            </p>
            <p style="font-weight: 600; line-height: 1.7" class="my-5">
              كل عبايـــة صممـــت بعنايـــة لتناســـب جميـــع الأذواق
              والمناســـبات، مـــع مراعـــاة الجـــودة العاليـــة والتفاصيـــل
              الدقيقة.
            </p>
            <h4
              style="
                font-size: 18px;
                color: rgb(255, 0, 255);
                font-weight: 800;
                line-height: 1.8;
              "
            >
              ســـارعي بالاســـتفادة مـــن عروضنـــا المميزة <br />
              واحصلي على عباية الأحلام بسعر العرض
            </h4>
          </div>
        </div>
        <div class="col-md-1 d-sm-none"></div>
      </div>
    </div>

    <div class="container-fluid position-relative">
      <img class="back-img" src="../assets/CategoryPatren.svg" alt="" />
      <div class="container">
        <div class="row px-0 d-flex align-start my-15">
          <div class="col-md-3 d-flex align-center">
            <div class="text px-3 w-100">
              <h3 class="fs-5">العروض</h3>
              <h3 class="fs-4" style="opacity: 0.9">
                عبايات <span class="fw-bolder">السفر</span>
              </h3>
              <h5 class="w-100" style="font-size: 16px; line-height: 2">
                إذا كنـــت تخططيـــن للســـفر، فنحـــن نقدم تصاميم عبايات مثالية
                للسفر، تمنحك الأناقة والراحة أثناء تنقلاتك
              </h5>
              <div class="mt-5">
                <a href="#" class="showAll text-white px-10 py-1">
                  مشاهدة الكل
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-9 text-sm-center px-0 text-md-right text-right">
            <BannerImage />
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid position-relative">
      <img class="back-img" src="../assets/CategoryPatren.svg" alt="" />
      <div class="container">
        <div class="row px-0 d-flex align-start my-15">
          <div class="col-md-9 text-sm-center px-0 text-md-right text-right">
            <BannerImage />
          </div>
          <div class="col-md-3 d-flex align-center">
            <div class="text px-3 w-100">
              <h3 class="fs-5">العروض</h3>
              <h3 class="fs-4" style="opacity: 0.9">
                عبايات <span class="fw-bolder">كلوش</span>
              </h3>
              <h5 class="w-100" style="font-size: 16px; line-height: 2">
                إذا كنـــت تخططيـــن للســـفر، فنحـــن نقدم تصاميم عبايات مثالية
                للسفر، تمنحك الأناقة والراحة أثناء تنقلاتك
              </h5>
              <div class="mt-5">
                <a href="#" class="showAll text-white px-10 py-1">
                  مشاهدة الكل
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PannerWthText />
    <footer-com></footer-com>
  </div>
</template>

<script setup>
import NavBarWground from "@/components/NavBarWground";
import FooterCom from "@/components/FooterCom.vue";
import PannerWthText from "@/components/PannerWthText.vue";
import BannerImage from "@/components/banner/BannerImage";
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
.back-img {
  position: absolute;
  z-index: -1;
  width: 100%;
  top: 8%;
}
.showAll {
  background-color: #2d2d2ded;
  text-decoration: none;
  border-radius: 0 0 0 18px;
  font-size: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  cursor: pointer;
  font-weight: 400;
}
</style>
