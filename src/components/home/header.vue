<template>
    <div class="header">
        <div class="menu">
            <ul class="menu_">
                <template v-for="(item,index) in this.$store.state.menu">
                    <li class="menu_li " @click="selectMenu(index)"
                        v-bind:class="{'menu-active':index === getMenuIndex}">
                        <router-link :to="`/home/${item.url}`" class="service">{{ item.name }}</router-link>
                    </li>
                </template>
            </ul>
        </div>
        <div class="search">
            <div class="logo"></div>
            <div class="search-input">
                <input placeholder="请输入您想搜索的商品、品牌" v-model="value">
                <div class="search-img" @click="searchProduct">
                    <a-icon type="search"/>
                </div>
            </div>
            <div class="search-right">
                <!--        <router-link to="/shopping-cart" class="service-link" >-->
                <!--                <a-badge :count="allCount" @click="redirectCar">-->
                <!--                    <a-avatar icon="shopping-cart" class="icon_" shape="square">-->
                <!--                        &lt;!&ndash;          <div class="cart">&ndash;&gt;-->
                <!--                        &lt;!&ndash;              style="color: #C39762;background: #ffffff;border:1px solid #C39762"&ndash;&gt;-->
                <!--                        &lt;!&ndash;          </div>&ndash;&gt;-->
                <!--                    </a-avatar>-->
                <!--                </a-badge>-->
                <!--        </router-link>-->
                <!--          <div class="cart">-->

                <!--          </div>-->
                <div class="line_service good-button" @click="jumpLink('@aTomcatbot')">
                    <a-avatar icon="robot" class="icon_" shape="square" style="color:#bc996a">
                    </a-avatar>
                </div>
                <div class="line_service good-button" @click="jumpLink('@aide_uTbao')">
                    <a-avatar icon="user" class="icon_" shape="square">
                    </a-avatar>
                </div>
            </div>

        </div>
        <div class="hot_products">
            <ul class="hot_">
                <li class="products" v-for="(item,index) in getAllLabels.slice(0,7)"
                    @click="searchProductByLabel(item,true)">
                    {{ item.labelName }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {_getMenu, getBrowserInfo, getShopCartData} from "../../http/apiProduct";
import {mapGetters} from "vuex";

export default {
    name: "Header",
    data() {
        return {
            menuList: null,
            list: null,
            value: ''
        }
    },
    created() {
        this.$store.commit('setMenuIndex', 0)
    },
    mounted() {
        this.getMenu();
        // 回车绑定事件
        document.onkeydown = e => {
            let event = e || window.event;
            if (event.keyCode === 13) {
                this.searchProduct();
            }
        }

    },
    computed: {
        ...mapGetters([
            'allCount',
            'getOrder',
            'getAllLabels',
            'getMenuIndex'
        ])
    },
    methods: {
        getMenu() {
            this.$store.dispatch('getMenu')
            this.$store.dispatch('getLabels')
        },
        selectMenu(index) {

            this.$store.commit('setMenuIndex', index)
            this.$store.dispatch('toggleMenu', this.$store.state.menu[index])
            let paras = Object.assign({}, {
                    classId: this.$store.state.currentClass.classId.toString()
                },
                this.$store.state.pageConfig)
            // console.log('paras', paras)
            if (index !== 0) {
                this.$store.dispatch('getGoodByClass', paras)
            }
            this.$store.commit('setClassIndex', 0);
            this.statics({
                type: '菜单',
                typeContent: this.$store.state.menu[index].name
            });

        },
        onlineService() {
            alert('您好，正在为您联系客服。请稍等片刻！');
        },
        searchProductByLabel(item, isHotLabel) {
            // this.$router.push({
            //   name: 'Search',
            //   query: {id: name}
            // })
            if (isHotLabel) {
                this.$store.commit('setKeyString', item.labelName);
                this.statics({
                    type: '标签',
                    typeContent: item.labelName
                });
            }
            this.$router.push('/home/market')
            this.$store.commit('setClassIndex', -1);
            let paras;
            this.$store.dispatch('reSetPageConfig').then(() => {
                paras = Object.assign({}, {
                    labelId: item.labelId.toString()
                }, this.$store.state.pageConfig)
                this.$store.dispatch('getGoodByLabel', paras)
            })
        },
        searchProductByKeyString(item) {
            this.$router.push('/home/market')
            this.$store.commit('setClassIndex', -1);
            let paras;
            this.$store.dispatch('reSetPageConfig').then(() => {
                paras = Object.assign({}, {
                    value: item,
                }, this.$store.state.pageConfig)
                this.$store.dispatch('getGoodBySearch', paras)
            })
        },
        searchProduct() {
            if (this.value === '') {
                this.$message.warn('内容不能为空！');
                return
            }
            this.$store.commit('setKeyString', this.value);
            let result = this.getAllLabels.find((item) => {
                return item.labelName.indexOf(this.value) > -1
            })
            // console.log('searchResult', relust);
            result ? this.searchProductByLabel(result) : this.searchProductByKeyString(this.value);
            this.statics({
                type: '搜索',
                typeContent: '关键词->' + this.value
            });

        },
        redirectCar() {
            this.getOrder.length > 0 ? this.$router.push('/order') : this.$router.push('/shopping-cart');
        },
        jumpLink(telegramId) {
            let url = telegramId.indexOf('http') > -1 ? item.merchant_id : 'https://t.me/' + telegramId.slice(1);
            window.open(url)
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
.header {
    width: 100%;
}

.menu {
    width: 1200px;
    height: 50px;
    margin: 0 auto;
}

.menu_ {
    width: 1200px;
    display: flex;
    margin: 0 0;
    padding: 0;


}

.menu-active {
    line-height: 20px;
    text-decoration-line: underline;
    text-transform: capitalize;
    color: #C39762 !important;

    a {
        color: #C39762;
    }
}

.menu_li {
    font-size: 16px;
    //width: 80px;
    line-height: 50px;
    text-align: center;
    list-style: none;
    padding: 0 20px 0 20px;

    a {
        display: block;
        width: 100%;
        height: 100%;
    }
}

.service {
    color: #333;
}

.search {
    width: 1200px;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
}

.logo {
    width: 139px;
    height: 50px;
    text-align: center;
    font-size: 20px;
    line-height: 50px;
    //background: antiquewhite;
    background: url("../../assets/logo.png") no-repeat;
    background-size: contain;
}

.search-input {
    width: 800px;
    height: 36px;
    background: #f3f3f3;
    border-radius: 5px;
    padding: 7px 20px;
    display: flex;

}

input {
    width: 750px;
    text-align: left;
    border-radius: 5px;
    color: #333333;
    font-size: 14px;
}

.search-img {
    width: 35px;
    text-align: center;
    line-height: 25px;
    margin-left: 15px;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.2s linear;
    /*background: url("../../assets/img/home_img/ss.png") no-repeat;*/
    &:hover {
        transform: scale(1.5);
    }
}

.search-right {
    width: 100px;
    height: 34px;
    display: flex;
    align-content: center;
    justify-content: space-around;

    .icon_ {
        color: #C39762;
        background: #ffffff;
        border-radius: 5px;
        border: 1px solid #bc996a;
    }
}

.line_service {
    width: 35px;
    height: 34px;
    text-align: center;
    color: #bc996a;
    /*border: 1px solid #efbf7f;*/
    /*border-radius: 3px;*/
    /*background: url("../../assets/img/home_img/s-icon.png") no-repeat;*/
}

.service-link {
    width: 35px;
    height: 34px;
    display: block;
}

.cart {
    width: 35px;
    height: 35px;
    text-align: center;
    position: relative;
    border: 1px solid #efbf7f;
    border-radius: 3px;
    background: url("../../assets/img/home_img/car-icon.png") no-repeat;
}

.cartNumber {
    color: #ff0000;
    font-size: 15px;
    position: relative;
    top: -13px;
    left: 15px;
}

.hot_products {
    width: 1200px;
    height: 30px;
    margin: 0 auto;
}

.hot_ {
    width: 830px;
    height: 30px;
    padding: 0;
    margin: 0 auto;
    display: flex;
}

.products {
    text-align: left;
    color: #999;
    padding-right: 20px;
    line-height: 30px;
    font-size: 15px;
    list-style: none;
    cursor: pointer;
}
</style>
