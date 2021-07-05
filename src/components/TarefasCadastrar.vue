<template>
  <div id="form">

    <div class="container">
      
      <h3>Cadastrar</h3>
      

        <form @submit.prevent="salvar">
          <div class="input-group">
            <label>Titulo</label>
            <input type="text" class="input-group" placeholder="Titulo" v-model="tarefa.titulo">
            <label>Descrição</label>
            <input type="text" placeholder="Descrição" v-model="tarefa.descricao">
            <label>Feita</label>
            <input type="text" placeholder="Concluída" v-model="tarefa.feita">
            <label>Tipo</label>
            <input type="number" placeholder="Tipo" v-model="tarefa.tipo_id">

            <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>
          </div>
        </form>
      

    </div>

  </div>
</template>

<script>
export default{
  name: "app"
}

</script>


<style>

</style>
