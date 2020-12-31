import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  //主页面
  {
    path: '/',
    component: Layout,
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/home/index'),
      meta: {
        title: '主页',
        icon: 'home'
      }
    }]
  },

  //卫星管理
  {
    path: '/satellite',
    component: Layout,
    //redirect: '/satellite/list',
    meta: {
      title: '卫星管理',
      icon: 'plane'
    },
    children: [{
        path: 'list',
        name: 'satellitelist',
        component: () => import('@/views/satellite/list'),
        meta: {
          title: '卫星信息',
        }
      },
      {
        path: 'orbit',
        name: 'satelliteorbit',
        component: () => import('@/views/satellite/orbit'),
        meta: {
          title: '卫星轨道',
        }
      },
    ]
  },

  //信关站管理
  {
    path: '/groundstation',
    component: Layout,
    //redirect: '/groundstaion/list',
    meta: {
      title: '信关站管理',
      icon: 'plane'
    },
    children: [{
        path: 'list',
        name: 'groundstationlist',
        component: () => import('@/views/groundstation/list'),
        meta: {
          title: '信关站信息',
        }
      },
      {
        path: 'demo',
        name: 'groundstationdemo',
        component: () => import('@/views/groundstation/demo'),
        meta: {
          title: '站网信息',
        }
      },
    ]
  },

  //仿真数据交互
  {
    path: '/exchange',
    component: Layout,
    children: [{
      path: 'index',
      name: 'exchange',
      component: () => import('@/views/exchange/index'),
      meta: {
        title: '数据交互',
        icon: 'plane'
      }
    }]
  },

  //遥控
  {
    path: '/tc',
    component: Layout,
    //redirect: '/tc/list',
    meta: {
      title: '遥控',
      icon: 'plane'
    },
    children: [{
      path: 'cmd',
      name: 'tccmd',
      component: () => import('@/views/tc/cmd'),
      meta: {
        title: '遥控发令',
        icon: 'plane'
      }
    },
    {
      path: 'injection',
      name: 'tcinjection',
      component: () => import('@/views/tc/injection'),
      meta: {
        title: '数据注入',
        icon: 'plane'
      }
    },
  ]
  },

  //遥测
  {
    path: '/tm',
    component: Layout,
    //redirect: '/tm/list',
    meta: {
      title: '遥测',
      icon: 'plane'
    },
    children: [{
        path: 'rslt',
        name: 'tmrslt',
        component: () => import('@/views/tm/rslt'),
        meta: {
          title: '参数编辑',
        }
      },
      {
        path: 'code',
        name: 'tmcode',
        component: () => import('@/views/tm/code'),
        meta: {
          title: '源码仿真',
        }
      },
    ]
  },

  //外测
  {
    path: '/external',
    component: Layout,
    //redirect: '/external/list',
    meta: {
      title: '外测',
      icon: 'plane'
    },
    children: [{
        path: 'range',
        name: 'externalrange',
        component: () => import('@/views/external/range'),
        meta: {
          title: '测距测速',
        }
      },{
        path: 'demo',
        name: 'externalangle',
        component: () => import('@/views/external/angle'),
        meta: {
          title: '卫星测角',
        }
      },{
        path: 'cover',
        name: 'externalcover',
        component: () => import('@/views/external/cover'),
        meta: {
          title: '卫星覆盖',
        }
      },
      {
        path: 'pass',
        name: 'externalpass',
        component: () => import('@/views/external/pass'),
        meta: {
          title: '卫星过境',
        }
      },
      {
        path: 'follow',
        name: 'externalfollow',
        component: () => import('@/views/external/follow'),
        meta: {
          title: '信关站跟踪',
        }
      },
    ]
  },

  //全球运营中心
  {
    path: '/globe',
    component: Layout,
    children: [{
      path: 'business',
      name: 'globebusiness',
      component: () => import('@/views/globe/business'),
      meta: {
        title: '运营中心',
        icon: 'plane'
      }
    }]
  },
   






  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
