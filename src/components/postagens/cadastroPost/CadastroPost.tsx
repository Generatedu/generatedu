import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroPost.css';
import { useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { Box } from '@mui/material';
import { toast } from 'react-toastify';
import User from '../../../models/User';


function CadastroPost() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])
    const [users, setUsers] = useState<User[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")

        }
    }, [token])

    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            educacao: '',
            serie: ''
        })

        const [user, setUser] = useState<User>(
            {
                id: 0,
                nome: '',
                usuario: '',
                senha: '',
                foto: ''
             }) 

    

    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        conteudo: '',
        data_hora: '',
        curtida: 0,
        tema: null,
        usuario: null
    })

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema,
            usuario: user
        })
    }, [tema, user])

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getUsers()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getUsers() {
        await busca("/usuarios/all", setUsers, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema,
            usuario: user
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        try {
            if (id !== undefined) {
                put(`/postagens`, postagem, setPostagem, {
                    headers: {
                        'Authorization': token
                    }
                })

                toast.success('Postagem atualizada com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            } else {
                post(`/postagens`, postagem, setPostagem, {
                    headers: {
                        'Authorization': token
                    }
                })

                toast.success('Postagem cadastrada com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }
            back()
        } catch (err) {
            console.log('erro ao criar a postagem')
        }

    }

    function back() {
        navigate('/postagem')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
            <Box className='alinhamento'>
                <img className='cadastrar' src='https://cdn-icons-png.flaticon.com/512/7263/7263985.png'></img>
                <Typography variant="h3" className='fontes' component="h1" align="center" >Cadastrar Postagem</Typography>
                </Box>
                
                <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="Título" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField value={postagem.conteudo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="conteudo" label="Conteúdo" name="conteudo" variant="outlined" margin="normal" fullWidth />
                <TextField value={postagem.data_hora} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="data_hora" label="Data e hora" name="data_hora" variant="outlined" margin="normal" fullWidth />
                <TextField value={postagem.curtida} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="curtida" label="Curtida" name="curtida" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            temas.map(tema => (
                                <MenuItem value={tema.id}>{tema.educacao}, {tema.serie} </MenuItem>
                            ))
                        }
                    </Select>
                    <FormControl>
                    <InputLabel id="demo-simple-select-helper-label">Usuário</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/usuarios/${e.target.value}`, setUser, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            users.map(user => (
                                <MenuItem value={user.id}>{user.nome}</MenuItem>
                            ))
                        }
                    </Select>
                    </FormControl>
                  
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
                
            </form>
        </Container>
    )
}
export default CadastroPost;