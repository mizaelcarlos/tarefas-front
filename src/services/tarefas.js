import { http } from './config'

export default {
    
    listarTarefasFazer:() =>{
        return http.get('tarefas/a_fazer')
    },
    listarTarefasFeitas:() =>{
        return http.get('tarefas/feitas')
    },
    obterTipo:(tipo_id) =>{
        return http.get('tipo/visualizar/' + tipo_id)
    },
    guardar:(tarefa) => {
     
        return http.post('tarefas/novo',tarefa)
    },
    atualizar:(tarefa,id) => {
     
        return http.put('tarefas/atualizar/' + id,tarefa)
    },
    apagar:(tarefa) => {
     
        return http.delete('tarefas/' + tarefa.id)
    }
}