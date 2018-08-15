<template>
    <div class="section">
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
</template>

<script>
import Vue from "vue";
import {mapState} from "vuex";
import {Field ,Button,Popup,MessageBox } from 'mint-ui';
Vue.component(Button.name, Button);
Vue.component(Field.name, Field);
export default {
   data(){
       return{
           username:"",
           password:""
       }
   },
    methods:{
        gohome(){
            this.$http.post("http://localhost:3000/vue/login",{
                username:this.username,
                password:this.password
            }).then(res=>{
                if(res.data=="1"){
                    console.log(res)
                     localStorage.username = this.username
                    this.$router.push({name:"my"})
                }else{
                    MessageBox("账号或者密码错误");
                }
            })
            
        },
        gozc(){
            this.$router.push({name:"register"})
        }
    }
}
</script>

<style lang="scss">
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



