import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import HotelDetail from "../components/HotelDetail"
// import HorizontalCard from "../components/HorizontalCard"
import LandingPage from "../views/LandingPage"


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: LandingPage,


  },

  {
    path:"/hotel/:id",
    component: HotelDetail

    // path:"/hotel",
    // component: HorizontalCard,
    // children: [
    //   {path: '/:id', component: HotelDetail},
      // {
      //     path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
      //     console.log('inside route setup');
      //     next();
      // }
      // },
      // {path: ':id/edit', component: UserEdit, name: 'userEdit'}
  // ]


  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
