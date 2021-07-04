import { http } from './config'

export default {
    
    listar:() =>{
        return http.get('tipo')
    },
    guardar:(tipo) => {
     
        return http.post('tipo/novo',tipo)
    },
    atualizar:(tipo,id) => {
     
        return http.put('tipo/atualizar/' + id,tipo)
    },
    apagar:(tipo) => {
     
        return http.delete('tipo/' + tipo.id)
    }
}