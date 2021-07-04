<template>
  <div id="app">

    <div class="container">
      
      <h3>Tipos</h3>

      <form @submit.prevent="salvar">

          <label>Nome</label>
          <input type="text" placeholder="Nome" v-model="tipo.nome">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>Nome</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="tipo of tipos" :key="tipo.id">

            <td>{{tipo.nome}}</td>
            <td>
              <button @click="editar(tipo)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button @click="remover(tipo)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>

import Tipo from '.././services/tipos'

export default {

  data(){

    return {
      tipo: {
        id: '',
        nome: ''
      },
      tipos:[]
    }
  },
  mounted(){
    this.listar()
  },

  methods:{
    
    listar(){
      Tipo.listar().then(resposta => {
        this.tipos = resposta.data
    })
    },

    salvar(){
      
      if(!this.tipo.id){
        
        Tipo.guardar(this.tipo).then(resposta => {
        this.tipo = {}
        alert('tipo cadastrada com sucesso.')
        this.listar()
        })

      }else{
        Tipo.atualizar(this.tipo,this.tipo.id).then(resposta => {
        this.tipo = {}
        alert('tipo atualizado com sucesso.')
        this.listar()
        })

      }

      
    },

    editar(tipo){
      this.tipo = tipo
    },

    remover(tipo){

      if(confirm('Deseja remover essa tipo?')){
        Tipo.apagar(tipo).then(resposta => {
        this.listar()
      })
      }
      
    }
  }
}

</script>


<style>

</style>
