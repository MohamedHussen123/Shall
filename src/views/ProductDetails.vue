<template>
  <div>
    <NavBarWGround />
    <div class="container">
      <div class="row mt-7 px-8">
        <div class="col-md-12">
          <div class="breadcrumb d-flex align-center">
            <span class="fw-bold ml-2">
              <router-link to="/"> الرئيسية </router-link>
            </span>
            <span class="ml-1" style="color: gray">|</span>
            <span class="fw-bolder ml-2">
              <a href="">
                {{ product.categoryName }}
              </a>
            </span>
            <span class="ml-1" style="color: gray">|</span>
            <span class="fw-bolder mr-2" style="font-size: 12px">
              {{ product.subCategoryName }}
            </span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7">
          <div class="hover">
            <img class="w-75" :src="selectedImage" alt="" />
          </div>
          <div class="my-8 d-flex align-center gap-2">
            <v-btn-toggle
              v-for="img in catalog[0].images"
              :key="img.id"
              class="pr-1"
              mandatory
              v-model="selectedImage"
            >
              <v-btn :ripple="false" :value="img">
                <img
                  :src="img"
                  alt=""
                  style="border: 1px solid #eee; width: 100px; height: 150px"
                />
              </v-btn>
            </v-btn-toggle>
          </div>
        </div>
        <div class="col-md-5 details">
          <div>
            <h4 class="product-name">{{ product.subCategoryName }}</h4>
          </div>
          <div class="price-discounted mt-2 mb-2">
            <strong>{{ product.price }}ر.س </strong>
            <del>
              {{
                Math.floor(
                  product.price - (product.discount / product.price) * 100
                )
              }}
              ر.س
            </del>
          </div>
          <div class="taxt">
            <p style="font-size: 13px">شامل الضريبة</p>
          </div>
          <div class="mt-2 mb-3" style="font-size: 16px; font-weight: 700">
            اشتريها الآن وادفعي بعدين
          </div>
          <div class="tamara-payment mt-5 mb-5">
            <span>ادفع </span>
            <span>100.07 ر.س</span>
            <span> والباقي على حسب خطة الدفع بدون فوائد ورسوم تأخير </span>
          </div>
          <div class="dateof-ariave">
            <p>توصلك لباب بيتك في 25 فبراير</p>
          </div>
          <div class="save-money fw-bolder">
            <span class="text-grey" style="font-size: 20px; color: grey">
              وفرى</span
            >
            <span class="pr-2" style="color: #ed48ff; font-size: 20px">
              {{ Math.ceil((product.discount / product.price) * 100) }}
            </span>
          </div>
          <div class="size py-3 d-flex align-center gap-2">
            <span style="font-size: 18px">المقاس:</span>
            <div class="d-flex align-center">
              <v-btn-toggle
                v-model="toggle"
                density="combact"
                color="black"
                mandatory
                class="d-flex gap-2"
              >
                <v-btn rounded="sm" value="52">52</v-btn>
                <v-btn rounded="sm" value="53">53</v-btn>
                <v-btn rounded="sm" value="54">54</v-btn>
                <v-btn rounded="sm" value="55">55</v-btn>
              </v-btn-toggle>
            </div>
          </div>
          <div class="avialable-amount my-2">
            <p style="font-size: 12px; font-weight: bolder">
              0 متوفر فى المخزون
            </p>
          </div>
          <div style="margin: 30px 0px" class="total-price row p-0">
            <div class="col-sm-2 p-0">
              <h5 class="fs-6 mb-2 fw-bold text-capitalize">السعر</h5>
            </div>
            <div class="col-sm-10">
              <div class="product-price">
                <strong
                  style="font-size: 20px; color: rgb(237, 72, 255)"
                  class="h5 mb-2 fw-bold"
                  >{{ product.price }} ر.س
                </strong>
                <span style="font-size: 11px; color: #292933; font-weight: 400">
                  شامل الضريبة
                </span>
              </div>
            </div>
          </div>
          <div class="buttons">
            <button class="px-10 py-3 addToCart" disabled>اضف الى السله</button>
            <button class="px-10 py-3 quickView" disabled>اضف الى السله</button>
          </div>
          <section class="my-2">
            <v-expansion-panels>
              <v-expansion-panel
                style="
                  opacity: 1;
                  background-color: transparent;
                  border-top: 1px solid #eee;
                  border-bottom: 1px solid #eee;
                  margin: 10px 0px;
                "
                elevation="0"
              >
                <v-expansion-panel-title
                  expand-icon="mdi-plus"
                  collapse-icon="mdi-minus"
                >
                  <p class="fw-bolder">وصف المنتج</p>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <p style="font-size: 13px; font-weight: bold; line-height: 2">
                    استقبلي فصل الشتاء بأناقة مع عبايتنا المخملية الفاخرة من
                    شال، المصممة خصيصاً لتمنحك شعوراً بالدفء والنعومة طوال
                    اليوم. هذه العباية ليست فقط قطعة من الأناقة، بل هي تجسيد
                    للراحة والفخامة، حيث يعطي قماش الشامواه الفاخر تجربة لا مثيل
                    لها من الدفء والنعومة. مع أزرارها المغناطيسية سهلة الإرتداء
                    وقبتها الأنيقة، بالإضافة إلى الأزرار العصرية على الأكمام، كل
                    تفصيل في هذه العباية مصمم ليعكس ذوقك الرفيع. لا تفوتي
                    الفرصة! هذه العباية متوفرة لفترة محدودة فقط. تأكدي من حصولك
                    على إطلالتك الشتوية الفاخرة اليوم قبل نفاد الكمية. تسوقي
                    الآن واستمتعي بتجربة لا تُنسى مع عبايات شال
                  </p>
                </v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel
                style="
                  opacity: 1;
                  background-color: transparent;
                  border-top: 0px solid #eee;
                  border-bottom: 1px solid #eee;
                  margin: 10px 0px;
                "
                elevation="0"
              >
                <v-expansion-panel-title
                  expand-icon="mdi-plus"
                  collapse-icon="mdi-minus"
                >
                  <p class="fw-bolder">وصف المنتج</p>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <div class="row" style="font-size: 15px">
                    <div class="col-md-12 d-flex gap-2">
                      <p class="fw-light">المصمم:</p>
                      <span style="font-weight: bold"> شال </span>
                    </div>
                    <div class="col-md-12 d-flex gap-2">
                      <p class="fw-light">نوع الكم:</p>
                      <span style="font-weight: bold"> بأزارير </span>
                    </div>
                    <div class="col-md-12 d-flex gap-2">
                      <p class="fw-light">نوع القفلة:</p>
                      <span class="fw-bold">طقطق مغناطيس </span>
                    </div>
                    <div class="col-md-12 d-flex gap-2">
                      <p class="fw-light">نوع القماش:</p>
                      <span class="fw-bold">شامواه</span>
                    </div>
                    <div class="col-md-12 d-flex gap-2">
                      <span class="fw-light">التصنيفات:</span>
                      <span>
                        <a href="">عبايات عملية</a>
                        <a href="">عبـايـات رســمية</a>
                        <a href="">عبايات عملية</a>
                        <a href="">عبايات عملية</a>
                        <a href="">عبـايـات رســمية</a>
                        <a href="">عبايات عملية</a>
                      </span>
                    </div>
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel
                style="
                  opacity: 1;
                  background-color: transparent;
                  border-top: 0px solid #eee;
                  border-bottom: 1px solid #eee;
                  margin: 10px 0px;
                "
                elevation="0"
              >
                <v-expansion-panel-title
                  expand-icon="mdi-plus"
                  collapse-icon="mdi-minus"
                >
                  <p class="fw-bold">الشحن و الإرجاع</p>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <p>
                    لديك 7 أيام لتقديم طلب الإرجاع إذا غيرت رأيك. تعرف على
                    المزيد حول عملية الإرجاع
                  </p>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
            <img
              class="w-100"
              src="../assets/cJTfoKOZmfot5yDDfeW48Od86PeVu9domw3oCIVK.png"
              alt=""
            />
          </section>
        </div>
      </div>
      <div class="row my-5 px-0">
        <div class="col-md-12 px-0">
          <div class="opinion-button d-flex align-center gap-3">
            <button
              ref="button1"
              class="active px-10 py-3"
              @click="removeClass()"
            >
              آراء العملاء
            </button>
            <button
              ref="button2"
              class="default px-10 py-3"
              @click="addClass()"
            >
              الأسئلة الشائعة
            </button>
          </div>
        </div>
        <div class="col-md-12 bg-white px-3 py-2" v-if="opinion">
          <div>
            <p
              class="my-5"
              style="font-size: 18px; color: #292933; font-weight: bolder"
            >
              مبنى على 0 مراجعات
            </p>
            <p class="d-flex align-center my-5">
              <span style="font-size: 36px; color: #85b567; margin-left: 10px"
                >0</span
              >
              <span style="font-size: 15px; font-weight: bolder">
                اجمالى من المراجعات</span
              >
            </p>
            <div class="mb-3">
              <div class="d-flex align-center gap-3">
                <v-rating
                  class="ma-0 pa-0"
                  color="#ed48ff"
                  density="combact"
                  :length="5"
                  size="small"
                  :model-value="5"
                  active-color="#ed48ff"
                />
                <span
                  style="
                    background-color: #e4e9e4;
                    display: inline-block;
                    border-radius: 5px;
                    width: 120px;
                    height: 10px;
                  "
                ></span>
                <div class="persentage">0%</div>
              </div>
              <div class="d-flex align-center gap-3">
                <v-rating
                  class="ma-0 pa-0"
                  color="#ed48ff"
                  density="combact"
                  :length="5"
                  size="small"
                  :model-value="5"
                  active-color="#ed48ff"
                />
                <span
                  style="
                    background-color: #e4e9e4;
                    display: inline-block;
                    border-radius: 5px;
                    width: 120px;
                    height: 10px;
                  "
                ></span>
                <div class="persentage">0%</div>
              </div>
              <div class="d-flex align-center gap-3">
                <v-rating
                  class="ma-0 pa-0"
                  color="#ed48ff"
                  density="combact"
                  :length="5"
                  size="small"
                  :model-value="5"
                  active-color="#ed48ff"
                />
                <span
                  style="
                    background-color: #e4e9e4;
                    display: inline-block;
                    border-radius: 5px;
                    width: 120px;
                    height: 10px;
                  "
                ></span>
                <div class="persentage">0%</div>
              </div>
              <div class="d-flex align-center gap-3">
                <v-rating
                  class="ma-0 pa-0"
                  color="#ed48ff"
                  density="combact"
                  :length="5"
                  size="small"
                  :model-value="5"
                  active-color="#ed48ff"
                />
                <span
                  style="
                    background-color: #e4e9e4;
                    display: inline-block;
                    border-radius: 5px;
                    width: 120px;
                    height: 10px;
                  "
                ></span>
                <div class="persentage">0%</div>
              </div>
              <div class="d-flex align-center gap-3">
                <v-rating
                  class="ma-0 pa-0"
                  color="#ed48ff"
                  density="combact"
                  :length="5"
                  size="small"
                  :model-value="5"
                  active-color="#ed48ff"
                />
                <span
                  style="
                    background-color: #e4e9e4;
                    display: inline-block;
                    border-radius: 5px;
                    width: 120px;
                    height: 10px;
                  "
                ></span>
                <div class="persentage">0%</div>
              </div>
            </div>
            <div class="revesion text-center my-10">
              <p style="opacity: 0.8; font-weight: bold; font-size: 18px">
                لا توجد مراجعات لهذا المنتج حتى الآن.
              </p>
            </div>
          </div>
        </div>
        <div class="product_query bg-white my-8 px-3 py-2" v-if="quastion">
          <div>
            <p class="my-5" style="font-weight: bolder">ستفسارات المنتج (0)</p>
          </div>
          <div>
            <p class="fw-light">يرجى تسجيل الدخول لإرسال أسئلتك إلى البائع</p>
          </div>
          <div>
            <p style="font-weight: bolder">اسئلة اخرى</p>
            <p class="fw-light">لم يسأل أحد للبائع حتى الآن</p>
          </div>
        </div>
      </div>
    </div>
    <FooterCom />
  </div>
</template>

<script setup>
import NavBarWGround from "@/components/NavBarWground.vue";
import FooterCom from "@/components/FooterCom.vue";
import { ref } from "vue";

const product = ref({
  id: 0,
  categoryName: "عبايات شال",
  subCategoryName: "عباية سوداء شتوية بقبة وأزارير",
  price: 166,
  discount: 25,
});
console.log(product);
const toggle = ref();
const catalog = ref([
  {
    images: [
      "http://shal/public/uploads/all/TeKbd5HjRp1hauUFXNkH8VOexz88ZvosiiT0n93l.webp",
      "http://shal/public/uploads/all/oQUVR1q6zx84OJ6HAx8tTYyY3O9nzeg8rHVajZ0m.webp",
      "http://shal/public/uploads/all/2nT1n27S1cjfPC9t7QLSjVSB51P4LO2E0E2g1cxj.webp",
      "http://shal/public/uploads/all/saSyMxqBVAmUVlBImGw1DkqSh3Tbp0qIYjvfV3tv.webp",
    ],
  },
]);
const selectedImage = ref(catalog.value[0].images[0]);

const opinion = ref(true);
const quastion = ref(false);
const button1 = ref(null);
const button2 = ref(null);

const removeClass = () => {
  if (button1.value) {
    button2.value.classList.remove("active");
    button2.value.classList.add("default");
    button1.value.classList.remove("default");
    button1.value.classList.add("active");
    opinion.value = true;
    quastion.value = false;
  }
};

const addClass = () => {
  if (button2.value) {
    button2.value.classList.add("active");
    button2.value.classList.remove("default");
    button1.value.classList.add("default");
    button1.value.classList.remove("active");
    opinion.value = false;
    quastion.value = true;
  }
};
</script>

<style scoped>
.active {
  background-color: #00deff;
  color: #000;
  font-weight: bolder;
  border-radius: 20px 0 0 0;
  transition: 0.5s ease all;
}
.default {
  background-color: #fff;
  color: #000;
  font-weight: bolder;
  opacity: 0.9;
  border-radius: 20px 0 0 0;
  transition: 0.5s ease all;
}
.breadcrumb span a {
  font-size: 12px;
  text-decoration: none;
  color: #606062;
  transition: 0.5s ease-in;
  font-weight: bolder;
}

.breadcrumb span a:hover {
  color: #ed48ff;
}
.details .product-name {
  font-weight: 700;
}
.price-discounted strong {
  color: #ed48ff;
  font-size: 24px;
}
.price-discounted del {
  text-decoration-color: aqua;
  font-size: 18px;
  font-weight: bolder;
  margin-right: 8px;
}
.tamara-payment {
  padding: 15px 3px;
  border: 2px solid #ed48ff;
  border-image: linear-gradient(to right, #ed48ff, #00deff);
  border-image-slice: 1;
  background-color: #fff;
  border-radius: 0 0 0 0px;
}
.tamara-payment::before {
  contain: "";
  width: 60px;
  background-color: #ed48ff;
  height: 60px;
}
.dateof-ariave {
  background-color: #fff;
  padding: 15px 10px;
  border-radius: 0 0 0 20px;
}
.dateof-ariave p {
  margin: 0;
}
.buttons {
  display: flex;
  align-items: center;
  gap: 15px;
}
.buttons .addToCart {
  background-color: #ed48ff;
  font-weight: bold;
  color: #fff;
}
.buttons .quickView {
  background-color: black;
  color: #fff;
  border-radius: 0 0 0 20px;
}
.v-expansion-panel-text .col-md-12 span a {
  text-decoration: none;
  margin-left: 10px;
  font-weight: bolder;
  color: #000;
}
.v-btn-group--density-default.v-btn-group {
  height: 150px !important;
  padding: 0;
}
.v-btn {
  padding: 0;
  margin-left: 5px;
}
.hover {
  overflow: hidden;
}
.hover img {
  transition: 0.5s ease-in-out;
  display: block;
  margin: 1px auto;
}
.hover img:hover {
  scale: 1.4;
}
.persentage {
  opacity: 0.8;
}
</style>
