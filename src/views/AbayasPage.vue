<template>
  <div>
    <NavBarWground />
    <div class="container px-7">
      <div class="row mt-7 px-8">
        <div class="col-md-6">
          <div class="breadcrumb d-flex align-center">
            <span class="fw-bold ml-2" style="font-size: 14px">
              <router-link to="/"> الرئيسية </router-link>
            </span>
            <span class="ml-1" style="color: gray">|</span>
            <span class="fw-bolder" style="font-size: 14px; cursor: pointer">
              <router-link to="/all_Product">الجلابيات</router-link>
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
        <div
          class="col-md-6 d-flex flex-column align-items-center justify-content-center mt-5"
        >
          <div
            class="title h5 fs-25 fw-700 text-dark mb-0 text-capitalize mb-3 w-100"
          >
            <h4>جلابيات شال:</h4>
            <h4>الخيار الأمثل لإطلالة أنيقة</h4>
            <h4><br /></h4>
            <h5>
              كنتِ تبحثين عن التصاميم الكلاسيكية أو تفضلين العبايـــات
              العصريـــة والمبتكرة، فإننا نلبـــي احتياجاتك. في"متجر شـــال"
              نحرص دائماً على تجديد تشـــكيلتنا لتلبية احتياجات عملائنا المختلفة
            </h5>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-6 h5 fs-25 text-dark mb-3 text-capitalize">
          <h4>
            <b>نحـــن نولي&nbsp;</b> اهتمام كبيراً بالجودة، ونضمن أن منتجاتنا
            تلبي توقعات عملائنا. اعثـــري علـــى العباية المثاليـــة لك واحصلي
            علـــى إطلالة فريـــدة ومميزة مع "متجر شال"
          </h4>
        </div>
        <div class="col-md-6 h5 fs-25 text-dark mb-3 text-capitalize">
          <h4>
            "متجـــر شـــال" هـــو وجهتـــك الأمثـــل للعبايـــات الفخمة
            والتصاميـــم الفريدة. تســـوقي معنا اليوم لتجربة تســـوق استثنائية
          </h4>
        </div>
      </div>
      <div class="row mt-5">
        <div
          class="col-12 col-md-6 h5 fw-700 fs-30 text-dark mb-0 text-capitalize"
        >
          <h4>ما هي أفضل التشكيلات في الجلابيات</h4>
        </div>
      </div>
      <section class="row mt-5">
        <div class="col-md-3 section-from-db p-2 order1">
          <div class="title h5 fs-25 mb-2 fw-700 text-capitalize">
            الجلابيات
          </div>
        </div>
        <div class="col-md-9"></div>
      </section>
      <div class="row px-0 d-flex align-start my-5">
        <div class="col-md-8 text-sm-center px-0 text-md-right text-right">
          <BannerImage />
        </div>
        <div class="col-md-4 d-flex align-center">
          <text-banner></text-banner>
        </div>
      </div>

      <div class="row px-0 d-flex align-start my-5">
        <div class="col-md-4 d-flex align-center">
          <text-banner></text-banner>
        </div>
        <div class="col-md-8 text-sm-center px-0 text-md-right text-right">
          <BannerImage />
        </div>
      </div>
      <div>
        <p><br /></p>
      </div>
    </div>

    <section class="sections-between-space h-25"></section>

    <section class="container mt-5">
      <div class="row">
        <div class="col-md-6 p-1 d-flex flex-column">
          <div style="width: 80%" class="question h5 mb-6 text-capitalize">
            <b class="d-block mb-3">كيف يمكنني</b>
            تحديد مقاس العباية المناسب لي؟
          </div>
          <h5>
            اســـتخدم دليـــل المقاســـات يحتـــوي موقعنـــا علـــى دليل
            المقاســـات يمكنـــك الرجوع إليـــه. توجه إلى صفحـــة المنتج وابحث
            عن الدليل المرفق
          </h5>
        </div>
        <div class="col-md-6 p-1 d-flex flex-column">
          <div style="width: 80%" class="question h5 mb-6 text-capitalize">
            <b class="d-block mb-3"> هل هناك قواعد </b>
            معينة لعملية استرجاع العباية؟
          </div>
          <h5>
            نحن نقدم سياسة استرجاع تتيح لكم استرداد العباية إذا لم تكون ملائمة
            أو ُرجى قراءة سياسة الاستبدال والاسترجاع على موقعنا تناسب
            احتياجاتكم. ي لمعرفة التفاصيل والإجراءات المطلوبة
          </h5>
        </div>
      </div>
    </section>

    <FooterCom />
  </div>
</template>

<script setup>
import NavBarWground from "@/components/NavBarWground";
import FooterCom from "@/components/FooterCom.vue";
import BannerImage from "@/components/banner/BannerImage";
import TextBanner from "@/components/banner/TextBanner";
</script>

<style scoped>
.breadcrumb span a {
  color: #000;
  text-decoration: none;
}
.question {
  font-size: 25px;
  color: #000;
  font-weight: 500;
}
section h5 {
  color: #000;
  font-weight: 400;
  width: 80%;
  font-size: 19px;
}
</style>
