<template>
  <div>
    <nav
      class="navbar d-flex flex-column navbar-expand-lg text-center px-0 pb-5 pb-sm-0 pt-0"
    >
      <div
        class="d-block w-100"
        style="
          height: 40px;
          background: rgb(2, 0, 36);
          background: linear-gradient(to right, #ed48ff, #00deff);
        "
      >
        <div class="container py-2">
          <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
              <swiper
                :spaceBetween="30"
                :centeredSlides="true"
                :autoplay="{
                  delay: 2000,
                  disableOnInteraction: false,
                }"
                :loop="true"
                :modules="modules"
                class="text-center"
              >
                <swiper-slide v-for="n in 5" :key="n" style="color: #fff"
                  >Slide {{ n }}</swiper-slide
                >
              </swiper>
              <div class="col-md-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container-fluid d-md-none d-lg-block d-none text-center mt-1 px-8"
      >
        <div class="container text-center px-12">
          <div class="row mb-3 mt-5">
            <div class="collapse navbar-collapse d-flex align-center gap-5">
              <a class="navbar-brand nav-logo">
                <img src="../assets/shal-1.png" alt="" />
              </a>
              <form
                class="position-relative d-flex w-50 justify-content-center"
                role="search"
              >
                <v-icon class="position-absolute" style="left: 65px; top: 6px">
                  mdi-magnify
                </v-icon>
                <input
                  style="
                    padding: 1px 10px 3px 1px;
                    border: none;
                    border-radius: 20px;
                    outline: none;
                    background: #eaeaea;
                  "
                  class="w-75"
                  type=""
                  placeholder="البحث"
                  @click="dialog = true"
                  aria-label="Search"
                />
              </form>
              <ul
                class="navbar-nav mb-2 mb-lg-0 d-flex justify-content-between w-50"
              >
                <li class="nav-item">
                  <a
                    type="button"
                    class="nav-link"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    <svg
                      style="fill: #fff; width: 15px"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                      <path
                        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                      />
                    </svg>
                    التسجيل | الدخول</a
                  >
                  <!-- Modal -->
                  <div
                    class="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content" style="text-align: right">
                        <div class="modal-header">
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <div class="row">
                            <div class="col-md-12 p-3">
                              <keep-alive>
                                <form
                                  style="
                                    border: dashed 1px #ccc;
                                    margin-bottom: 50px;
                                    padding: 20px 30px 30px;
                                  "
                                >
                                  <div class="phone-number" v-if="userphone">
                                    <label
                                      class="d-block mb-1"
                                      style="color: #000"
                                      >رقم الجوال</label
                                    >
                                    <input
                                      style="
                                        border: 1px solid #ccc;
                                        outline: none;
                                        text-align: left;
                                      "
                                      class="w-100 px-1 py-2"
                                      type="text"
                                      name=""
                                      required
                                      id=""
                                      placeholder="51 234 5678"
                                    />
                                    <button
                                      type="button"
                                      @click="showEmailPhone"
                                    >
                                      <i>
                                        استخدم البريد الالكترونى بدلا من ذلك*
                                      </i>
                                    </button>
                                  </div>

                                  <div class="email-user" v-if="showEmail">
                                    <label
                                      class="d-block mb-1"
                                      style="color: #000"
                                      >البريد الالكترونى</label
                                    >
                                    <input
                                      style="
                                        border: 1px solid #ccc;
                                        outline: none;
                                      "
                                      class="w-100 px-1 py-2"
                                      type="email"
                                      name=""
                                      required
                                      id=""
                                      placeholder="admin@example"
                                    />
                                    <button
                                      type="button"
                                      @click="showphoneEmail"
                                    >
                                      <i> استخدم رقم الجوال بدلا من ذلك* </i>
                                    </button>
                                  </div>

                                  <div class="login w-100 mb-4 mt-4">
                                    <button type="submit">الدخول</button>
                                  </div>
                                </form>
                              </keep-alive>
                            </div>
                            <div class="col-md-12">
                              <div class="text-center">
                                <span class="text-dark" style="font-size: 12px">
                                  أو تسجيل الدخول باستخدام
                                </span>
                              </div>
                              <div
                                class="social d-flex align-center justify-center mt-3"
                              >
                                <span
                                  style="
                                    background-color: #ed48ff;
                                    padding: 4%;
                                    margin: 1%;
                                    border-radius: 10px;
                                  "
                                >
                                  <a href="">
                                    <svg
                                      style="width: 16px; fill: #fff"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 384 512"
                                    >
                                      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                      <path
                                        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                                      />
                                    </svg>
                                  </a>
                                </span>
                                <span
                                  style="
                                    background-color: #ed48ff;
                                    padding: 4%;
                                    margin: 1%;
                                    border-radius: 10px;
                                  "
                                >
                                  <a href="">
                                    <svg
                                      style="width: 16px; fill: #fff"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 488 512"
                                    >
                                      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                      <path
                                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                                      />
                                    </svg>
                                  </a>
                                </span>
                              </div>
                            </div>
                            <div class="col-md-12 text-center">
                              <span
                                class="d-block"
                                style="color: #606062; font-size: 12px"
                                >ليس لديك حساب؟
                              </span>
                              <button
                                style="color: #606062; font-size: 12px"
                                class="btn"
                                data-bs-target="#exampleModalToggle2"
                                data-bs-toggle="modal"
                              >
                                تسجيل
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="modal fade"
                    id="exampleModalToggle2"
                    aria-hidden="true"
                    aria-labelledby="exampleModalToggleLabel2"
                    tabindex="-1"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content" style="text-align: right">
                        <div class="modal-header">
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <div class="row">
                            <div class="col-md-12 p-3">
                              <keep-alive>
                                <form
                                  style="
                                    border: dashed 1px #ccc;
                                    margin-bottom: 50px;
                                    padding: 20px 30px 30px;
                                  "
                                >
                                  <div class="phone-number" v-if="userphone">
                                    <label
                                      class="d-block mb-1"
                                      style="color: #000"
                                      >الاسم بالكامل
                                    </label>
                                    <input
                                      style="
                                        border: 1px solid #ccc;
                                        outline: none;
                                        text-align: left;
                                      "
                                      class="w-100 px-1 py-2"
                                      required
                                      type="text"
                                      name=""
                                      id=""
                                      placeholder=""
                                    />
                                    <label
                                      class="d-block mb-1"
                                      style="color: #000"
                                      >رقم الجوال</label
                                    >
                                    <input
                                      style="
                                        border: 1px solid #ccc;
                                        outline: none;
                                        text-align: left;
                                      "
                                      class="w-100 px-1 py-2"
                                      type="text"
                                      name=""
                                      id=""
                                      placeholder="51 234 5678"
                                    />
                                    <button
                                      type="button"
                                      @click="showEmailPhone"
                                    >
                                      <i>
                                        استخدم البريد الالكترونى بدلا من ذلك*
                                      </i>
                                    </button>
                                  </div>

                                  <div class="email-user" v-if="showEmail">
                                    <label
                                      class="d-block mb-1"
                                      style="color: #000"
                                      >الاسم بالكامل
                                    </label>
                                    <input
                                      style="
                                        border: 1px solid #ccc;
                                        outline: none;
                                        text-align: left;
                                      "
                                      class="w-100 px-1 py-2"
                                      type="text"
                                      required
                                      name=""
                                      id=""
                                      placeholder=""
                                    />
                                    <label
                                      class="d-block mb-1"
                                      style="color: #000"
                                      >البريد الالكترونى</label
                                    >
                                    <input
                                      style="
                                        border: 1px solid #ccc;
                                        outline: none;
                                      "
                                      class="w-100 px-1 py-2"
                                      type="email"
                                      name=""
                                      required
                                      id=""
                                      placeholder="admin@example"
                                    />
                                    <button
                                      type="button"
                                      @click="showphoneEmail"
                                    >
                                      <i> استخدم رقم الجوال بدلا من ذلك* </i>
                                    </button>
                                  </div>
                                  <div class="check-box mt-2">
                                    <input
                                      type="checkbox"
                                      class="ml-2"
                                      name=""
                                      id=""
                                    />
                                    <span
                                      >بالتسجيل فإنك توافق على
                                      <a
                                        href=""
                                        style="
                                          font-size: 13px;
                                          color: #ed48ff;
                                          text-decoration: none;
                                          font-weight: bold;
                                        "
                                      >
                                        الأحكام والشروط</a
                                      >
                                    </span>
                                  </div>
                                  <div class="login w-100 mb-4 mt-4">
                                    <button type="submit">انشاء حساب</button>
                                  </div>
                                </form>
                              </keep-alive>
                            </div>
                            <div class="col-md-12">
                              <div class="text-center">
                                <span class="text-dark" style="font-size: 12px">
                                  أو تسجيل الدخول باستخدام
                                </span>
                              </div>
                              <div
                                class="social d-flex align-center justify-center mt-3"
                              >
                                <span
                                  style="
                                    background-color: #ed48ff;
                                    padding: 4%;
                                    margin: 1%;
                                    border-radius: 10px;
                                  "
                                >
                                  <a href="">
                                    <svg
                                      style="width: 16px; fill: #fff"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 384 512"
                                    >
                                      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                      <path
                                        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                                      />
                                    </svg>
                                  </a>
                                </span>
                                <span
                                  style="
                                    background-color: #ed48ff;
                                    padding: 4%;
                                    margin: 1%;
                                    border-radius: 10px;
                                  "
                                >
                                  <a href="">
                                    <svg
                                      style="width: 16px; fill: #fff"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 488 512"
                                    >
                                      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                      <path
                                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                                      />
                                    </svg>
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/track-your-order">
                    <svg
                      style="fill: #fff; width: 15px"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                      <path
                        d="M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z"
                      />
                    </svg>
                    أداره الطلبات</router-link
                  >
                </li>
                <li class="nav-item">
                  <v-main>
                    <a
                      class="nav-link"
                      @click.stop="drawer = !drawer"
                      type="button"
                    >
                      <v-badge floating :content="12" color="#ed48ff">
                        <svg
                          style="fill: #fff; width: 15px"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                          <path
                            d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                          />
                        </svg>
                      </v-badge>
                      عربه التسوق
                    </a>
                  </v-main>
                </li>
              </ul>
            </div>
          </div>
          <div class="row px-2">
            <div
              class="collapse navbar-collapse d-flex align-center justify-content-between"
            >
              <ul class="navbar-nav w-50 d-flex align-center gap-3">
                <li class="nav-item">
                  <router-link class="nav-link" to="/"> الرئيسيه </router-link>
                </li>
                <li class="nav-item">
                  <div class="dropdown dropcenter">
                    <button
                      style="font-size: 17px"
                      class="text-white fw-bolder"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      عبايات شال
                    </button>
                    <ul
                      class="dropdown-menu row"
                      style="
                        min-width: 600px;
                        background-color: #fff;
                        border-radius: 25px;
                        border: none;
                      "
                    >
                      <div class="row items">
                        <li class="col-4">
                          <router-link class="dropdown-item" to="/shal_products"
                            >عبايات شال</router-link
                          >
                        </li>
                        <li class="col-4">
                          <router-link
                            class="dropdown-item"
                            to="/summer_product"
                            >عبايات الصيف</router-link
                          >
                        </li>
                        <li class="col-4">
                          <router-link class="dropdown-item" to="/all_product"
                            >عبايات لف</router-link
                          >
                        </li>
                        <li class="col-4">
                          <router-link class="dropdown-item" to="/all_product"
                            >عبايات كسرات</router-link
                          >
                        </li>
                        <li class="col-4">
                          <router-link class="dropdown-item" to="/all_product"
                            >عبايات بشت</router-link
                          >
                        </li>
                        <li class="col-4">
                          <router-link class="dropdown-item" to="/all_product"
                            >عبايات نص بشت</router-link
                          >
                        </li>
                        <li class="col-4">
                          <router-link class="dropdown-item" to="/all_product"
                            >عبايات بشت ملونه</router-link
                          >
                        </li>
                        <li class="col-4">
                          <router-link class="dropdown-item" to="/all_product"
                            >عبايات بشت قطرى</router-link
                          >
                        </li>
                        <li class="col-4">
                          <router-link class="dropdown-item" to="/all_product"
                            >عبايات بشت اسود</router-link
                          >
                        </li>
                        <li class="col-4">
                          <router-link class="dropdown-item" to="/all_product"
                            >عبايات حرير</router-link
                          >
                        </li>
                        <li class="col-4">
                          <router-link class="dropdown-item" to="/all_product"
                            >عبايات مخفضه</router-link
                          >
                        </li>
                        <li class="col-4">
                          <router-link class="dropdown-item" to="/all_product"
                            >عبايات اقل من 150 ريال</router-link
                          >
                        </li>
                        <li class="col-4">
                          <router-link class="dropdown-item" to="/all_product"
                            >عبايات اقل من 200 ريال</router-link
                          >
                        </li>
                        <li class="col-4">
                          <router-link class="dropdown-item" to="/all_product"
                            >عبايات كلوش</router-link
                          >
                        </li>
                        <li class="col-4">
                          <router-link class="dropdown-item" to="/all_product"
                            >عبايات كلوش طبقات</router-link
                          >
                        </li>
                        <li class="col-4">
                          <router-link class="dropdown-item" to="/all_product"
                            >عبايات دبل كلوش</router-link
                          >
                        </li>
                        <li class="col-4">
                          <router-link class="dropdown-item" to="/all_product"
                            >عبايات نص كلوش</router-link
                          >
                        </li>
                        <li class="col-4">
                          <router-link class="dropdown-item" to="/all_product"
                            >عبايات عمليه</router-link
                          >
                        </li>
                        <li class="col-4">
                          <router-link class="dropdown-item" to="/all_product"
                            >عبايات سادة</router-link
                          >
                        </li>
                        <li class="col-4">
                          <router-link class="dropdown-item" to="/all_product"
                            >عبايات سادة سودة</router-link
                          >
                        </li>
                        <li class="col-4">
                          <router-link class="dropdown-item" to="/most_seller"
                            >الاكثر مبيعا</router-link
                          >
                        </li>
                      </div>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/Abayas"
                    >الجلابيات
                  </router-link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">الطرح </a>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/niqap"
                    >النقابات
                  </router-link>
                </li>
              </ul>
              <div class="w-25 d-flex align-center justify-content-end">
                <button class="nav-btn px-4" @click="offerPage">العروض</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <v-dialog v-model="dialog" width="50%">
        <v-card class="py-5 px-10">
          <v-autocomplete
            style="background-color: transparent"
            :items="items"
            auto-select-first
            class="flex-full-width"
            density="compact"
            item-props
            menu-icon=""
            placeholder=""
            prepend-inner-icon="mdi-magnify"
            theme="light"
            variant="solo"
            v-model="selected"
          ></v-autocomplete>
          <div v-if="selected" class="container">
            <p>{{ selected }}</p>
            <img
              src="../assets/UXwsOKof7EjsCAiHAWbZCz64TVtfuOtVnJ05gyV8.webp"
              alt=""
            />
          </div>
          <v-card-actions>
            <v-btn block @click="dialog = false">Close </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-navigation-drawer :width="300" class="py-6" v-model="drawer" temporary>
        <div class="card h-100">
          <div class="card-text w-100">
            <h3>عربة التسوق الخاصة بك</h3>
            <h5>عربه التسوق فارغه</h5>
          </div>
          <div
            class="row w-100 mt-6 py-5"
            style="min-height: 500px; margin: 1px auto; overflow-y: scroll"
          >
            <div v-for="n in items" :key="n.id" class="d-flex gap-2">
              <img
                style="width: 40px; height: 40px; object-fill: cover"
                src="../assets/JXnOg1eIcVcwk92sV455SSTgbzz9EDoDVz3U6uMf.png"
                alt=""
              />
              <div class="details text-start">
                <p class="mb-0" style="font-size: 12px; font-weight: bold">
                  عباية سوداء مخططة بكم مثني
                </p>
                <p class="mb-0" style="font-size: 12px; font-weight: bold">
                  اسود_50
                </p>
                <p class="mb-0" style="font-size: 12px; font-weight: bold">
                  50.5
                </p>
              </div>
              <div class="delete-item">
                <span>
                  <svg
                    style="fill: #000; width: 10px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                    <path
                      d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div
            class="card-footer w-100 position-fixed"
            style="bottom: 0; right: 0; border: 0; background: transparent"
          >
            <a
              href="#"
              class="py-2"
              style="
                border-bottom: #00deff 2px solid;
                color: #000;
                text-decoration: none;
                font-size: 10px;
              "
              >عربه التسوق</a
            >
            <div
              class="paied px-3 py-5 mt-5"
              style="background-color: black; border-radius: 0 0 0 25px"
            >
              <a href="#" style="text-decoration: none" class="text-white px-1"
                >اتمام الدفع</a
              >
              <span
                class="text-white px-2"
                style="border-right: 1px solid #fff"
              >
                {{ price }} ر.س
              </span>
            </div>
          </div>
        </div>
      </v-navigation-drawer>
    </nav>
    <div
      class="position-relative fixednav d-block d-sm-block d-md-block d-xl-none d-lg-none"
    >
      <ul class="d-flex justify-content-between align-center">
        <li class="d-block">
          <v-main>
            <a
              class=""
              style=""
              @click.stop="drawer_2 = !drawer_2"
              type="button"
            >
              <svg
                style="fill: #000; width: 20px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                />
              </svg>
            </a>
          </v-main>
        </li>
        <li>
          <img class="fixedNavLogo" src="../assets/shal-1.png" alt="" />
        </li>
        <li>
          <v-main>
            <a class="" @click.stop="drawer = !drawer" type="button">
              <v-badge floating :content="12" color="#ed48ff">
                <svg
                  style="fill: #000; width: 15px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                  <path
                    d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                  />
                </svg>
              </v-badge>
            </a>
          </v-main>
        </li>
      </ul>
      <v-navigation-drawer
        :width="300"
        class="py-6 sidebar"
        v-model="drawer_2"
        location="right"
        temporary
      >
        <ul>
          <li>
            <router-link to="/"> الرئيسيه </router-link>
          </li>
          <li>
            <router-link to="/"> الجلابيات </router-link>
            <svg
              @click="drawer_3 = !drawer_3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
              />
            </svg>
          </li>
          <li>
            <router-link to="/"> النقابات </router-link>
            <svg
              @click="drawer_4 = !drawer_4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
              />
            </svg>
          </li>
          <li>
            <router-link to="/"> عبايات شال </router-link>
            <svg
              @click="drawer_5 = !drawer_5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
              />
            </svg>
          </li>
          <li>
            <router-link to="/"> دعم العملاء </router-link>
          </li>
          <li>
            <router-link to="/"> سياسه الارجاع </router-link>
          </li>
          <li>
            <router-link to="/"> تواصل معنا </router-link>
          </li>
          <li>
            <router-link to="/"> من نحن </router-link>
          </li>
          <li>
            <router-link to="/"> خارطه الوقع </router-link>
          </li>
          <li>
            <router-link to="/"> انشاء حساب جديد </router-link>
          </li>
          <li>
            <router-link to="/"> الدخول </router-link>
          </li>
        </ul>
      </v-navigation-drawer>
      <div v-if="drawer_3" class="drawer">
        <p>
          الجلابيات
          <svg
            @click="drawer_3 = !drawer_3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            />
          </svg>
        </p>
      </div>
      <div v-if="drawer_4" class="drawer_4">
        <p>
          النقابات
          <svg
            @click="drawer_4 = !drawer_4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            />
          </svg>
        </p>
      </div>
      <div v-if="drawer_5" class="drawer_5">
        <p>
          عبايات شال
          <svg
            @click="drawer_5 = !drawer_5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            />
          </svg>
        </p>
        <ul>
          <li v-for="item in subCategory" :key="item.id">
            <router-link to=""> {{ item }}</router-link>
            <svg
              @click="passsub(item)"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
              />
            </svg>
          </li>
        </ul>
      </div>
      <div v-if="drawer_6" class="sub-sub-category">
        <p>
          {{ subEle }}
          <svg
            @click="drawer_6 = !drawer_6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            />
          </svg>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
// import "swiper/css";

// import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
const modules = ref([Autoplay, Navigation]);
const drawer = ref(null);
const price = 63.5;
const dialog = ref(false);
const selected = ref(null);
const items = [
  {
    id: 1,
    title: "recipe with chicken",
  },
  {
    id: 2,
    title: "best hiking trails near me",
  },
  {
    id: 3,
    title: "how to learn a new language",
  },
  {
    id: 4,
    title: "DIY home organization ideas",
  },
  {
    id: 5,
    title: "latest fashion trends",
  },
];
const showEmail = ref(false);
const userphone = ref(true);

const showEmailPhone = function () {
  showEmail.value = !showEmail.value;
  userphone.value = !userphone.value;
};
const showphoneEmail = function () {
  showEmail.value = !true;
  userphone.value = !false;
};
const router = useRouter();
const offerPage = () => {
  router.push("/offers");
};
const drawer_2 = ref(null);
const drawer_3 = ref(false);
const drawer_4 = ref(false);
const drawer_5 = ref(false);
const drawer_6 = ref(false);
const subEle = ref();
const subCategory = ref([
  "عبايات ملونه",
  "عبايات رسميه",
  "عبايات لف ",
  "عبايات كسرات",
  "عبايات بشت",
  "عبايات حرير",
  "عبايات مخفضه",
  "عبايات كلوش",
  "عبايات عمليه",
  "عبايات سادة",
  "الاكثر مبيعا",
  "عبايات سوداء",
  "عبايات المناسبات",
  "عبايات السفر",
  "تشكيله الصيف",
]);

const passsub = function (ele) {
  drawer_6.value = !drawer_6.value;
  subEle.value = ele;
};
</script>

<style scoped>
.nav-logo img {
  width: 100px;
  height: 25px;
}
ul li a {
  color: #fff;
  font-weight: 900;
  font-size: 21px;
}
ul li a:hover {
  color: #ed48ff !important;
}
.nav-item {
  transition: 0.5s;
}
.nav-item:hover {
  color: #ed48ff !important;
}

.nav-btn {
  background: linear-gradient(to right, #ed48ff, #00deff);
  color: #fff;
  border-radius: 0 0 0 20px;
  font-size: 16px;
  padding-top: 0px;
  padding-bottom: 5px;
}
.nav-item .nav-link {
  font-size: 16px;
  font-weight: bolder;
  transition: 0.5 ease-in-out;
}
.dropcenter button:hover {
  color: #ed48ff !important;
}
.nav-item .nav-link:hover,
.nav-item .nav-link:hover > svg {
  color: #ed48ff !important;
  fill: #ed48ff !important;
}
.items li a {
  color: #000;
  font-weight: bolder;
  font-size: 12px;
  text-align: right;
  margin-bottom: 10px;
  transition: 0.5s ease-in-out;
}
.items li a:hover {
  color: #00deff !important;
  background-color: #fff;
}
.v-navigation-drawer__scrim {
  height: 100vh !important;
}
.v-navigation-drawer .card {
  border: none;
}
.v-navigation-drawer .card h3 {
  font-size: 19px;
  font-weight: bolder;
}
.v-navigation-drawer .card h5 {
  font-size: 16px;
}
.phone-number button,
.email-user button {
  color: #ed48ff;
  margin-top: 12px;

  display: block;
}
.phone-number button:hover,
.email-user button:hover {
  text-decoration: underline;
}
.login button {
  width: 100%;
  background-color: #ed48ff;
  color: #fff;
  font-weight: bold;
  transition: 0.4s ease-in-out;
  padding: 8px;
  border-radius: 0px 0px 0px 20px;
}
.login button:hover {
  background-color: #00deff;
}
.phone-numben input[type="email"]:focus,
.email-user input[type="email"]:focus {
  border: 1px solid #ed48ff !important;
}
</style>
