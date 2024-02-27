<template>
  <div class="parent">
    <nav-bar-wground></nav-bar-wground>
    <div class="container my-9">
      <div class="row px-13">
        <div class="col-md-6">
          <div class="breadcrumb">
            <span class="fw-bold ml-2">
              <router-link to="/"> الرئيسية </router-link>
            </span>
            <span class="ml-1" style="color: gray">|</span>
            <span class="fw-bolder">
              <router-link to="/shal_products"> منتجات</router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid my-10 position-relative">
      <img class="back-img" src="../assets/CategoryPatren.svg" alt="" />
      <div class="container px-15 header">
        <div class="row">
          <div class="col-md-12 mb-5">
            <h4 class="fw-bold mb-3">عبايات كلوش:</h4>
            <h4 class="fw-bold">التصميم الأنيق والأصالة</h4>
          </div>
          <div class="col-md-10">
            <p style="font-weight: 600">
              نقدم لكم مجموعة رائعة من عبايات الكلوش المميزة التي تجمع بين
              الأصالة والأناقة، نحن فخورون بتقديم مجموعة متنوعة من التصاميم
              الراقية التي تناسب جميع الأذواق والمناسبات
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-10">
      <div class="row">
        <!-- <button @click="toggleFilter">منقى</button> -->
        <div class="col-md-3">
          <v-expansion-panels v-model="panel" :readonly="readonly" multiple>
            <v-expansion-panel class="pa-0" elevation="0">
              <v-expansion-panel-title
                color="#fff"
                expand-icon="mdi-plus"
                collapse-icon="mdi-minus"
                onplay="return false;"
                >الفئة</v-expansion-panel-title
              >
              <v-expansion-panel-text class="">
                <div class="div" v-for="n in 4" :key="n">
                  <a href="#" class="">
                    <input type="checkbox" id="category-1" value="جلابيات" />
                    <span>الجلابيات</span>
                  </a>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel elevation="0">
              <v-expansion-panel-title
                expand-icon="mdi-plus"
                collapse-icon="mdi-minus"
                >التصميم
              </v-expansion-panel-title>
              <v-expansion-panel-text class="design">
                <ul>
                  <li v-for="(n, i) in 15" :key="i">
                    <a href="#">
                      <input type="radio" name="" id="" aria-checked="true" />
                      بشت
                    </a>
                  </li>
                </ul>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel elevation="0">
              <v-expansion-panel-title
                expand-icon="mdi-plus"
                collapse-icon="mdi-minus"
                >السعر</v-expansion-panel-title
              >
              <v-expansion-panel-text>
                <v-range-slider></v-range-slider>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel elevation="0">
              <v-expansion-panel-title
                expand-icon="mdi-plus"
                collapse-icon="mdi-minus"
                >المناسبه</v-expansion-panel-title
              >
              <v-expansion-panel-text>
                <ul>
                  <li v-for="(n, i) in 5" :key="i">
                    <a href="#">
                      <input type="radio" name="" id="" aria-checked="true" />
                      رسميه
                    </a>
                  </li>
                </ul>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <div class="col-md-9 product">
          <div class="row">
            <div class="col-md-4 mb-10" v-for="n in 8" :key="n">
              <div class="card position-relative">
                <div class="store-state position-absolute">
                  <span>مخرون قليل</span>
                </div>

                <div
                  style="cursor: pointer"
                  @click="showdetails"
                  class="card-header pa-0 overflow-hidden"
                >
                  <img
                    class="w-100"
                    src="../assets/od54Tb5Qr7ykPoyEnPoKj5f24nglwmNwaBCwGh5I.webp"
                    alt=""
                  />
                </div>

                <div class="card-body bg-white position-relative">
                  <div
                    class="quick-view-propage position-absolute"
                    style="
                      top: -50px;
                      left: 10px;
                      background-color: #eee;
                      padding: 8px 15px;
                      border-radius: 50%;
                      cursor: pointer;
                    "
                    @click.stop="drawer = !drawer"
                  >
                    <svg
                      style="width: 15px"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                      />
                    </svg>
                  </div>
                  <h5>عبايه شانتون لف</h5>
                  <h4>مميزه بتصميم عصرى</h4>
                  <div class="price d-flex align-center gap-3 mt-3">
                    <p class="newPrice">470 رس</p>
                    <p class="oldPrice">670 رس</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid bg-white my-15">
      <div class="row">
        <div class="container">
          <div class="row">
            <div class="col-md-4 d-flex align-center">
              <div class="text">
                <h6 style="font-size: 18px; font-weight: 600" class="mb-3">
                  وكمان تقدرى تاخديهم مع تمارا
                </h6>
                <h4 style="font-size: 29px; color: #ed48ff; font-weight: 900">
                  وتقسطيها على 4 دفعات
                </h4>
              </div>
            </div>
            <div class="col-md-8">
              <img
                class="w-100"
                src="../assets/oCIQETQL7QJP0oLAl662UsKkRoGnQ0JGIyVT8aol.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 head my-8">
          <h4>إليك بعض الطرق</h4>
          <h4>الشائعة لارتداء عبايات الكلوش</h4>
        </div>
        <div class="col-md-12 artical my-5">
          <p>
            <span> الارتداء التقليدي:</span>
            هذه الطريقة تشمل لبس العباية بسهولة على الجسم وتثبيتها على الكتفين.
            يمكنك استخدام دبابيس أو مشابك خاصة لتثبيت العباءة إذا كانت تحتاج إلى
            ذلك
          </p>
          <p>
            <span>الارتداء بالحزام:</span>يمكنك استخدام حزام لإضافة تحديد وتحسين
            من إغلاقها بشكل كامل. يمكنك استخدامها كقطعة تنزع فوق الثياب الأخرى
            الخصر. هذا يخلق تأثير محددا و انيقا
          </p>
          <p>
            <span>الارتداء مفتوحة:</span>
            من إغلاقها بشكل كامل. يمكنك استخدامها كقطعة تنزع فوق الثياب الأخرى
            في هذه الحالة، يمكنك ارتداء العباية مفتوحة بدل في هذه الحالة، يمكنك
            ارتداء العباية مفتوحة بدل وهذا يعطي مزيد
          </p>
          <p>
            <span> الارتداء التقليدي:</span>
            هذه الطريقة تشمل لبس العباية بسهولة على الجسم وتثبيتها على الكتفين.
            يمكنك استخدام دبابيس أو مشابك خاصة لتثبيت العباءة إذا كانت تحتاج إلى
            ذلك
          </p>
          <p>
            <span>الارتداء بالحزام:</span>يمكنك استخدام حزام لإضافة تحديد وتحسين
            من إغلاقها بشكل كامل. يمكنك استخدامها كقطعة تنزع فوق الثياب الأخرى
            الخصر. هذا يخلق تأثير محددا و انيقا
          </p>
          <p>
            <span>الارتداء مفتوحة:</span>
            من إغلاقها بشكل كامل. يمكنك استخدامها كقطعة تنزع فوق الثياب الأخرى
            في هذه الحالة، يمكنك ارتداء العباية مفتوحة بدل في هذه الحالة، يمكنك
            ارتداء العباية مفتوحة بدل وهذا يعطي مزيد
          </p>
        </div>
      </div>
    </div>
    <div class="container my-8">
      <div class="row">
        <div class="col-md-12 mb-5">
          <h4
            style="
              font-weight: bolder;
              width: 80%;
              padding: 0;
              line-height: normal;
            "
          >
            سواء كنت تبحثين عن عبايات كلوش من التصاميم الكلاسيكية أو العصرية
            التي تعبر عن ذوقك الشخصي، ستجدين:
          </h4>
        </div>
        <div class="col-md-5">
          <p style="line-height: normal; font-size: 19px">
            <span style="font-weight: bold">جـــودة لا مثيـــل لهـــا:</span>
            نحن نولي اهتماما كبيرا لجودة منتجاتنا نستخدم افضل الخامات لضمان ان
            تصل اليك منتجاتنا بجودة استثنائيه نسعى دائما لتلبيه توقعات عملائنا
            وضمان رضاهم
          </p>
          <p style="line-height: normal; font-size: 19px">
            <span style="font-weight: bold"> تصاميـــم متنوعـــة:</span>
            عبايـــات كلـــوش فـــي "متجـــر شـــال" تأتي ِ بمجموعـــة متنوعة
            مـــن التصاميم والألوان، ســـواء كنت تبحثين عـــن عباية كلـــوش
            بألوان هادئـــة وأنيقة أو ترغبيـــن في تلوين إطلالتك بألوان جريئة
            ومميزة، فإن لدينا ما يناسب احتياجاتك
          </p>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-6">
          <p style="line-height: normal; font-size: 19px">
            <span style="font-weight: bold"
              >تعتبـــر العبايـــات الكلـــوش:</span
            >مـــن القطـــع التـــي تزيـــن الإطلالات ت بفخامتهـــا وتصميمهـــا،
            إنهـــا خيـــار مثالـــي للمناســـبات الخاصـــة والأمســـيات
            الراقيـــة، حيث يمكـــن أن تضفي لمســـة من الأناقة والأصالـــة
            علـــى إطلالتك.اكتشـــفي مجموعتنـــا المميـــزة وابني مظهرك الرائع
            مع عبايات الكلوش عالية الجودة
          </p>
        </div>
        <!-- Design From Here -->
        <div class="col-md-12 mb-3">
          <h4 class="common-question mb-0 fw-bolder">الاسئلة الشائعة:</h4>
          <h5 class="fw-bolder">
            ما هي الخصائص التي يجب أن يبحث عنها العملاء عند شراء عباية كلوش
            جديدة؟
          </h5>
        </div>
        <div class="col-md-5">
          <p style="line-height: normal; font-size: 18px; font-weight: 600">
            <span class="fw-bold">الجودة والمواد:</span>
            ينبغي التحقق من جودة القماش المستخدم فـــي صنـــع العباية كلوش،
            يفضـــل اختيار أقمشـــة عالية الجودة مثـــل الحريـــر أو الشـــيفون
            أو القطـــن علـــى حســـب الاحتياجـــات الشخصية، الجودة تضمن متانة
            العباية وجودتها العالية
          </p>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-6">
          <span class="fw-bold">الحجـــم والمقـــاس:</span>
          <p
            style="line-height: normal; font-size: 18px; font-weight: 600"
            class="d-inline"
          >
            يجب التأكـــد مـــن أن العباية تأتـــي بالحجم ُ فضـــل أخـــذ
            قياســـات دقيقة لجســـمك أو المناســـب لجســـمك. ي الاستفسار عن دليل
            المقاسات المتاح للتأكد من تناسب العباية بشكل مثالي
          </p>
        </div>
        <div class="col-md-5">
          <p style="line-height: normal; font-size: 18px; font-weight: 600">
            <span class="fw-bold">التصميـــم والزخـــارف:</span>
            ابحث عن تصاميم الكلـــوش التي تعكس ذوقك الشخصي وتناسب المناسبة ،
            الزخارف والتفاصيل المميزة تضيف لمسة جمالية إلى العباية
          </p>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-6">
          <p style="line-height: normal; font-size: 18px; font-weight: 600">
            <span class="fw-bold">الراحـــة والقيـــاس:</span>
            تأكد من أن العباية توفـــر الراحة والحرية في الحركـــة، خاصـــة إذا
            كنت تخطط لارتدائها لفتـــرات طويلة أو في المناسبات الخاصة
          </p>
        </div>
        <div class="col-md-5">
          <p style="line-height: normal; font-size: 18px; font-weight: 600">
            <span class="fw-bold">الجودة والمواد:</span>
            ينبغي التحقق من جودة القماش المستخدم فـــي صنـــع العباية كلوش،
            يفضـــل اختيار أقمشـــة عالية الجودة مثـــل الحريـــر أو الشـــيفون
            أو القطـــن علـــى حســـب الاحتياجـــات الشخصية، الجودة تضمن متانة
            العباية وجودتها العالية
          </p>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-6">
          <span class="fw-bold">الحجـــم والمقـــاس:</span>
          <p
            style="line-height: normal; font-size: 18px; font-weight: 600"
            class="d-inline"
          >
            يجب التأكـــد مـــن أن العباية تأتـــي بالحجم ُ فضـــل أخـــذ
            قياســـات دقيقة لجســـمك أو المناســـب لجســـمك. ي الاستفسار عن دليل
            المقاسات المتاح للتأكد من تناسب العباية بشكل مثالي
          </p>
        </div>
        <div class="col-md-5">
          <p style="line-height: normal; font-size: 18px; font-weight: 600">
            <span class="fw-bold">التصميـــم والزخـــارف:</span>
            ابحث عن تصاميم الكلـــوش التي تعكس ذوقك الشخصي وتناسب المناسبة ،
            الزخارف والتفاصيل المميزة تضيف لمسة جمالية إلى العباية
          </p>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-6">
          <p style="line-height: normal; font-size: 18px; font-weight: 600">
            <span class="fw-bold">الراحـــة والقيـــاس:</span>
            تأكد من أن العباية توفـــر الراحة والحرية في الحركـــة، خاصـــة إذا
            كنت تخطط لارتدائها لفتـــرات طويلة أو في المناسبات الخاصة
          </p>
        </div>
      </div>
    </div>
    <v-navigation-drawer
      class="quick-view px-2"
      :width="500"
      location="right"
      v-model="drawer"
      temporary
    >
      <div class="container position-relative">
        <div
          class="svg position-absolute"
          style="
            cursor: pointer;
            z-index: 1500;
            left: 15px;
            top: 15px;
            text-align: center;
            padding: 5px 16px 9px;
            border-radius: 50%;
            background-color: #fff;
          "
          @click.stop="drawer = !drawer"
        >
          <svg
            style="width: 10px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
          </svg>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div>
              <img
                class=""
                src="../assets/od54Tb5Qr7ykPoyEnPoKj5f24nglwmNwaBCwGh5I.webp"
                alt=""
              />
            </div>
            <div class="title">
              <router-link to="/productDetails"> </router-link>
            </div>
            <div class="rating">
              <v-rating
                v-model="rating"
                class="ma-0"
                density="compact"
                :model-value="5"
                size="x-small"
                color="#000"
                active-color="#000"
              ></v-rating>
            </div>
            <div class="price">
              <span>262.20ر.س </span>
            </div>
            <div class="description">
              <p>
                اكتشفي الأناقة التقليدية المعاصرة مع عبايتنا الفريدة المصنوعة من
                القماش البحريني الأصيل، المعروف بجودته العالية وتاريخه العريق.
                تتميز هذه العباية بخصائص فريدة تجمع بين النعومة الاستثنائية
                والمظهر الراقي على الجسم، بالإضافة إلى ملمسها الناعم الذي يغني
                عن الكوي. كما أنها تأتي بتصميم دبل فيس عملي بلونين كلاسيكيين:
                الأسود والرصاصي السادة، مما يجعلها الخيار المثالي لبيئة العمل
                والخروجات اليومية. لا تفوتي فرصة إضافة هذه القطعة المميزة إلى
                مجموعتك. عباياتنا بقماش بحريني تعد استثمارًا في الأناقة التي
                تدوم طويلاً. متوفرة الآن لفترة محدودة فقط! تأكدي من اقتنائها
                اليوم قبل نفاد الكمية وتمتعي بتجربة تراثية فريدة مع لمسة عصرية
                تبرز جمالك في كل مناسبة
              </p>
            </div>
          </div>
          <div class="size_q py-3 row">
            <div class="col-md-3"><span>المقاس:</span></div>

            <div class="col-md-9">
              <div class="d-flex align-center">
                <v-btn-toggle
                  v-model="toggle"
                  density="combact"
                  color="black"
                  mandatory
                  class="d-flex gap-2"
                >
                  <v-btn rounded="md" value="52">52</v-btn>
                  <v-btn rounded="md" value="53">53</v-btn>
                  <v-btn rounded="md" value="54">54</v-btn>
                  <v-btn rounded="md" value="55">55</v-btn>
                </v-btn-toggle>
              </div>
            </div>
          </div>
          <div class="color row">
            <div class="col-md-3">
              <p style="color: #777">اللون:</p>
            </div>
            <div class="col-md-9">
              <div class="d-flex align-center">
                <v-btn-toggle
                  density="combact"
                  color="black"
                  mandatory
                  class="d-flex gap-2"
                >
                  <v-btn rounded="sm" value="gray">gray </v-btn>
                  <v-btn rounded="sm" value="black">black </v-btn>
                </v-btn-toggle>
              </div>
            </div>
          </div>
          <div class="total-price row">
            <div class="col-md-3"><p>السعر الكلى</p></div>
            <div class="col-md-9"><span> 262.25 رس </span></div>
          </div>
          <div class="state">
            <button>نفذ من المخزون</button>
          </div>
        </div>
      </div>
    </v-navigation-drawer>
    <footer-com></footer-com>
  </div>
</template>

<script setup>
import NavBarWground from "@/components/NavBarWground.vue";
import FooterCom from "@/components/FooterCom.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const panel = ref([0]);

// Import Swiper styles
import "swiper/css";

const router = useRouter();

const showdetails = () => {
  router.push("/productDetails");
};
const drawer = ref(null);
const dateForSlider = ref([
  {
    imgUrl:
      "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
    title: "عبايات شانتون لف",
    desc: "مميزه بتصميم عصرى",
    color: ["grey", "black"],
    imgthubnail: [
      "http://shal/public/uploads/all/sV9LJKQJvrhqDReb5cGak2jPad5HiXzF4WBKv9CC.webp",
      "http://shal/public/uploads/all/UXKzPLez7k90yvLQiY4d2ofcir30PV5qyZ7BPPCZ.webp",
    ],
  },
  {
    imgUrl:
      "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
    title: "عبايات شانتون لف",
    desc: "مميزه بتصميم عصرى",
    color: ["grey", "black"],
    imgthubnail: [
      "http://shal/public/uploads/all/sV9LJKQJvrhqDReb5cGak2jPad5HiXzF4WBKv9CC.webp",
      "http://shal/public/uploads/all/UXKzPLez7k90yvLQiY4d2ofcir30PV5qyZ7BPPCZ.webp",
    ],
  },
  {
    imgUrl:
      "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
    title: "عبايات شانتون لف",
    desc: "مميزه بتصميم عصرى",
    color: ["grey", "black"],
    imgthubnail: [
      "http://shal/public/uploads/all/sV9LJKQJvrhqDReb5cGak2jPad5HiXzF4WBKv9CC.webp",
      "http://shal/public/uploads/all/UXKzPLez7k90yvLQiY4d2ofcir30PV5qyZ7BPPCZ.webp",
    ],
  },
  {
    imgUrl:
      "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
    title: "عبايات شانتون لف",
    desc: "مميزه بتصميم عصرى",
    color: ["grey", "black"],
    imgthubnail: [
      "http://shal/public/uploads/all/sV9LJKQJvrhqDReb5cGak2jPad5HiXzF4WBKv9CC.webp",
      "http://shal/public/uploads/all/UXKzPLez7k90yvLQiY4d2ofcir30PV5qyZ7BPPCZ.webp",
    ],
  },
  {
    imgUrl:
      "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
    title: "عبايات شانتون لف",
    desc: "مميزه بتصميم عصرى",
    color: ["grey", "black"],
    imgthubnail: [
      "http://shal/public/uploads/all/sV9LJKQJvrhqDReb5cGak2jPad5HiXzF4WBKv9CC.webp",
      "http://shal/public/uploads/all/UXKzPLez7k90yvLQiY4d2ofcir30PV5qyZ7BPPCZ.webp",
    ],
  },
  {
    imgUrl:
      "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
    title: "عبايات شانتون لف",
    desc: "مميزه بتصميم عصرى",
    color: ["grey", "black"],
    imgthubnail: [
      "http://shal/public/uploads/all/sV9LJKQJvrhqDReb5cGak2jPad5HiXzF4WBKv9CC.webp",
      "http://shal/public/uploads/all/UXKzPLez7k90yvLQiY4d2ofcir30PV5qyZ7BPPCZ.webp",
    ],
  },
  {
    imgUrl:
      "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
    title: "عبايات شانتون لف",
    desc: "مميزه بتصميم عصرى",
    color: ["grey", "black"],
    imgthubnail: [
      "http://shal/public/uploads/all/sV9LJKQJvrhqDReb5cGak2jPad5HiXzF4WBKv9CC.webp",
      "http://shal/public/uploads/all/UXKzPLez7k90yvLQiY4d2ofcir30PV5qyZ7BPPCZ.webp",
    ],
  },
  {
    imgUrl:
      "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
    title: "عبايات شانتون لف",
    desc: "مميزه بتصميم عصرى",
    color: ["grey", "black"],
    imgthubnail: [
      "http://shal/public/uploads/all/sV9LJKQJvrhqDReb5cGak2jPad5HiXzF4WBKv9CC.webp",
      "http://shal/public/uploads/all/UXKzPLez7k90yvLQiY4d2ofcir30PV5qyZ7BPPCZ.webp",
    ],
  },
  {
    imgUrl:
      "http://shal/public/uploads/all/yFa9J2HNrbxzOlzesdiTd3CsdWwhUTvLmSsn5hZR.webp",
    title: "عبايات شانتون لف",
    desc: "مميزه بتصميم عصرى",
    color: ["grey", "black"],
    imgthubnail: [
      "http://shal/public/uploads/all/sV9LJKQJvrhqDReb5cGak2jPad5HiXzF4WBKv9CC.webp",
      "http://shal/public/uploads/all/UXKzPLez7k90yvLQiY4d2ofcir30PV5qyZ7BPPCZ.webp",
    ],
  },
]);
console.log(dateForSlider);
// const filter = ref(true);

// const toggleFilter = () => {
//   filter.value = !filter.value;
// };
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
.parent .container-fluid .back-img {
  position: absolute;
  z-index: -1;
  top: 25%;
  opacity: 0.9;
}
.v-expansion-panel--active
  > .v-expansion-panel-title:not(.v-expansion-panel-title--static) {
  min-height: 15px !important;
}
.v-expansion-panel-text a {
  text-decoration: none;
  display: block;
  color: #999;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}
ul {
  list-style: none;
  padding: 0;
}
ul li {
  margin-bottom: 5px;
}
.product .row .col-md-4 .card {
  border: 0.5px solid #eee;
  border-radius: 0 0 0 45px !important;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 3px 3px !important;
}
.card-header {
  overflow: hidden;
}
.card-header img {
  transition: 0.5s;
}
.card-header img:hover {
  scale: 1.2;
}
.product .row .col-md-4 .card .card-body {
  border-radius: 0 0 0 45px !important;
}
.store-state {
  top: 5%;
}
.store-state span {
  background-color: rgb(235 200 6);
  color: #000;
  font-size: 8px;
  font-weight: bolder;
  padding: 3px 18px;
  border-radius: 0 0 0 15px;
}
.card-body {
  padding: 10px 15px;
}
.card-body h5 {
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0;
}
.card-body h4 {
  margin: 5px 0;
  font-size: 16px;
  font-weight: bold;
}
.price .newPrice {
  color: #ed48ff;
  font-weight: bolder;
  font-size: 16px;
}
.price .oldPrice {
  text-decoration: line-through;
  text-decoration-color: #00deff;
  font-weight: bolder;
  font-size: 16px;
}

.container .row .head h4 {
  font-weight: bolder;
}
.container .row .artical p {
  font-size: 18px;
  width: 95%;
}
.container .row .artical p span {
  font-weight: bold;
  margin-left: 5px;
}
.v-expansion-panel-title--active > .v-expansion-panel-title__overlay {
  opacity: 1 !important;
}
</style>
