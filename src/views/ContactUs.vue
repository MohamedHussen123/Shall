<template>
  <div class="parent">
    <!-- box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; -->
    <nav-bar-wground></nav-bar-wground>
    <div class="container mt-7 px-5">
      <div class="row px-12 mt-5">
        <div class="col-md-6">
          <h4 class="fw-bolder fs-2">تواصل معنا</h4>
        </div>
        <div class="col-md-6 pa-0 links mb-11">
          <div class="text-left">
            <span class="ml-3">
              <router-link
                to="/"
                class="text-decoration-none fw-bold"
                style="color: #6c757d"
                >الرئيسية</router-link
              >
            </span>
            <span class="ml-2" style="color: #6c757d"> |</span>
            <span class="fw-bolder">"تواصل معنا" </span>
          </div>
        </div>
      </div>
    </div>
    <div class="container px-15 contact-us mb-15" style="">
      <div class="row">
        <div class="col-md-12">
          <form class="row" action="">
            <h2 class="px-5">يمكنك التواصل معنا عبر النموذج أدناه</h2>
            <div class="col-md-12">
              <label for="">الاسم</label>
              <input type="text" name="" required placeholder="الاسم" id="" />
            </div>
            <div class="col-md-12">
              <label for="">البريد الإلكتروني </label>
              <input
                type="text"
                required
                name=""
                id=""
                placeholder="البريد الالكترونى"
              />
            </div>
            <div class="col-md-12">
              <label for="">الموضوع</label>
              <input type="text" required name="" id="" placeholder="الموضوع" />
            </div>
            <div class="col-md-12">
              <label for="">رسالة</label>
              <input type="text" name="" required id="" placeholder="رساله" />
            </div>
            <div class="col-md-12 mt-8">
              <button class="send" type="submit">ارسال</button>
            </div>
          </form>
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

<style scoped>
.parent .contact-us .row .col-md-12 form {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 40px 30px 60px;
  border-radius: 0 0 0 30px;
}
.contact-us .row .col-md-12 .row .col-md-12 label {
  display: block;
  font-weight: 800;
  font-size: 25px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.contact-us .row .col-md-12 .row .col-md-12 input {
  background-color: #fff;
  width: 100%;
  font-size: 17px;
  padding: 10px 15px;
  outline: none;
}
.contact-us .row .col-md-12 .row .col-md-12 .send {
  background-color: #ed48ff;
  color: #fff;
  padding: 5px 20px;
  font-size: 15px;
  border-radius: 0px 0px 0px 20px;
}
</style>
