import { get, post }  from 'axios';

//获取导航栏
export const _getMenu = data => post('/api/client/getTreeList', data)
//获取全部分类
export const _getClassesPage = data => post('/api/client/getGoodBYClass', data);
// 获取首页商品
export const  getDate = data => post('/api/client/goodList',data);
// 获取首页推荐
export const  getRecommendDate = data => post('/api/client/getRecommendByType',data);

// 获取商品详情
export const getGoodsInfo = data => post('/api/client/getGoodById', data);
// 创建购物车订单
export const createGoodsOrder = data => post('/api/client/addOrder', data);

export const getShopCartData = () =>{
  let prdData = JSON.parse(localStorage.getItem('goodData')||[]);
   return prdData;
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
