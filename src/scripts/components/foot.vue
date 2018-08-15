<template>
    <footer>
        <div v-for="(foot,index) in footList" :key="index">
            <router-link :to="{name:foot.name}">
                <i class="iconfont" v-html="foot.icon"></i>
                <span>{{foot.txt}}</span>
            </router-link>
        </div>
    </footer>
</template>


<script>
export default {
    data(){
        return {
            footList:[
                {name:"home",txt:"首页",icon:"&#xe655;",path:"/app/home"},
                {name:"group",txt:"分类",icon:"&#xe624",path:"/app/group"},
                {name:"car",txt:"购物车",icon:"&#xe655",path:"/app/car"},
                {name:"my",txt:"个人中心",icon:"&#xe649;",path:"/app/my"},
            ]
        }
	}
	
}
</script>

<style lang="scss" scoped>
    footer{
	position:fixed;
	width:100%;
	height:100px;
	left:0;
	bottom:0;
	background:#efece9;
	display:flex;
    z-index:100;
    border-top:1px solid #a4a4a4;
	div{
		flex:1;
		height:100px;
		a{
			display: block;
			width:100%;
			height:100%;
			display:flex;
			flex-direction:column;
			box-sizing:border-box;
			padding:6px 0;
			text-align:center;
			font-family:"微软雅黑";
			color:#999;
			i{
			width:100%;
			height:45px;
			line-height:45px;
			font-size:42px !important;
			}
			span{
				width:100%;
				height:35px;
				line-height:35px;
				font-size:26px;
			}
		}
		.router-link-active{
			color:#0dc441;
		    border-color:#0dc441;
		}
		.ft-active-1{
			color:#0dc441;;
			border-color:#0dc441;
		}
	}
}
</style>

