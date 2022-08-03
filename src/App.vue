<template>
  메인페이지 입니다.
  <p>{{ users }}</p>
</template>

<script>
// 2022.08.03[프뚜]: 01. axios import
import axios from 'axios';
import { ref } from 'vue';

export default {
  setup() {
    const users = ref({});

    // 2022.08.03[프뚜]: 02. json-server url, 데이터를 create할 땐 post 방식을 사용
    axios.post('http://localhost:3000/users', {
      'name': '프뚜1',
      'job': '프로그래머1'
    }).then(res => {
      // 2022.08.03[프뚜]: 02-1. 서버통신이 성공했을 때 실행
      console.log(res);
    }).then(err => {
      // 2022.08.03[프뚜]: 02-2. 서버통신이 실패했을 때 실행
      console.log(err);
    });

    // 2022.08.03[프뚜]: 03. json-server url, 데이터를 load할 땐 get 방식을 사용
    axios.get('http://localhost:3000/users')
      .then(res => {
        users.value = res.data;
      }).then(err => {
        console.log(err);
      });

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
