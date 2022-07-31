<template>
  <div v-if="false">
    <RefArray />
  </div>
  <div v-else>
    <ReactiveArray />
  </div>
</template>

<script>
import RefArray from './components/list/RefArray.vue';
import ReactiveArray from './components/list/ReactiveArray.vue';

export default {
  setup() {

  },

  components: {
    RefArray,
    ReactiveArray
  }
}
</script>

<style>
#app {
  margin-top: 30px;
  margin-left: 30px;
}
</style>
