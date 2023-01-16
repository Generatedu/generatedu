import Tema from "./Tema"

interface Postagem {
    id: number
    titulo: string
    conteudo: string
    data_hora: string
    curtida: number
    tema?: Tema | null
}

export default Postagem;