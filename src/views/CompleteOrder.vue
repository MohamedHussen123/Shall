<template>
  <div class="parent">
    <nav-bar-wground></nav-bar-wground>
    <div class="container-fluid mt-10 mb-10">
      <img
        style="position: absolute; z-index: -1; top: 39%"
        src="../assets/CategoryPatren.svg"
        alt=""
      />
    </div>
    <div class="container px-5">
      <div class="row px-11">
        <div class="col-md-12 links mb-11">
          <span class="ml-3">
            <router-link to="/" class="text-decoration-none text-dark"
              >الرئيسية</router-link
            >
          </span>
          <span class="ml-2" style="color: #6c757d"> |</span>
          <span class="fw-bolder">تتبع طلبك</span>
        </div>
        <div class="col-md-12 mb-5">
          <h4 class="fw-bolder fs-3 mb-4">إدارة طلباتك أصبحت أسهل مع شال</h4>
          <h6 class="fs-6 text-capitalize">
            تســـهل شـــال عليكِ إدارة طلبات العبايات بكل ســـهولة وفعالية.
            يمكنكِ الآن متابعة حالة طلبك في الوقت الفعلي، والتحقق من تفاصيل
            الطلب وتاريخ التسليم المتوقع، كل ذلك من خلال صفحة إدارة الطلبات
            الخاصة بنا
          </h6>
        </div>
      </div>
      <div class="row px-11">
        <div class="col-md-12 py-10 px-5 bg-white">
          <table class="table mb-15">
            <thead>
              <tr>
                <th scope="col">حاله الطلب</th>
                <th scope="col">رقم الطلب</th>
                <th scope="col">وقت الوصول المتوقع</th>
                <th scope="col">شركه الشحن</th>
                <th scope="col">رقم الشحنه</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">جارى التوصيل</th>
                <td>16897</td>
                <td>السبت، 30 سبتمبر 2023</td>
                <td>JNT Express</td>
                <td>JTE000196844927</td>
              </tr>
            </tbody>
          </table>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">المنتج</th>
                <th scope="col">الاجمالى</th>
              </tr>
            </thead>
            <tbody style="border: 1px solid #fff">
              <tr style="border-bottom: 1px solid #eee">
                <th scope="row">
                  <div class="product-details d-flex align-start gap-3">
                    <div class="product">
                      <img
                        style="width: 70px"
                        src="../assets/od54Tb5Qr7ykPoyEnPoKj5f24nglwmNwaBCwGh5I.webp"
                        alt=""
                      />
                    </div>
                    <div class="product-title">
                      <p>عباية سوداء سادة بكم مميز -100A</p>
                      <p class="product-size">المقاس: <span>54</span></p>
                    </div>
                  </div>
                </th>
                <td class="fw-bolder">93.00 ر.س</td>
              </tr>
              <tr>
                <th scope="row">المجموع</th>
                <td class="fw-bolder">93 ر.س</td>
              </tr>
              <tr>
                <th scope="row">الشحن</th>
                <td class="fw-bolder">0 ر.س سعر شحن موحد</td>
              </tr>
              <tr>
                <th scope="row">وسيلة الدفع:</th>
                <td class="fw-bolder">ماي فاتورة - البطاقات</td>
              </tr>
            </tbody>
            <tbody style="border: 1px solid #fff">
              <tr style="border-top: 1px solid #eee">
                <td class="fw-bold">الاجمالى</td>
                <td class="fw-bolder">113 ر.س</td>
              </tr>
            </tbody>
          </table>
          <button
            class="px-8"
            style="
              padding-bottom: 6px;
              padding-top: 3px;
              background-color: #2d2d2ded;
              color: #fff;
              font-size: 16px;
              font-weight: bolder;
              width: fit-content;
              border-radius: 0 0 0 25px;
            "
          >
            طباعه الفاتوره
          </button>
        </div>
      </div>
    </div>
    <PannerWthText />
    <footer-com></footer-com>
  </div>
</template>

<script setup>
import NavBarWground from "@/components/NavBarWground.vue";
import FooterCom from "@/components/FooterCom.vue";
import PannerWthText from "@/components/PannerWthText.vue";
</script>

<style scoped></style>
