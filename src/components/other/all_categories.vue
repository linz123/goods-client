<template>
    <div class="content">
        <div class="categories">
            <div class="menu">
                <div class="menu-title">
                    <a-icon type="unordered-list"/>
                    当前类别
                </div>
                <div class="category">
                    <ul>
                        <li v-for="(item, index) in classList" @click="selectClass(item,index)"
                            v-bind:class="(index === getClassIndex) ? 'active' : ''">
                            {{ item.className }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="content-box">
                <div class="product">
                    <div class="product_list" v-for="item in goodData.list || []"
                         :key="item.goodId"
                    >
                        <img class="product_img" v-if="item.thumbImg[0]"
                             v-bind:src="baseUrl+item.thumbImg[0].ImgRelativeUrl" alt=""
                             @click="checkProduct(item)"/>
                        <h2 class="product_name">{{ item.goodsName }}</h2>
                        <!--            <p class="product_parameter">{{index.describe}}</p>-->
                        <!--                        <div class="price_addcar" v-if="getCurrentMenu.description !== 'Flea' && getCurrentMenu.description !== 'Grid'">-->
                        <!--                            <p class="product_price">฿&nbsp;{{ item.price }}</p>-->
                        <!--                            <span class="addCar" @click="submit(item)"></span>-->
                        <!--                        </div>-->
                    </div>
                </div>
                <div class="paging">
                    <a-pagination @change="onChange" :pageSize="pageConfig.pageSize" :current="pageConfig.pageNumber"
                                  :total="goodData.total"/>
                </div>
                <a-result title="未能搜索到相关商品" v-if="!goodData.total">
                </a-result>
            </div>
        </div>
    </div>
</template>

<script>
import {_getClassesPage, getBrowserInfo, getClassById, getDate} from "../../http/apiProduct";
import {message} from 'ant-design-vue';
import {mapGetters} from 'vuex'

export default {
    name: "all_categories",

    data() {
        return {}
    },
    mounted() {
        // this.getProDate();
        // this.initGetClassesPage();
        // console.log('currentMenu',this.$store.state.currentMenu)
    },
    computed: {
        ...mapGetters([
            'classList',
            'pageConfig',
            'getClassIndex',
            'baseUrl',
            'getCurrentMenu',
            'goodData',
            'getAllLabels',
        ])
    },
    methods: {
        //侧边栏分类
        initGetClassesPage() {
            // _getClassesPage({
            //   pageSize: 10,
            //   pageNumber: 1,
            // })
            //   .then(res => {
            //     this.classesList = res.data.data;
            //     console.log('分类',res.data)
            //   })
            //   .catch(err => {
            //     console.log(err);
            //   })
        },
        submit(item) {
            // const good = {
            //   check: true,
            //   goodNumber: parseInt(this.goodNumber),
            //
            // };
            // this.$store.commit('addGood', good);
            // setTimeout(() => {
            //   message.success('已添加至您的购物车');
            // }, 300);

            const carItem = {
                check: true,
                goodNumber: 1,
                good: item
            };
            this.$store.dispatch('addGood', carItem).then(() => {
                this.$message.success("添加成功")
            })
        },

        // 查看详情
        checkProduct(item) {
            this.$store.dispatch('setGoodItem', item).then(() => {
                // this.$router.push({
                //     name: this.$store.state.currentClass.classDescribe ? this.$store.state.currentClass.classDescribe + '-detail' : 'flea-detail',
                //     params: {id: item.goodId}
                // })
                getClassById({classId: parseInt(item.classId.split(',')[0])}).then(
                    resp => {
                        this.$router.push({
                            name: resp.data.classDescribe ? (resp.data.classDescribe + '-detail') : 'flea-detail',
                            params: {id: item.goodId}
                        })
                    }
                ).catch(() => {
                    this.$router.push({
                        name: 'Flea-detail',
                        params: {id: item.goodId}
                    })
                })
            })
            this.statics({
                type: '详情',
                typeContent: '类别->' + this.$store.state.currentClass.className + '->' + item.goodsName
            })

        },
        selectClass(item, index) {
            this.$store.commit('setClassIndex', index);
            let paras;
            this.$store.dispatch('reSetPageConfig').then(() => {
                paras = Object.assign({}, {
                    classId: item.classId.toString()
                }, this.$store.state.pageConfig)
                // console.log('selectClass', paras)
                this.$store.dispatch('getGoodByClass', paras)
                this.$store.dispatch('toggleCurrentClassItem', item)
            })
            this.statics({
                type: '切换分类',
                typeContent: '分类->' + item.className
            })
        },

        onChange(current, pageSize) {
            this.$store.dispatch('changePageConfig', {
                pageSize,
                pageNumber: current
            })
            if (this.$store.state.currentGoodData.type) {
                this.searchProduct();
            } else {
                // console.log('current', current)
                let paras = Object.assign({}, {
                    classId: this.$store.state.currentClass.classId.toString()
                }, this.$store.state.pageConfig)
                this.$store.dispatch('getGoodByClass', paras)
            }
            this.statics({
                type: '分页',
                typeContent: '类别->' + this.$store.state.currentClass.className + '->页数->' + current
            })
        },

        searchProductByLabel(item) {
            let paras;
            paras = Object.assign({}, {
                labelId: item.labelId.toString()
            }, this.$store.state.pageConfig)
            this.$store.dispatch('getGoodByLabel', paras)
        },
        searchProductByKeyString(item) {
            let paras;
            paras = Object.assign({}, {
                value: item,
            }, this.$store.state.pageConfig)
            this.$store.dispatch('getGoodBySearch', paras)
        },
        searchProduct() {
            if (this.$store.state.keyString === '') {
                // this.$message.warn('内容不能为空！');
                return
            }
            let relust = this.getAllLabels.find((item) => {
                return item.labelName.indexOf(this.$store.state.keyString) > -1
            })
            // console.log('searchResult', relust);
            relust ? this.searchProductByLabel(relust) : this.searchProductByKeyString(this.$store.state.keyString);

        },
        statics(item) {
            this.$store.dispatch('setAccessLog', {
                browser: getBrowserInfo().browser,
                clientType: 'pc',
                type: item.type,
                typeContent: item.typeContent
            })
        }
    }
}
</script>

<style scoped lang="scss">
.content {
    width: 100%;
    border-top: 1px solid #dfdada;
    min-height: calc(100vh - 380px);

    .categories {
        width: 1200px;
        margin: 20px auto;
        display: flex;
        justify-content: space-between;

        .menu {
            width: 180px;
            //height: 800px;
            //background: #fbf7f7;

            .menu-title {
                margin-top: 15px;
                padding: 0 15px 10px 15px;
                margin-bottom: 10px;
                border-bottom: 1px solid #ddd;
                font-size: 15px;
                color: black;
                font-weight: 700;
                text-align: left;
            }

            .category {
                ul {
                    li {
                        text-align: left;
                        padding: 5px 15px;
                        font-size: 15px;
                        font-weight: 600;
                        color: #666;
                        cursor: pointer;
                        position: relative;
                    }

                    .active {
                        color: #efbf7f;
                        padding-left: 25px;
                    }

                    .active:before {
                        position: absolute;
                        bottom: 11px;
                        left: 16px;
                        height: 0;
                        width: 0;
                        border-top: 5px solid transparent;
                        border-bottom: 5px solid transparent;
                        border-left: 5px solid #efbf7f;
                        content: "";
                    }
                }
            }
        }

        .content-box {
            width: 1000px;
            min-height: 546px;

            .product {
                width: 980px;
                display: flex;
                flex-wrap: wrap;
                //justify-content: space-between;

                .product_list {
                    width: 190px;
                    //height: 285px;
                    margin-bottom: 13px;
                    text-align: left;
                    cursor: pointer;

                    position: relative;
                    margin-right: 6px;


                    .product_img {
                        width: 190px;
                        height: 190px;
                        border-radius: 10px;

                        &:hover {
                            z-index: 2;
                            box-shadow: 0 5px 5px 0 rgba(0, 0, 0, .25);
                            transition: all .2s ease-in-out;
                            border: 1px solid #c69d6b;
                        }
                    }

                    .product_name {
                        height: 57px;
                        padding-left: 15px;
                        padding-top: 12px;
                        font-size: 15px;
                        font-weight: 600;
                        color: #666;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        text-overflow: ellipsis;
                    }

                    .product_parameter {
                        padding-left: 15px;
                        margin-bottom: 5px;
                        font-size: 15px;
                        font-weight: 600;
                    }

                    .price_addcar {
                        height: 30px;
                        display: flex;
                        line-height: 30px;
                        justify-content: space-between;

                        .product_price {
                            margin-bottom: 5px;
                            padding-left: 15px;
                            font-size: 14px;
                            color: #c69d6b;
                            font-weight: 600;
                        }

                        .addCar {
                            width: 30px;
                            height: 30px;
                            text-align: center;
                            background: url("../../assets/img/home_img/car-icon.png") no-repeat;
                            transition: all 0.2s linear;
                            /*background: url("../../assets/img/home_img/ss.png") no-repeat;*/
                            &:hover {
                                transform: scale(1.3);
                            }
                        }
                    }

                }
            }

            .paging {
                width: 980px;
                height: 50px;
                margin-top: 25px;
                margin-right: 0;
                text-align: right;
            }
        }
    }
}

</style>
