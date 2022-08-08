<template>
  App.vue

  <br/><br/>
  {{ value }}

  <!-- 2022.08.08[프뚜]: update를 테스트하기 위해 state값 변경 input 추가 -->
  <br/><br/>
  <input type="button" @click="change()" value="바꾸기"/>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

export default {
  setup() {
    // 2022.08.08[프뚜]: 01. setup은 라이프사이클 중에서 가장 맨 처음 실행, DOM이 추가되기 전이기 때문에 DOM 접근을 할 수 없음
    console.log('beforeCreate & created');

    // 2022.08.08[프뚜]: 02. 렌더링 직전에 DOM을 변경하고자 할 때 사용함
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });

    // 2022.08.08[프뚜]: 03. 템플릿과 렌더링 된 DOM에 접근할 수 있음
    onMounted(() => {
      console.log('onMounted');
    });

    // 2022.08.08[프뚜]: state를 변경하기 위해 임시 변수 및 메소드 생성
    const value = ref('프뚜');
    const change = () => {
      value.value = '먹뚜';
    };

    // 2022.08.08[프뚜]: 04. DOM이 패치되기 전에 데이터가 변경될 때 호출됨
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });

    // 2022.08.08[프뚜]: 05. 데이터가 변경되어 DOM이 렌더링되고 패치된 후에 호출됨
    onUpdated(() => {
      console.log('onUpdated');
    });

    // 2022.08.08[프뚜]: 06. 컴포넌트 인스턴스가 마운트 해제 되기 직전에 호출됨
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });

    // 2022.08.08[프뚜]: 07. 컴포넌트 인스턴스가 마운트 해제 된 후에 호출됨
    onUnmounted(() => {
      console.log('onUnmounted');
    });

    return {
      value,
      change,
    }
  }, // setup
}
</script>

<style>
#app {
  margin-top: 30px;
  margin-left: 30px;
}
</style>