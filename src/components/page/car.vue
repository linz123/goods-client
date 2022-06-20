<template>
  <div class="content">
    <div class="categories">
      <div class="menu">
        <div class="menu-title">
          <i></i>
          所有类别
        </div>
        <div class="category">
          <ul v-for="(item, index) in menuList">
            <li v-bind:class="(index === currentPayerIndex) ? 'active' : ''">{{ item }}</li>
          </ul>
        </div>
      </div>
      <div class="content-box">
        <div class="product">
          <div class="product_list" v-for="index in productList" @click="checkProduct(index.goodId)">
            <img class="product_img" src="../../assets/img/xiangqing/aierfa.jpg"/>
            <h2 class="product_name">{{ index.name }}</h2>
                        <p class="product_parameter">{{index.remark}}</p>
            <!--            <p class="product_price">{{index.price}}</p>-->
          </div>
        </div>
        <div class="paging">
          <a-pagination :default-current="6" :total="500" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "car",
  data() {
    return {
      currentPayerIndex: 0,
      productList: [
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '', goodId:'222'}, {
          name: '埃尔法',
          remark: '1小时1500泰铢，日租8000泰铢',
          price: '1500Baht/h',
          imgUrl: '',
          goodId:'222'
        },
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '', goodId:'222'}, {
          name: '埃尔法',
          remark: '1小时1500泰铢，日租8000泰铢',
          price: '1500Baht/h',
          imgUrl: '',
          goodId:'222'
        },
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '', goodId:'222'}, {
          name: '埃尔法',
          remark: '1小时1500泰铢，日租8000泰铢',
          price: '1500Baht/h',
          imgUrl: '',
         goodId: '222'
         },
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '', goodId:'222'}, {
          name: '埃尔法',
          remark: '1小时1500泰铢，日租8000泰铢',
          price: '1500Baht/h',
          imgUrl: '',
          goodId:'222'
        },
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '', goodId:'222'}, {
          name: '埃尔法',
          remark: '1小时1500泰铢，日租8000泰铢',
          price: '1500Baht/h',
          imgUrl: '',
          goodId:'222'
        },
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '', goodId:'222'}, {
          name: '埃尔法',
          remark: '1小时1500泰铢，日租8000泰铢',
          price: '1500Baht/h',
          imgUrl: '',
          goodId:'222'
        },
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '', goodId:'222'}, {
          name: '埃尔法',
          remark: '1小时1500泰铢，日租8000泰铢',
          price: '1500Baht/h',
          imgUrl: '',
          goodId:'222'
        },
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '', goodId:'222'}, {
          name: '埃尔法',
          remark: '1小时1500泰铢，日租8000泰铢',
          price: '1500Baht/h',
          imgUrl: '',
          goodId:'222'
        },
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '', goodId:'222'}, {
          name: '埃尔法',
          remark: '1小时1500泰铢，日租8000泰铢',
          price: '1500Baht/h',
          imgUrl: '',
          goodId:'222'
        },
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '', goodId:'222'}, {
          name: '埃尔法',
          remark: '1小时1500泰铢，日租8000泰铢',
          price: '1500Baht/h',
          imgUrl: '',
          goodId:'222'
        },
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '', goodId:'222'}, {
          name: '埃尔法',
          remark: '1小时1500泰铢，日租8000泰铢',
          price: '1500Baht/h',
          imgUrl: '',
          goodId:'222'
        },
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '', goodId:'222'}, {
          name: '埃尔法',
          remark: '1小时1500泰铢，日租8000泰铢',
          price: '1500Baht/h',
          imgUrl: '',
          goodId:'222'
        },
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '',  goodId:'222'},
      ],
      menuList: ['泰国菜', '中餐', '寿司', '印度菜'],

    }
  },
  methods:{
    // 查看详情
    checkProduct(id) {
      this.$router.push({
        name: 'Product_details',
        params: {id}
      })
    }

  }
}
</script>
<style scoped lang="scss">
.content {
  width: 100%;
  border-top: 1px solid #dfdada;

  .categories {
    width: 1200px;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;

    .menu {
      width: 180px;
      height: 800px;
      background: #fbf7f7;

      .menu-title {
        margin-top: 15px;
        padding: 0 15px 10px 15px;
        margin-bottom: 10px;
        border-bottom: 1px solid #ddd;
        font-size: 15px;
        color: black;
        font-weight: 700;
        text-align: left;
      }

      .category {
        ul {
          li {
            text-align: left;
            padding: 5px 15px;
            font-size: 15px;
            font-weight: 600;
            color: #666;
            cursor: pointer;
          }

          .active {
            color: #efbf7f;
          }
        }
      }
    }

    .content-box {
      width: 1000px;
      min-height: 900px;

      .product {
        width: 980px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .product_list {
          width: 190px;
          //height: 240px;
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
}
</style>
