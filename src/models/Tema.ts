import Postagem from "./Postagem";

interface Tema{
    id: number
    educacao: string
    serie: string
    postagem?: Postagem| null
}

export default Tema;