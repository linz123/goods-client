<template>
    <div class="footer">
        <div class="footer-info">

            <h2>轻松便捷的生活方式</h2>


            <p>通过向所有用户做出承诺，我们将提供便捷无忧的在线生活方式。
                我们设计的一切使网站和应用程序易于导航变得易于使用。</p>
            <!--      <div class="footer-link">-->
            <!--        <ul>-->
            <!--          <li>客户服务</li>-->
            <!--          <li>帮助中心</li>-->
            <!--          <li>如何购买</li>-->
            <!--          <li>如何销售</li>-->
            <!--          <li>支付方式</li>-->
            <!--          <li>送货方式</li>-->
            <!--          <li>退货与退款</li>-->
            <!--          <li>联系我们</li>-->
            <!--        </ul>-->
            <!--      </div>-->
            <!--      <div class="footer-link">-->
            <!--        <ul>-->
            <!--          <li>关于我们</li>-->
            <!--          <li>关于我们</li>-->
            <!--          <li>泰易购职业</li>-->
            <!--          <li>泰易购政策</li>-->
            <!--          <li>隐私政策</li>-->
            <!--          <li>卖家中心</li>-->
            <!--          <li>合作方式</li>-->
            <!--        </ul>-->
            <!--      </div>-->
            <!--      <div class="footer-introduce">-->
            <!--        <ul>-->
            <!--          <li>带来最佳的代购体验</li>-->
            <!--          <li>我们尽最大努力通过顺畅的交易提供最佳的客户满意度。 结合具有吸引力的产品定价 我们开发了一系列价格最优惠的产品。 为我们的客户创造令人满意和有吸引力的活动</li>-->
            <!--        </ul>-->
            <!--      </div>-->
            <!--      <div class="footer-introduce">-->
            <!--        <ul>-->
            <!--          <li>轻松便捷的代购方式</li>-->
            <!--          <li>通过向所有客户做出承诺，我们将提供便捷无忧的在线购物体验。 我们设计的一切使网站和应用程序易于导航变得易于使用。</li>-->
            <!--        </ul>-->
            <!--      </div>-->
        </div>
        <div class="footer-suggest">
            © 2022 泰易网. 版权所有。
        </div>
    </div>

</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped lang="scss">
.footer {
    width: 100%;

    .footer-info {
        width: 1200px;
        margin: 0 auto;
        padding: 25px 35px 0 35px;
        height: 210px;
        //display: flex;
        //justify-content: space-between;
        text-align: left;

        h2 {
            margin: 40px 0 20px 0;
            font-size: 18px;
            line-height: 17px;
            /* identical to box height */
            font-weight: bolder;
            color: #333333;
        }

        p {
            font-size: 16px;
            color: #666666;
        }

        .footer-link {
            width: 100px;

            ul {
                display: flex;
                flex-wrap: wrap;

                li {
                    font-size: 13px;
                    color: #999;
                    margin-bottom: 2px;
                }

                li:first-child {
                    color: #333;
                    margin-bottom: 5px;
                    font-weight: bold;
                }
            }
        }

        .footer-introduce {
            width: 180px;

            ul {
                width: 200px;
                display: flex;
                flex-wrap: wrap;

                li {
                    font-size: 13px;
                    color: #999;
                    text-align: left;
                }

                li:first-child {
                    color: #333;
                    margin-bottom: 5px;
                    font-weight: bold;
                }

            }
        }
    }

    .footer-suggest {
        width: 1200px;
        margin: 0 auto;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 13px;
        color: #666;
        border-top: 1px solid #dfdada;
    }
}
</style>
