<template>
  <div>
    <nav>
      <router-link exact-active-class="" active-class="active" to="/"
        >Home</router-link
      >
      <router-link active-class="active" to="/about">About</router-link>
      <router-link active-class="active" to="/contact">Contact</router-link>
    </nav>

    <router-view v-slot="{ Component }">
      <Suspense>
        <!-- Thành phần các component sử dụng cơ chế lazy load -->
        <template #default>
          <div>
            <component :is="Component" />
          </div>
        </template>

        <!-- Hiệu ứng loading trước khi tải trang -->
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
nav {
  position: sticky;
  top: 0;
  background-color: #fff;
}

.active {
  background-color: red;
}
</style>

<!-- admin => dashboard -->
<!-- admin/manager-user => quản lý user -->
<!-- admin/manager-product => quản lý product -->
