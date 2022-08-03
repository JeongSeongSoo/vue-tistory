<template>
  <!-- 2022.08.03[프뚜]: 07. 자식에서 만든 변수명, 연결 할 function 명 -->
  <MyInfo
      @setInfo = setInfo
  />

  <!-- 2022.08.03[프뚜]: 08. 자식에서 받아온 데이터 출력 -->
  <div>이름 ==> {{ info.name }}</div>
  <div>취미 ==> {{ info.job }}</div>
  <div>직업 ==> {{ info.hobby }}</div>
</template>

<script>
import { ref } from 'vue';

// 2022.08.03[프뚜]: 03. 자식 컴포넌트 import
import MyInfo from './components/emit/EmitInfo.vue';

export default {
  setup() {
    // 2022.08.03[프뚜]: 05. 자식 컴포넌트에서 받아온 데이터 출력하기 위해 초기화
    let info = ref({
        'name': '',
        'job': '',
        'hobby': ''
    });

    // 2022.08.03[프뚜]: 06. 자식컴포넌트와 연동 할 function 생성
    const setInfo = (param) => {
      console.log(param);
      info = info.value = param;
    };

    return {
      info,
      setInfo,
    };
  },

  // 2022.08.03[프뚜]: 04. 자식 컴포넌트 연동
  components: {
    MyInfo,
  }
}
</script>

<style>
#app {
  margin-top: 30px;
  margin-left: 30px;
}
</style>
