<template>
  <!-- 2022.08.04[프뚜]: 04. v-model로 searchText(ref)를 매핑-->
  watch => <input type="text" v-model="searchText">
</template>

<script>
// 2022.08.04[프뚜]: 01. ref, watch import
import { ref, watch } from 'vue';

export default {
  setup() {
    // 2022.08.04[프뚜]: 02. watch의 대상이 될 ref 변수 선언
    const searchText = ref('');

    // 2022.08.04[프뚜]: 05. timer 변수 선언
    let timer = null;

    // 2022.08.04[프뚜]: 03. ref변수명, (현재 값, 이전 값) => function
    watch(searchText, (current, prev) => {
      // 2022.08.04[프뚜]: 06. timer 변수의 값 초기화
      clearTimeout(timer);

      // 2022.08.04[프뚜]: 2초 뒤에 실행하는 setTimeout -> timer 변수에 등록
      timer = setTimeout(() => {
        let today = new Date();
        console.log(`${today.getMinutes()}분 ${today.getSeconds()}초`);
        console.log(`이전 input 값 => ${prev}\n현재 input 값 => ${current}\n\n`);
      }, 2000);
    });

    return {
      searchText,
    }
  },
}
</script>

<style>
#app {
  margin-top: 30px;
  margin-left: 30px;
}
</style>
