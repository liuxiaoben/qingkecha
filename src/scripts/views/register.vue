<template>
    <div class="section">
        <Head title="注册" :back="true"></Head>
        <div class="r"><img src="../../assets/images/r.png" alt=""></div>
        <div class="dl">
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="val" id="username"></mt-field> 
            <p id="tip1" v-html="tip1"></p>
            <input label=" " placeholder="输入短信验证码" v-model="yzm" id="dbpassword" >
                <span id="yzm" @click="tel" >获取验证码</span>
          
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" id="password"></mt-field>
            <p id="tip2" v-html="tip2"></p>
            
            <mt-button type="default" id="dlBtn">登录</mt-button>
            <mt-button type="primary" id="zcBtn" @click="gozc">注册</mt-button>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import {mapState} from "vuex";
import {Field ,Button ,Popup,MessageBox} from 'mint-ui';
Vue.component(Button.name, Button);
Vue.component(Field.name, Field);
export default {
    data(){
        return{
            username:"",
            password:"",
            yzm:"",
           list:"",
           tip1:"",
           tip2:"",
           val:""
        }
    },
    computed:{
       
    },
    methods:{
        tel(){
            var reg = /^1(3|4|5|6|7|8)\d{9}$/g
            if(reg.test(this.val)){
                 this.$http.get("http://localhost:3000/vue/check",{params:{tel:this.val}}).then(res=>{
                     console.log("+-+-+-++")
                     console.log(res)
                     if(res.data=="0"){
                         this.list= res.data
                         console.log(res.data)
                         this.$http.get("http://localhost:3000/vue/code",{params:{tel:this.val,code:this.yzm}}).then(res=>{
                             
                             if(res.data == "1"){
                                MessageBox("验证码发送成功")
                             }
                         })

                     }else{
                         
                          MessageBox("用户名已存在")
                     }
             })
            }else{
               
                MessageBox("请输入有效的电话号码")
            }
        },
        gozc(){
            if(this.val!=""&&this.yzm!=""){
                this.$http.get("http://localhost:3000/vue/checks",{params:{tel:this.val,code:this.yzm}}).then(res=>{
                    console.log(res)
                    if(res.data=="1"){
                        
                        var reg2 = /^[0-9]{6,12}$/g
                        if(reg2.test(this.password)){
                            this.$http.get("http://localhost:3000/vue/register",{params:{username:this.val,password:this.password}}).then(res=>{
                                if(res.data=="0"){
                                   
                                    console.log(res.data);
                                    localStorage.username = this.val
                                    this.$router.push({name:"login"})
                                }else{
                                    MessageBox("注册失败")
                                }
                            })
                        }else{
                            this.tip2 = "请输入6-12位数字密码"
                            
                        }
                    }else{
                        MessageBox("验证码错误")
                    }
                })
               
            }else{
                MessageBox("请输入用户名和验证码")
            }
        }
    },
   
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
        #username{
            width: 90%;
            height: 80px;
            line-height: 80px;
            margin: 20px auto;
            border: 1px solid #6f6f6f;
            border-radius: 10px;
           
               
        }
       
        #dbpassword{
            width: 60%;
            height: 80px;
            margin: 20px auto;
            border: 1px solid #6f6f6f;
            border-radius: 10px;
            margin-bottom: 80px;
             
        }
         #yzm{
           color:#cad;
            width: 40%;
            font-size: 34px;
        }
        #password{
            width: 90%;
            height: 80px;
            margin: 20px auto;
            border: 1px solid #6f6f6f;
            border-radius: 10px;
        }
        #dlBtn{
            width: 230px;
            height: 80px;
        }
        #zcBtn{
            width: 430px;
            height: 80px;
        }
        #tip1,#tip2{
            height: 50px;
            font-size: 24px;
            color: red;
            width: 90%;
            padding-left: 5%;
            padding-right: 5%;
        }

    }
</style>



