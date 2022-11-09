// import { get, post }  from 'axios';

import {axios} from "./axiosConfig";

//获取导航栏
export const _getMenu = data => axios.post('/api/client/getTreeList', data)
//获取全部分类
export const _getClassesPage = data => axios.post('/api/client/getGoodBYClass', data);
// 获取首页商品
export const getDate = data => axios.post('/api/client/goodList', data);
// 获取首页推荐
export const getRecommendDate = data => axios.post('/api/client/getRecommendByType', data);

// 获取商品详情
export const getGoodsInfo = data => axios.post('/api/client/getGoodById', data);
// 创建购物车订单
export const createGoodsOrder = data => axios.post('/api/client/addOrder', data);
// 获取首页推荐
export const getRecommend = data => axios.post('/api/client/getRecommend', data);

// 根据标签获取商品
export const _getGoodByLabel = data => axios.post('/api/client/getGoodByLabel', data);

// 根据商品名关键字获取商品
export const _goodSearch = data => axios.post('/api/client/GoodSearch', data);

// 获取所有标签
export const getAllLabels = data => axios.post('/api/client/getAllLabels', data);

// 获取热度招聘
export const getCompanyHot = data => axios.post('/api/client/getRecruit', data);

// 根据类别id 获取分类
export const getClassById = data => axios.post('/api/client/getClassById', data);

// 统计数据
export const accessLog = data => axios.post('/api/client/setAccessLog', data);

export const getShopCartData = () => {
    let prdData = JSON.parse(localStorage.getItem('goodData') || []);
    return prdData;
}

export const getBrowserInfo = () => {
    const Sys = {};
    const ua = navigator.userAgent.toLowerCase();
    const re = /(msie|firefox|chrome|opera|version).*?([\d.]+)/;
    const m = ua.match(re);
    Sys.browser = m[1].replace(/version/, "safari");
    Sys.ver = m[2];
    return Sys;
}


// export const _createGoodsOrder =(data, vm)=>{
//   vm.$confirm('您的采购订单已提交至客服，查看订单可联系客服！', ()=>{
//     //创建订单
//     createGoodsOrder(data).then(res=>{
//       vm.tipMsg = res.msg;
//       vm.tipShow = true;
//       if(res.status === 10000){
//         vm.tipSuccess= true;
//       }
//     })
//   })
// }
