<template>
  <div class="content">
    <all_categories></all_categories>
  </div>
</template>

<script>
export default {
  name: "car",
  data() {
    return {
      currentPayerIndex: 0,
      productList: [
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '', goodId:'222'}, {
          name: '埃尔法',
          remark: '1小时1500泰铢，日租8000泰铢',
          price: '1500Baht/h',
          imgUrl: '',
          goodId:'222'
        },
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '', goodId:'222'}, {
          name: '埃尔法',
          remark: '1小时1500泰铢，日租8000泰铢',
          price: '1500Baht/h',
          imgUrl: '',
          goodId:'222'
        },
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '', goodId:'222'}, {
          name: '埃尔法',
          remark: '1小时1500泰铢，日租8000泰铢',
          price: '1500Baht/h',
          imgUrl: '',
         goodId: '222'
         },
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '', goodId:'222'}, {
          name: '埃尔法',
          remark: '1小时1500泰铢，日租8000泰铢',
          price: '1500Baht/h',
          imgUrl: '',
          goodId:'222'
        },
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '', goodId:'222'}, {
          name: '埃尔法',
          remark: '1小时1500泰铢，日租8000泰铢',
          price: '1500Baht/h',
          imgUrl: '',
          goodId:'222'
        },
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '', goodId:'222'}, {
          name: '埃尔法',
          remark: '1小时1500泰铢，日租8000泰铢',
          price: '1500Baht/h',
          imgUrl: '',
          goodId:'222'
        },
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '', goodId:'222'}, {
          name: '埃尔法',
          remark: '1小时1500泰铢，日租8000泰铢',
          price: '1500Baht/h',
          imgUrl: '',
          goodId:'222'
        },
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '', goodId:'222'}, {
          name: '埃尔法',
          remark: '1小时1500泰铢，日租8000泰铢',
          price: '1500Baht/h',
          imgUrl: '',
          goodId:'222'
        },
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '', goodId:'222'}, {
          name: '埃尔法',
          remark: '1小时1500泰铢，日租8000泰铢',
          price: '1500Baht/h',
          imgUrl: '',
          goodId:'222'
        },
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '', goodId:'222'}, {
          name: '埃尔法',
          remark: '1小时1500泰铢，日租8000泰铢',
          price: '1500Baht/h',
          imgUrl: '',
          goodId:'222'
        },
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '', goodId:'222'}, {
          name: '埃尔法',
          remark: '1小时1500泰铢，日租8000泰铢',
          price: '1500Baht/h',
          imgUrl: '',
          goodId:'222'
        },
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '', goodId:'222'}, {
          name: '埃尔法',
          remark: '1小时1500泰铢，日租8000泰铢',
          price: '1500Baht/h',
          imgUrl: '',
          goodId:'222'
        },
        {name: '埃尔法', remark: '1小时1500泰铢，日租8000泰铢', price: '1500Baht/h', imgUrl: '',  goodId:'222'},
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
