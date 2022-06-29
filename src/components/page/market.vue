<template>
  <div class="content">
    <all_categories></all_categories>
  </div>
</template>

<script>
import All_categories from "../other/all_categories";
export default {
  name: "market",
  components: {All_categories},
  props:['list'],
  data() {
    return {
      currentPayerIndex: 0,
      productList: [],
      menuList: [],
      mounted() {
      this.getMarketData();
      },
      methods:{
        getMarketData(){
          alert(111);
          console.log('导航栏传过来的数据', list)
        }
      }
    }
  }
}
</script>
<style scoped lang="scss">
.content {
  width: 100%;
  border-top: 1px solid #dfdada;
}
</style>
