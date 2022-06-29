<template>
  <div class="content">
    <all_categories></all_categories>
  </div>
</template>

<script>
export default {
  name: "food",
  data() {
    return {
      currentPayerIndex: 0,
      productList: [
        {name: '泰国餐厅', remark: 'NO.1盒X10个', price: '159.00 Baht', imgUrl: '', goodId:'555'}, {
          name: '泰国餐厅',
          remark: 'NO.1盒X10个',
          price: '159.00 Baht',
          imgUrl: '',
          goodId:'555'
        },
        {name: '泰国餐厅', remark: 'NO.1盒X10个', price: '159.00 Baht', imgUrl: '', goodId:'555'}, {
          name: '泰国餐厅',
          remark: 'NO.1盒X10个',
          price: '159.00 Baht',
          imgUrl: '',
          goodId:'555'
        },
        {name: '泰国餐厅', remark: 'NO.1盒X10个', price: '159.00 Baht', imgUrl: '', goodId:'555'}, {
          name: '泰国餐厅',
          remark: 'NO.1盒X10个',
          price: '159.00 Baht',
          imgUrl: '',
          goodId:'555'
        },
        {name: '泰国餐厅', remark: 'NO.1盒X10个', price: '159.00 Baht', imgUrl: '', goodId:'555'}, {
          name: '泰国餐厅',
          remark: 'NO.1盒X10个',
          price: '159.00 Baht',
          imgUrl: '',
          goodId:'555'
        },
        {name: '泰国餐厅', remark: 'NO.1盒X10个', price: '159.00 Baht', imgUrl: '', goodId:'555'}, {
          name: '泰国餐厅',
          remark: 'NO.1盒X10个',
          price: '159.00 Baht',
          imgUrl: '',
          goodId:'555'
        },
        {name: '泰国餐厅', remark: 'NO.1盒X10个', price: '159.00 Baht', imgUrl: '', goodId:'555'}, {
          name: '泰国餐厅',
          remark: 'NO.1盒X10个',
          price: '159.00 Baht',
          imgUrl: '',
          goodId:'555'
        },
        {name: '泰国餐厅', remark: 'NO.1盒X10个', price: '159.00 Baht', imgUrl: '', goodId:'555'}, {
          name: '泰国餐厅',
          remark: 'NO.1盒X10个',
          price: '159.00 Baht',
          imgUrl: '',
          goodId:'555'
        },
        {name: '泰国餐厅', remark: 'NO.1盒X10个', price: '159.00 Baht', imgUrl: '', goodId:'555'}, {
          name: '泰国餐厅',
          remark: 'NO.1盒X10个',
          price: '159.00 Baht',
          imgUrl: '',
          goodId:'555'
        },
        {name: '泰国餐厅', remark: 'NO.1盒X10个', price: '159.00 Baht', imgUrl: '', goodId:'555'}, {
          name: '泰国餐厅',
          remark: 'NO.1盒X10个',
          price: '159.00 Baht',
          imgUrl: '',
          goodId:'555'
        },
        {name: '泰国餐厅', remark: 'NO.1盒X10个', price: '159.00 Baht', imgUrl: '', goodId:'555'}, {
          name: '泰国餐厅',
          remark: 'NO.1盒X10个',
          price: '159.00 Baht',
          imgUrl: '',
          goodId:'555'
        },
        {name: '泰国餐厅', remark: 'NO.1盒X10个', price: '159.00 Baht', imgUrl: '', goodId:'555'}, {
          name: '泰国餐厅',
          remark: 'NO.1盒X10个',
          price: '159.00 Baht',
          imgUrl: '',
          goodId:'555'
        },
        {name: '泰国餐厅', remark: 'NO.1盒X10个', price: '159.00 Baht', imgUrl: '', goodId:'555'}, {
          name: '泰国餐厅',
          remark: 'NO.1盒X10个',
          price: '159.00 Baht',
          imgUrl: '',
          goodId:'555'
        },
        {name: '泰国餐厅', remark: 'NO.1盒X10个', price: '159.00 Baht', imgUrl: '', goodId:'555'},
      ],
      menuList: ['泰国菜', '中餐', '寿司', '印度菜'],

    }
  },
  methods:{
    // 查看详情
    checkProduct(id) {
      this.$router.push({
        name: 'Product_details',
        params: {id}
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
