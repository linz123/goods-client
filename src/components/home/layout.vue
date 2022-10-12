<template>
    <div class="home">
        <Header class="header"></Header>
        <div class="mian">
            <a-spin size="large" class="loading" :spinning="this.$store.state.goodsLoading" >
                <router-view></router-view>
            </a-spin>
        </div>
        <Footer class="footer"></Footer>
    </div>

</template>

<script>
import Header from "./header";
import Footer from "./footer";
import Index from "../page";

export default {
    name: "layout",
    components: {Index, Footer, Header}
}
</script>

<style scoped>
.home {
    width: 100%;
    background: #fff;

}

.header {
    width: 100%;
    height: 130px;
}

.mian {
    width: 100%;
    background: #ffffff;
    min-height: 900px;
}

.footer {
    width: 100%;
    height: 250px;
    background: #e6e6e6;
}

.loading {
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 30px 50px;
    margin: 20px 0;
}
.good-button{
    cursor: pointer !important;
}
</style>
