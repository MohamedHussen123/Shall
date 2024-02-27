<template>
  <!-- popUp for all website -->
  <v-layout class="w-100">
    <v-main>
      <slot></slot>
      <PopupComp />
      <router-view />
    </v-main>
  </v-layout>
</template>

<script setup>
import PopupComp from "@/components/popUp/PopupComp";
</script>
<style>
body {
  background-color: #f9f9f9 !important;
  direction: rtl;
}
.container {
  max-width: 1140px !important;
}
* {
  direction: rtl;
  line-height: normal !important;

  /* font-family: "ArbFONTS-cocon-next-arabic", sans-serif !important; */
}
</style>
