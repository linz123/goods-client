<template>
  <div id="app" >
    <div class="mian">
<!--     <layout></layout>-->
<!--      <keep-alive></keep-alive>-->
<!--      <keep-alive>-->
<!--        <router-view v-if="$route.meta.keepAlive"></router-view>-->
<!--      </keep-alive>-->
<!--      <router-view v-if="!$route.meta.keepAlive"></router-view>-->
      <router-view ></router-view>
    </div>
  </div>
</template>

<script>
import Layout from "./components/home/layout";
export default {
  name: 'App',
  components: {Layout}
}
</script>

<style>
@import "./assets/css/style.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  background: #fff;
}
.mian{
  width: 100%;
}
</style>
