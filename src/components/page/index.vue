<template>
  <div class="content">
    <div class="content-top">
      <div class="banner" @click="goKingPower()"></div>
      <div class="banners_right">
        <div class="banners_right1" @click="goDigitalProduct()"></div>
        <div class="banners_right2" @click="goMarket()"></div>
      </div>
    </div>
    <div class="content-center">
      <div class="content-center-top">
        <div class="content-center-top-left" @click="checkProduct('iphone13ProMax')">
          <a @click="addProduct()"></a>
        </div>
        <div class="content-center-top-right" @click="checkProduct('AppleWatchSeries7')">
          <a @click="addProduct()"></a>
        </div>
      </div>
      <div class="content-center-botton">
        <div class="content-center-botton-product" >
          <h2>B.ZERO1戒指</h2>
          <p>18克拉玫瑰金双环戒指</p>
          <b>54,300.00 Baht</b>
          <button @click="addProduct()">添加到购物车</button>
          <img src="../../assets/img/home_img/content_center_bottom1.png"
               @click="checkProduct('B.ZERO1戒指')"/>
        </div>
        <div class="content-center-botton-product" >
          <h2>SK-II套装</h2>
          <p>护肤精华露与精华霜套装</p>
          <b>10,640.00 Baht</b>
          <button @click="addProduct()">添加到购物车</button>
          <img src="../../assets/img/home_img/content_center_bottom2.png"
               @click="checkProduct('SK-II套装')"/>
        </div>
        <div class="content-center-botton-product" >
          <h2>阿玛尼男士手表</h2>
          <p>Renato都会经典湛蓝多功能</p>
          <b>6,5550.00 Baht</b>
          <button @click="addProduct()">添加到购物车</button>
          <img src="../../assets/img/home_img/content_center_bottom3.png"
               @click="checkProduct('阿玛尼男士手表')"/>
        </div>
        <div class="content-center-botton-product" >
          <h2>圣罗兰Y男士淡香水</h2>
          <p>淡香水EDT-100ML</p>
          <b>3,740.00 Baht</b>
          <button @click="addProduct()">添加到购物车</button>
          <img src="../../assets/img/home_img/content_center_bottom4.png"
               @click="checkProduct('圣罗兰Y男士淡香水')"/>
        </div>
      </div>
    </div>
    <div class="content-bottom">
      <div class="content-bottom-product" v-for="index in productList" @click="checkProduct(index.goodId)">
        <img src="../../assets/img/home_img/content_center_bottom1.png"/>
        <h2>{{ index.name }}</h2>
        <p>{{ index.prices }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {getGoodsInfo, getDate,_getClassesPage } from "../../http/apiProduct";
import {message} from "ant-design-vue";

export default {
  name: "index",
  data() {
    return {
      pList: [
        {name: 'B.ZERO1戒指', remark: '18克拉玫瑰金双环戒指', prices: '54,300.00', imgUrl: ''},
        {name: 'SK-II套装', remark: '护肤精华露与精华霜套装', prices: '10,640.00', imgUrl: ''},
        {name: '阿玛尼男士手表', remark: 'Renato都会经典湛蓝多功能', prices: '6,5550.00', imgUrl: ''},
        {name: '圣罗兰Y男士淡香水', remark: '淡香水EDT-100ML', prices: '3,740.00', imgUrl: ''}
      ],
      productList: [
        {name: 'B.ZERO1戒指', remark: '18克拉玫瑰金双环戒指', prices: '54,300.00 Baht', imgUrl: '', id: '123'},
        {name: 'B.ZERO1戒指', remark: '18克拉玫瑰金双环戒指', prices: '54,300.00 Baht', imgUrl: '', id: '123'},
        {name: 'B.ZERO1戒指', remark: '18克拉玫瑰金双环戒指', prices: '54,300.00 Baht', imgUrl: '', id: '123'},
        {name: 'B.ZERO1戒指', remark: '18克拉玫瑰金双环戒指', prices: '54,300.00 Baht', imgUrl: '', id: '123'},
        {name: 'B.ZERO1戒指', remark: '18克拉玫瑰金双环戒指', prices: '54,300.00 Baht', imgUrl: '', id: '123'},
        {name: 'B.ZERO1戒指', remark: '18克拉玫瑰金双环戒指', prices: '54,300.00 Baht', imgUrl: '', id: '123'},
        {name: 'B.ZERO1戒指', remark: '18克拉玫瑰金双环戒指', prices: '54,300.00 Baht', imgUrl: '', id: '123'},
        {name: 'B.ZERO1戒指', remark: '18克拉玫瑰金双环戒指', prices: '54,300.00 Baht', imgUrl: '', id: '123'},
        {name: 'B.ZERO1戒指', remark: '18克拉玫瑰金双环戒指', prices: '54,300.00 Baht', imgUrl: '', id: '123'},
        {name: 'B.ZERO1戒指', remark: '18克拉玫瑰金双环戒指', prices: '54,300.00 Baht', imgUrl: '', id: '123'},
      ],
      goodData: null,

    }
  },
  mounted() {

  },
  methods: {

    // 查看详情
    checkProduct(id) {
      this.$router.push({
        name: 'Product_details',
        params: {id: id}
      })
    },
    addProduct() {
      const good = {
        check: true,
        goodId: this.goodData.goodId,
        goodsName: this.goodData.goodsName,
        goodNumber: parseInt(this.goodNumber),
        price: this.goodData.price,
        img: this.goodData.img
      };
      this.$store.commit('addGood', good);
      setTimeout(() => {
        message.success('已添加至您的购物车');
      }, 300);
    },
    goKingPower() {
      this.$router.push({
        name: 'King-power',
      })
    },
    goDigitalProduct() {
      this.$router.push({
        name: 'Digital-product',
      })
    },
    goMarket() {
      this.$router.push({
        name: 'Market',
      })
    },
    initGetClassesPage() {
      _getClassesPage({
        pageSize: 10,
        pageNumber: 1,
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
    },
  }
}
</script>

<style scoped lang="scss">
.content {
  width: 1200px;
  margin: 0 auto;

  .content-top {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;

    .banner {
      width: 788px;
      height: 226px;
      background: url("../../assets/img/home_img/content_top-banner.png");
    }

    .banners_right {
      width: 400px;
      height: 250px;

      .banners_right1 {
        width: 400px;
        height: 120px;
        background: url("../../assets/img/home_img/content_top-banner-right1.png") no-repeat;
      }

      .banners_right2 {
        width: 400px;
        height: 320px;
        background: url("../../assets/img/home_img/content_top-banner-right2.png") no-repeat;
      }

      a {
        width: 350px;
        height: 120px;
      }
    }
  }

  .content-center {
    width: 100%;
    background: #f3f3f3;

    .content-center-top {
      display: flex;
      justify-content: space-between;

      .content-center-top-right {
        width: 464px;
        height: 300px;
        background: url("../../assets/img/home_img/content_center_right.png");

        a {
          width: 110px;
          height: 25px;
          margin-bottom: 10px;
          display: block;
          color: #c69d6b;
          font-size: 14px;
          margin-left: 30px;
          margin-top: 100px;
        }
      }

      .content-center-top-left {
        width: 700px;
        height: 300px;
        background: url("../../assets/img/home_img/content_center_l.png");

        a {
          width: 110px;
          height: 25px;
          margin-bottom: 10px;
          display: block;
          color: #c69d6b;
          font-size: 14px;
          margin-left: 30px;
          margin-top: 100px;
        }
      }
    }

    .content-center-botton {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;

      .content-center-botton-product {
        width: 290px;
        height: 380px;
        text-align: left;
        border: 1px solid #e6e6e6;
        border-radius: 5px;
        background: #f3f3f3;

        h2 {
          padding-left: 15px;
          padding-top: 12px;
          margin-bottom: 5px;
          font-size: 17px;
          font-weight: 600;
        }

        p {
          margin-bottom: 5px;
          padding-left: 14px;
          font-size: 15px;
          color: #999;
        }

        b {
          margin-bottom: 5px;
          padding-left: 15px;
          font-size: 16px;
          color: #c69d6b;
        }

        button {
          margin-bottom: 10px;
          display: block;
          color: #c69d6b;
          font-size: 14px;
          margin-left: 16px;
          border: 1px solid #c69d6b;
          border-radius: 14px;
        }

        img {
          width: 100%;
          margin: 0 auto;
        }
      }
    }
  }

  .content-bottom {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 15px;

    .content-bottom-product {
      width: 235px;
      height: 300px;
      text-align: left;

      img {
        width: 100%;
      }

      h2 {
        padding-left: 15px;
        padding-top: 12px;
        margin-bottom: 5px;
        font-size: 17px;
        font-weight: 600;
      }

      p {
        margin-bottom: 5px;
        padding-left: 15px;
        font-size: 16px;
        color: #c69d6b;
      }
    }
  }
}
</style>
