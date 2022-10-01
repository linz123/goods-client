<template>
    <div class="header">
        <div class="menu">
            <ul class="menu_">
                <template v-for="(item,index) in this.$store.state.menu">
                    <li class="menu_li " @click="selectMenu(index)" v-bind:class="{'menu-active':index === menuIndex}">
                        <router-link  :to="`/home/${item.url}`" class="service">{{ item.name }}</router-link>
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

                <div class="line_service" @click="onlineService()">
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
import {_getMenu, getShopCartData} from "../../http/apiProduct";
import {mapGetters} from "vuex";

export default {
    name: "Header",
    data() {
        return {
            menuList: null,
            list: null,
            value: '',
            menuIndex:0
        }
    },
    mounted() {
        this.getMenu();
    },
    computed: {
        ...mapGetters([
            'allCount',
            'getOrder',
            'getAllLabels'
        ])
    },
    methods: {
        getMenu() {
            this.$store.dispatch('getMenu')
            this.$store.dispatch('getLabels')
        },
        selectMenu(index) {
            this.menuIndex = index;
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

        },
        onlineService() {
            alert('您好，正在为您联系客服。请稍等片刻！');
        },
        searchProductByLabel(item) {
            // this.$router.push({
            //   name: 'Search',
            //   query: {id: name}
            // })
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
            let relust = this.getAllLabels.find((item) => {
                return item.labelName.indexOf(this.value) > -1
            })
            // console.log('searchResult', relust);
            relust ? this.searchProductByLabel(relust) : this.searchProductByKeyString(this.value);

        },
        redirectCar() {
            this.getOrder.length > 0 ? this.$router.push('/order') : this.$router.push('/shopping-cart');
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
    width: 80px;
    line-height: 50px;
    text-align: center;
    list-style: none;
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
    width: 150px;
    height: 34px;
    display: flex;
    align-content: center;
    justify-content: space-around;

    .icon_ {
        color: #C39762;
        background: #ffffff;
        border-radius: 5px;
        border: 1px solid #ccc;
    }
}

.line_service {
    width: 35px;
    height: 34px;
    text-align: center;
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
}
</style>
