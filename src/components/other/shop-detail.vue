<template>
    <div class="wrapper">
        <div class="content">
            <div class="content-left">
                <div class="title">{{ goodItemDetail.goodsName }}</div>
                <div class="number">编号: {{ goodItemDetail.serialNumber }}</div>
                <div class="link" @click="jumpLink(goodItemDetail.link)">联系商家</div>
                <div class="remark">
                    <div v-for="welfare in mapWelfare(goodItemDetail)" :key="welfare">{{ welfare }}</div>
                </div>
                <div class="labels">
                    <div class="label-item" v-for="labelName in getLabelNameByIds(goodItemDetail.labelId)">
                        {{ labelName }}
                    </div>
                </div>
<!--                <div class="time">-->
<!--                    {{ formatTime(goodItemDetail.updateTime) }} 更新-->
<!--                </div>-->
                <div class="line"/>
<!--                <div class="content-imgs">-->
<!--                    <a-carousel arrows>-->
<!--                        <div-->
<!--                            slot="prevArrow"-->
<!--                            slot-scope="props"-->
<!--                            class="custom-slick-arrow"-->
<!--                            style="left: 10px;zIndex: 1"-->
<!--                        >-->
<!--                            <a-icon type="left-circle" />-->
<!--                        </div>-->
<!--                        <div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 10px">-->
<!--                            <a-icon type="right-circle" />-->
<!--                        </div>-->
<!--&lt;!&ndash;                        <div class="slide"  v-for="imgItem in goodItemDetail.img">&ndash;&gt;-->
<!--                            <img width="100%" v-for="imgItem in goodItemDetail.img"  v-bind:src="baseUrl+imgItem.ImgRelativeUrl" alt="" />-->
<!--&lt;!&ndash;                        </div>&ndash;&gt;-->
<!--                    </a-carousel>-->
<!--                </div>-->

                <div class="content-imgs">
                        <img width="100%" v-for="imgItem in goodItemDetail.img"  v-bind:src="baseUrl+imgItem.ImgRelativeUrl" alt=""  style="margin-bottom: 10px" />
                </div>

            </div>


        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import moment from "moment/moment";

export default {
    name: "shop-detail",
    computed: {
        ...mapGetters([
            'goodItemDetail',
            'getLabelNameByIds',
            'baseUrl'
        ]),

    },
    methods: {
        mapWelfare(item) {
            return item.welfare.split('，')
        },
        formatTime(timeString) {
            return moment(timeString).format('YYYY-MM-DD');
        },
        jumpLink(telegramId){
            let url = telegramId.indexOf('http') > -1 ? item.merchant_id : 'https://t.me/' + telegramId.slice(1);
            window.open(url)
        }
    }
}
</script>

<style scoped lang="scss">
.wrapper {

    background: #F3F3F3;
    display: flex;
    justify-content: center;

    .content {
        display: flex;
        justify-content: space-between;
        margin: 20px auto 20px;
        width: 1200px;
        min-height: 1256px;

        .content-left {
            width: 100%;
            height: 100%;
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

            .link {
                width: 172px;
                height: 44px;
                background: #C39762;
                border: 1px solid #C39762;
                border-radius: 10px;
                font-family: 'PingFang SC';
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
                line-height: 44px;
                color: #FFFFFF;
                text-align: center;
                margin-bottom: 10px;
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

            //.time {
            //    font-style: normal;
            //    font-weight: 400;
            //    font-size: 14px;
            //    line-height: 20px;
            //    /* identical to box height */
            //    text-transform: capitalize;
            //    color: #999999;
            //    margin-bottom: 50px;
            //}

            .line {
                width: 1060px;
                height: 1px;
                background: #E6E6E6;
                margin-bottom: 31px;

            }

            .content-imgs {
                width: 1060px;
                //height: 860px;
                .ant-carousel >>> .slick-slide {
                    text-align: center;
                    height: 160px;
                    line-height: 160px;
                    background: #364d79;
                    overflow: hidden;
                }

                .ant-carousel >>> .custom-slick-arrow {
                    width: 50px;
                    height: 50px;
                    font-size: 50px;
                    color: #fff;
                    background-color: rgba(31, 45, 61, 0.11);
                    opacity: 0.3;
                }
                .ant-carousel >>> .custom-slick-arrow:before {
                    display: none;
                }
                .ant-carousel >>> .custom-slick-arrow:hover {
                    opacity: 0.5;
                }
                .ant-carousel >>> .slick-slide{
                    //min-height: 860px;、
                    height: 100%;
                    line-height: normal;
                    background: none;
                }

                .ant-carousel >>> .slick-slide h3 {
                    color: #fff;
                }
            }
        }

    }

}
</style>
