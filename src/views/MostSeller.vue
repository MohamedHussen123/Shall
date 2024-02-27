<template>
  <div>
    <nav-bar-wground></nav-bar-wground>
    <div class="container mb-5">
      <div class="row mt-7 px-8">
        <div class="col-md-6">
          <div class="breadcrumb">
            <span class="fw-bold ml-2">
              <router-link to="/"> الرئيسية </router-link>
            </span>
            <span class="ml-1" style="color: gray">|</span>
            <span class="fw-bolder">
              <a href="">الاكثر مبيعا</a>
            </span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mt-5 category-img px-5 py-3 position-relative">
          <img
            style="bottom: 15px; left: 50px"
            width="200%"
            class="position-absolute"
            src="../assets/CategoryPatren.svg"
            alt=""
          />
          <img
            class="w-100"
            src="../assets/oCIQETQL7QJP0oLAl662UsKkRoGnQ0JGIyVT8aol.png"
            alt=""
          />
        </div>
        <div class="col-md-1"></div>
        <div
          class="col-md-5 d-flex flex-column align-items-center justify-content-center mt-5"
        >
          <div class="title h5 fs-25 fw-700 mb-0 text-capitalize mb-3 w-100">
            <h4 class="fw-bolder">العبايات الأكثر مبيعا ً في متجر شال:</h4>
            <h4 class="fw-bold">عبايات أنيقة وفاخرة تحظى بإعجاب الجميع</h4>
            <h4 class="mb-5"></h4>
            <h5
              class="fw-normal w-75"
              style="line-height: 1.5; opacity: 0.9; font-size: 19px"
            >
              اكتشـــفي مجموعتنا المبهرة والفاخرة من العبايات التي ً ِ . متجر
              شـــال يقدم لك تفضلها الســـيدات وتختارهـــا دائما تشـــكيلة
              رائعـــة ومميـــزة مـــن العبايـــات التي حـــازت على إعجاب
              عميلاتنا الكريمات ونالت رضاهن
            </h5>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-6">
          <p style="font-size: 18px">
            <span class="fw-bolder"> هـــذه المجموعة</span> تجمـــع بين
            الجـــودة العالية والتصاميم المبتكرة والأســـعار ً وتمتعي بإطلالة
            المنافســـة. اختاري من بين موديلات العبايات الأكثر مبيعا ِ فريدة
            وأنيقة تليق بك في جميع المناسبات
          </p>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-5">
          <p style="font-size: 18px">
            <span class="fw-bolder"
              >شـــال يضمن لـــك تجربة تســـوق ممتعـــة ومرضية</span
            >
            من ِ خـــلال تقديـــم أفضـــل العبايـــات التـــي تلبـــي
            احتياجاتـــك ِ وتوقعاتك. استمتعي بالتسوق الآن واكتشفي العبايات ً
            لدينا الأكثر شعبية وطلبا
          </p>
        </div>
      </div>
      <div class="row px-0 d-flex align-start my-5">
        <div class="col-md-3 d-flex align-center">
          <div class="text px-3 w-100">
            <h3 class="fs-6 font-weight-bold" style="opacity: 0.5">
              الاكثر <span>مبيعا:</span>
            </h3>
            <h4 class="fs-4 fw-bolder" style="opacity: 0.7">عبايات سوداء</h4>
            <h5 class="w-100" style="font-size: 16px; line-height: 2">
              اكتشـــفي روعـــة العبايات الســـوداء ً من شـــال، التي تجمع
              الأكثـــر مبيعـــا بيـــن البســـاطة والأناقـــة! مع شـــال،
              الأســـود يصبح لون الجاذبيـــة والتألق في كل مناسبة
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
      <div class="row px-0 d-flex align-start my-5">
        <div class="col-md-9 text-sm-center px-0 text-md-right text-right">
          <BannerImage />
        </div>
        <div class="col-md-3 d-flex align-center">
          <div class="text px-3 w-100">
            <h3 class="fs-6 font-weight-bold" style="opacity: 0.5">
              الاكثر <span>مبيعا:</span>
            </h3>
            <h4 class="fs-4 fw-bolder" style="opacity: 0.7">عبايات سوداء</h4>
            <h5 class="w-100" style="font-size: 16px; line-height: 2">
              اكتشـــفي روعـــة العبايات الســـوداء ً من شـــال، التي تجمع
              الأكثـــر مبيعـــا بيـــن البســـاطة والأناقـــة! مع شـــال،
              الأســـود يصبح لون الجاذبيـــة والتألق في كل مناسبة
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
    <!-- <div class="container-fluid bg-white mt-10">
      <div class="container px-0">
        <div class="row d-flex align-center">
          <div class="col-md-4">
            <h4 style="font-size: 20px; opacity: 0.8">
              وكمان تقدؤى تاخديهم مع تمارا
            </h4>
            <h2
              style="
                font-size: 30px;
                font-weight: 800;
                opacity: 0.9;
                color: rgb(255, 0, 255);
              "
            >
              وتقسطيها على 4 دفعات !
            </h2>
          </div>
          <div class="col-md-6">
            <img
              class="w-100"
              src="../assets/oCIQETQL7QJP0oLAl662UsKkRoGnQ0JGIyVT8aol.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-15 px-10">
      <div class="row">
        <div class="col-md-5">
          <h3 style="font-weight: 600; opacity: 0.9">كيف يمكنني</h3>
          <h3 class="mb-5" style="font-weight: 700; opacity: 0.9">
            تحديد مقاس العباية المناسب لي؟
          </h3>
          <p style="line-height: 1.8; font-weight: 500">
            <span style="font-weight: bolder"
              >اســـتخدم دليـــل المقاســـات</span
            >
            يحتـــوي موقعنـــا علـــى دليل المقاســـات يمكنـــك الرجوع إليـــه.
            توجه إلى صفحـــة المنتج وابحث عن الدليل المرفق
          </p>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-5">
          <h3 style="font-weight: 600; opacity: 0.9">هل هناك قواعد</h3>
          <h3 class="mb-5" style="font-weight: 700; opacity: 0.9">
            معينة لعملية استرجاع العباية؟
          </h3>
          <p style="line-height: 1.8; font-weight: 500">
            نحن نقدم سياسة استرجاع تتيح لكم استرداد العباية إذا لم تكون ملائمة
            أو ُرجى قراءة سياسة الاستبدال والاسترجاع على موقعنا تناسب
            احتياجاتكم. ي لمعرفة التفاصيل والإجراءات المطلوبة
          </p>
        </div>
      </div>
    </div>
    <section class="space-between" style="height: 100px"></section> -->
    <PannerWthText />
    <footer-com></footer-com>
  </div>
</template>

<script setup>
import NavBarWground from "@/components/NavBarWground.vue";
import FooterCom from "@/components/FooterCom.vue";
import BannerImage from "@/components/banner/BannerImage.vue";
import PannerWthText from "@/components/PannerWthText.vue";
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
