<template>
  <div class="mian">
    <Header></Header>
    <div class="content">
      <div class="content-">
        <div class="search">搜索结果'苹果'</div>
        <div class="result">0个关于”苹果“</div>
        <div class="data">
          <div class="data-box" v-for="index in productList">
            <img class="product_img" src="../../assets/img/xiangqing/xq.png"/>
            <h2 class="product_name">{{ index.name }}}</h2>
            <p class="product_parameter">{{ index.remark }}</p>
            <p class="product_price">{{ index.price }}</p>
          </div>
        </div>
        <div class="paging">
          <a-pagination :default-current="6" :total="500"/>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../home/header";
import Footer from "../home/footer";
import NoData from "./no-data";

export default {
  name: "search",
  components: {NoData, Footer, Header},
  data() {
    return {
      productList: [
        {name: '青苹果', remark: 'NO.1盒X10个', price: '159.00 Baht', imgUrl: ''}, {
          name: '青苹果',
          remark: 'NO.1盒X10个',
          price: '159.00 Baht',
          imgUrl: ''
        },
        {name: '青苹果', remark: 'NO.1盒X10个', price: '159.00 Baht', imgUrl: ''}, {
          name: '青苹果',
          remark: 'NO.1盒X10个',
          price: '159.00 Baht',
          imgUrl: ''
        },
        {name: '青苹果', remark: 'NO.1盒X10个', price: '159.00 Baht', imgUrl: ''}, {
          name: '青苹果',
          remark: 'NO.1盒X10个',
          price: '159.00 Baht',
          imgUrl: ''
        },
        {name: '青苹果', remark: 'NO.1盒X10个', price: '159.00 Baht', imgUrl: ''}, {
          name: '青苹果',
          remark: 'NO.1盒X10个',
          price: '159.00 Baht',
          imgUrl: ''
        },
        {name: '青苹果', remark: 'NO.1盒X10个', price: '159.00 Baht', imgUrl: ''}, {
          name: '青苹果',
          remark: 'NO.1盒X10个',
          price: '159.00 Baht',
          imgUrl: ''
        },
        {name: '青苹果', remark: 'NO.1盒X10个', price: '159.00 Baht', imgUrl: ''}, {
          name: '青苹果',
          remark: 'NO.1盒X10个',
          price: '159.00 Baht',
          imgUrl: ''
        },
        {name: '青苹果', remark: 'NO.1盒X10个', price: '159.00 Baht', imgUrl: ''}, {
          name: '青苹果',
          remark: 'NO.1盒X10个',
          price: '159.00 Baht',
          imgUrl: ''
        },
        {name: '青苹果', remark: 'NO.1盒X10个', price: '159.00 Baht', imgUrl: ''}, {
          name: '青苹果',
          remark: 'NO.1盒X10个',
          price: '159.00 Baht',
          imgUrl: ''
        },
        {name: '青苹果', remark: 'NO.1盒X10个', price: '159.00 Baht', imgUrl: ''}, {
          name: '青苹果',
          remark: 'NO.1盒X10个',
          price: '159.00 Baht',
          imgUrl: ''
        },
      ],
    }
  }
}
</script>

<style scoped lang="scss">
.mian {
  width: 100%;
  background: #ffffff;
}

.content {
  width: 100%;
  border-top: 1px solid #dfdada;

  .content- {
    width: 1200px;
    margin: 20px auto;

    .search {
      text-align: left;
      font-size: 18px;
      color: #999;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .result {
      text-align: left;
      font-size: 14px;
      color: #999;
    }

    .data {
      width: 100%;
      height: 880px;
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .data-box {
        width: 190px;
        height: 280px;
        margin-bottom: 13px;
        text-align: left;
        cursor: pointer;

        .product_img {
          width: 100%;
        }

        .product_name {
          padding-left: 15px;
          padding-top: 12px;
          margin-bottom: 5px;
          font-size: 15px;
          font-weight: 600;
        }

        .product_parameter {
          padding-left: 15px;
          margin-bottom: 5px;
          font-size: 15px;
          font-weight: 600;
        }

        .product_price {
          margin-bottom: 5px;
          padding-left: 15px;
          font-size: 14px;
          color: #c69d6b;
          font-weight: 600;
        }
      }

    }

    .paging {
      width: 980px;
      height: 50px;
      margin-top: 25px;
      margin-right: 0;
      text-align: right;
    }
  }
}
</style>

