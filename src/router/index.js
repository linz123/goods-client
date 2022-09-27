import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store.js';

Vue.use(Router)

// let rawMenu = []
//
// store.state.menu.forEach(item => {
//   if(item.url === 'index'){
//     rawMenu.push(  {
//       path: item.url,
//       name: item.url,
//       component: () => import('@/components/page/index.vue'),
//     })
//   }else{
//     rawMenu.push(  {
//       path: item.url,
//       name: item.url,
//       component: () => import('@/components/page/market.vue'),
//     })
//   }
// })


export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            redirect: '/home/index',
        },
        {
            path: '/home',
            component: () => import('@/components/home/layout.vue'),
            children: [
                {
                    path: 'index',
                    name: 'Index',
                    component: () => import('@/components/page/index.vue'),
                },
                //市场
                {
                    path: 'market',
                    name: 'Market',
                    component: () => import('@/components/page/market.vue'),
                },
                //数码电子
                {
                    path: 'digital-product',
                    name: 'Digital-product',
                    component: () => import('@/components/page/market.vue'),
                },
                //免税店
                {
                    path: 'king-power',
                    name: 'King-power',
                    component: () => import('@/components/page/market.vue'),
                },
                //佛牌
                {
                    path: 'amulet',
                    name: 'Amulet',
                    component: () => import('@/components/page/market.vue'),
                },
                //美食
                {
                    path: 'food',
                    name: 'Food',
                    component: () => import('@/components/page/market.vue'),
                },
                //出租车
                {
                    path: 'car',
                    name: 'Car',
                    component: () => import('@/components/page/market.vue'),
                },
                //招聘
                {
                    path: 'recruit',
                    name: 'Recruit',
                    component: () => import('@/components/page/recruit.vue'),
                },
                //格子铺
                {
                    path: 'grid',
                    name: 'Grid',
                    component: () => import('@/components/page/market.vue'),
                },
                //跳蚤市场
                {
                    path: 'flea',
                    name: 'Flea',
                    component: () => import('@/components/page/market.vue'),
                },
                {
                    path: '/order',
                    name: 'Order',
                    component: () => import('@/components/other/order.vue'),
                },
                //招聘详情
                {
                    path: '/recruit-detail',
                    name: 'Recruit-detail',
                    component: () => import('@/components/other/recruit_detail.vue'),
                },
                //格子铺详情
                {
                    path: '/grid-detail',
                    name: 'Grid-detail',
                    component: () => import('@/components/other/shop-detail.vue'),
                },

            ]
        },
        //购物车
        {
            path: '/shopping-cart',
            name: 'Shopping-cart',
            component: () => import('@/components/other/shopping-cart.vue'),
        },
        //商品详情
        {
            path: '/product_details',
            name: 'Product_details',
            component: () => import('@/components/other/product_details.vue'),
        },
        //跳蚤市场详情
        {
            path: '/flea-detail',
            name: 'Flea-detail',
            component: () => import('@/components/other/flea-details.vue'),
        },
        //搜索
        {
            path: '/search',
            name: 'Search',
            component: () => import('@/components/other/search.vue'),
        },

    ]
})
