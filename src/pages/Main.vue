<template>
  <div>Main입니다.</div>
  <br/><br/>

  <!-- 2022.08.05[프뚜]: router를 이용한 이동 -->
  <router-link to="/users">user 이동</router-link>
</template>

<script setup>
// 2022.08.12[프뚜]: 라이프사이클 사용하기 위해 vue import
import { onUnmounted } from "vue";

const timer = setTimeout(() => {
  console.log("Main Created 로그");
}, 3000);

// 2022.08.12[프뚜]: 페이지를 나갈 때 실행됨
onUnmounted(() => {
  console.log('onUnmounted');
  clearTimeout(timer);
});
</script>

<style>

</style>