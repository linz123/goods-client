<template>
<div class="content">
  <div class="content-">
    <div class="search">搜索结果'苹果'</div>
    <div class="result">0个关于”苹果“</div>
    <div class="no-data">
      <div class="no-data-box">
        <h1>未能搜索相关商品</h1>
        <p>我们很抱歉。我们找不到您的搜索词的任何匹配项</p>
        <img src="../../assets/img/xiangqing/no-data.png">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "no-data"
}
</script>

<style scoped lang="scss">
.content{
  width: 100%;
  border-top:1px solid #dfdada;
  .content-{
    width: 1200px;
    margin: 20px auto;
    height: 500px;
    .search{
      text-align:left;
      font-size: 18px;
      color: #999;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .result{
      text-align:left;
      font-size: 14px;
      color: #999;
    }
    .no-data{
      width: 100%;
      margin-top: 60px;
      .no-data-box{
        width: 500px;
        height: 400px;
        margin: 0 auto;
        padding: 80px;
        h1{
          text-align: center;
          font-size: 34px;
          color: #333;
          font-weight: 600;
          margin-bottom: 20px;
        }
        p{
          text-align: center;
          font-size: 15px;
          color: #999;
          font-weight: 700;
          margin-bottom: 20px;
        }
        img{
          width: 73px;
          height: 73px;
          display: block;
          margin: 15px auto;
        }
      }

    }
  }
}
</style>
