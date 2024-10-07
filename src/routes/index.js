import AboutPage from "@/views/AboutPage.vue";
import ContactPage from "@/views/ContactPage.vue";
import Feedback from "@/views/Feedback.vue";
import HomePage from "@/views/HomePage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import UserPage from "@/views/UserPage.vue";
import { createRouter, createWebHistory } from "vue-router";

// Định nghĩa danh sách các route
const routes = [
  {
    path: "/",
    alias: ["/home", "/home-page"],
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/HomePage.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/AboutPage.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "@/views/ContactPage.vue"),

    redirect: "/feedback", // Tự động chuyển hướng qua trang Feedback khi truy cập vào /contact
  },
  {
    path: "/feedback",
    name: "feedback",
    component: () =>
      import(/* webpackChunkName: "feedback" */ "@/views/Feedback.vue"),
  },
  {
    path: "/user/:id",
    name: "userPage",
    redirect: (to) => `/profile/${to.params.id}`,
    component: () =>
      import(/* webpackChunkName: "userPage" */ "@/views/UserPage.vue"),
  },
  {
    path: "/profile/:id",
    name: "profilePage",
    component: () =>
      import(/* webpackChunkName: "profile" */ "@/views/ProfilePage.vue"),
  },
  {
    path: "/list-product",
    name: "listProdct",
    component: () =>
      import(/* webpackChunkName: "listProduct" */ "@/views/ListProduct.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    beforeEnter: (to, from, next) => {
      const isAuthentication = true;

      if (!isAuthentication) {
        alert("Bạn không có quyền truy cập trang này");
      } else {
        next();
      }
    },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue"),
    children: [
      {
        path: "manager-user",
        name: "managerUser",
        component: () =>
          import(
            /* webpackChunkName: "managerUser" */ "@/views/ManagerUser.vue"
          ),
      },
      {
        path: "manager-product",
        name: "managerProduct",
        component: () =>
          import(
            /* webpackChunkName: "managerProduct" */ "@/views/ManagerProduct.vue"
          ),
      },
    ],
  },
];

// Tạo cơ chế định tuyến
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
});

// Tạo cơ chế bảo vệ route
// router.beforeEach((to, from, next) => {
//   const company = prompt("Nhập địa chỉ mạng:");
//   const password = prompt("Nhập mật khẩu");
//   // Mô phỏng người dùng đã/chưa đăng nhập
//   const isLogin = false;
//   if (company === "RikkeiAcademy" && password === "denongdanbietcode") {
//     // Điều hướng về trang chủ nếu chưa đăng nhập
//     next();
//   }
// });

export default router;
