import Vue from 'vue';
import Vuex from 'vuex';
import {_getMenu} from "../http/apiProduct";
//管理响应
Vue.use(Vuex);

const state = {
  car:[],
  menu:[]
}



const getters = {
  total(state) {
    let money = 0;
    state.car.forEach(item => {
      money += item.price * item.num
    });
    return money;
  },

  getCar(state) {
    return state.car
  }
}

const mutations = {
  //获取菜单
  getMenu(state, menu) {
    state.menu = menu;
  },

  // 这里通过params 接收到actions里面传来的数据
  // 通过对象的方法将里面的数据提取出来
  addGood(state, good) {
    //下面是根据传来的数据修改car中的数据
    let isHas = state.car.some(item => {
      //some方法中只要有一个item，isHas就为true
      if (item.good.goodId === good.goodId) {
        item.good.goodNumber+=good.goodNumber;
        return true;
      } else {
        return false
      }
    })
    if (!isHas) {
      state.car.push({
        good,
      })
    }
    console.log('传过来购物的商品', state.car)
  },

  reduceGood(state, {goodId,index}) {
    let len = state.car.length;
    for(let i=0;i<len,i++;){
      if(state.car[i].good.goodId === goodId) {
        // state.car.splice(i,1)
        alert(555)
        // if(state.car[i].num === 0){
        //   state.car.splice(i,i)
        //   break;
        // }
      }
    }
  },

  removeGood(state, {id}){
    let len =state.car.length;
    for (let i=0;i<len;i++) {
      if(state.car[i].id === id){
        state.car.splice(i,i)
        break;
      }
    }
  },

  ckd(state, check){
    alert(111);
    // state.car.forEach(item=>{
    //   item.check = newAll
    // })
  }
}

const actions = {
  getMenu({commit}){
    //异步数据的获取
    _getMenu().then(res=>{
      if (res.data.code === 200){
        commit('getMenu', res.data.data)
      }
      console.log('vuex导航',res.data.data);
    })
  },

  addGood({commit}, params) {
    //用setTimeout模拟一个异步数据的获取
    setTimeout(() => {
      let result = 'success'
      if (result === 'success') {
        //模拟数据已经获取成功，commit mutations里面的addGood的方法，第二个参数是传参
        commit('addGood', params)
      }
    }, 300)
  },

  reduceGood({commit}, params) {
    setTimeout(() => {
      let result = 'success'
      if (result === 'success') {
        //模拟数据已经获取成功，commit mutations里面的reduceGood的方法，第二个参数是传参
        commit('reduceGood', params)
      }
    }, 300)
  },

  removeGood({commit}, params) {
    setTimeout(() => {
      let result = 'success'
      if (result === 'success') {
        //模拟数据已经获取成功，commit mutations里面的removeGood的方法，第二个参数是传参
        commit('remove', params)
      }
    }, 300)
  },

  ckd({commit}, params){
    setTimeout(() => {
      let result = 'success'
      if (result === 'success') {
        //模拟数据已经获取成功，commit mutations里面的ckd的方法，第二个参数是传参
        commit('remove', params)
      }
    }, 300)
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})

export default store;
