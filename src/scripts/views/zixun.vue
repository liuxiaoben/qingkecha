<template>
    <div class="section">
        <Head title="资讯" :back="true"></Head>
        <div id="zx-nav">
            <div :class="tabIndex==1?'active':'' " @click="tabIndex=1">天蓝资讯<p></p></div>
            <div :class="tabIndex==2?'active':'' " @click="tabIndex=2">招商加盟<p></p></div>
        </div>
        <ul class="ul" :style="tabIndex==1?'':show">
            <li v-for="(item,index) in zx" :key="index">
                <h3>{{item.newsTitle}}</h3>
                <p>{{item.newsSummary}}</p>
                <h4>阅读全文></h4>
            </li>
        </ul>
        <div class="ul2" :style="tabIndex==2?'':show">
            <div>
                <h1 id="h1">400-800-1345</h1>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
export default {
    data(){
        return{
            zx:[],
             show:{
                display:'none'
            },
            tabIndex:1,
        }
    },
   
    methods:{
       
    },
    created(){
         this.$http.get("http://localhost:3000/vue/tlzx").then(res => {
            this.zx = res.body;
        });
    }
}
</script>


<style lang="scss">
    #zx-nav{
        width:90%;
        height: 80px;
        padding-left: 5%;  
        padding-right: 5%;
        margin-bottom: 10px;
        div{
            width: 50%;
            height: 80px;
            line-height: 80px;
            color: #000;
            text-align: center;
            float: left;
           font-size: 30px;
           p{
               width:100%;
               height: 3px;
               background:#fff;
           }
        } 
    }
    #zx-nav div:hover {
        color: #115f1b;
    }
    #zx-nav div:hover p{
        background: #115f1b;
    }
   .ul{
       width: 94%;
       padding-left: 3%;
       padding-right: 3%;
        h1{
            width: 300px;
            height: 100px;
            margin-top: 300px;
            font-size: 40px;
        }
      
       li{
           width: 100%;
           margin-bottom: 50px;
           position: relative;
           background: #fff;
           h3{

               font-size: 30px;
               padding: 20px;
               font-weight: bold;
           }
            p{
                padding-bottom: 30px;
            }
           h4{
               position: absolute;
               right: 30px;
               color:#000;
           }
        
       }
   }
  
    .ul2{
         width: 94%;
         height: 100%;
       padding-left: 3%;
       padding-right: 3%;
       position: relative;
       div{
           width: 300px;
           height: 300px;
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            text-align: center;
            font-size: 40px;
       }
    }

</style>


