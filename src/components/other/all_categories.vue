<template>
  <div class="content">
    <div class="categories">
      <div class="menu">
        <div class="menu-title">
          <a-icon type="unordered-list"/>
          当前类别
        </div>
        <div class="category">
          <ul v-for="(item, index) in classList" @click="selectClass(item,index)">
            <li v-bind:class="(index === getClassIndex) ? 'active' : ''">{{ item.className }}</li>
          </ul>
        </div>
      </div>
      <div class="content-box">
        <div class="product">
          <div class="product_list" v-for="item in this.$store.state.currentGoodData.list || []"
               :key="item.goodId"
          >
            <img class="product_img" v-bind:src="baseUrl+item.thumbImg[0].ImgRelativeUrl" alt=""
                 @click="checkProduct(item)"/>
            <h2 class="product_name">{{ item.goodsName }}</h2>
            <!--            <p class="product_parameter">{{index.describe}}</p>-->
            <p class="product_price">฿&nbsp;{{ item.price }}</p>
            <div class="addCar" @click="submit(item)"></div>
          </div>
        </div>
        <div class="paging">
          <a-pagination @change="onChange" :pageSize="pageConfig.pageSize" :current="pageConfig.pageNumber"
                        :total="this.$store.state.currentGoodData.total"/>
        </div>
        <a-result title="未能搜索相关商品" v-if="!this.$store.state.currentGoodData.total">
        </a-result>
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
      'pageConfig',
      'getClassIndex',
      'baseUrl'
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
      // const good = {
      //   check: true,
      //   goodNumber: parseInt(this.goodNumber),
      //
      // };
      // this.$store.commit('addGood', good);
      // setTimeout(() => {
      //   message.success('已添加至您的购物车');
      // }, 300);

      const carItem = {
        check: true,
        goodNumber: 1,
        good: item
      };
      this.$store.dispatch('addGood', carItem).then(() => {
        this.$message.success("添加成功")
      })
    },

    // 查看详情
    checkProduct(item) {
      this.$store.dispatch('setGoodItem', item).then(() => {
        this.$router.push({
          name: 'Product_details',
          params: {id: item.goodId}
        })
      })
    },
    selectClass(item, index) {
      this.$store.commit('setClassIndex',index);
      let paras;
      this.$store.dispatch('reSetPageConfig').then(() => {
        paras = Object.assign({}, {
          classId: item.classId.toString()
        }, this.$store.state.pageConfig)
        console.log('selectClass', paras)
        this.$store.dispatch('getGoodByClass', paras)
        this.$store.dispatch('toggleCurrentClassItem', item)
      })
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
        //justify-content: space-between;

        .product_list {
          width: 190px;
          height: 280px;
          margin-bottom: 13px;
          text-align: left;
          cursor: pointer;
          position: relative;
          margin-right:6px;

          &:hover {
            z-index: 2;
            box-shadow: 0 5px 5px 0 rgba(0, 0, 0, .25);
            transition: all .2s ease-in-out;
            //border: 1px solid #c69d6b;
          }

          .product_img {
            width: 190px;
            height: 190px;
          }

          .product_name {
            padding-left: 15px;
            padding-top: 12px;
            margin-bottom: 5px;
            font-size: 15px;
            font-weight: 600;
            color: #666;
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
            transition: all 0.2s linear;
            /*background: url("../../assets/img/home_img/ss.png") no-repeat;*/
            &:hover{
              transform: scale(1.3);
            }
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
