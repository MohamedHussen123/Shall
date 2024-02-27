import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TestPage from "@/views/TestPage.vue";
import TrackYourOrder from "@/views/TrackYourOrder.vue";
import CommonQuestion from "../views/CommonQuestions.vue";
import RefundPolicy from "../views/RefundPolicy.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/testPage",
    name: "TestPage",
    component: TestPage,
  },
  {
    path: "/track-your-order",
    name: "TrackOrder",
    component: TrackYourOrder,
  },
  {
    path: "/commomQuestion",
    name: "CommonQuestion",
    component: CommonQuestion,
  },
  {
    path: "/refundpolicy",
    name: "RefundPolicy",
    component: RefundPolicy,
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () => import("@/views/ContactUs.vue"),
  },
  {
    path: "/whoWeare",
    name: "WhoweAre",
    component: () => import("@/views/WhoweAre.vue"),
  },

  {
    path: "/Abayas",
    name: "AbayasPage",
    component: () => import("@/views/AbayasPage.vue"),
  },
  {
    path: "/niqap",
    name: "NiqabPage",
    component: () => import("@/views/NiqabPage.vue"),
  },
  {
    path: "/productDetails",
    name: "ProductDetails",
    component: () => import("@/views/ProductDetails.vue"),
  },
  {
    path: "/all_product",
    name: "ProductPage",
    component: () => import("@/views/ProductPage.vue"),
  },
  {
    path: "/torah",
    name: "TorahPage",
    component: () => import("@/views/TorahPage.vue"),
  },
  {
    path: "/most_seller",
    name: "Most_Seller",
    component: () => import("@/views/MostSeller.vue"),
  },
  {
    path: "/shal_products",
    name: "ShalProducts",
    component: () => import("@/views/ShalProducts.vue"),
  },
  {
    path: "/offers",
    name: "OffersPage",
    component: () => import("@/views/OffersPage.vue"),
  },
  {
    path: "/summer_product",
    name: "SummerProduct",
    component: () => import("@/views/SummerProduct.vue"),
  },
  {
    path: "/complete_order",
    name: "CompleteOrder",
    component: () => import("@/views/CompleteOrder.vue"),
  },
  {
    path: "/pay",
    name: "PaymentPage",
    component: () => import("@/views/PaymentPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
