import Vue from 'vue';
import Vuex from 'vuex';
//管理响应
Vue.use(Vuex);

const state = {
  car: []
}

const getters = {
  total(state) {
    let money = 0;
    state.car.forEach(item => {
      money += item.price * item.num
    });
    return money;
  }
}

const mutations = {
  initCar(state, car) {
    //这里的car是actions里面的方法传过来的数据results
    //将后端的car和state里面的car实现同步
    state.car = car;
  },

  // 这里通过params 接收到actions里面传来的数据
  // 通过对象的方法将里面的数据提取出来
  addGood(state, item) {
    console.log('传过来购物的商品', item)
    //下面是根据传来的数据修改car中的数据
    let isHas = state.car.some(item => {
      //some方法中只要有一个item，isHas就为true
      if (item.id === id) {
        item.num++
        return true;
      } else {
        return false
      }
    })
    if (!isHas) {
      state.car.push({
        num: 1,
        item,
        check:true
      })
    }
    console.log('state-car', state.car)
  },

  reduceGood(state, {id}) {
    let len = state.car.length;
    for(let i=0;i<len,i++;){
      if(state.car[i].id == id) {
        state.car.num --
        if(state.car[i].num == 0){
          state.car.splice(i,i)
          break;
        }
      }
    }
  },

  removeGood(state, {id}){
    let len =state.car.length;
    for (let i=0;i<len;i++) {
      if(state.car[i].id == id){
        state.car.splice(i,i)
        break;
      }
    }
  },

  ckd(state, newAll){
    state.car.forEach(item=>{
      item.check = newAll
    })
  }
}

const actions = {
  initCar({commit}) {
    setTimeout(() => {
      let results = JSON.parse(localStorage.car || '[]')
      commit('initCar', results)
    }, 300)
  },

  addGood({commit}, params) {
    //用setTimeout模拟一个异步数据的获取
    setTimeout(() => {
      let result = 'ok'
      if (result == 'ok') {
        //模拟数据已经获取成功，commit mutations里面的addGood的方法，第二个参数是传参
        commit('addGood', params)
      }
    }, 300)
  },

  reduceGood({commit}, params) {
    setTimeout(() => {
      let result = 'ok'
      if (result == 'ok') {
        //模拟数据已经获取成功，commit mutations里面的reduceGood的方法，第二个参数是传参
        commit('reduceGood', params)
      }
    }, 300)
  },

  removeGood({commit}, params) {
    setTimeout(() => {
      let result = 'ok'
      if (result == 'ok') {
        //模拟数据已经获取成功，commit mutations里面的removeGood的方法，第二个参数是传参
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
