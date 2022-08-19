<template>
  <!-- 2022.08.19[프뚜]: v-model:변수값="" -->
  <Users
    v-model:name="user.name"
    v-model:job="user.job"
  />
  <br/><br/>
  <input type="button" value="저장" @click="save()">
</template>

<script setup>
import { ref, onUpdated } from 'vue';
import Users from '@/pages/users/Users.vue';

const user = ref({
  name: "",
  job: ""
});

const save = () => {
  console.log(user.value);
};
</script>

<style>
</style>