<template>
  <div class="home">
   <Header class="header"></Header>
    <div class="mian">
      <router-view></router-view>
    </div>
    <Footer class="footer"></Footer>
  </div>

</template>

<script>
import Header from "./header";
import Footer from "./footer";
import Index from "../page";
export default {
  name: "layout",
  components: {Index, Footer, Header}
}
</script>

<style scoped>
.home{
  width: 100%;
  background: #fff;
}
.header{
  width: 100%;
  height: 130px;
}
.mian{
  width: 100%;
  background: #ffffff;
}
.footer{
  width: 100%;
  height: 250px;
  background: #e6e6e6;
}
</style>
