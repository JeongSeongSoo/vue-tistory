<template>
  <slot :title="title"/>
  <p>
    이름은 <slot name="name"/>입니다.
  </p>
  <p>
    직업은 <slot name="job"/>입니다.
  </p>
</template>

<script setup>
import { ref } from 'vue';
const title = ref('users입니다.');
</script>

<style>

</style>