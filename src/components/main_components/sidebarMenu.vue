<template>
    <div class="sidebar">
        <el-menu  
            :default-active="$route.path"
            class="el-menu-vertical-demo" 
            :class="sidebarColor?'sidebar-shrink':''" 
            :collapse="isCollapse"
            active-text-color="rgb(45, 140, 240)"
            background-color="transparent"
            :text-color="!hideMenuText?'#fff': '#142E13'"
            router unique-opened
            @select="changeMenu">
            <template v-for="item in menuList" :index="item.name" >
              <el-menu-item  class="sidebar-inner-li" v-if="item.children.length<=1" :key="item.children[0].name" :index="item.children[0].name"   >
                  <i class="el-icon-menu"></i>
                  <span slot="title">{{item.title}}</span>
              </el-menu-item>
              <el-submenu  v-if="item.children.length>1" class="siderbar-inner-ul" :key="item.name" :index="item.name">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">{{item.title}}</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item  class="sidebar-inner-li" v-for="child in item.children" :key="child.name"  :index="child.name"  >{{child.title}}</el-menu-item>
                  </el-menu-item-group>
              </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Cookies from 'js-cookie';
export default {
   data(){
        return{
            isCollapse: false,
            sidebarColor:false
        }
    },
    props:[
        'hideMenuText'
    ],
    watch:{
      '$route' (to) {
            this.$store.commit('current_page_name', to.path);
      },
      hideMenuText(val,oldVal){
          this.isCollapse = val;
          var _this = this;
          if (_this.hideMenuText == true) {
            setTimeout(function() {
              _this.sidebarColor = _this.hideMenuText;
            }, 200);
          }else{
            _this.sidebarColor = _this.hideMenuText;
          }
      }
    },
    computed:mapState(['menuList','pageOpenedList','todos','current_page_name','count']),
    methods:{
        changeMenu(active){
            if (Cookies.get('cachePage')) {
                let page_count = [];
                page_count = Cookies.get('cachePage');
                page_count=JSON.parse(page_count);
                if (page_count.indexOf(active) == -1) {
                    page_count.unshift(active);
                }
                Cookies.set('cachePage', page_count, { expires: 7 });
            }else{
                let page_count = [];
                page_count.unshift(active);
                Cookies.set('cachePage', page_count, { expires: 7 });
            }
            for (let i = 0; i < this.menuList.length; i++) {
                if (active == this.menuList[i].children[0].name && this.menuList[i].children.length == 1) {
                    let children =  this.menuList[i].children[0];
                    console.log(this.pageOpenedList.indexOf(children))
                    if (JSON.stringify(this.pageOpenedList).indexOf(JSON.stringify(children)) == -1) {
                        this.pageOpenedList.push(children);
                    }
                }else if(this.menuList[i].children.length !=1) {
                    for(let j = 0;j < this.menuList[i].children.length;j++){
                        if(active == this.menuList[i].children[j].name){
                            let children =  this.menuList[i].children[j];
                            console.log(children)
                            console.log(this.pageOpenedList.indexOf(children))
                            if(JSON.stringify(this.pageOpenedList).indexOf(JSON.stringify(children)) == -1){
                                this.pageOpenedList.push(children);
                            }
                            
                        }
                    }
                }
            }
            this.$store.commit('count', 9);
            this.$store.commit('pageOpenedList', this.pageOpenedList);
        }
   }

};
</script>
<style type="text/css">
.sidebar .sidebar-ul {
    background: transparent;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}
.el-menu-item-group__title{
  padding: 0;
}
.sidebar-inner-li:hover,.sidebar .el-submenu__title:hover{
  background-color: #142E13!important;
}
.sidebar-shrink .el-menu{
  background-color: #fff!important;
}
</style>
<style scoped lang="less">
.sidebar{
    .el-menu--collapse{
        width: 60px;
    }
    .el-menu{
        border-right: none;
        background-color: transparent!important;

        .el-menu-item{
            color: #fff; 
        }
    }
}

</style>
