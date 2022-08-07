<template>
  App.vue
</template>

<script>
export default {
  setup() {
    let object1 = {
      'key': 1
    };

    // 2022.08.07[프뚜]: object1 값을 복사하기
    let object2 = {...object1};
    console.log(object2);

    // 2022.08.07[프뚜]: JSON.stringify를 통해 문자열(원시타입)로 변경된 후 비교하기
    console.log(JSON.stringify(object1) === JSON.stringify(object2));
  },
}
</script>

<style>
#app {
  margin-top: 30px;
  margin-left: 30px;
}
</style>
