<template>
  {{ array }}
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // 2022.08.01[프뚜]: ref로 초기 배열 데이터 세팅
    const array = ref(['프뚜1', '프뚜2', '프뚜3']);

    // 2022.08.01[프뚜]: 배열 가장 마지막 자리에 추가
    array.value.push('프뚜4', '프뚜5');

    // 2022.08.01[프뚜]: 배열의 index부터 n개까지 삭제
    array.value.splice(0, 2);

    return {
      array
    };
  },
}
</script>

<style>

</style>