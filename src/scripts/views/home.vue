<template>
    <div class="section" >
        <Head title="杯中奇迹，来自北纬30°"></Head>
        <div>
            <mt-swipe :auto="2000" id="mt-swipe"> 
                <mt-swipe-item class="item" id="mt-swipe-item" v-for="(img,index) in imgs" :key="index"  >
                    <img :src="img" alt="" class="img" @click="gotoApp(index)">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div id="nav">
            <ul>
                <li>
                    <router-link :to="{name:'jieshao'}">
                        <img src="../../assets/images/103.png" alt="" >
                        <p>介绍</p>
                    </router-link>
                </li>
                <li id="li2">
                    <router-link :to="{name:'zixun'}">
                    <img src="../../assets/images/103.png" alt="" >
                    <p>资讯</p>
                    </router-link>
                </li>
                 <li>
                     <router-link :to="{}">
                    <img src="../../assets/images/104.png" alt="">
                    <p>门店</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <div id="hr"></div>
        <div id="list">
            <ul>
                <li @click="xinpin">新品上市<p></p></li>
                <li @click="remen">热门商品<p></p></li>
                <li>推荐商品<p></p></li>
            </ul>
        </div>
        <div class="box" v-if="flag">
            <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
            <ul
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="9"
            >
                <li v-for="(item,index) in teas" :key="index">
                    <router-link :to="{name:'detail',params:{id:item._id}}">
                    <img v-lazy="item.productImage" alt="">
                    <h3>{{item.productName}}</h3>
                    <p>￥{{item.salePrice}}</p>
                    </router-link>
                </li>
            </ul>
            </mt-loadmore>
        </div>
        <div>
            <router-view></router-view>
            <Foot></Foot>
        </div>
    </div>
</template>


<script>
import p1 from "../../assets/images/101.jpg";
import p2 from "../../assets/images/101.jpg";
import Foot from "../components/foot.vue";
import Vue from "vue";
import { Indicator, Toast, InfiniteScroll, Lazyload } from "mint-ui";
Vue.use(Lazyload);

export default {
  components: {
    Foot
  },
  data() {
    return {
      imgs: [p1, p2],
      teas: [],
      flag: false,
      allLoaded: true,
      loading: false
    };
  },
  methods: {
    loadTop() {
      //  ...// 加载更多数据
      console.log("下拉刷新...");
      this.$http.get("http://localhost:3000/vue/teas", {}).then(res => {
        setTimeout(() => {
          this.teas = res.body.reverse(); // 翻转
         this.$refs.loadmore.onTopLoaded(); // 通知  加载完毕
         console.log(this.teas)
        }, 1500);
      })
    },
    loadBottom() {},
     loadMore(){
            console.log("上拉加载更多...");
            this.loading = true;  // 判断是否滚动 
             this.$http.get("http://localhost:3000/vue/teas",{
                 params:{
                     limit:3
                 }
             })
            .then(res=>{
                setTimeout(()=>{
                    this.mv = this.mv.concat(res.body);
                     this.loading = false;
                },1500)
            })
        },
     xinpin(){
         this.$http.get("http://localhost:3000/vue/teas").then(res=>{
             this.teas = res.body;
            //  console.log(this.teas)
         })
    },
    remen(){
         this.$http.get("http://localhost:3000/vue/teas").then(res=>{
             this.teas = res.body.reverse();
            //  console.log(this.teas)
         })
    }
  },
  created() {
    Indicator.open({
      text: "加载中...",
      spinnerType: "triple-bounce"
    });
    this.$http
      .get("http://localhost:3000/vue/teas", {
        params: {
          limit: 9
        }
      })
      .then(res => {
        this.teas = res.body;
        setTimeout(() => {
          this.$nextTick(() => {
            this.flag = true;
            Indicator.close();
            Toast({
              message: "请求成功!",
              iconClass: "iconfont icon-camerafill",
              duration: 1000
            });
          });
        }, 1000);
      });
  }
};
</script>



<style lang="scss" scoped>
#mt-swipe,
#mt-swipe-item,
.img {
  width: 100%;
  height: 280px;
}
#nav {
  width: 94%;
  height: 180px;
    padding-left: 3%;
    padding-right: 3%;
    margin-top: 30px;
  ul {
      width: 100%;
    height: 180px;
    overflow: hidden;
    li {
      float: left;
      width: 33.3%;
      height: 110px;
      text-align: center;
      a {
        width: 100%;
        height: 110px;
        display: block;
        color: #000;
        text-align: center;
        img {
          width: 110px;
          height: 110px;
          display: inline-block;
        }
        p {
          font-size: 24px;
          margin-top: 10px;
          font-weight: bold;
          font-size: #000000;
        }
      }
    }
  }
}

#hr {
  width: 100%;
  height: 24px;
  background: #e1e1e1;
  border-bottom: 1px solid #c8c8c8;
  border-top: 1px solid #c8c8c8;
}
#list {
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #c8c8c8;
  ul {
    width: 100%;
    height: 80px;
    text-align: center;
    li {
      width: 33.3%;
      line-height: 80px;
      float: left;
      font-size: 30px;
      color: #000;
      font-weight: bold;
      p {
        width: 100%;
        height: 3px;
        background: #c8c8c8;
      }
    }
  }
}
#list ul li:hover {
  color: #3e8c51;
}
#list ul li:hover p {
  background: #3e8c51;
}
.box {
  width: 100%;
  padding-bottom: 100px;
  margin-top: 20px;
  ul {
    width: 100%;
    li {
      width: 33.3%;
      height: 320px;
      float: left;
      margin-bottom: 20px;
      img {
        width: 100%;
        height: 220px;
      }
      h3 {
        width: 80%;
        height: 60px;
        color: #000;
        font-size: 20px;
        font-weight: bold;
        margin-left: 10%;
        margin-right: 10%;
        overflow: hidden;
      }
      p {
        color: red;
        height: 34px;
        width: 80%;
        margin-left: 10%;
        font-size: 30px;
        font-weight: bold;
      }
      a {
        color: red;
        height: 34px;
        width: 80%;
        margin-left: 10%;
        font-size: 30px;
        font-weight: bold;
        display: block;
      }
    }
  }
}
</style>
