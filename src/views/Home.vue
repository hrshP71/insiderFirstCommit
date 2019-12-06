<template>
  <div class="home">
    <img width="250" height="125" src="../assets/logo.png">
    <HelloWorld msg="--- Mayın Tarlası ---"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
