<template>
  <!-- 2022.08.15[프뚜]: user 데이터를 Main.vue에서 출력하기 -->
  <!-- 2022.08.15[프뚜]: userChange method를 Main.vue에서 사용하기 -->
  <router-view
    :user="user"
    @userChange="userChange"/>
</template>

<script setup>
import { ref } from 'vue';

// 2022.08.15[프뚜]: user 데이터 생성
const user = ref('프뚜');

// 2022.08.15[프뚜]: user 데이터 변경 method
const userChange = () => {
  user.value = '먹뚜';
};
</script>

<style>
#app {
  margin-top: 30px;
  margin-left: 30px;
}
</style>