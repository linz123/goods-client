<template>
  <div class="content">
    <div class="msg-wrapper">
      <p>您的订单号：&nbsp;<span class="order_number">{{ getOrder[0].orderNumber }}</span> <span
        class="order_copy" v-clipboard="getOrder[0].orderNumber"
        v-clipboard:success="clipboardSuccessHandler">&nbsp; 复制</span></p>
      <p>生成订单后，需要联系客服进行订单核实下单</p>
      <p>
        <a-statistic-countdown
          class="order_time"
          title="剩余订单时间:"
          :value="deadLine"
          style=""
          valueStyle="color: #cf1e1e;"
          @finish="onFinish"
        />
        <!--        <span class="order_time">{{ getOrder[0].createTime }}</span>-->
      </p>
      <div class="connect">
        <a-button class="connect-button" size="large" @click="server" type="primary">
          联系客服
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "order",
  data() {
    return {
      // deadLine: new Date(this.getOrder[0].createTime).getTime() + (2 * 60 * 60 * 1000)
    }
  },
  computed: {
    ...mapGetters([
      'getOrder'
    ]),
    deadLine() {
      return new Date(this.getOrder[0].createTime).getTime() + (60 * 60 * 1000 * 2)
    }
  },
  methods: {
    server() {
      window.open('https://t.me/Linz12345', '_blank')
    },
    onFinish() {
      this.$store.commit('resetOrder');  //清除订单缓存
      this.$router.push('/')
    },
    clipboardSuccessHandler({value, event}) {
      console.log('success', value);
      this.$message.success("已复制");
    }
  },
  mounted() {
    // 若订单失效
    let nowTime = new Date().getTime();
    let deadLine = this.deadLine;
    console.log(nowTime, deadLine, deadLine < nowTime)
    if (deadLine < nowTime) {
      this.onFinish();
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  min-height: 600px;
  background: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;

  .msg-wrapper {
    p {
      margin-bottom: 5px;
      color: #999999;
      font-size: 14px;

    }

    .order_number {
      color: #333333;
      font-size: 25px;
      font-weight: bolder;
    }

    .order_copy {
      color: #c39762;
      font-size: 15px;
    }

    .order_time {
      color: #cf1e1e;
      font-size: 20px;
      font-weight: bolder;
    }

    .connect {
      margin-top: 20px;

      .connect-button {
        width: 184px;
        height: 40px;
      }

      .ant-btn-primary {
        background: #c39762;
        border-color: #c39762;
      }


    }
  }

}
</style>
