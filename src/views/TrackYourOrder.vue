<template>
  <div class="parent">
    <NavBarWground />

    <div class="container-fluid mt-10 mb-10">
      <img
        style="position: absolute; z-index: -1; top: 32%"
        src="../assets/CategoryPatren.svg"
        alt=""
      />
      <div class="container px-5">
        <div class="row px-12">
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
          <div class="col-md-12">
            <v-card
              class="px-8 pt-11 pb-16"
              style="
                border: solid 0.1px #eae6e680;
                box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
                border-radius: 0px 0px 0px 88px;
              "
            >
              <div class="mb-5">
                <h2 class="fs-3 fw-bolder">قومي بإدخال رقم الطلب</h2>
                <h4 class="fs-5 fw-bold">
                  يمكنك الحصول عليه من خلال البريد الإلكتروني المرسل إليك أثناء
                  إتمام الطلب
                </h4>
              </div>

              <form action="" class="row">
                <div class="col-md-12 mb-5">
                  <label class="d-block fs-5 fw-bolder" for=""
                    >رمز الطلب:
                  </label>
                  <input
                    style="
                      border: 1px solid #fff;
                      outline: none;
                      border-radius: 0 0 0 25px;
                      background-color: #eee;
                    "
                    required
                    class="w-50 px-2 py-2"
                    type="text"
                    name=""
                    id=""
                    placeholder="الرقم التعريفي للطلب"
                  />
                </div>
                <div class="col-md-12">
                  <label class="d-block fs-5 fw-bolder" for=""
                    >رقم الجوال :
                  </label>
                  <label class="d-block fs-6 fw-bold" for=""
                    >رقم الجوال الذي تم إدخاله أثناء إتمام الطلب</label
                  >
                  <input
                    style="
                      border: 1px solid #fff;
                      outline: none;
                      border-radius: 0 0 0 25px;
                      background-color: #eee;
                    "
                    required
                    type="text"
                    class="w-50 px-2 py-2"
                    name=""
                    id=""
                    placeholder="رقم الجوال"
                  />
                </div>
                <div class="col-md-12 mt-7 flow-request">
                  <button @click="completeOrder" type="button">
                    تتبع طلبك
                  </button>
                </div>
              </form>
            </v-card>
          </div>
        </div>
      </div>
      <PannerWthText />
    </div>
    <FooterComp></FooterComp>
  </div>
</template>

<script setup>
import FooterComp from "@/components/FooterCom.vue";
import NavBarWground from "@/components/NavBarWground.vue";
import PannerWthText from "@/components/PannerWthText.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const ali = ref("AA");
console.log(ali);
const router = useRouter();

const completeOrder = () => {
  router.push("/complete_order");
};

// فاضل صفحه تتبع الاورود
</script>

<style scoped>
.parent .container .row .col-md-12 .flow-request button {
  background-color: #000;
  padding: 4px 40px;
  color: #fff;
  border-radius: 0 0 0 20px;
}
</style>
