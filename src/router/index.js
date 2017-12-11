import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/Main'
import login from '@/components/login'
import contentone from '@/components/content_manage/contentone'
import contenttwo from '@/components/content_manage/contenttwo'
import userone from '@/components/user_manage/user'
import usertwo from '@/components/user_manage/usertwo'
import fenxi from '@/components/fenxi/fenxi'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      children:[
      	{
	      path: '/',
	      title: '首页',
	      name: 'home',
	      component: home
	    },
      	{
	      path: '/main/contentone',
	      title: '内容管理',
	      name: 'contentone',
	      component: contentone
	    },
	    {
	      path: '/main/contenttwo',
	      title: '内容管理',
	      name: 'contenttwo',
	      component: contenttwo
	    },
	    {
	      path: '/main/userone',
	      title: '用户管理',
	      name: 'userone',
	      component: userone
	    },
	    {
	      path: '/main/usertwo',
	      title: '用户管理2',
	      name: 'usertwo',
	      component: usertwo
	    },
	    {
	      path: '/main/fenxi',
	      title: '分析管理',
	      name: 'fenxi',
	      component: fenxi
	    }
      ]
    }
    
  ]
})
