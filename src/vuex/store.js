import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import {
    _getClassesPage,
    _getGoodByLabel,
    _getMenu, _goodSearch,
    getAllLabels, getCompanyHot,
    getGoodByLabel,
    getRecommend
} from "../http/apiProduct";
//管理响应
Vue.use(Vuex);

const state = {
    baseUrl: (location.host.indexOf('192') > -1 || location.host.indexOf('localhost') > -1) ? '//localhost:8080' : '',
    car: [],// {goodNumber:1,check: true,good:{}} 商品数量，是否选中，商品详情
    menu: [],
    currentMenu: {}, //当前菜单选中的菜单
    currentClass: undefined,  // 当前选中分类
    currentGoodData: undefined, // 依据当前分类获取的商品分页数据
    pageConfig: {  // 全局分页配置
        pageSize: 20,
        pageNumber: 1
    },
    goodItemDetail: undefined, // 选中的商品详情
    Recommend: [[], [], []],
    order: [], // 提交订单成功时
    classIndex: 0,
    menuIndex: 0,
    allLabels: [],
    hotCompany: []

}


const getters = {
    total(state) {
        let money = 0;
        state.car.forEach(item => {
            money += item.price * item.num
        });
        return money;
    },

    carList(state) {
        return state.car
    },
    getCurrentMenu(state) {
        return state.currentMenu;
    },
    getCurrentClass(state) {
        return state.currentClass;
    },
    classList(state) {
        return state.currentMenu.classes;
    },
    pageConfig(state) {
        return state.pageConfig;
    },
    goodItemDetail(state) {
        return state.goodItemDetail;
    },
    allTips(state) { //获取全部消费
        let count = 0;
        state.car.forEach(item => {
            if (item.check) {
                count += item.goodNumber * item.good.tip.priceAmount;
            }
        })
        return count
    },
    allPrice(state) {  // 获取全部价格费用
        let count = 0;
        state.car.forEach(item => {
            if (item.check) {
                count += item.goodNumber * item.good.price;
            }
        })
        return count
    },
    allCount(state) {  // 全部商品数量
        let count = 0;
        state.car.forEach(item => {
            if (item.check) {
                count += item.goodNumber;
            }
        })
        return count
    },
    checkCount(state) { // 选中的数量
        let count = 0;
        state.car.forEach(item => {
            if (item.check === true) {
                count += item.goodNumber;
            }
        })
        return count
    },
    checkCarParas(state) {  // 返回提交参数
        let para = [];
        state.car.forEach(item => {
            if (item.check === true) {
                para.push({
                    goodId: item.good.goodId,
                    amount: item.goodNumber
                })
            }
        })
        return para;
    },
    recommendList(state) {
        return state.Recommend;
    },
    getOrder(state) {
        return state.order;
    },
    getClassIndex(state) {
        return state.classIndex;
    },
    getAllLabels(state) {
        return state.allLabels;
    },
    baseUrl(state) {
        return state.baseUrl;
    },
    getLabelNameByIds: state => ids => {
        function find(id) {
            let labelName;
            state.allLabels.forEach(item => {
                if (parseInt(id) === item.labelId) {
                    labelName = item.labelName;
                }
            })
            return labelName;
        }

        return ids.split(',').map(id => find(id))
    },
    getHotCompany(state) {
        return state.hotCompany;
    },
    getMenuIndex(state) {
        return state.menuIndex;
    }
}

const mutations = {
    //获取菜单
    getMenu(state, menu) {
        state.menu = menu;
    },

    // 这里通过params 接收到actions里面传来的数据
    // 通过对象的方法将里面的数据提取出来
    addGood(state, carItem) {
        //下面是根据传来的数据修改car中的数据
        let isHas = state.car.some(item => {
            //some方法中只要有一个item，isHas就为true
            // console.log("newItem", carItem, "oldItem", item)

            if (item.good.goodId === carItem.good.goodId) {
                item.goodNumber += carItem.goodNumber;
                return true;
            } else {
                return false
            }
        })
        if (!isHas) {
            state.car.push(carItem)
        }
        // console.log('购物车', state.car)
    },
    syncGood(state, {good, goodNumber}) { //同步商品数量
        let len = state.car.length;
        for (let i = 0; i < len, i++;) {
            if (state.car[i].good.goodId === good.goodId) {
                state.car[i].goodNumber = goodNumber;
            }
        }
    },
    removeGood(state, id) {    // 移除购物车
        // console.log('removeGoodId', id)
        let len = state.car.length;
        for (let i = 0; i < len; i++) {
            // console.log('state.car[i].good.goodId', state.car[i].good.goodId)
            if (state.car[i].good.goodId === id) {
                state.car.splice(i, 1)
                break;
            }
        }
        // console.log('removeGood', state.car)
    },
    ckd(state, goodId) {
        state.car.forEach(item => {
            if (item.good.goodId === goodId) {
                item.check = !item.check
                // console.log('item', item)
            }
        })
    },
    ckdAll(state, isCheck) {
        state.car.forEach(item => {
            item.check = isCheck
        })
        // console.log('ckdAll', state.car)
    }
    , toggleMenu(state, menu) {
        state.currentMenu = menu;
        // console.log('toggleMenu', this.state.currentMenu)
    }
    , toggleClass(state, classItem) {
        state.currentClass = classItem;
        // console.log('toggleClass', this.state.currentClass)
    },
    reInitPageConfig(state) {
        state.pageConfig = {
            pageSize: 20,
            pageNumber: 1
        }
    },
    setGoodData(state, goodData) {
        // console.log('goodData', goodData)
        state.currentGoodData = goodData;
    },
    setPageConfig(state, data) {
        Object.assign(state.pageConfig, data)
    },
    setGoodItemDetail(state, data) {
        // console.log('xiangqing', data);
        state.goodItemDetail = data;
    },
    setCar(state, carData) {
        state.car = carData;
    },
    setRecommend(state, data) {
        state.Recommend = data;
    },
    setOrder(state, data) {
        state.order.push(data)
    },
    resetOrder(state) {
        state.order = [];
    },
    setClassIndex(state, index) {
        state.classIndex = index;
    },
    setAllLabels(state, data) {
        state.allLabels = data;
    },
    setCompanyHot(state, data) {
        state.hotCompany = data;
    },
    setMenuIndex(state, data) {
        state.menuIndex = data;
    }
}

const actions = {
    getMenu({commit}) {
        //异步数据的获取
        _getMenu().then(res => {
            commit('getMenu', res.data)
            // ('vuex导航', res.data);
        })
    },

    addGood({commit}, params) {

        commit('addGood', params)
    },

    syncGood({commit}, params) {
        commit('syncGood', params)
    },

    removeGood({commit}, params) {
        commit('removeGood', params)
    },

    ckd({commit}, params) {
        setTimeout(() => {
            let result = 'success'
            if (result === 'success') {
                //模拟数据已经获取成功，commit mutations里面的ckd的方法，第二个参数是传参
                commit('remove', params)
            }
        }, 300)
    },
    toggleMenu({commit}, params) {
        commit('reInitPageConfig') // 重新初始化分页配置
        commit('toggleMenu', params) // 提交当前选中菜单
        commit('toggleClass', params.classes[0]) // 默认选择第一个分类
    },
    getGoodByClass({commit}, params) {
        _getClassesPage(params).then(resp => {
            commit('setGoodData', resp.data)
        })
    },
    getGoodByLabel({commit}, params) {
        _getGoodByLabel(params).then(resp => {
            commit('setGoodData', resp.data)
        })
    },
    getGoodBySearch({commit}, params) {
        _goodSearch(params).then(resp => {
            commit('setGoodData', resp.data)
        })
    },
    toggleCurrentClassItem({commit}, item) {
        commit('toggleClass', item)
    },
    changePageConfig({commit}, item) {
        commit('setPageConfig', item)
    },
    reSetPageConfig({commit}) {
        commit('reInitPageConfig')
    },
    setGoodItem({commit}, item) {
        commit('setGoodItemDetail', item)
    },
    getRecommend({commit}) {
        getRecommend().then(resp => {
            commit('setRecommend', resp.data)
        })
    },
    getLabels({commit}) {
        getAllLabels().then(resp => {
            commit('setAllLabels', resp.data)
        })
    },
    getHotCompany({commit}, paras) {
        getCompanyHot(paras).then(resp => {
            commit('setCompanyHot', resp.data);
        })
        return undefined;
    }

}

const store = new Vuex.Store({
    state, getters, mutations, actions,
    /* vuex数据持久化配置 */
    plugins: [
        createPersistedState({
            // 存储方式：localStorage、sessionStorage、cookies
            storage: window.localStorage,
            // 存储的 key 的key值
            key: "store",
            render(state) {
                // 要存储的数据：本项目采用es6扩展运算符的方式存储了state中所有的数据
                return {...state};
            }
        })
    ]
})

export default store;
