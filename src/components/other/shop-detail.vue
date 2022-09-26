<template>
    <div class="wrapper">
        <div class="content">
            <div class="content-left">
                <div class="title">{{ goodItemDetail.goodsName }}</div>
                <div class="number">编号: {{ goodItemDetail.serialNumber }}</div>
                <div class="link"></div>
                <div class="remark">
                    <div v-for="welfare in mapWelfare(goodItemDetail)" :key="welfare">{{ welfare }}</div>
                </div>
                <div class="labels">
                    <div class="label-item" v-for="labelName in getLabelNameByIds(goodItemDetail.labelId)">
                        {{ labelName }}
                    </div>
                </div>
                <div class="time">
                    {{ formatTime(goodItemDetail.updateTime) }} 更新
                </div>
                <div class="line"/>
                <div class="content-imgs">

                </div>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    name: "shop-detail"
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

            .link {

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

            .content-imgs {

            }
        }

    }

}
</style>
