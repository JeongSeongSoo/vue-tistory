<template>
  <!-- 2022.08.03[프뚜]: 02. 부모에서 받아 온 데이터 출력 -->
  <div>이름 ==> {{ info.name }}</div>
  <div>취미 ==> {{ info.job }}</div>
  <div>직업 ==> {{ info.hobby }}</div>
</template>

<script>
export default {
  // 2022.08.03[프뚜]: 01. 부모에서 받아 온 데이터를 매핑 -> info라는 명으로 받아 올 예정
  props: [
    'info'
  ],
  setup() {

  },
};
</script>

<style>

</style>