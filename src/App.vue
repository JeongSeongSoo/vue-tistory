<template>
  App.vue

  <!-- 2022.08.08[프뚜]: 03. onBeforeMount 이후 onMounted 이전 실행됨 -->
  {{ loadTemplate() }}
  <br/><br/>
  {{ value }}
  <br/><br/>
  <input type="button" @click="change()" value="바꾸기"/>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured, onRenderTracked, onRenderTriggered } from 'vue';

export default {
  setup() {
    // 2022.08.08[프뚜]: 01. setup은 라이프사이클 중에서 가장 맨 처음 실행, DOM이 추가되기 전이기 때문에 DOM 접근을 할 수 없음
    console.log('beforeCreate & created');

    // 2022.08.08[프뚜]: 02. 렌더링 직전에 DOM을 변경하고자 할 때 사용함
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });

    // 2022.08.08[프뚜]: 04. 템플릿과 렌더링 된 DOM에 접근할 수 있음
    onMounted(() => {
      console.log('onMounted');
    });

    // 2022.08.08[프뚜]: 05. DOM이 패치되기 전에 데이터가 변경될 때 호출됨
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });

    // 2022.08.08[프뚜]: 06. 데이터가 변경되어 DOM이 렌더링되고 패치된 후에 호출됨
    onUpdated(() => {
      console.log('onUpdated');
    });

    // 2022.08.08[프뚜]: 07. 컴포넌트 인스턴스가 마운트 해제 되기 직전에 호출됨
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });

    // 2022.08.08[프뚜]: 08. 컴포넌트 인스턴스가 마운트 해제 된 후에 호출됨
    onUnmounted(() => {
      console.log('onUnmounted');
    });

    // 2022.08.08[프뚜]: 09. 자손 컴포넌트의 에러가 포착(capture)될 때 호출됨
    onErrorCaptured(() => {
      console.log('onErrorCaptured');
    });

    // 2022.08.08[프뚜]: 10. 가상 DOM의 재렌더링이 추적될 때 호출됨
    onRenderTracked(() => {
      console.log('onRenderTracked');
    });

    // 2022.08.08[프뚜]: 11. 가상 돔의 재렌더링이 트리거 될 때 호출됨
    onRenderTriggered(() => {
      console.log('onRenderTriggered');
    });

    const loadTemplate = () => {
      console.log('loadTemplate');
    };

    const value = ref('프뚜');
    const change = () => {
      value.value = '먹뚜';
    };

    return {
      loadTemplate,
      value,
      change,
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