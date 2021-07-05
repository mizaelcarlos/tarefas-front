import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Helloword from './components/HelloWorld.vue'
import TarefasFazer from './components/TarefasFazer.vue'
import TarefasFeitas from './components/TarefasFeitas.vue'
import TarefasCadastrar from './components/TarefasCadastrar.vue'
import Tipos from './components/Tipos.vue'


Vue.use(VueRouter)

const router =  new VueRouter({
  routes: [
    {
      path: '/tarefa/cadastrar',
      component: TarefasCadastrar
    },
    {
      path: '/tarefas/fazer',
      component: TarefasFazer
    },
    {
      path: '/tarefas/feitas',
      component: TarefasFeitas
    },
    {
      path: '/tipos',
      component: Tipos
    },
    {
      path: '/',
      redirect: '/tarefas/fazer'
    },
    {
      path: '/teste',
      component: Helloword
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')




