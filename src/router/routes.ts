import homePage from '../pages/Home.vue'
import aboutPage from '../pages/About.vue'
import faqPage from '../pages/FAQ.vue'
import notFoundPage from '../pages/NotFound.vue'

import { DOMAIN_TITLE } from '../.env'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: homePage,
    meta: {
      title: `${DOMAIN_TITLE}`,
      layout: 'app'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: aboutPage,
    meta: {
      title: `${DOMAIN_TITLE} | About`,
      layout: 'app'
    }
  },
  {
    path: '/faq',
    name: 'faq',
    component: faqPage,
    meta: {
      title: `${DOMAIN_TITLE} | FAQ`,
      layout: 'app'
    }
  },
  {
    path: '*',
    component: notFoundPage,
    meta: { title: `${DOMAIN_TITLE} | not found` }
  }
]
