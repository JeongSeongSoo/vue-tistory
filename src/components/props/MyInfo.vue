<template>
  <!-- 2022.08.03[프뚜]: 02. 부모에서 받아 온 데이터 출력 -->
  <div>이름 ==> {{ info.name }}</div>
  <div>취미 ==> {{ info.job }}</div>
  <div>직업 ==> {{ info.hobby }}</div>
</template>

<script>
export default {
  // 2022.08.03[프뚜]: 01. 부모에서 받아 온 데이터를 매핑 -> info라는 명으로 받아 올 예정
  props: {
    info: {
      type: Object,
      required: true
    }
  }, // props

  // 2022.08.04[프뚜]: props, context 파라미터를 받을 수 있음
  setup(props) {
    console.log(props.info);

    // 2022.08.04[프뚜]: props로 받아 온 데이터는 변경이 불가능
    // props.info.name = '부모데이터값변경불가';
  }, // setup
};
</script>

<style>

</style>