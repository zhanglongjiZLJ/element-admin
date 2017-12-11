<template>
   	<div class="layout-breadcrumb" >
	  <el-tag  class="main-tag-dot" 
	   v-for="(item,index) in pageOpenedList"  
	   size="small"
	   :_index=index
	   :key="item.name" 
	    :name="item.name" 
	   @click.native="linkTo(item.name)"
	   @close.stop="handleClose(item)" 
	    :closable="(item.name==='/main/home')?false:true"
	    :type="(item.name===current_page_name)?'':'info'"
	    style="margin-left:5px;cursor:pointer">{{ item.title }}</el-tag>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	data () {
		return {
			slideColor:''
		}
	},
	computed:mapState(['menuList','pageOpenedList','todos','current_page_name']),
    mounted(){
    	
    },
	methods:{
	    handleClose(item){
	    	console.log(item)
	        for(let i = 0;i < this.pageOpenedList.length;i++){    
	            if(this.pageOpenedList[i].name == item.name){
	              this.pageOpenedList.splice(i, 1);
	            }
	        }
	        console.log(this.current_page_name)
	        
	        if (this.current_page_name == item.name) {
	            let lastPageName = '';
	            if (this.pageOpenedList.length > 1) {
	                lastPageName = this.pageOpenedList[1].name.substr(6);
	            } else {
	                lastPageName = this.pageOpenedList[0].name.substr(6);
	            }
	            this.$router.push({
	                name: lastPageName
	            });
	            this.$store.commit('current_page_name', lastPageName);
	      	}
	    },

	    linkTo (item) {
	    	let route = item.substr(6);
	        this.$router.push({
	        	name: route
	        });
	        this.$store.commit('current_page_name', item);
	    }
	}

};
</script>

<style scoped lang="less">
.layout-breadcrumb{
    padding: 10px 15px;
    .main-tag-dot{
      // background: linear-gradient(-45deg, #13465C 0%, #284A6D 100%)!important;
      // color: #fff!important;
      // border: none!important;
    }
}

</style>
