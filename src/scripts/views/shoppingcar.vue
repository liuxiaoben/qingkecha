<template>
    <div class="section" style="padding-bottom:100px" v-if="localStge.username">
        <div>
        <Head title="购物车"></Head>
        <router-link :to="{name:'home'}" id="back">< 返回</router-link>
        <div class="car1">
            <input type="checkbox">
            <span>30度天蓝青稞茶</span>
            <mt-button type="danger" id="bj" @click="del()">删除</mt-button>
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
        
    </div>
   
</template>


<script>
export default {
    data(){
        return{
            cars:[],
           
        }
    },
    created(){
        this.$http.get("http://localhost:3000/vue/teas").then(res=>{
            this.cars = res.body.find((item,index)=>item._id==this.$route.params.id)
        })
    },
    methods:{
        del(index){
            this.cars.splice(index,1)
        },
      
    }
}
</script>


<style lang="scss">
    #back{
        font-size: 30px;
        position: fixed;
        left: 30px;
        top: 35px;
        color:#fff;
    }
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
</style>

