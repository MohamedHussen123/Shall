<template>
  <div class="w-100">
    <div class="text px-3 w-100">
      <h3 class="">جديد <span>العبايات</span></h3>
      <h5>
        اكتشفي جمالك مع أحدث تصاميم عبايـــات شـــال! كل قطعـــة تجســـد ً
        التميـــز والأناقـــة، مصممـــة خصيصـــا لتعزيـــز إطلالتـــك اليوميـــة
        بلمســـة فريدة وجذابة
      </h5>
      <div class="mt-5">
        <router-link to="/all_product" class="showAll text-white px-10 py-1">
          مشاهدة الكل
        </router-link>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.text h3 {
  color: #636363;
  font-size: 21px;
}
.text h3 span {
  font-weight: bolder;
  opacity: 0.9;
}
.text h5 {
  font-size: 16px;
  font-weight: 400;
  margin: 10px 0px;
  line-height: 1.5;
}
.text .showAll {
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
