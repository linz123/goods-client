<template>
  <div class="content">
    <all_categories></all_categories>
  </div>
</template>

<script>
export default {
  name: "amulet",
  data() {
    return {
      currentPayerIndex: 0,
      productList: [
        {name: '泰国佛牌', remark: '泰国药师佛牌——避险辟邪、挡灾保平安', price: '1590.00 Baht', imgUrl: '', goodId:'111'}, {
          name: '泰国佛牌',
          remark: '泰国药师佛牌——避险辟邪、挡灾保平安',
          price: '1590.00 Baht',
          imgUrl: '',
          goodId:'111'
        },
        {name: '泰国佛牌', remark: '泰国药师佛牌——避险辟邪、挡灾保平安', price: '1590.00 Baht', imgUrl: '',  goodId:'111'}, {
          name: '泰国佛牌',
          remark: '泰国药师佛牌——避险辟邪、挡灾保平安',
          price: '1590.00 Baht',
          imgUrl: '',
          goodId:'111'
        },
        {name: '泰国佛牌', remark: '泰国药师佛牌——避险辟邪、挡灾保平安', price: '1590.00 Baht', imgUrl: '',  goodId:'111'}, {
          name: '泰国佛牌',
          remark: '泰国药师佛牌——避险辟邪、挡灾保平安',
          price: '1590.00 Baht',
          imgUrl: '',
          goodId:'111'
        },
        {name: '泰国佛牌', remark: '泰国药师佛牌——避险辟邪、挡灾保平安', price: '1590.00 Baht', imgUrl: '', goodId:'111'}, {
          name: '泰国佛牌',
          remark: '泰国药师佛牌——避险辟邪、挡灾保平安',
          price: '1590.00 Baht',
          imgUrl: '',
          goodId:'111'
        },
        {name: '泰国佛牌', remark: '泰国药师佛牌——避险辟邪、挡灾保平安', price: '1590.00 Baht', imgUrl: '', goodId:'111'}, {
          name: '泰国佛牌',
          remark: '泰国药师佛牌——避险辟邪、挡灾保平安',
          price: '1590.00 Baht',
          imgUrl: '',
          goodId:'111'
        },
        {name: '泰国佛牌', remark: '泰国药师佛牌——避险辟邪、挡灾保平安', price: '1590.00 Baht', imgUrl: '', goodId:'111'}, {
          name: '泰国佛牌',
          remark: '泰国药师佛牌——避险辟邪、挡灾保平安',
          price: '1590.00 Baht',
          imgUrl: '',
          goodId:'111'
        },
        {name: '泰国佛牌', remark: '泰国药师佛牌——避险辟邪、挡灾保平安', price: '1590.00 Baht', imgUrl: '', goodId:'111'}, {
          name: '泰国佛牌',
          remark: '泰国药师佛牌——避险辟邪、挡灾保平安',
          price: '1590.00 Baht',
          imgUrl: '',
          goodId:'111'
        },
        {name: '泰国佛牌', remark: '泰国药师佛牌——避险辟邪、挡灾保平安', price: '1590.00 Baht', imgUrl: '', goodId:'111'}, {
          name: '泰国佛牌',
          remark: '泰国药师佛牌——避险辟邪、挡灾保平安',
          price: '1590.00 Baht',
          imgUrl: '',
          goodId:'111'
        },
        {name: '泰国佛牌', remark: '泰国药师佛牌——避险辟邪、挡灾保平安', price: '1590.00 Baht', imgUrl: '', goodId:'111'}, {
          name: '泰国佛牌',
          remark: '泰国药师佛牌——避险辟邪、挡灾保平安',
          price: '15900.00 Baht',
          imgUrl: '',
          goodId:'111'
        },
        {name: '泰国佛牌', remark: '泰国药师佛牌——避险辟邪、挡灾保平安', price: '1590.00 Baht', imgUrl: '', goodId:'111'}, {
          name: '泰国佛牌',
          remark: '泰国药师佛牌——避险辟邪、挡灾保平安',
          price: '1590.00 Baht',
          imgUrl: '',
          goodId:'111'
        },
        {name: '泰国佛牌', remark: '泰国药师佛牌——避险辟邪、挡灾保平安', price: '1590.00 Baht', imgUrl: '', goodId:'111'}, {
          name: '泰国佛牌',
          remark: '泰国药师佛牌——避险辟邪、挡灾保平安',
          price: '1590.00 Baht',
          imgUrl: '',
          goodId:'111'
        },
        {name: '泰国佛牌', remark: '泰国药师佛牌——避险辟邪、挡灾保平安', price: '1590.00 Baht', imgUrl: '', goodId:'111'}, {
          name: '泰国佛牌',
          remark: '泰国药师佛牌——避险辟邪、挡灾保平安',
          price: '1590.00 Baht',
          imgUrl: '',
          goodId:'111'
        },
        {name: '泰国佛牌', remark: '泰国药师佛牌——避险辟邪、挡灾保平安', price: '1590.00 Baht', imgUrl: '', goodId:'111'},
      ],
      menuList: ['泰国菜', '中餐', '寿司', '印度菜'],
    }
  },
  methods:{
    // 查看详情
    checkProduct(id) {
      this.$router.push({
        name: 'Product_details',
        params: {id:id}
      })
    }

  }
}
</script>
<style scoped lang="scss">
.content {
  width: 100%;
  border-top: 1px solid #dfdada;
}
</style>
