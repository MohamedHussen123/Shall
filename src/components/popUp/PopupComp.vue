<template>
  <div class="text-center">
    <v-dialog v-model="dialog" activator="parent" class="pa-0" width="auto">
      <span @click="dialog = false" class="position-absolute close">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          />
        </svg>
      </span>
      <div class="container popup position-relative">
        <div class="row h-100">
          <div
            class="col-md-7 h-100 px-5 py-5 d-flex align-center justify-content-center"
          >
            <div class="text">
              <h3 style="color: #ed48ff; font-size: 29px; font-weight: bolder">
                اشتركي معنا..
                <span
                  style="
                    background-color: transparent;
                    color: #000;
                    font-weight: 600;
                    font-size: 18px;
                    margin-right: 10px;
                  "
                  >واحصلي على</span
                >
              </h3>
              <h3
                style="color: #ed48ff; font-size: 29px; font-weight: bolder"
                class="mb-0"
              >
                قسيمة شرائية فورية بـ 50 ريال
              </h3>
              <p style="font-weight: 600">
                انضمـــي إلينا اليوم واســـتمتعي بالهدايا المميزة! لتتســـوقي كل
                مـــا تحبيـــن مـــن تشـــكيلات العبايـــات الفريـــدة
                والجلابيـــات الأنيقـــة. لا تفوتـــي العـــروض والأخبار
                الحصريـــة التي نقدمها ً ا لمشتركاتنا خصيص
              </p>
              <form class="subscribe d-flex align-center">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="عنوان البريد الالكترونى"
                />
                <button>اشتراك</button>
              </form>
            </div>
          </div>
          <div class="col-md-5 h-100 p-0">
            <div class="image">
              <img
                class=""
                src="../../assets/UXwsOKof7EjsCAiHAWbZCz64TVtfuOtVnJ05gyV8.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
const dialog = ref(true);
//Auto close After 5 secounds
const closeDialog = setTimeout(() => {
  dialog.value = false;
}, 2500);
console.log(closeDialog);
</script>

<style scoped>
.popup {
  background-color: #fff;
  border-radius: 0 0 0 55px;
  height: 400px;
  width: 800px !important;
  overflow: hidden;
}
span.close {
  background-color: #fff;
  width: 40px;
  height: 40px;
  text-align: center;
  right: -15px;
  top: -20px;
  cursor: pointer;
  z-index: 9999999999999 !important;
  border-radius: 50%;
  border: 1px solid #eee;
}
span.close:hover {
  background-color: #eee !important;
}
span.close svg {
  fill: #777;
  width: 15px;
  height: 15px;
  margin: 2px auto;
  text-align: center;
}
.popup .row .col-md-6 .image {
  width: 100%;
  overflow: hidden;
}
.popup .row .col-md-6 .image img {
  width: 100%;
  height: 100%;
}
.subscribe input {
  background-color: #eee;
  border: 1px solid #fff;
  outline: none;
  padding: 3px 20px;
  font-size: 13px;
  text-align: right;
  width: 60%;
}
.subscribe button {
  background-color: #2d2d2ded;
  padding: 3px 50px;
  color: #fff;
  font-size: 13px;
  border-radius: 0 0 0 20px;
}
</style>
