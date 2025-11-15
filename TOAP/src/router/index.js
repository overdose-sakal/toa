import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../SignUp.vue'
import SignIn from '../SignIn.vue'
import Home from '../Home.vue'
import Comm from '../Communities.vue'
import Art from '../Art.vue'
import Explore from '../Explore.vue'
import Feed from '../Feed.vue'



const routes = [
  {
    name: 'Home',
    component: Home,
    path: '/'
  },
    {
    name: 'Comm',
    component: Comm,
    path: '/communities'
  },
      {
    name: 'Explore',
    component: Explore,
    path: '/explore'
  },
    {
    name: 'Art',
    component: Art,
    path: '/art'
  },
    {
    name: 'Feed',
    component: Feed,
    path: '/feed'
  },
    {
    name: 'SignUp',
    component: SignUp,
    path: '/sign-up'
  },
    {
    name: 'SignIn',
    component: SignIn,
    path: '/sign-in'
  },
  
  // Add more routes here
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})



export default router