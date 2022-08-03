<template>
  {{ users }}
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  // 2022.08.03[프뚜]: 02-1. function에 async로 선언함
  async setup() {
    const users = ref({});

    // 2022.08.03[프뚜]: 01. 첫번째 로그
    console.log("1. 유저 데이터");

    try {
      // 2022.08.03[프뚜]: 02-2. 두번째 로그 -> await으로 실행이 완료될 때까지 기다림
      const res = await axios.get('http://localhost:3000/users');
      users.value = res.data;
      console.log("2. 유저 데이터");
    } catch (err) {
      console.log(err);
    }

    // 2022.08.03[프뚜]: 03. 세번째 로그
    console.log("3. 유저 데이터");

    return {
      users,
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
