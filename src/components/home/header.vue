<template>
  <div class="header">
    <div class="menu">
      <ul class="menu_">
        <template v-for="list in this.$store.state.menu">
        <li class="menu_li"  @click="routerId(list.url)">
          <router-link :to="`/home/${list.url}`"  class="service">{{ list.name }}</router-link>
        </li>
        </template>
      </ul>
    </div>
    <div class="search">
      <div class="logo">logo</div>
      <div class="search-input">
        <input placeholder="请输入您想搜索的商品、品牌">
        <div class="search-img">
          <a-icon type="search"/>
        </div>
      </div>
      <div class="search-right">
        <div class="cart">
          <router-link to="/shopping-cart" class="service-link"></router-link>
          <i class="cartNumber">{{ shopCartTotal }}</i></div>
        <div class="line_service" @click="onlineService()"></div>
      </div>
    </div>
    <div class="hot_products">
      <ul class="hot_">
        <li class="products" @click="searchProduct('寿司')">寿司</li>
        <li class="products" @click="searchProduct('三星')">三星</li>
        <li class="products" @click="searchProduct('iphone13 pro')">iphone13 pro</li>
        <li class="products" @click="searchProduct('牛肉')">牛肉</li>
        <li class="products" @click="searchProduct('佛牌')">佛牌</li>
        <li class="products" @click="searchProduct('耳机')">耳机</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {_getMenu, getShopCartData} from "../../http/apiProduct";

export default {
  name: "header",
  data() {
    return {
      menuList: null,
      list: null,
      shopCartTotal: null,
    }
  },
  mounted() {
    this.getMenu();
  },

  methods: {
    getMenu() {
      this.$store.dispatch('getMenu')
    },
    routerId(url){
      this.$router.push({
        name: url,
        query: {id: url}
      })
    alert(123);
    },
    onlineService() {
      alert('您好，正在为您联系客服。请稍等片刻！');
    },
    searchProduct(name) {
      this.$router.push({
        name: 'Search',
        query: {id: name}
      })
    }

  }
}
</script>

<style scoped>
.header {
  width: 100%;
}

.menu {
  width: 1200px;
  height: 50px;
  margin: 0 auto;
}

.menu_ {
  width: 1200px;
  display: flex;
  margin: 0 0;
  padding: 0;
}

.menu_li {
  font-size: 16px;
  width: 80px;
  line-height: 50px;
  text-align: center;
  list-style: none;
}

.service {
  color: #333;
}

.search {
  width: 1200px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}

.logo {
  width: 120px;
  height: 50px;
  text-align: center;
  font-size: 20px;
  line-height: 50px;
  background: antiquewhite;
}

.search-input {
  width: 800px;
  height: 36px;
  background: #f3f3f3;
  border-radius: 5px;
  padding: 7px 20px;
  display: flex;

}

input {
  width: 750px;
  text-align: left;
  border-radius: 5px;
  color: #333333;
  font-size: 18px;
}

.search-img {
  width: 35px;
  text-align: center;
  line-height: 25px;
  margin-left: 15px;
  font-size: 15px;
  /*background: url("../../assets/img/home_img/ss.png") no-repeat;*/
}

.search-right {
  width: 150px;
  height: 34px;
  display: flex;
  align-content: center;
  justify-content: space-around;
}

.line_service {
  width: 35px;
  height: 34px;
  text-align: center;
  border: 1px solid #efbf7f;
  border-radius: 3px;
  background: url("../../assets/img/home_img/s-icon.png") no-repeat;
}

.service-link {
  width: 35px;
  height: 34px;
  display: block;
}

.cart {
  width: 35px;
  height: 35px;
  text-align: center;
  position: relative;
  border: 1px solid #efbf7f;
  border-radius: 3px;
  background: url("../../assets/img/home_img/car-icon.png") no-repeat;
}

.cartNumber {
  color: #ff0000;
  font-size: 15px;
  position: relative;
  top: -13px;
  left: 15px;
}

.hot_products {
  width: 1200px;
  height: 30px;
  margin: 0 auto;
}

.hot_ {
  width: 870px;
  height: 30px;
  padding: 0;
  margin: 0 auto;
  display: flex;
}

.products {
  text-align: left;
  color: #999;
  padding-right: 20px;
  line-height: 30px;
  font-size: 15px;
  list-style: none;
}
</style>
