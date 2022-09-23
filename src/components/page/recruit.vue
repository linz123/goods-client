<template>
    <div class="wrapper">
        <div class="index-carousel">

        </div>
        <div class="content">
            <div class="li-content">
                <div class="li-item">
                    <div class="li-item-left">
                        <div class="title">
                            <div>集团老板秘书</div>
                            <div>巅峰集团</div>
                        </div>
                        <div class="center">
                            <div class="price">60000-800000</div>
                            <div>腾讯</div>
                            <div>大学计算机专业毕业者优先</div>
                            <div>男女不限</div>
                        </div>
                        <div class="labels">
                            <div class="label-item">
                                包吃住
                            </div>
                            <div class="label-item">
                                业绩提成
                            </div>
                            <div class="label-item">
                                包住宿
                            </div>
                        </div>
                    </div>
                    <div class="li-item-right">
                        <div class="detail" @click="detail">查看详情</div>
                        <div class="time">2022-7-3</div>
                    </div>
                </div>
            </div>
            <div class="rank">
                <div class="title">
                    精选职位推荐
                </div>
                <div class="rank-list">
                    <h5>推荐企业</h5>
                    <div class="list-item">企业1</div>
                    <div class="list-item">企业2</div>
                    <div class="list-item">企业3</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "recruit",
    methods: {
        detail(){
            this.$router.push('/recruit-detail')
        }
    }
}
</script>

<style scoped lang="scss">
.wrapper {
    //width: 1200px;
    min-height: 600px;
    background-color: #f3f3f3;
    display: flex;
    justify-content: center;

    .index-carousel {

    }

    .content {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        width: 1200px;

        .li-content {
            width: 900px;

            .li-item {
                width: 900px;
                height: 172px;
                background-color: #ffffff;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .li-item-left {


                    .title {
                        display: flex;
                        height: 55px;
                        align-items: center;
                        margin-left: 30px;

                        div:first-child {
                            color: #4b93ff;
                            font-size: 18px;
                            font-weight: bold;
                            margin: 0 324px 0 0;
                        }

                        div:last-child {
                            color: #666666;
                            font-style: normal;
                            font-weight: 700;
                            font-size: 18px;
                            line-height: 25px;
                            text-transform: capitalize;
                        }
                    }

                    .center {
                        height: 60px;
                        display: flex;
                        align-items: center;
                        margin-left: 20px;
                        font-family: 'PingFang SC';
                        font-style: normal;
                        font-weight: 400;


                        div {
                            //font-size: 14px;
                            padding: 0 10px 0 10px;
                            border-right: 1px solid #b3b3b3;
                            color: #DCDCDC;
                            font-size: 14px;
                        }

                        div:first-child {
                            color: #ff7070;
                            font-size: 16px;
                        }

                        div:last-child {
                            border: none;
                        }
                    }

                    .labels {
                        height: 50px;
                        color: #999999;
                        font-size: 14px;
                        margin-left: 30px;
                        display: flex;

                        .label-item {
                            min-width: 46px;
                            height: 20px;
                            margin-right: 10px;
                            background: #F3F3F3;
                            border-radius: 10px;
                        }
                    }
                }

                .li-item-right {
                    margin-right: 20px;

                    .detail {
                        width: 84px;
                        height: 28px;
                        background: #4B93FF;
                        border-radius: 14px;
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 28px;
                        /* identical to box height */
                        color: #FFFFFF;
                    }

                    .time {
                        font-style: normal;
                        font-size: 14px;
                        line-height: 20px;
                        /* identical to box height */
                        text-transform: capitalize;
                        color: #999999;
                        margin-top: 10px;
                    }
                }
            }

        }

        .rank {
            width: 280px;

            .title {
                width: 250px;
                height: 66px;
                background: #FFFFFF;
                border-radius: 10px;
                font-weight: 400;
                font-size: 18px;
                line-height: 66px;
                text-transform: capitalize;
                color: #333333;
                padding-left: 30px;
                margin-bottom: 20px;
                text-align: left;
            }

            .rank-list {
                width: 250px;
                height: 358px;
                background: #FFFFFF;
                border-radius: 10px;
                padding: 20px 0 0 30px;
                text-align: left;

                h5 {
                    font-family: 'PingFang SC';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 25px;
                    text-transform: capitalize;
                    color: #333333;
                    margin-bottom: 11px;
                }

                .list-item {
                    font-family: 'PingFang SC';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 25px;
                    text-transform: capitalize;
                    margin-bottom: 16px;
                    color: #4B93FF;
                }
            }
        }
    }

}

</style>
