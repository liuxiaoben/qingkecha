<template>
    <div class="section">
        <Head title="介绍" :back="true"></Head>

        <div id="js">
            <ul>
                <li v-for="(item,index) in jieshaos" :key="index">
                    <p>&nbsp; &nbsp;{{item.title}}</p>
                    <img :src="item.img" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      jieshaos: []
    };
  },
  created() {
    this.$http.get("http://localhost:3000/vue/jieshao").then(res => {
      this.jieshaos = res.body;
    });
  }
};
</script>

<style lang="scss" scoped>
#js {
  width: 94%;
  padding-left: 3%;
  padding-right: 3%;
  ul {
    width: 100%;
    li {
      width: 100%;
        margin-top: 30px;
        margin-bottom: 30px;
      p {
        width: 100%;
        font-size: 28px;
        margin-bottom: 10px;
      }
     img{
         width: 100%;
         height: 600px;
     }
    }
  }
}
</style>
