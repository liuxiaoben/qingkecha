<template>
    <div class="section">
        <Head :back="true"></Head>
        <div class="de">
          <mt-swipe :auto="2000">
                <mt-swipe-item v-for="(item,index) in details" :key="index">
                    <img :src="item.imageUrl" alt="" id="Img">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <ul>
            <li>
                <h3>{{teas.productName}}</h3>
                <p>￥ {{teas.salePrice}}</p>
            </li>
        </ul>
        <div class="foot">
           <div id="sl" @click="sl">{{count}} :件商品</div>
            <p>
            <mt-button type="danger" id="gocount" @click="count++" >加入购物车</mt-button>
            <mt-button type="primary" id="goshop">立即购买</mt-button>
            </p>
          
        </div>
    </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
        details: [],
        teas:[],
        count:0

    };
  },
  methods:{
      goount(){
          count++
      },
      change(){
          this.count +=1
      },
        sl(){
            // this.$http.get("http://localhost:3000/vue/shopping",).then(res=>{

            // })
            if(!localStorage.username){
                 this.$route.push({name:"login"})
            }else{
                this.$route.push({name:"car"})
            }
           
        }
  },
  created() {
      console.log(this.$route.params.id);
    this.$http.get("http://localhost:3000/vue/teas").then(res => {
        this.details = res.body.find((item,index)=>item._id==this.$route.params.id).productImages;
    });
    this.$http.get("http://localhost:3000/vue/teas").then(res=>{
         this.teas = res.body.find((item,index)=>item._id==this.$route.params.id);
         
    })
  }
};
</script>

<style lang="scss" scoped>
.de {
  width: 100%;
  height: 800px;
  overflow: hidden;
  mt-swipe {
    width: 100%;
    height: 800px;
    mt-swipe-item {
      width: 100%;
      height: 800px;
    }
  }
}
#Img {
  width: 100%;
  height: 800px;
}
ul{
    width:94%;
    padding: 3%;
    li{
        width: 100%;
        h3{
            font-size: 30px;
        }
        p{
            font-size: 26px;
            color: red;
        }
    }
}
.foot{
    width: 94%;
    height: 100px;
    padding-left: 3%;
    padding-right: 3%;
    position: fixed;
    bottom: 0;
    #sl{
        width: 30%;
        float: left;
        line-height: 100px;
        font-size: 32px;
        color: #000;
    }
  p{
      width: 70%;
      float: left;
  }
}
</style>
