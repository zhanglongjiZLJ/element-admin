import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);  


const state = {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ],
    count:1,
    current_page_name : 'home',
    pageOpenedList:[
      {
        title:"首页",
        path:"/main/home",
        name:"/main/home"
      }
    ],
    menuList:[
        { 
            icon:'ios-paper',
            title:'新建项目',
            name:'content',
            children:[
               {
                    icon: 'compose',
                    name:'/main/contentone',
                    path:'/main/contentone',
                    title: '内部收益率'
                },
                {
                    icon: 'pound',
                    name:'/main/contenttwo',
                    path:'/main/contenttwo',
                    title: '百度地图扩展'
                }
            ]
        },
        {
            icon:'ios-people',
            title:'项目管理',
            name:'user',
            children:[
              {
                    icon: 'compose',
                    name:'/main/userone',
                    path:'/main/userone',
                    title: '信息管理'
                },
                {
                    icon: 'pound',
                    name:'/main/usertwo',
                    path:'/main/usertwo',
                    title: '信息修改'
                }
            ]
        },
        {
            icon:'ios-paper',
            title:'项目配置',
            name:'fenxi',
            children:[
              {
                    icon: 'compose',
                    name: '/main/fenxi',
                    path: '/main/fenxi',
                    title: '统计分析'
                }
            ]
        }
    ]
}
export default new Vuex.Store({
    state,
    mutations:{
        setMenuList (state, menuList) {
            state.menuList = menuList;
        },
        pageOpenedList (state, pageOpenedList) {
            state.pageOpenedList = pageOpenedList;
        },
        current_page_name (state, current_page_name) {
            state.current_page_name = current_page_name;
        },
        count (state, count) {
            state.count = count;
        }
    }
})
