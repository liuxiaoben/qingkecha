<template>
    <div class="section">
        <div class="r" v-if="!loginTip">
            <img src="../../assets/images/r.png" alt="">
            <p><mt-button type="primary" @click="goLogin">登录/注册</mt-button></p>
        </div>
        <div class="r" v-else>
            <img src="../../assets/images/yh.png" alt="">
            <p><mt-button type="primary">{{loginTip}}</mt-button></p>
            <div id="goback" @click="goback">退出</div>
        </div>
        
        <div>
            <div class="li1">
                <p><img src="../../assets/images/dz.png" alt=""></p>
                <h3>收货地址</h3>
                <span><img src="../../assets/images/jt.png" alt=""></span>
            </div>
            <div class="li1">
                <p id="li2-p"><img src="../../assets/images/dd.png" alt=""></p>
                <h3>实物订单</h3>
                <span><img src="../../assets/images/jt.png" alt=""></span>
            </div>
            <div class="li1">
                <p id="li3-p"><img src="../../assets/images/gj.png" alt=""></p>
                <h3>售后中心</h3>
                <span><img src="../../assets/images/jt.png" alt=""></span>
            </div>
            <div class="li1">
                <p id="li4-p"><img src="../../assets/images/sc.png" alt=""></p>
                <h3>我的收藏</h3>
                <span><img src="../../assets/images/jt.png" alt=""></span>
            </div>
            <div class="li1">
                <p id="li5-p"><img src="../../assets/images/llq.png" alt=""></p>
                <h3>浏览记录</h3>
                <span><img src="../../assets/images/jt.png" alt=""></span>
            </div>
            <div class="li1">
                <p id="li6-p"><img src="../../assets/images/kf.png" alt=""></p>
                <h3>服务中心</h3>
                <span><img src="../../assets/images/jt.png" alt=""></span>
            </div>
            <div class="li1">
                <p id="li7-p"><img src="../../assets/images/rxdh.png" alt=""></p>
                <h3>热线电话 400-6668815</h3>
                <span><img src="../../assets/images/jt.png" alt=""></span>
            </div>

           
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            loginTip:localStorage.username
        }
    },
     methods:{
        goLogin(){
            this.$router.push({name:"login"})
        },
        goback(){
            this.$router.push({name:"my"})
            localStorage.username=""
            this.loginTip=""
        }
    }
}
</script>

<style lang="scss">
    .r{
        width: 100%;
        height: 400px;
        text-align: center;
        overflow: hidden;
        background: #0a7023;
        padding-top: 100px;
        position: relative;
        img{
            width: 200px;
            height: 200px;
            display: inline-block;
            margin-bottom: 20px;
        }
           #goback{
            position: absolute;
            color: #000;
            font-size: 34px;
            right: 20px;
            top: 20px;
            width: 130px;
            height: 60px;
            line-height: 60px;
            text-align: center;
            background: #ec5d6e;
            border-radius:10px; 
        }
   
    }
    .li1{
        width: 94%;
        height: 70px;
        line-height: 70px;
        background: #fff;
        text-align: center;
        padding-left: 3%;
        padding-right: 3%;
        margin: 20px 0;
        position: relative;
        p{
            width: 60px;
            height: 60px;
            margin-top: 5px;
            background: #ff93bc;
            float: left;
            border-radius: 10px;
            img{
                width: 60px;
                height: 60px;
                display: inline-block;
            }
        }
        h3{
            float: left;
            font-size: 26px;
            margin-left: 30px;
            font-weight: bold;
        }
        span{
            width: 40px;
            height: 40px;
            line-height: 40px;
            position: absolute;
            right: 10px;
            top: 15px;
            img{
                width: 40px;
                height: 40px;
                display: inline-block;
            }
        }
    }
    #li1-p{
        background: #4e8fe7;
    }
    #li3-p{
        background: #96b767;
    }
    #li4-p{
        background: #5db1ec;
    }
    #li5-p{
        background: #ec5d6e;
    }
    #li6-p{
        background: #5db1ec;
    }
    #li7-p{
        background: #ec5d6e;
    }
 
</style>

