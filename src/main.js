import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Helloword from './components/HelloWorld.vue'
import TarefasFazer from './components/TarefasFazer.vue'
import TarefasFeitas from './components/TarefasFeitas.vue'
import Tipos from './components/Tipos.vue'

Vue.use(VueRouter)

const router =  new VueRouter({
  routes: [
    {
      path: '/tarefas_fazer',
      component: TarefasFazer
    },
    {
      path: '/tarefas_feitas',
      component: TarefasFeitas
    },
    {
      path: '/tipos',
      component: Tipos
    },
    {
      path: '/',
      redirect: '/tarefas'
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
