<template>
  <div class="parent">
    <nav-bar-wground></nav-bar-wground>
    <div class="container header my-5">
      <div class="row frow">
        <div class="col-md-12">
          <div class="broad_camp">
            <span>
              <router-link to="/"> الرئيسية </router-link>
            </span>
            <span>|</span>
            <span>
              <router-link to="/"> عربه التسوق </router-link>
            </span>
            <span>|</span>
            <span>
              <router-link class="text-black" to="/"> الدفع</router-link>
            </span>
          </div>
        </div>
      </div>
      <div class="row srow my-8">
        <form action="" class="bg-white">
          <div class="col-md-12 px-2 py-5 d-flex align-center">
            <span>
              <svg
                style="
                  width: 20px;
                  fill: #fff;
                  border: 1px solid #eee;
                  border-radius: 50%;
                "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
              </svg>
            </span>
            <span>عربه التسوق</span>
            <span class="line"> </span>
            <span>
              <svg
                style="
                  width: 20px;
                  fill: #ed48ff;
                  border: 1px solid #eee;
                  border-radius: 50%;
                "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
              </svg>
            </span>
            <span>معلومات الدفع</span>
            <span class="line"> </span>
            <span>
              <svg
                style="
                  width: 20px;
                  fill: #fff;
                  border: 1px solid #eee;
                  border-radius: 50%;
                "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
              </svg>
            </span>
            <span>اتمام الدفع</span>
          </div>
          <div class="row">
            <div class="col-md-7 info-drive">
              <h5>معلومات الشحن والتوصيل</h5>
              <label for="">الاسم <span>*</span></label>
              <input type="text" name="" id="" placeholder="الاسم *" />
              <label for="">رقم الجوال <span>*</span> </label>
              <input type="text" name="" id="" placeholder="05xxxxx" />
              <label for="">الدولة / المنطقة <span>*</span> </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="المملكه العربيه السعوديه"
              />
              <label for="">المدينة <span>*</span> </label>
              <input type="text" name="" id="" placeholder="المدينه" />
              <label for="">البريد الإلكتروني <span>*</span> </label>
              <input
                type="email"
                name=""
                id=""
                placeholder="البريد الالكترونى"
              />
              <label for="">عنوان <span>*</span> </label>
              <input type="text" name="" id="" placeholder="عنوانك" />
            </div>
            <div class="col-md-5">
              <h5>مراجعة الطلب</h5>
              <p class="d-flex align-center justify-content-between">
                <span>المنتج</span>
                <span>مجموع</span>
              </p>
              <div
                class="date-bill d-flex align-center justify-content-between"
              >
                <div class="img-product d-flex">
                  <img
                    style="width: 70px"
                    src="../assets/LzrBFjpPplTr7BTnCVnDN7OAWnShurVEwcQMlCMZ.webp"
                    alt=""
                  />
                  <div class="text">
                    <p>عباية حرير نحاسي لامع</p>
                    <p>x1</p>
                  </div>
                </div>
                <div class="price">125.00 رس</div>
              </div>
              <div class="row">
                <div class="col-md-6">مجموع</div>
                <div class="col-md-6">125.00 رس</div>
              </div>
              <div class="row">
                <div class="col-md-6">اجمالى الشحن</div>
                <div class="col-md-6">25.00</div>
              </div>
              <div class="row">
                <div class="col-md-6">الدفع نقدًا عند الاستلام:</div>
                <div class="col-md-6">25 رس</div>
              </div>
              <div class="row">
                <div class="col-md-6">الاجمالى</div>
                <div class="col-md-6">193.75 رس</div>
                <div class="col-md-12">
                  <span>يتضمن 18.75ر.س ضريبة القيمة المضافة </span>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <p>هل لديكي كوبون خصم ؟</p>
                </div>
                <form action="">
                  <input type="text" placeholder="رمز الكوبون" name="" id="" />
                  <button>تطبيق</button>
                </form>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <label for="">شركه الشحن</label>
                <input type="text" name="" id="" />
              </div>
            </div>
            <div class="row"></div>
          </div>
        </form>
      </div>
    </div>

    <div class="container form-input my-2"></div>
    <footer-com></footer-com>
  </div>
</template>

<script setup>
import NavBarWground from "@/components/NavBarWground.vue";
import FooterCom from "@/components/FooterCom.vue";
</script>

<style scoped>
.header .frow {
  padding: 5px 80px;
}
.header .srow {
  padding: 5px 60px;
}
.container .row .col-md-12 .broad_camp {
  display: flex;
  align-items: center;
  gap: 10px;
}
.container .row .col-md-12 .broad_camp span {
  font-size: 12px;
}
.container .row .col-md-12 .broad_camp span a {
  text-decoration: none;
  color: #777;
}
.container .srow .col-md-12 {
  gap: 15px;
}
.container .srow .col-md-12 .line {
  height: 2px;
  width: 120px;
  background-color: #eee;
}
.info-drive input {
  width: 50%;
  padding: 7px 5px;
  background-color: #e4dfdf52;
  border-radius: 0 0 0 25px;
  display: block;
  opacity: 0.8;
  direction: rtl;
  outline: none;
}
.info-drive label {
  color: #000;
  font-weight: bolder;
  font-size: 17px;
  margin: 10px 0px;
}
.info-drive label span {
  color: #ed48ff;
  font-size: 21px;
}
</style>
