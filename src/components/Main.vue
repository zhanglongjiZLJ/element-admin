<template>
    <div class="layout main-wrap"  :class="{'layout-hide-text': hideMenuText}">
      <el-menu mode="horizontal"   class="el-menu-demo">
        <el-menu-item index="1" class="item-li">
            <div class="layout-logo" v-if="!hideMenuText"  :style="{width: !hideMenuText?'200px':''}" style="font-size:30px">
              PVTools
            </div>
            <div class="layout-logo" v-else   :style="{width: hideMenuText?'60px':''}">
              PVTools
            </div>
        </el-menu-item>
        <el-menu-item index="2" class="item-li">
            <div class="layout-header"   @click="toggleClick">
                  <i class="el-icon-d-arrow-left" style="color:#fff;padding: 0 15px;"  :class="hideMenuText?'rotate-button0':'rotate-button90'"  ></i>
            </div>
        </el-menu-item>    
        <div class="layout-nav">
         <el-submenu index="3">
            <template slot="title"  class="main-person">个人中心</template>
            <el-menu-item index="3-1">个人信息</el-menu-item>
            <el-menu-item index="3-2">切换账号</el-menu-item>
          </el-submenu>
          <el-menu-item index="4" class="main-exit"> 退出</el-menu-item>
        </div>
      </el-menu>
      <div class="layout-container">
          <div class="layout-menu-left" :style="{width: hideMenuText?'60px':'200px'}">
            <sidebar :hideMenuText="hideMenuText" :timershow="timershow"></sidebar>
          </div>
          <div class="layout-right" :style="{left: hideMenuText?'60px':'200px'}">
              <tags></tags>
              <div class="layout-content">
                  <div class="layout-content-main">
                     <router-view/>
                  </div>
              </div>
          </div>
      </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import sidebar from './main_components/sidebarMenu'
import tags from './main_components/tags'
export default {
    data () {
        return {
          current_page_name: '',
          hideMenuText:false,
          timershow:false
        }
    },
    mounted(){
      if(location.hash.length > 7){
        this.current_page_name = location.hash.substr(1);
        for(let i = 0;i < this.menuList.length;i++){
          for(let j = 0;j < this.menuList[i].children.length;j++){
            if(this.menuList[i].children[j].name == this.current_page_name){
              this.pageOpenedList.push({
                icon: this.menuList[i].children[j].icon,
                name:this.current_page_name,
                path:this.current_page_name,
                title:this.menuList[i].children[j].title
              });
            }
          }
        }
        this.$store.commit('current_page_name', this.current_page_name);
        this.$store.commit('pageOpenedList', this.pageOpenedList);
      }
    },
    // computed: {
    //     menuList () {
    //         return this.$store.state.menuList;
    //     },
    //     pageOpenedList(){
    //       return this.$store.state.pageOpenedList;
    //     }
    // },
    computed:mapState(['menuList','pageOpenedList','todos']),
    // computed:mapState({
    //   menuList:state=>state.menuList,
    //   pageOpenedList:state=>state.pageOpenedList
    // }),




    watch:{
      pageOpenedList(val,ildVal){
        console.log(val)
      },
      hideMenuText(val, oldVal){
        var _this = this;
        if (_this.timershow == true) {
          setTimeout(function() {
            _this.timershow = _this.hideMenuText;
          }, 200);
        }else{
          _this.timershow = _this.hideMenuText;
        }
      }
    },
    methods: {
        toggleClick () {
            console.log(this.todos)
            this.hideMenuText = !this.hideMenuText;
        }
    },
    components:{sidebar,tags}
}
</script>
<style type="text/css">
.main-wrap .ivu-menu-horizontal .ivu-menu-item{
    padding: 0 10px!important;
}
.layout-hide-text .ivu-menu-submenu-title-icon{
  display: none;
} 
.layout-hide-text .ivu-menu-submenu{
  width: 60px;
}
.main-wrap .ivu-menu-light{
  background-color: transparent;
}
.main-wrap .ivu-menu-light:after{
  background: #213835;
}
.main-wrap .ivu-menu-horizontal:after{
  background: #213835;
}
.main-wrap .ivu-menu-vertical .ivu-menu-item:hover, .ivu-menu-vertical .ivu-menu-submenu-title:hover{
  background: linear-gradient(-45deg, #13465C 0%, #284A6D 100%)!important;
  opacity: .8;
}
.main-wrap .ivu-icon-ios-close-empty:before{
  color: #fff;
}
.main-wrap .layout-nav .el-menu .el-menu-item{
  min-width: 100px;
}
.main-wrap .layout-nav .el-submenu__title{
  border-bottom-color: transparent;
}

.main-wrap .layout-nav .el-submenu__title:hover,.main-wrap .layout-nav .main-exit:hover{
  color: #fff!important;
  background-color: #13465C!important;
}
.layout-nav .is-active{
  background-color: transparent!important;
  color: #878d99!important;
}
</style>
<style scoped lang="less">
.main-wrap{
    position: relative;
    height: 100%;
    .el-menu-demo{
      background-color: transparent;
      border-bottom:none; 
      box-shadow: inset 0px 0 1px 0 rgba(255,255,255,0.50);
      .item-li{
        padding: 0!important;
      }
      .item-li:hover{
        background-color: transparent!important;
      }
    }
    .layout-logo{
        width: 100px;
        height: 60px;
        line-height: 60px;
        float: left;
        position: relative;
        top: 0;
        text-align: center;
        color: #fff;
        white-space: nowrap;
        transition: width .2s ease-out;
    }
    .layout-header{
        // box-shadow: 0 1px 1px rgba(0,0,0,.5)!important;
        position: absolute;
        left: 0px;
        line-height: 60px;
        transition: all .2s ease-out;
        .rotate-button90{
          transform:rotate(0);
          -ms-transform:rotate(0);   /* IE 9 */
          -moz-transform:rotate(0);  /* Firefox */
          -webkit-transform:rotate(0); /* Safari 和 Chrome */
          -o-transform:rotate(0);  /* Opera */
          transition: all .2s ease-out;
        }
        .rotate-button0{
          transform:rotate(-180deg);
          -ms-transform:rotate(-180deg);   /* IE 9 */
          -moz-transform:rotate(-180deg);  /* Firefox */
          -webkit-transform:rotate(-180deg); /* Safari 和 Chrome */
          -o-transform:rotate(-180deg);  /* Opera */
          transition: all .2s ease-out;
        }
    }
    .layout-nav{
        width: 200px;
        float: right;
        border: none;
        outline: none;
        li{
          width: 100px;
          text-align: center;
        }
    }
    .layout-container{
        position:absolute;
        top: 60px;
        left: 0;
        bottom: 0;
        width: 100%;
      }
      .layout-menu-left{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-right:1px solid #213835;
          transition: width .2s ease-out;
          .layout-text{
              white-space:nowrap;
          }
      }
      .layout-right{
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        transition: left .2s ease-out;
        .layout-content{
            position: absolute;
            top: 30px;
            left: 0;
            right: 0;
            bottom: 0;
            min-height: 300px;
            margin: 15px;
            overflow: hidden;
            border-radius: 4px;
            overflow-y: auto;
            border: 1px solid #213835;
            .layout-content-main{
                height: 100%;
                a{
                  color: #9ba7b5;
                }
            }
        }
      }
}

.layout .ivu-row-flex{
  height: 100%;
}
.ivu-col{
    transition: width .2s ease-out;
}
.main-wrap i{
  vertical-align: middle;
}
</style>