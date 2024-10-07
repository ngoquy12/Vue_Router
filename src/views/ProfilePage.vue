<template>
  <div>
    <h1>Profile Page</h1>
    <input type="text" v-model="userName" />
    <router-link to="/">Home</router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onBeforeRouteLeave } from "vue-router";

const userName = ref("");

onBeforeRouteLeave((to, from, next) => {
  if (userName.value) {
    const isConfirm = confirm("Bạn có xác nhận muốn rời trang không");

    if (isConfirm) {
      // Lưu dữ liệu
      // CHo phép điều hướng
      next();
    } else {
      next(false);
    }
  } else {
    next();
  }
});
</script>

<style></style>
