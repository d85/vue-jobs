import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import JobsView from '../views/jobs/JobsView.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  },
  {
    path: '/jobs/:id',
    name: 'job-details',
    component: JobDetails,
    props: true
  },
  // redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // catchAll 404
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
