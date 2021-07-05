<template>
  <div id="app">

    <div class="container">
      <h3>Tarefas concluídas</h3>

      <form @submit.prevent="salvar">

          <label>Titulo</label>
          <input type="text" placeholder="Titulo" v-model="tarefa.titulo">
          <label>Descrição</label>
          <input type="text" placeholder="Descrição" v-model="tarefa.descricao">
          <label>Feita</label>
          <input type="text" placeholder="Sim ou Não" v-model="tarefa.feita">
          <label>Tipo</label> 
          <input type="number" placeholder="Tipo" v-model="tarefa.tipo_id">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>Titulo</th>
            <th>Descrição</th>
            <th>Concluída</th>
            <th>Tipo</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="tarefa of tarefas" :key="tarefa.id">

            <td>{{tarefa.titulo}}</td>
            <td>{{tarefa.descricao}}</td>
            <td v-if= "tarefa.feita == 0">Não</td>
            <td v-else>Sim</td>
            <td>{{tipo['nome']}}</td>
            <td>
              <button @click="editar(tarefa)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button @click="remover(tarefa)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>

import Tarefa from '../services/tarefas'

export default {

  data(){

    return {
      tarefa: {
        id: '',
        titulo: '',
        descricao: '',
        feita: '',
        tipo_id: ''
      },
      tarefas:[],
      tipo: []
    }
  },
  mounted(){
    this.listar(),
    this.obterTipoTarefa()
  },

  methods:{
    
    listar(){
      Tarefa.listarTarefasFeitas().then(resposta => {
        this.tarefas = resposta.data
    })
    },

    obterTipoTarefa(){
      Tarefa.obterTipo(this.tarefa.tipo_id).then(resposta => {
        this.tipo = resposta.data
    })
    },

    salvar(){
      
      if(!this.tarefa.id){
        
        Tarefa.guardar(this.tarefa).then(resposta => {
        this.tarefa = {}
        alert('Tarefa cadastrada com sucesso.')
        this.listar()
        })

      }else{
        Tarefa.atualizar(this.tarefa,this.tarefa.id).then(resposta => {
        this.tarefa = {}
        alert('Tarefa atualizado com sucesso.')
        this.listar()
        })

      }

      
    },

    editar(tarefa){
      this.tarefa = tarefa
    },

    remover(tarefa){

      if(confirm('Deseja remover essa tarefa?')){
        Tarefa.apagar(tarefa).then(resposta => {
        this.listar()
      })
      }
      
    }
  }
}

</script>


<style>

</style>
