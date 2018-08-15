<template>
    <div class="section">
        <Head title="商品分类"></Head>
        <div id="lis">
            <mt-loadmore>
            <ul>
                <li v-for="(item,index) in teas" :key="index">
                    <img v-lazy="item.categoryIcon" alt="">
                    <p>{{item.categoryTitle}}</p>
                </li>
            </ul>
            </mt-loadmore>
        </div>
       
    </div>
</template>

<script>
import Vue from "vue";
import {Lazyload } from "mint-ui";
Vue.use(Lazyload);
export default {
    
    data(){
        return{
            teas:[],
        }
    },
    created(){
        this.$http.get("http://localhost:3000/vue/tea2").then(res=>{
            this.teas = res.body;
        })
    }
    
}
</script>


<style lang="scss" scoped>
    #lis{
        width: 100%;
        margin-top: 35px;
       
        ul{
            width: 100%;
            li{
                width: 42.5%;
                height: 340px;
                margin-left: 5%;
                float: left;
                position: relative;
                img{
                    width: 100%;
                    height: 340px;
                }
                p{
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    background: rgba(178,178,178,.7);
                    position: absolute;
                    bottom: 0;
                    color: #fff;
                    font-size: 24px;
                    font-weight: bold;
                }
            }
        }
    }
</style>