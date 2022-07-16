<template>
  <div class="mian">
    <Header></Header>
    <div class="shopping-cart">
      <div class="content">
        <table>
          <thead>
          <tr>
            <th style="width: 100px">选项</th>
            <th style="width: 380px">商品</th>
            <th>单价</th>
            <th>数量</th>
            <th>小计</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,index) in carList">
            <td>
              <!--                <a-checkbox :checked="item.check" @click="aloncheck(index)"></a-checkbox>-->
              <a-checkbox :checked="item.check"
                          @click="singleCheck(item.good.goodId)"></a-checkbox>
            </td>
            <td style="text-align: left">
              <img src="../../assets/img/xiangqing/xq1.png" alt=""/>
              {{ item.good.goodsName }}
            </td>
            <td>{{ item.good.price }}</td>
            <td>
              <button @click="syncGood(item,false)"
                      :disabled="item.good.goodNumber<=1">-
              </button>
              {{ item.goodNumber }}
              <button @click="syncGood(item,true)">+</button>
            </td>
            <td>{{ item.good.price * item.goodNumber }}</td>
            <td>
              <a-popconfirm placement="topLeft" ok-text="Yes" cancel-text="No"
                            @confirm="deleteConfirm(item.good.goodId)">
                <template slot="title">
                  <p>确定要移除此商品吗</p>
                </template>
                <button>移除</button>
              </a-popconfirm>
            </td>
          </tr>
          </tbody>

        </table>
        <div v-if="!carList.length" class="noData">
          <div class="noData-box" style=""></div>
          <h2 class="noData_text">购物车空空如也，快快去购物把！</h2>
        </div>
        <!--        </div>-->
        <div class="product-total">
          <div class="all">
            <!--            <input type="checkbox" :checked="checkAll"  @click="allCheck()">全选-->
            <a-checkbox :checked="checkAll" @click="allCheck()">全选
            </a-checkbox>
            <span>({{ checkCount }})</span>
            <div class="price-show" >价格表</div>
          </div>
          <div class="product-price-total">
            <div class="total-info">
              <div class="price-">
                <p class="price-title">采购费用（合计）：</p>
                <p class="price">{{ allTips }} ฿</p>
              </div>
              <div class="price-">
                <p class="price-title">总商品价格（合计）：</p>
                <p class="price">{{ allPrice }} ฿</p>
              </div>
            </div>
            <div class="account-">
              <div class="account">
                <p class="tt">总计（{{ checkCount }}项）：</p>
                <p class="pp"> {{ allTips + allPrice }}฿</p>
              </div>
              <button class="print" @click="submit()">订单提交</button>
            </div>

          </div>
          <div class="charging-standard">
            <h2>代购费标准：</h2>
            <p>蔬果类： 最低当商品数量为1时，代购费为50(泰铢)；数量为2时，代购费100(泰铢)；数量大于2时，代购费为300(泰铢)。</p>
            <p>生活日用类： 最低当商品数量为1，时代购费为50(泰铢)；数量为2时，代购费100(泰铢)；数量大于2时，代购费为300(泰铢)。</p>
            <p>电子产品类： 每件电子产品的购费为1500(泰铢)。</p>
            <p>免税店： 免税店商品总价*10%（泰铢）。</p>
            <p>佛牌： 佛牌总价*10%（泰铢）。</p>
          </div>
        </div>
        <!--      <div class="show-price" >-->
        <div class="show-price" v-if="showPrice">
          <div class="price-list">
            <div class="price-list-title">
              <span style="text-align: left">商品</span>
              <span>单价</span>
              <span>数量</span>
              <span>总价</span>
            </div>
            <ul class="price-list-box">
              <li class="price-item" v-for="item in getData">
                <span style="text-align: left">{{ item.goodsName }}</span>
                <span>{{ item.price }}</span>
                <span>{{ item.goodNumber }}</span>
                <span>{{ item.price * item.goodNumber }}</span>
              </li>
            </ul>
            <div class="price-print-total">
              <div class="total-info">
                <span>价格（合计）：</span>
                <span class="total_price">฿ 6900.00</span>
              </div>
              <div class="total-info">
                <span>采购费用（合计）：</span>
                <span class="total_price">฿ 300</span>
              </div>
            </div>
            <div class="btn">
              <button class="btn-return" @click="showPrice=false;">返回</button>
              <button class="btn-print" @click="print()">打印订单</button>
            </div>
          </div>
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
import {_createGoodsOrder, createGoodsOrder} from "../../http/apiProduct";
import {mapGetters} from "vuex";

export default {
  name: "shopping-cart",
  components: {NoData, Footer, Header},
  data() {
    return {
      //兑换商品数量
      goodNumber: 1,
      indeterminate: true,
      checkAll: true,
      showPrice: false,
      getData: null,
      check: true
    }
  },
  mounted() {

  },
  computed: {
    ...mapGetters([
      'carList',
      'allTips',
      'allPrice',
      'allCount',
      'checkCount',
      'checkCarParas',
      'getOrder',
    ]),
    carData() {
      // console.log('购物车的数据', this.$store.getters.getCar);
      // return this.$store.getters.getCar;
    },

  },
  methods: {
    deleteConfirm(id) {
      this.removeGood(id)
    },
    syncGood(item, isPlus) {
      if (isPlus) {
        item.goodNumber += 1;
      } else {
        if (item.goodNumber <= 1) return
        item.goodNumber -= 1;
      }
      this.$store.dispatch('syncGood', item)
    },
    //移除产品
    removeGood(id) {
      this.$store.dispatch('removeGood', id)
    },
    singleCheck(goodId) {
      this.$store.commit('ckd', goodId)
    },
    //全选
    allCheck() {
      this.checkAll = !this.checkAll;
      console.log("isCheck", this.checkAll)
      this.$store.commit('ckdAll', this.checkAll)
    },

    show() {
      this.showPrice = !this.showPrice;
    },
    submit() {
      if (this.getOrder.length > 0) {
        this.$message.warn('您有一笔订单未确认，请先联系客服确认')
        return
      }
      createGoodsOrder({bills: this.checkCarParas}).then(resp => {
        console.log('resp', resp);
        this.$store.commit('setCar', []) //清空购物车
        this.$store.commit('setOrder', resp.data)
        // console.log('resp', resp);
        this.$router.push('/order')
      })
    },
    print() {
      alert("您的订单已打印！");
    },

  },


}
</script>

<style scoped lang="scss">
.mian {
  width: 100%;
  background: #ffffff;
}

.shopping-cart {
  width: 100%;
  background: #f3f3f3;
  border-top: 1px solid #dfdada;

  .content {
    width: 1200px;
    min-height: 800px;
    margin: 25px auto 0 auto;
    position: relative;

    .product-title {
      width: 1200px;
      border-bottom: 1px solid rgb(233, 233, 233);
      height: 55px;
      line-height: 55px;
      text-align: left;
      padding: 0 30px;
      border-radius: 5px;
      background: #fff;
      display: flex;
      justify-content: space-around;
      margin-bottom: 10px;

      span {
        width: 200px;
        font-size: 14px;
        color: #999;
        text-align: center;
      }
    }

    table {
      width: 1200px;
      background-color: #fff;
      border-collapse: collapse;
      border-spacing: 0;

      input {
        height: 18px;
        width: 18px;
        border: 1px solid #cecdcd;
        margin-left: 10px;
        vertical-align: middle;
      }
    }

    th {
      height: 50px;
      line-height: 50px;
      padding: 8px 16px;
      text-align: center;
      font-weight: 600;
      border-bottom: 1px solid #f1f1f1;
    }

    td {
      height: 80px;
      line-height: 80px;
    }

    tr {
      border-bottom: 1px solid #f1f1f1;
    }

    tbody {
      text-align: center;

      img {
        width: 55px;
        height: 55px;
        margin-right: 15px;
        vertical-align: middle;
      }

      button {
        width: 60px;
        height: 30px;
        border: none;
        line-height: 26px;
        border-radius: 2px;
        background: #f0f0f0;
      }

      input {
        height: 18px;
        width: 18px;
        border: 1px solid #cecdcd;
        margin-left: 10px;
        vertical-align: middle;
      }
    }

    .product-list {
      width: 1200px;
      min-height: 100px;
      text-align: left;
      padding: 10px 30px;
      border-radius: 5px;
      background: #fff;
      display: flex;
      margin-bottom: 10px;

      ul {
        width: 1150px;
        height: 447px;
        overflow-y: scroll;

        li {
          width: 1150px;
          display: flex;
          margin: 20px auto;
          align-items: center;
          padding-bottom: 10px;
          border-bottom: 1px solid rgb(233, 233, 233);

          .product-info {
            width: 330px;
            height: 60px;
            line-height: 60px;
            display: flex;

            img {
              width: 53px;
              height: 53px;
              border: 1px solid #dfdada;
              border-radius: 5px;
              margin-left: 15px;
            }

            .product-name {
              width: 240px;
              height: 60px;
              line-height: 60px;
              margin-left: 22px;

              .name {
                font-size: 14px;
                color: #666;
                height: 25px;
                line-height: 25px;
                font-weight: 600;
              }

              .remark {
                font-size: 14px;
                color: #999;
                height: 25px;
                line-height: 25px;
              }
            }
          }

          .exchange-number {
            width: 230px;
            height: 37px;
            line-height: 37px;
            border-radius: 6px;
            font-size: 20px;
            color: #999;
            display: flex;
            justify-content: center;

            span {
              float: left;
              width: 35px;
              height: 37px;
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

          .price {
            width: 200px;
            height: 60px;
            line-height: 60px;
            font-size: 26px;
            font-weight: 700;
            color: #666666;
            text-align: center;
          }

          .total {
            width: 200px;
            height: 60px;
            line-height: 60px;
            font-size: 26px;
            font-weight: 700;
            color: #c39762;
            text-align: center;
          }

          .del {
            width: 130px;
            height: 60px;
            line-height: 60px;
            font-size: 15px;
            color: #9e9e9e;
            font-weight: 700;
            text-align: center;
          }
        }

        &:last-child {
          border-bottom: none;
        }
      }
    }

    .noData {
      width: 100%;
      height: 400px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;

      .noData-box {
        width: 150px;
        height: 150px;
        text-align: center;
        background: url("../../assets/img/shoppcart/empty.jpg");
        background-size: cover;
      }

      .noData_text {
        font-size: 16px;
        color: #c0b7b7;
        text-align: center;
      }
    }

    .product-total {
      width: 1200px;
      padding: 8px 0;
      margin-top: 15px;
      background: #fff;
      position: absolute;
      bottom: 13px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;

      .all {
        width: 1200px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid rgb(233, 233, 233);
        padding: 0 30px;
        text-align: left;
        padding-bottom: 5px;
        margin-bottom: 5px;
        display: flex;
        position: relative;

        span {
          font-size: 15px;
          color: #999;
        }

        .price-show {
          width: 100px;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          color: #c39762;
          font-weight: 700;
          position: absolute;
          right: 10px;
        }
      }

      .product-price-total {
        width: 1200px;
        //height: 80px;
        padding: 18px 30px 0;
        display: flex;
        justify-content: space-between;

        .total-info {
          width: 250px;
          //height: 80px;
          line-height: 80px;

          .price- {
            width: 250px;
            height: 30px;
            line-height: 30px;
            display: flex;
            justify-content: space-between;

            .product-title {
              width: 80px;
              font-size: 18px;
            }

            .price {
              font-size: 18px;
              color: #c39762;
              font-weight: 600;
            }
          }
        }

        .account- {
          min-width: 400px;
          height: 80px;
          line-height: 80px;
          display: flex;
          justify-content: flex-end;

          .account {
            display: flex;

            .tt {
              font-size: 14px;
              font-weight: 700;
              color: #000;
            }

            .pp {
              font-size: 18px;
              font-weight: 600;
              color: #c39762;
              padding: 0 10px;
            }
          }

          .print {
            width: 170px;
            height: 40px;
            line-height: 40px;
            color: #fff;
            font-size: 16px;
            font-weight: 700;
            background: #c39762;
            border: 1px solid #c39762;
            border-radius: 5px;
            margin-top: 20px;
          }
        }

      }

      .charging-standard {
        width: 1200px;
        text-align: left;
        padding-left: 27px;

        h2 {
          color: #ff9800;
          font-size: 18px;
          font-weight: 600;
        }

        p {
          color: #666;
        }
      }
    }

    .show-price {
      width: 100%;
      height: 100%;
      background: rgba(180, 180, 180, .3);
      z-index: 99999;

      .price-list {
        width: 370px;
        max-height: 650px;
        background: #fff;
        color: #666;
        border: 1px solid #c39762;
        border-radius: 10px;
        position: absolute;
        bottom: 22%;
        left: 69%;

        .price-list-title {
          width: 100%;
          height: 50px;
          line-height: 20px;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid rgb(233, 233, 233);

          span {
            width: 75px;
            font-size: 14px;
            color: #666;
            font-weight: 700;
          }
        }

        .price-list-box {
          width: 100%;
          padding: 10px 0;
          max-height: 530px;
          overflow: hidden;
          //overflow-y: scroll;
          .price-item {
            height: 35px;
            line-height: 35px;
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
            border-bottom: 1px solid rgb(233, 233, 233);

            span {
              width: 75px;
              font-size: 12px;
              color: #c39762;
              font-weight: 700;
              line-height: 35px;
              text-align: center;
            }
          }
        }

        .price-print-total {
          width: 100%;
          height: 60px;
          line-height: 60px;
          padding: 10px 0 0;
          border-top: 1px solid #c39762;

          .total-info {
            width: 100%;
            padding: 0 20px;
            line-height: 22px;
            display: flex;
            justify-content: space-between;

            span {
              font-size: 12px;
              color: #666;
              font-weight: 700;
            }

            .total_price {
              font-size: 13px;
              color: #c39762;
              font-weight: 700;
            }
          }
        }

        .btn {
          width: 370px;
          height: 45px;
          display: flex;
          padding: 5px 20px;
          justify-content: space-between;

          .btn-return {
            width: 60px;
            height: 30px;
            line-height: 27px;
            color: rgba(0, 0, 0, .25);
            background: #fff;
            border: 1px solid #d9d9d9;
            border-radius: 5px;
          }

          .btn-print {
            width: 80px;
            height: 30px;
            line-height: 27px;
            color: #fff;
            background: #c39762;
            border: 1px solid #c39762;
            border-radius: 5px;
          }
        }
      }
    }
  }
}
</style>
