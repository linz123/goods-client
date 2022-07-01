<template>
  <div class="content">
    <div class="categories">
      <div class="menu">
        <div class="menu-title">
          <a-icon type="unordered-list"/>
          当前类别
        </div>
        <div class="category">
          <ul v-for="(item, index) in classList" @click="selectClass(item)">
            <li v-bind:class="(index === currentPayerIndex) ? 'active' : ''">{{ item.className }}</li>
          </ul>
        </div>
      </div>
      <div class="content-box">
        <div class="product">
          <div class="product_list" v-for="item in this.$store.state.currentGoodData.list || []"
               :key="item.goodId"
          >
            <img class="product_img" v-bind:src="'//192.168.20.254:8080'+item.thumbImg[0].ImgRelativeUrl" alt=""
                 @click="checkProduct(item.goodId)"/>
            <h2 class="product_name">{{ item.goodsName + "\|||||||||" + item.goodId }}</h2>
            <!--            <p class="product_parameter">{{index.describe}}</p>-->
            <p class="product_price">{{ item.price }}</p>
            <div class="addCar" @click="submit(item)"></div>
          </div>
        </div>
        <div class="paging">
          <a-pagination @change="onChange" :default-current="pageConfig.pageNumber"
                        :total="this.$store.state.currentGoodData.total"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {_getClassesPage, getDate} from "../../http/apiProduct";
import {message} from 'ant-design-vue';
import {mapGetters} from 'vuex'

export default {
  name: "all_categories",

  data() {
    return {
      currentPayerIndex: 0,
      productList: [],
      goodData: []
    }
  },
  mounted() {
    // this.getProDate();
    // this.initGetClassesPage();
  },
  computed: {
    ...mapGetters([
      'classList',
      'pageConfig'
    ])
  },
  methods: {

    //获取数据
    getProDate() {
      getDate({
        pageSize: 10,
        pageNumber: 1,
      })
        .then(res => {
          if (!res) {
            return;
          }
          this.productList = res.data.data;
        })
        .catch(err => {
          console.log(err);
        })
    },
    //侧边栏分类
    initGetClassesPage() {
      // _getClassesPage({
      //   pageSize: 10,
      //   pageNumber: 1,
      // })
      //   .then(res => {
      //     this.classesList = res.data.data;
      //     console.log('分类',res.data)
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   })
    },
    submit(item) {
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

    // 查看详情
    checkProduct(id) {
      this.$router.push({
        name: 'Product_details',
        params: {id: id}
      })
    },
    selectClass(item) {
      let paras = Object.assign({}, {
        classId: item.classId.toString()
      }, this.$store.state.pageConfig)
      console.log('selectClass', paras)
      this.$store.dispatch('getGoodByClass', paras)
      this.$store.dispatch('toggleCurrentClassItem', item)
    },
    onChange(current, pageSize) {
      this.$store.dispatch('changePageConfig', {
        pageSize,
        pageNumber: current
      })
      console.log('current', current)
      let paras = Object.assign({}, {
        classId: this.$store.state.currentClass.classId.toString()
      }, this.$store.state.pageConfig)
      this.$store.dispatch('getGoodByClass', paras)
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
          height: 280px;
          margin-bottom: 13px;
          text-align: left;
          cursor: pointer;
          position: relative;

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

          .addCar {
            position: absolute;
            bottom: 14px;
            right: 10px;
            width: 35px;
            height: 35px;
            text-align: center;
            background: url("../../assets/img/home_img/car-icon.png") no-repeat;
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
