<template>
  <!-- 2022.08.03[프뚜]: 06. :자식에 사용될 변수명 = 부모에서 넘겨줄 변수명 -->
  <MyInfo
      :info = info
  />
</template>

<script>
import { ref } from 'vue';

// 2022.08.03[프뚜]: 03. 자식 컴포넌트 import
import MyInfo from './components/props/MyInfo.vue';

export default {
  setup() {
    // 2022.08.03[프뚜]: 05. 자식 컴포넌트가 사용 할 변수 생성
    const info = ref({
      'name': '프뚜',
      'job': 'programmer',
      'hobby': 'gym',
    });

    return {
      info
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
