<template>
  <div class="mian">
    <Header></Header>
    <div class="content">
      <div class="content_box">
        <div class="position"><ForwardOutlined />
          <span class="text-color">{{getCurrentMenu.name}}</span>&nbsp;&nbsp;<a-icon type="caret-right"/>
          <span class="text-color">{{getCurrentClass.className}}</span>&nbsp;&nbsp;<a-icon type="caret-right"/>
          <span>{{goodItemDetail.goodsName}}</span>
        </div>
        <div class="product">
          <div class="product_">
<!--            <div class="goods-show">-->
<!--              <button class="pre" @click="prevDetails()">-->
<!--                <a-icon type="left" />-->
<!--              </button>-->
<!--              <a-carousel arrows dots-class="slick-dots slick-thumb">-->
<!--                <a slot="customPaging" slot-scope="props">-->
<!--                  <img :src="getImgUrl(props.i)"/>-->
<!--                </a>-->
<!--                <div v-for="item in goodItemDetail.img">-->
<!--                  <img :src="baseUrl+item.ImgRelativeUrl" style="height: 280px;width: 280px;"/>-->
<!--                </div>-->
<!--              </a-carousel>-->
<!--              <button class="next" @click="nextDetails()">-->
<!--                <a-icon type="right" />-->
<!--              </button>-->
<!--            </div>-->
            <div class="goods-show">
              <a-carousel arrows dots-class="slick-dots slick-thumb">
<!--                <button class="pre" @click="prevDetails()">-->
<!--                  <a-icon type="left"/>-->
<!--                </button>-->
                <a slot="customPaging" slot-scope="props">
                  <img :src="getImgUrl(props.i)"/>
                </a>
<!--                <button class="next" @click="nextDetails()">-->
<!--                  <a-icon type="right"/>-->
<!--                </button>-->
                <div v-for="item in goodItemDetail.img">
                  <img :src="baseUrl+item.ImgRelativeUrl" style="height: 280px;width: 280px;"/>
                </div>
              </a-carousel>
            </div>


            <div class="goods-information">
              <div class="goods-" v-if="goodItemDetail">

                <h2 class="goods-name">{{goodItemDetail.goodsName}}</h2>
                <p class="product_number">{{goodItemDetail.serialNumber}}</p>
                <h1 class="goods-price" > ฿ {{goodItemDetail.price}}</h1>
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
        </div>

        <div class="specifications" v-if="goodItemDetail">
          <h2>{{goodItemDetail.title}}</h2>
          <ul >
            <li v-html="goodItemDetail.describe"></li>
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
import {mapGetters} from "vuex";

export default {
  name: "product_details",
  components: {NoData, Footer, Header},
  // props:['good'],
  data() {
    return {
      addProduct: false,
      //兑换商品数量
      goodNumber: 1,
      id: null,
      goodData:[],
      selectIndex:0,
      goodsImg:[]
    }
  },
  computed:{
    ...mapGetters([
      'goodItemDetail',
      'baseUrl',
      'getCurrentMenu',
      'getCurrentClass'
    ])
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
    console.log('baseUrl',this.baseUrl)
    this.goodsImg = this.goodItemDetail.img;
  },
  methods: {

    submit() {
      this.addProduct = true;
      const carItem = {
        check: true,
        goodNumber: parseInt(this.goodNumber),
        good: this.goodItemDetail
      };
      this.$store.dispatch('addGood', carItem).then(()=>{
        setTimeout(() => {
          this.addProduct = false;
        }, 1000);
      })
    },
    prevDetails() {
      alert(111)
      this.selectIndex--;
      if (this.selectIndex < 0) {
        this.selectIndex = this.goodsImg.length - 1;
      }
    },

    nextDetails() {
      alert(222)
      this.selectIndex++;
      if (this.selectIndex > this.goodsImg.length - 1) {
        this.selectIndex = 0;
      }
    },
    share() {
      // alert('已经分享至微信好友！')
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
    getImgUrl(i) {
      return this.baseUrl+this.goodItemDetail.img[i].ImgRelativeUrl;
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
  //height: 760px;
  border-top: 1px solid #dfdada;
  background: #f3f3f3;
  padding-bottom: 30px;

  .content_box {
    width: 1200px;
    //height: 700px;
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
        //justify-content: space-between;
        .goods-show {
          width: 350px;
          height: 315px;
          //border: 1px solid #dfdada;
          border-radius: 7px;
          position: relative;
          margin-right: 150px;
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
          .goods-img {
            width: 350px;
            height: 315px;
            padding: 10px;

            img {
              width: 330px;
              height:295px;
            }
          }

          button {
            width: 25px;
            height: 25px;
            border: 1px solid #dfdada;
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
          list-style: none;
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
.ant-carousel >>> .slick-dots {
  height: auto;
}
.ant-carousel >>> .slick-slide img {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}
.ant-carousel >>> .slick-thumb {
  bottom: -45px;
}
.ant-carousel >>> .slick-thumb li {
  width: 60px;
  height: 45px;
}
.ant-carousel >>> .slick-thumb li img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}
.ant-carousel >>> .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
</style>
