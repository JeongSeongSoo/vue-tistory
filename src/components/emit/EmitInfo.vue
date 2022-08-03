<template>
  <div>자식 컴포넌트</div>
</template>

<script>
export default {
  // 2022.08.03[프뚜]: 01. 자식 컴포넌트에서 부모 컴포넌트의 함수를 실행
  setup(props, context) {
    context.emit('setInfo', {
      'name': '프뚜',
      'job': 'programmer',
      'hobby': 'gym',
    });
  }, // setup

  // 2022.08.03[프뚜]: 02. 자식 컴포넌트에서 부모 컴포넌트의 emit명 선언
  emits: [
      'setInfo'
  ], // emits
};
</script>

<style>

</style>