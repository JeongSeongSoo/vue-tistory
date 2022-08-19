<template>
  <Users>
    <template #default="{ title }">{{ title }}</template>
    <template #name>프뚜</template>
    <template #job>프로그래머</template>
  </Users>
  <hr/>
  <Users>
    <template #default="{ title }">{{ title }}</template>
    <template #name>먹뚜</template>
    <template #job>먹방</template>
  </Users>
</template>

<script setup>
import Users from '@/pages/users/Users.vue';
</script>

<style>
</style>