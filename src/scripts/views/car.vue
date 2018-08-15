<template>
    <div class="section" style="padding-bottom:100px">
        <div v-if="loginTip">
        <Head title="购物车" :back="true"></Head>
        <div class="car1">
            <input type="checkbox">
            <span>30度天蓝青稞茶</span>
            <mt-button type="danger" id="bj">删除</mt-button>
        </div>
        <ul class="car2">
            <li>
                <input type="checkbox">
                <p><img :src="cars.productImage" alt=""></p>
                <div class="car2-1">
                    <h3>{{cars.productName}}</h3>
                    <p><span>-</span>&nbsp;&nbsp;&nbsp;<span>+</span></p>
                </div>
                <div class="car2-2">
                    <h4>￥{{cars.marketPrice}}</h4>
                    <h5>* <span>1</span></h5>
                </div>
            </li>
        </ul>
        </div>
        <div v-else>
            <Head title="登录" :back="true"></Head>
            <div class="r"><img src="../../assets/images/r.png" alt=""></div>
            <div class="dl">
                <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="username" id="phone">
                </mt-field> 
                <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" id="password"></mt-field>
                <mt-button type="primary" id="dlBtn" @click="gohome">登录</mt-button>
                <mt-button type="default" id="zcBtn" @click="gozc">注册</mt-button>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            cars:[],
            loginTip:localStorage.username
        }
    },
    created(){
        this.$http.get("http://47.98.244.85:3000/vue/teas").then(res=>{
            this.cars = res.body.find((item,index)=>item._id==this.$route.params.id)
        })
    }
}
</script>


<style lang="scss">
    .car1{
        width: 94%;
        height: 80px;
        line-height: 80px;
        padding: 3%;
        background: #fff;
        border-bottom: 1px solid #000;
        position: relative;
        span{
            font-size: 30px;
        }
        #bj{
            position: absolute;
            right: 60px;
        }
    }
    .car2{
        width:94%;
        padding: 3%;
        li{
            width:100%;
            height: 200px;
            position: relative;
            font-size: 26px;
           input{
               float: left;
               width: 5%;
               position: absolute;
               top: 35px;
           }
           
             p{
                font-size: 26px;
                float: left;
                margin-left: 50px ;
                margin-right: 50px;
                width: 20%;
                img{
                    width: 120px;
                    height: 120px;
                }
            }
            .car2-1{
                position: absolute;
                top: 35px;
                left: 30%;
                float: left;
                text-align: center;
                p{
                    border: 2px solid #444
                }
            }
            .car2-2{
                position: absolute;
                top: 35px;
                float: left;
                position: absolute;
                right: 20px;
                
            }
        }
    }
     .r{
        width: 100%;
        height: 260px;
        text-align: center;
        overflow: hidden;
        padding-top: 100px;
        img{
            width: 150px;
            height: 150px;
            display: inline-block;
            margin-bottom: 20px;
        }
    }
    .dl{
        width: 100%;
        text-align: center;
        #phone,#password{
            width: 90%;
            height: 80px;
            margin: 20px auto;
            border: 1px solid #6f6f6f;
            border-radius: 10px;
        }
        #dlBtn{
            width: 430px;
            height: 80px;
            margin-top: 20px;
        }
        #zcBtn{
            width: 230px;
            height: 80px;
            margin-top: 20px;
        }

    }
</style>

