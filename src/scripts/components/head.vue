<template>
    <mt-header :title="title">
        <mt-button icon="back" slot="left" v-if="back" @click="goback()">返回</mt-button>
        <mt-button v-if="show"  icon="more" slot="right"></mt-button>
    </mt-header>

</template>

<script>
export default {
    methods:{
        goback(){
            this.$router.go(-1);
        }
    },
    props:['title','show','back']
}
</script>

