<template>
  <!-- 2022.08.06[프뚜]: div 안에 같은 이벤트 프로퍼티를 사용하는 태그 생성 -->
  <div @click="divClick()">
    <input type="button" @click.stop="buttonClick()" value="버튼" />
  </div>
</template>

<script>
export default {
  setup() {
    // 2022.08.06[프뚜]: div를 클릭하면 실행되는 method
    const divClick = () => {
      console.log("divClick");
    };

    // 2022.08.06[프뚜]: button을 클릭하면 실행되는 method
    const buttonClick = () => {
      console.log("buttonClick");
    };

    return {
      divClick,
      buttonClick
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
