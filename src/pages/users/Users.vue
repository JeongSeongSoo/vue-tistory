<template>
  이름: <input type="text"
              :value="props.name"
              @input="inputChange($event, 'name')"/>
  <hr>
  직업: <input type="text"
              :value="props.job"
              @input="inputChange($event, 'job')"/>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  name: String,
  job: String
});

const emit = defineEmits([
  'update:name', 'update:job'
]);

const inputChange = (event, target) => {
  if (target === 'name') {
    emit('update:name', event.target.value);
  } else {
    emit('update:job', event.target.value);
  }
};
</script>

<style>

</style>