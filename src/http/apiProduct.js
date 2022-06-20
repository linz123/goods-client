import { get, post }  from 'axios';

//获取导航栏
export const getMenu = data => post('/api/admin/GetClassesByPage', data)
//获取全部分类
export const getClassesPage = data => post('/api/admin/getClassesByPage', data);
// 获取首页商品
export const  getDate = data => post('/api/admin/goodList',data);
// 获取商品详情
export const getGoodsInfo = data => post('/api/admin/getGoodById', data);


export const getShopCartData = () =>{
  let prdData = JSON.parse(localStorage.getItem('goodsData')||[]);
   return prdData;
}
