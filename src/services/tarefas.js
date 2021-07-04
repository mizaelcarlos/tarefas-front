import { http } from './config'

export default {
    
    listar:() =>{
        return http.get('tarefas')
    },
    salvar:(tarefa) => {
     
        return http.post('tarefas/novo',tarefa)
    },
    atualizar:(tarefa,id) => {
     
        return http.put('tarefas/atualizar/' + id,tarefa)
    },
    apagar:(tarefa) => {
     
        return http.delete('tarefas/' + tarefa.id)
    }
}