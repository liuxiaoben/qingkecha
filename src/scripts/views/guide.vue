<template>
    <div class="section">
        <mt-swipe :auto="2000" :show-indicators="false" :continuou="false">
            <mt-swipe-item class="item">
                <img v-bind:src=imgSrc alt="" class="img">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>


export default {
    data(){
        return{
            imgSrc:require("../../assets/images/100.jpg")
        }
    },
    created(){
        setTimeout(()=>{
            this.$router.push("/app/home");
        },2000)
    }
}
</script>




<style scoped>
mt-swipe, mt-swipe-item,.img{
    width:100%;
    height:100%;
}
</style>