<template>
  <div>Main입니다.</div>

  <!-- 2022.08.15[프뚜]: props 값에서 user 사용 -->
  props.user > {{ props.user }} <br/>

  <!-- 2022.08.15[프뚜]: user를 바로 사용할 수 있음 -->
  user > {{ user }}

  <!-- 2022.08.15[프뚜]: 부모 함수 사용하기 -->
  {{ emit('userChange') }}
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

// 2022.08.15[프뚜]: 부모에서 받아온(props) 데이터를 연결
const props = defineProps({
  user: String
});

const emit = defineEmits([
  'userChange'
]);

// 2022.08.15[프뚜]: 부모 함수 사용하기
emit('userChange');
</script>

<style>
</style>