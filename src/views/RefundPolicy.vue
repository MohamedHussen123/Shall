<template>
  <div class="parent">
    <nav-bar-wground></nav-bar-wground>
    <div class="container mt-7 px-5">
      <div class="row px-12 mt-5">
        <div class="col-md-12 pa-0 links mb-11">
          <div class="">
            <span class="ml-3">
              <router-link
                to="/"
                class="text-decoration-none fw-bold"
                style="opacity: 0.5; color: #000; font-size: 13px"
                >الرئيسية</router-link
              >
            </span>
            <span class="ml-2" style="color: #6c757d"> |</span>
            <span style="font-size: 13px" class="fw-bolder"
              >سياسة الإرجاع
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid position-relative">
      <img class="back-img" src="../assets/CategoryPatren.svg" alt="" />
      <div class="container px-15 mb-15">
        <div class="row">
          <div class="col-md-12 mb-5">
            <h2
              style="font-size: 19px; font-weight: bolder; margin-bottom: 15px"
            >
              سياسة الإرجاع
            </h2>
            <p style="font-size: 17px; font-weight: 500">
              في متجر شال، نعلم أن اختيار العباية المثالية قد يكون تحديا ا،
              ولهذا نقدم سياسة مرنة لإرجاع العبايات
            </p>
          </div>
        </div>
        <div class="row py-10 my-5 px-7 bg-white desc">
          <div class="col-md-12">
            <p>1- الاسترجاع يكون خلال 3 أيام بعد استلام الطلب</p>
            <p>
              2- أن يكون المنتج بحالته الأصلية ولم يتم استخدامه، وعليه كافة
              البطاقات الملصقة غير منزوعة وغير متضررة وأن تكون مغلفة بالغلاف
              الأصلي، ويستثنى من ذلك الهدايا المرفقة مع الطلب فلا يلزم إرجاعها
            </p>
            <p>
              3 فـــي حـــال كان الطلـــب خطأ عن طريق العميلة في المقاس او نوع
              المنتج، فتتحمل العميلة قيمة الشـــحن كامله، أما في حال كان الخطأ
              من شال، فتتحمل شال كامل تكاليف الشحن
            </p>
            <p>
              4- المنتجات التي لا يمكن استبدالها أو استرجاعها (النقاب ، الطرح ،
              الكمامات)
            </p>
            <p>
              5- بعد اصدار البوليصة من قبل شال على العميلة تسليم المنتج لشركة
              الشحن المسجلة في البوليصة
            </p>
            <p>
              6- في حال كان هناك خصم على المنتج الثاني وقمتي بشـــراء المنتج
              الأول، يمكنكي اســـترجاع المنتج ، ولكن ستخســـري قيمة الخصم ويجب
              دفع الفرق
            </p>
            <p>
              7- الطلبات المدفوعة بقسيمة شرائية يمكن استبدالها فقط كقسيمه، ولا
              يمكن استرجاع المبلغ
            </p>
            <p>
              8- الطلبات ( طلب مســـبق يحتاج إلى 5 أيام للتفصيل ) تعني أن هذا
              المنتج ليس متواجد في المخزون ويحتاج إلى 5 أيام عمل لتفصيله ثم بعد
              ذلك تسليمه لشركة الشحن لتسليمه للعميل خلال 5 أيام عمل أخرى كحد
              أقصى
            </p>
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
import PannerWthText from "@/components/PannerWthText";
</script>

<style scoped>
.container-fluid .container .desc .col-md-12 p {
  font-size: 16px;
  margin-bottom: 20px;
  opacity: 0.9;
  font-weight: 600;
}
.container-fluid .container .desc .col-md-12 p span {
  margin-left: 8px;
  font-weight: bolder;
}
.container-fluid .back-img {
  position: absolute;
  z-index: -1;
  top: 2%;
}
</style>
