<template>
    <div class="wrapper">
        <div class="content">
            <div class="content-left">
                <div class="title">{{goodItemDetail.goodsName}}</div>
                <div class="number">编号: {{goodItemDetail.serialNumber}}</div>
                <div class="price">฿ {{goodItemDetail.pay}}</div>
                <div class="remark">
                    <div v-for="welfare in mapWelfare(goodItemDetail)" :key="welfare">{{welfare}}</div>
                </div>
                <div class="labels" >
                    <div class="label-item"  v-for="labelName in getLabelNameByIds(goodItemDetail.labelId)">
                        {{labelName}}
                    </div>
                </div>
                <div class="time">
                    {{formatTime(goodItemDetail.updateTime)}} 更新
                </div>
                <div class="line"/>
                <div class="content-items">
                    <h5>{{goodItemDetail.goodsName}}</h5>
                    <div class="content-item" v-for="describe in goodItemDetail.describe.split('，')">{{describe}}</div>
<!--                    <div class="content-item">数名 大学计算机专业毕业 者优先 （男女不限 ） 懂Wps公式 函数 头脑机灵 反应快，思路清晰</div>-->
                </div>
            </div>
            <div class="content-right">
                <div class="img"/>
                <h5>{{goodItemDetail.title}}</h5>
                <div class="items">
                    <div class="item" v-for="remark in goodItemDetail.remark.split('，')">{{remark}}</div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
const moment = require('moment');
export default {
    name: "recruit_detail",
    computed:{
        ...mapGetters([
            'goodItemDetail',
            'getLabelNameByIds'
        ])
    },
    methods:{
        mapWelfare(item){
            return item.welfare.split('，')
        },
        formatTime(timeString){
            return moment(timeString).format('YYYY-MM-DD');
        }
    }

}
</script>

<style scoped lang="scss">
.wrapper {

    min-height: 914px;
    background: #F3F3F3;
    display: flex;
    justify-content: center;
    .content {
        display: flex;
        justify-content: space-between;
        margin: 20px auto 20px;
        width: 1200px;

        .content-left {
            width: 940px;
            min-height: 720px;
            background: #FFFFFF;
            border-radius: 10px;
            padding: 30px 0 0 70px;
            text-align: left;

            .title {
                font-style: normal;
                font-weight: 700;
                font-size: 32px;
                line-height: 45px;
                /* identical to box height */
                text-transform: capitalize;
                color: #333333;
                height: 45px;
                margin-bottom: 11px;
            }

            .number {
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                /* identical to box height */
                text-transform: capitalize;
                color: #999999;
                margin-bottom: 15px;
            }

            .price {
                font-style: normal;
                font-weight: 700;
                font-size: 32px;
                line-height: 43px;
                /* identical to box height */
                text-transform: capitalize;
                color: #C39762;
                height: 43px;
                margin-bottom: 21px;
            }

            .remark {
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                /* identical to box height */
                text-transform: capitalize;
                color: #999999;
                display: flex;
                margin-bottom: 19px;

                div {
                    //font-size: 14px;
                    padding: 0 10px 0 10px;
                    border-right: 1px solid #999999;
                    color: #DCDCDC;
                    font-size: 14px;
                }

                div:first-child {
                padding-left: 0;
                }

                div:last-child {
                    border: none;
                }
            }

            .labels {
                height: 50px;
                color: #999999;
                font-size: 14px;
                display: flex;
                margin-bottom: 30px;

                .label-item {
                    min-width: 46px;
                    height: 20px;
                    margin-right: 10px;
                    background: #F3F3F3;
                    border-radius: 10px;
                    text-align: center;
                }
            }

            .time {
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                /* identical to box height */
                text-transform: capitalize;
                color: #999999;
                margin-bottom: 50px;
            }

            .line {
                width: 800px;
                height: 1px;
                background: #E6E6E6;
                margin: 0 auto 35px;
            }

            .content-items {
                h5 {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 25px;
                    color: #333333;
                    margin-bottom: 15px;
                }

                .content-item {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    text-transform: capitalize;
                    color: #666666;
                    //min-height: 30px;
                }
            }
        }

        .content-right {
            width: 240px;
            min-height: 720px;
            background: #FFFFFF;
            border-radius: 10px;
            text-align: left;
            .img {
                width: 210px;
                height: 100px;
                border: 1px solid black;
                //background: url(image);
                margin: 25px 15px 10px 15px;
            }

            h5 {
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
                line-height: 25px;
                text-transform: capitalize;
                color: #333333;
                text-align: center;
                margin-bottom: 10px;
            }

            .items {
                width: 224px;
                min-height: 500px;
                margin: 0 auto;

                .item {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 17px;
                    text-transform: capitalize;
                    color: #999999;
                    margin-bottom: 10px;

                }
            }

        }
    }

}
</style>
