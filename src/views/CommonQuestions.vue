<template>
  <div class="parent">
    <nav-bar-wground></nav-bar-wground>
    <div class="container mt-15 mb-16 px-5">
      <div class="row px-12 mt-5">
        <div class="col-md-12 links mb-11">
          <span class="ml-3">
            <router-link to="/" class="text-decoration-none text-dark"
              >الرئيسية</router-link
            >
          </span>
          <span class="ml-2" style="color: #6c757d"> |</span>
          <span class="fw-bolder">الأسئلة الشائعة</span>
        </div>
        <div class="col-md-12 mt-8">
          <h3 class="fw-bolder fs-3 mb-5">
            هل هناك قواعد معينة لعملية استرجاع العباية؟
          </h3>
          <h6 class="fw-bold fs-5 w-75" style="line-height: 1.5">
            نحن نقدم سياسة استرجاع تتيح لكم استرداد العباية إذا لم تكون ملائمة
            أو ُرجى قراءة سياسة الاستبدال والاسترجاع على موقعنا تناسب
            احتياجاتكم. ي لمعرفة التفاصيل والإجراءات المطلوبة
          </h6>
        </div>
      </div>
    </div>
    <footer-com></footer-com>
  </div>
</template>

<script setup>
import NavBarWground from "@/components/NavBarWground.vue";
import FooterCom from "@/components/FooterCom.vue";
</script>

<style lang="scss" scoped></style>
