<template>
  Main입니다.
</template>

<script setup>
// 2022.08.21[프뚜]: 01. vuex의 useStore를 import
import { useStore } from 'vuex';

// 2022.08.21[프뚜]: 02. userStore의 값을 store로 받음
const store = useStore();

// 2022.08.21[프뚜]: 03. state(actions) 값 변경
store.dispatch('setNameAndJob');

// 2022.08.21[프뚜]: 04. state 출력
console.log(store.state.name);
console.log(store.state.job);
</script>

<style>
</style>