import Vue from 'vue'
import Router from 'vue-router'
import Hello from './views/hello'
import Project from './views/project/project'
import ProjectList from './views/project/projectList'
import News from './views/news/news'
import NewsList from './views/news/newsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    }, {
      path: '/project',
      name: 'project',
      component: Project
    }, {
      path: '/projectList',
      name: 'projectList',
      component: ProjectList
    }, {
      path: '/news',
      name: 'news',
      component: News
    }, {
      path: '/newsList',
      name: 'newsList',
      component: NewsList
    }
  ]
})
