<template>
  <div>Users입니다.</div>
  <br/><br/>

  <!-- 2022.08.05[ssjeong]: router를 이용한 이동 -->
  <router-link to="/main">main 이동</router-link>
</template>

<script setup>
setTimeout(() => {
  console.log("Users Created 로그");
}, 3000);
</script>

<style>

</style>