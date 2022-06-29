<template>
  <div class="mian">
    <Header></Header>
    <div class="content">
      <div class="content_box">
        <div class="position">
          <span class="text-color">首页</span>&nbsp;&nbsp;<a-icon type="double-right"/>
          <span class="text-color">超市</span>&nbsp;&nbsp;<a-icon type="double-right"/>
          <span class="text-color">蔬菜水果</span>&nbsp;&nbsp;<a-icon type="double-right"/>
          <span>{{goodData.goodsName}}</span>
        </div>
        <div class="product">
          <div class="product_">
            <div class="goods-show">
              <button class="pre">
                <a-icon type="left"/>
              </button>
              <div class="goods-img">
                <img src="../../assets/img/xiangqing/xiangqing.png" alt="">
              </div>
              <button class="next">
                <a-icon type="right"/>
              </button>
            </div>

            <div class="goods-information">
              <div class="goods-" v-if="goodData">

                <h2 class="goods-name">{{goodData.goodsName}}</h2>
                <p class="product_number">{{goodData.serialNumber}}</p>
                <h1 class="goods-price" >{{goodData.price}}</h1>
                <div class="exchange-number fr">
                  <span class="noselect" @click="changeNum(false)">-</span>
                  <a-input class="nmu-input" v-model="goodNumber"/>
                  <!--               <a-input-number class="nmu-input" id="inputNumber" v-model="value" :min="1" :max="10" @change="onChange" />-->
                  <span class="noselect" @click="changeNum(true)">+</span>
                </div>
                <button class="add-btn" @click="submit()">
                  <a-icon width="2em" height="2em" type="shopping-cart"/>
                  添加到购物车
                </button>
              </div>
            </div>
            <div class="share" @click="share()">
              <a-icon type="share-alt"/>
            </div>
          </div>
          <div class="imgList">
            <div class="product_img product_img-active">
              <img src="../../assets/img/xiangqing/xq1.png" alt=""/>
            </div>
            <div class="product_img">
              <img src="../../assets/img/xiangqing/xq1.png" alt=""/>
            </div>
            <div class="product_img">
              <img src="../../assets/img/xiangqing/xq1.png" alt=""/>
            </div>
          </div>
<!--          <div class="imgList">-->
<!--            <div class="product_img product_img-active" v-for="list in goodData.imgs[0]">-->
<!--              <img :src="list.img" alt=""/>-->
<!--            </div>-->
<!--          </div>-->
        </div>

        <div class="specifications" v-if="goodData">
          <h2>{{goodData.goodsName}}</h2>
          <ul >
            <li>{{goodData.describe}}</li>
          </ul>
        </div>
      </div>
      <div class="add-success" v-if="addProduct">
        <div class="add-box">
          <div class="success-icon"></div>
          <p class="add-success-text">商品已添加到您的购物车中</p>
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
import {getGoodsInfo} from '../../http/apiProduct';
export default {
  name: "product_details",
  components: {NoData, Footer, Header},
  props:['good'],
  data() {
    return {
      addProduct: false,
      //兑换商品数量
      goodNumber: 1,
      id: null,
      goodData:[],
    }
  },
  computed:{
  },
  created() {
    const id = this.$route.params.id;
    if(!id){
      this.goHistory()
      return;
    }
    this.id = id;
  },
  mounted() {
   this.init();
  },
  methods: {
    init(){
      getGoodsInfo({id:this.id}).then(res => {
        if (res.status !== 200){
          setTimeout(() => {
          },1000)
          return;
        }
        this.goodData = res.data.data;
      }) .catch(function (err){
        console.log(err)
      })
    },
    submit() {
      this.addProduct = true;
      const good = {
        check: true,
        goodId:this.goodData.goodId,
        goodsName:this.goodData.goodsName,
        goodNumber: parseInt(this.goodNumber),
        price:this.goodData.price,

      };
      this.$store.commit('addGood', good);
      setTimeout(() => {
        this.addProduct = false;
      }, 1000);
    },

    share() {
      alert('已经分享至微信好友！')
    },
    goHistory(){
      this.$router.go(-1);
    },
    /**
     * @description: 改变商品数量
     * @author: table
     * @param {boolean} bol true => +; false => -
     */
    changeNum(bol) {
      return bol ? this.goodNumber++ : this.goodNumber > 1 ? this.goodNumber-- : '';
    },

  },

}
</script>

<style scoped lang="scss">
.mian {
  width: 100%;
  background: #ffffff;
}
.content {
  width: 100%;
  height: 760px;
  border-top: 1px solid #dfdada;
  background: #f3f3f3;

  .content_box {
    width: 1200px;
    height: 700px;
    margin: 30px auto 20px auto;
    background: #fff;
    border-radius: 15px;
    padding: 30px 100px 30px 100px;

    .position {
      text-align: left;
      color: #999;

      span {
        font-size: 15px;
        padding-left: 5px;
        color: #999;
        font-weight: 700;
      }

      .text-color {
        color: #efbf7f;
      }
    }

    .product {
      width: 100%;
      height: 410px;
      display: flex;
      margin-top: 15px;
      flex-wrap: wrap;
      border-bottom: 1px solid #dfdada;

      .product_ {
        width: 100%;
        height: 300px;
        display: flex;
        position: relative;

        .goods-show {
          width: 360px;
          height: 310px;
          border: 1px solid #dfdada;
          border-radius: 7px;
          position: relative;

          .goods-img {
            width: 350px;
            height: 300px;
            padding: 10px;

            img {
              width: 100%;
            }
          }

          button {
            width: 25px;
            height: 25px;
            border: 1px solid #dfdada;
          }

          .pre {
            position: absolute;
            left: 0;
            top: 150px;
            color: #dfdada;
            border-radius: 0 15px 15px 0;
            background: #333;
            opacity: .5;
          }

          .next {
            position: absolute;
            right: 0;
            top: 150px;
            color: #dfdada;
            border-radius: 15px 0 0 15px;
            background: #333;
            opacity: .5;
          }
        }

        .goods-information {
          width: 300px;
          margin-left: 50px;

          .goods- {
            text-align: left;
            display: flex;
            flex-wrap: wrap;

            .goods-name {
              width: 300px;
              font-size: 18px;
              color: #000;
              font-weight: 700;
              margin-top: 5px;
              margin-bottom: 10px;
            }

            .product_number {
              width: 300px;
              font-size: 15px;
              color: #999;
              margin-bottom: 40px;
            }

            .goods-price {
              font-size: 35px;
              color: #c8a969;
              font-weight: 700;
              margin-bottom: 20px;
              width: 300px;
            }

            .exchange-number {
              width: 180px;
              height: 37px;
              line-height: 37px;
              border-radius: 6px;
              margin-right: 38px;
              font-size: 20px;
              color: #999;
              display: flex;
              margin-bottom: 25px;

              span {
                float: left;
                width: 35px;
                background: #fff;
                text-align: center;
                cursor: pointer;
                border: 1px solid #e8e4e4;

                &:first-child {
                  border-radius: 6px 0 0 6px;
                }

                &:last-child {
                  border-radius: 0 6px 6px 0;

                }
              }

              .nmu-input {
                height: 37px;
                width: 80px;
                background: #f3f3f3;
                text-align: center;
                font-size: 17px;
              }

              .nmu-input:hover {
                border-color: #9e9e9e;
              }

              .nmu-input:focus {
                border-color: #9e9e9e;
              }
            }

            .add-btn {
              width: 200px;
              height: 45px;
              font-size: 17px;
              color: #fff;
              border: 1px solid #C8a969;
              border-radius: 9px;
              background: #c39762;
              cursor: pointer;
            }
          }

        }

        .share {
          width: 26px;
          height: 26px;
          line-height: 26px;
          color: #999;
          position: absolute;
          right: 0;
          top: 20px;
          border: 1px solid #d7d5d5;
          border-radius: 4px;
        }
      }

      .imgList {
        display: flex;

        .product_img {
          width: 53px;
          height: 53px;
          border: 1px solid #dfdada;
          border-radius: 4px;
          margin-right: 15px;

          img {
            width: 100%;
          }
        }

        .product_img-active {
          border: 1px solid #efbf7f;
        }
      }
    }

    .specifications {
      margin-top: 15px;

      h2 {
        font-size: 18px;
        font-weight: 700;
        color: black;
        text-align: left;
        margin-bottom: 10px;
      }

      ul {
        li {
          color: #999;
          padding: 3px 0;
          font-size: 15px;
          list-style: disc;
          text-align: left;
        }
      }
    }
  }

  .add-success {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(180, 180, 180, .3);
    z-index: 99999;

    .add-box {
      width: 420px;
      height: 220px;
      background: #4d4d4d;
      color: #fff;
      border-radius: 10px;
      position: fixed;
      top: 35%;
      left: 38%;
      //opacity: 0.6;
      .success-icon {
        width: 71px;
        height: 71px;
        background: url("../../assets/img/xiangqing/success-icon.jpg");
        border-radius: 50px;
        margin: 50px auto 30px auto;
      }

      .add-success-text {
        font-size: 18px;
        font-weight: 700;
        text-align: center;
      }
    }
  }
}
</style>
