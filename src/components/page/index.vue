<template>
  <div class="content">
    <div class="content-top-box">
      <div class="content-top">
        <div class="banner" v-if="recommendList[0][1]" :style="bannerList[0]" @click="checkProduct(recommendList[0][1])"></div>
        <div class="banners_right">
          <div class="banners_right1" v-if="recommendList[0][2]" :style="bannerList[1]" @click="checkProduct(recommendList[0][2])"></div>
          <div class="banners_right2" v-if="recommendList[0][3]"  :style="bannerList[2]" @click="checkProduct(recommendList[0][3])"></div>
        </div>
      </div>
    </div>

    <div class="content-center-box">
      <div class="content-center">
        <div class="content-center-top">
          <div class="content-center-top-left" v-if="recommendList && recommendList[1][0]" :style="bannerList[3]" @click="checkProduct(recommendList[1][0])">
            <div class="center-top-product">
              <h2>{{ recommendCenter1.goodsName }}</h2>
              <p>{{ recommendCenter1.title }}</p>
              <b>{{ recommendCenter1.price }} Baht</b>
              <button @click.stop="addProduct(recommendCenter1)">添加到购物车</button>
            </div>

          </div>
          <div class="content-center-top-right" v-if="recommendList && recommendList[1][1]"  :style="bannerList[4]" @click="checkProduct(recommendList[1][1])">
            <div class="center-top-product">
              <h2>{{ recommendCenter2.goodsName }}</h2>
              <p>{{ recommendCenter2.title }}</p>
              <b>{{ recommendCenter2.price }} Baht</b>
              <button @click.stop="addProduct(recommendCenter2)">添加到购物车</button>
            </div>
          </div>
        </div>
        <div class="content-center-botton">
          <div class="content-center-botton-product" v-if="recommend2" v-for="item in recommend2" :key="item.goodId">
            <h2>{{ item.goodsName }}</h2>
            <p>{{ item.title }}</p>
            <b>{{ item.price }} Baht</b>
            <button @click="addProduct(item)">添加到购物车</button>
            <img :src='baseUrl + item.thumbImg[0].ImgRelativeUrl'
                 @click="checkProduct(item)"/>
          </div>
        </div>
      </div>
    </div>

    <div class="content-bottom-box">
      <div class="content-bottom">
        <div class="content-bottom-product" v-if="recommend3" v-for="item in recommend3" @click="checkProduct(item)">
          <img :src="baseUrl + item.thumbImg[0].ImgRelativeUrl"/>
          <h2>{{ item.goodsName }}</h2>
          <p>{{ item.price }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {_getClassesPage} from "../../http/apiProduct";
import {message} from "ant-design-vue";
import {mapGetters} from "vuex";

export default {
  name: "index",
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'recommendList',
      'baseUrl'
    ]),
    bannerList() {
      return [
        {backgroundImage: "url(" + this.baseUrl + (this.recommendList[0] && this.recommendList[0][0] && this.recommendList[0][0].thumbImg[0].ImgRelativeUrl) + ")"},
        {backgroundImage: "url(" + this.baseUrl + (this.recommendList[0] && this.recommendList[0][1] && this.recommendList[0][1].thumbImg[0].ImgRelativeUrl) + ")"},
        {backgroundImage: "url(" + this.baseUrl + (this.recommendList[0] && this.recommendList[0][2] && this.recommendList[0][2].thumbImg[0].ImgRelativeUrl) + ")"},
        {backgroundImage: "url(" + this.baseUrl + (this.recommendList[0] && this.recommendList[1][0] && this.recommendList[0][2].thumbImg[0].ImgRelativeUrl) + ")"},
        {backgroundImage: "url(" + this.baseUrl + (this.recommendList[0] && this.recommendList[1][1] && this.recommendList[0][2].thumbImg[0].ImgRelativeUrl) + ")"},
      ]
    },
    recommendCenter1() {
      return this.recommendList[1][0] || undefined;
    },
    recommendCenter2() {
      return this.recommendList[1][1] || undefined;
    },
    recommend2() {
      return this.recommendList[1].slice(2) || undefined;
    },
    recommend3() {
      return this.recommendList[2] || undefined;
    }

  },
  mounted() {
    // console.log('recommendList1111', this.recommendList)
  },
  created() {
    this.getRecommend()
  },
  methods: {

    // 查看详情
    checkProduct(item) {
      // 查看详情
      this.$store.dispatch('setGoodItem', item).then(() => {
        this.$router.push({
          name: 'Product_details',
          params: {id: item.goodId}
        })
      })
    },
    addProduct(item) {
      // const good = {
      //   check: true,
      //   goodId: this.goodData.goodId,
      //   goodsName: this.goodData.goodsName,
      //   goodNumber: parseInt(this.goodNumber),
      //   price: this.goodData.price,
      //   img: this.goodData.img
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
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
    },

    // 修改


    getRecommend() {
      this.$store.dispatch('getRecommend');
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  width: 100%;

  .content-top-box {
    width: 100%;
    margin: 15px 0;

    .content-top {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      height: 230px;
      justify-content: space-around;

      .banner {
        width: 788px;
        height: 230px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }

      .banners_right {
        width: 400px;
        height: 230px;

        .banners_right1 {
          width: 400px;
          height: 110px;
          margin-bottom: 10px;
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }

        .banners_right2 {
          width: 400px;
          height: 110px;
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }

        a {
          width: 350px;
          height: 120px;
        }
      }
    }
  }

  .content-center-box {
    width: 100%;
    margin: 20px 0;
    background: #f3f3f3;

    .content-center {
      width: 1200px;
      margin: 0 auto;
      padding-top: 40px;
      height: 835px;

      .content-center-top {
        display: flex;
        justify-content: space-between;

        .content-center-top-right {
          width: 464px;
          height: 300px;
          border-radius: 8px;
          padding: 25px;
          background-repeat: no-repeat;
          background-size: 100% 100%;

          .center-top-product {
            width: 200px;
            height: 180px;
            text-align: left;

            h2 {
              font-size: 17px;
              font-weight: 600;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }

            p {
              height: 30px;
              line-height: 30px;
              font-size: 15px;
              color: #999;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }

            b {
              font-size: 16px;
              color: #c69d6b;
            }

            button {
              width: 110px;
              height: 25px;
              display: block;
              color: #c69d6b;
              font-size: 14px;
              margin-top: 10px;
              background: none;
              border: 1px solid #c69d6b;
              border-radius: 14px;
            }
          }

        }

        .content-center-top-left {
          width: 700px;
          height: 300px;
          border-radius: 8px;
          padding: 25px;
          background-repeat: no-repeat;
          background-size: 100% 100%;

          .center-top-product {
            width: 200px;
            height: 180px;
            text-align: left;

            h2 {
              font-size: 17px;
              font-weight: 600;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }

            p {
              height: 30px;
              line-height: 30px;
              font-size: 15px;
              color: #999;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }

            b {
              font-size: 16px;
              color: #c69d6b;
            }

            button {
              width: 110px;
              height: 25px;
              display: block;
              color: #c69d6b;
              font-size: 14px;
              margin-top: 10px;
              background: none;
              border: 1px solid #c69d6b;
              border-radius: 14px;
            }
          }

        }
      }

      .content-center-botton {
        margin-top: 38px;
        display: flex;
        justify-content: space-between;

        .content-center-botton-product {
          width: 280px;
          height: 420px;
          text-align: left;
          border: 1px solid #e6e6e6;
          border-radius: 8px;
          background: #f3f3f3;
          padding: 25px;

          h2 {
            font-size: 17px;
            font-weight: 600;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          p {
            height: 30px;
            line-height: 30px;
            font-size: 15px;
            color: #999;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          b {
            margin-bottom: 5px;
            font-size: 16px;
            color: #c69d6b;
          }

          button {
            margin-bottom: 20px;
            margin-top: 12px;
            display: block;
            color: #c69d6b;
            font-size: 14px;
            border: 1px solid #c69d6b;
            border-radius: 14px;
          }

          img {
            width: 100%;
            height: 230px;
            margin: 0 auto;
          }
        }
      }
    }
  }

  .content-bottom-box {
    width: 100%;
    margin: 30px 0;

    .content-bottom {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .content-bottom-product {
        width: 235px;
        height: 280px;
        text-align: left;

        img {
          width: 235px;
          height: 200px;
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

}
</style>
