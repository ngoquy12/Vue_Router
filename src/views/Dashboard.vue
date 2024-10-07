<template>
  <div>
    <h1>Dashborad Page</h1>

    <nav>
      <router-link exact-active-class="active" to="/admin"
        >Dashboard</router-link
      >
      <router-link active-class="active" to="/admin/manager-user"
        >Manager user</router-link
      >
      <router-link active-class="active" to="/admin/manager-product"
        >Manager product</router-link
      >
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
.active {
  background-color: red;
}
</style>
