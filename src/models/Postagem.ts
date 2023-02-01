import Tema from "./Tema"
import User from "./User"

interface Postagem {
    id: number
    titulo: string
    conteudo: string
    data_hora: string
    curtida: number
    tema?: Tema| null
    usuario?: User|null
}

export default Postagem;