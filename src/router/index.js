import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

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
          component: () => import('@/components/page/digital-product.vue'),
        },
        //免税店
        {
          path: 'king-power',
          name: 'King-power',
          component: () => import('@/components/page/king-power.vue'),
        },
        //佛牌
        {
          path: 'amulet',
          name: 'Amulet',
          component: () => import('@/components/page/amulet.vue'),
        },
        //美食
        {
          path: 'food',
          name: 'Food',
          component: () => import('@/components/page/food.vue'),
        },
        //出租车
        {
          path: 'car',
          name: 'Car',
          component: () => import('@/components/page/car.vue'),
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
    //搜索
    {
      path: '/search',
      name: 'Search',
      component: () => import('@/components/other/search.vue'),
    },
  ]
})
