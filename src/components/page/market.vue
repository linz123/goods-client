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
      subMenuClasses: [],
      subMenuList: [],
      mounted() {
      this.getMarketData();
      this.getSubMenu();
      },
      methods:{
        getMarketData(){
          alert(111);
          console.log('导航栏传过来的数据', list)
        },
        getSubMenu(){
          alert(2111);
          const url = this.$route.params.id;
          console.log('url',url);
         const menuList =this.$store.state.menu;
          console.log('二级菜单data',menuList);
          menuList.forEach((item=>{
            if(url===item.url){
              this.subMenuClasses =item.classes;
              // this.subMenuList=item.children;
            }
          }))

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
