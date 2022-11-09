<template>
    <div class="wrapper">
        <div class="index-carousel">

        </div>
        <div class="content">
            <div class="li-content">
                <div class="li-item" @click="checkProduct(item)" v-for="item in goodData.list "
                     :key="item.goodId">
                    <div class="li-item-left">
                        <div class="title">
                            <div>{{ item.goodsName }}</div>
                            <div>{{ item.title }}</div>
                        </div>
                        <div class="center">
                            <div class="price">{{ item.pay }}</div>
                            <div class="welfare" v-for="welfare in mapWelfare(item)" :key="welfare">{{ welfare }}</div>
                        </div>
                        <div class="labels">
                            <div class="label-item" v-for="labelName in getLabelNameByIds(item.labelId)">
                                {{ labelName }}
                            </div>
                        </div>
                    </div>
                    <div class="li-item-right">
                        <div class="detail good-button" @click="checkProduct(item)">查看详情</div>
                        <div class="time">{{ formatTime(item.updateTime) }}</div>
                    </div>
                </div>
                <div class="paging">
                    <a-pagination @change="onChange" :pageSize="pageConfig.pageSize" :current="pageConfig.pageNumber"
                                  :total="goodData.total"/>
                </div>
                <a-result title="未能搜索相关商品" v-if="!goodData.total">
                </a-result>
            </div>
            <div class="rank">
                <div class="title">
                    精选职位推荐
                </div>
                <div class="rank-list">
                    <h5>推荐企业</h5>
                    <div class="list-item" v-for="item in getHotCompany" @click="checkProduct(item)">{{ item.title }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import {getBrowserInfo} from "../../http/apiProduct";

const moment = require('moment');


export default {
    name: "recruit",
    computed: {
        ...mapGetters([
            'getLabelNameByIds',
            'pageConfig',
            'getHotCompany',
            'goodData'
        ])
    },
    methods: {
        // 查看详情
        checkProduct(item) {
            this.$store.dispatch('setGoodItem', item).then(() => {
                this.$router.push({
                    name: 'Recruit-detail',
                    params: {id: item.goodId}
                })
            })
            this.statics({
                type: '详情',
                typeContent: '类别->招聘->' + item.goodsName
            })
        },
        mapWelfare(item) {
            return item.welfare.split('，')
        },
        onChange(current, pageSize) {
            this.$store.dispatch('changePageConfig', {
                pageSize,
                pageNumber: current
            })
            let paras = Object.assign({}, {
                classId: this.$store.state.currentClass.classId.toString()
            }, this.$store.state.pageConfig)
            this.$store.dispatch('getGoodByClass', paras)
            this.statics({
                type: '分页',
                typeContent: '类别->招聘->页数->' + current
            })
        },
        formatTime(timeString) {
            return moment(timeString).format('YYYY-MM-DD');
        },
        statics(item) {
            this.$store.dispatch('setAccessLog', {
                browser: getBrowserInfo().browser,
                clientType: 'pc',
                type: item.type,
                typeContent: item.typeContent
            })
        }
    },
    mounted() {
        setTimeout(()=>{
            this.$store.dispatch('getHotCompany', {
                classId: this.$store.state.currentClass.classId.toString(),
                count: 5
            })
        },200)
    },

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
        min-height: 1000px;

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
                margin-bottom: 10px;

                .li-item-left {
                    width: 700px;

                    .title {
                        display: flex;
                        height: 55px;
                        align-items: center;
                        margin-left: 30px;

                        div:first-child {
                            color: #4b93ff;
                            font-size: 18px;
                            font-weight: bold;
                            //margin: 0 324px 0 0;
                            text-align: left;
                            width: 50%;
                        }

                        div:last-child {
                            color: #666666;
                            font-style: normal;
                            font-weight: 700;
                            font-size: 18px;
                            line-height: 25px;
                            text-transform: capitalize;
                            text-align: left;
                            padding-left: 150px;
                            width: 50%;
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
                            border-right: 1px solid #DCDCDC;
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
                        .welfare {
                            color: #999999;
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
                            padding: 0 5px 0 5px;
                        }
                    }
                }

                .li-item-right {
                    margin: 82px 21px 0 0;

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

            .paging {
                //width: 980px;
                height: 50px;
                margin-top: 25px;
                margin-right: 0;
                text-align: right;
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
