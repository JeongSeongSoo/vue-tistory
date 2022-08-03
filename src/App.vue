<template>
  <!-- 2022.08.03[프뚜]: 03. count 출력 -->
  <div>count => {{ count }}</div>
  <div>countComputed => {{ countComputed }}</div>
  <div>countComputed => {{ countComputed }}</div>

  <!-- 2022.08.03[프뚜]: 02-2. count 출력 -->
  <div>countFunction => {{ countFunction() }}</div>
  <div>countFunction => {{ countFunction() }}</div>

  <!-- 2022.08.03[프뚜]: 04. count 값 추가 -->
  <p>
    <input type="button" @click="count++" value="더하기"/>
  </p>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    // 2022.08.03[프뚜]: 01. ref 변수를 선언
    const count = ref(1);

    // 2022.08.03[프뚜]: 02. count 변수값이 변할 때 실행되는 computed 생성
    const countComputed = computed(() => {
      console.log('countComputed');
      return count.value + 1;
    });

    // 2022.08.03[프뚜]: 02-1. count 변수값이 변할 때 실행되는 function 생성
    const countFunction = () => {
      console.log('countFunction');
      return count.value + 1;
    };

    return {
      count,
      countComputed,
      countFunction
    };
  },
}
</script>

<style>
#app {
  margin-top: 30px;
  margin-left: 30px;
}
</style>
