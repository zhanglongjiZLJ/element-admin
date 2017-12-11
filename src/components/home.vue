<template>
  <div>
		<el-button type="text" @click="open">点击打开 Message Box</el-button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import store from '../store/store'
export default {
	data(){
		return {
			show: true,
			message:'jskdjsaJJJL',
			sNotFound:[]
		}
	},
	computed:mapState(['todos']),
	directives:{//自定义指令
		focus: {
		    // 指令的定义
		    inserted: function (el) {
		      el.focus()
		    }
		},
　　　　myDirective2:{
　　　　　　bind(){
　　　　　　　　//第一次绑定到元素的准备工作
　　　　　　},
　　　　　　update(val,old){
　　　　　　　　//在绑定到元素后立即以初始值第一次调用，然后每次example2变化都会调用update
　　　　　　　　console.log(val)
　　　　　　},　　
　　　　　　unbind(){
　　　　　　　　//销毁前的清理工作
　　　　　　}
　　　　}
    },
    filters: {
	  	capitalize: function (value) {
		    if (!value) return ''
		    value = value.toString()
		    return value.charAt(0).toUpperCase() + value.slice(1)
  		}
	},
	methods: {
      open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
}
</script>

<style>

</style>
