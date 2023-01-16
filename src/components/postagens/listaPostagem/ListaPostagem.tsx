import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaPostagem.css';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { Box } from '@mui/material';

function ListaPostagem() {

    const [posts, setPosts] = useState<Postagem[]>([])
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado!")
            navigate("/login")
        }
    }, [token])

    async function getPost() {
        await busca("/postagens", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPost()

    }, [posts.length])

    return (
        <Box className='container-list-post'>

            <Typography className='postTitle' variant="h3" color="textSecondary" component="h1" align="center" >Postagens</Typography>

            {posts.length <= 0 &&
                <Box className="fundoPostagem">
                    <img src="https://i.pinimg.com/originals/a9/ff/d7/a9ffd714fbd4966d46ef4ee77ce96e95.gif" alt="" />
                </Box>
            }

            {
                posts.map(post => (
                    <Box m={2} className="eachPost">
                        <Card variant="outlined" className='card'>
                            <Box className="user-list-post">
                            </Box>

                            <Box className="content-list-post">
                                <CardContent className="card-content">

                                    <Box className="boxCard">
                                        <Box>
                                            <Typography variant="h5" component="h2" className='titulo-list-post'>
                                                {post.titulo}
                                            </Typography>
                                            <Typography variant="body2" component="p" className="conteudo">
                                                {post.conteudo}
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                {post.data_hora}
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                {post.tema?.educacao}
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                {post.tema?.serie}
                                            </Typography>
                                        </Box>
                                    </Box>

                                </CardContent>

                                <CardActions>

                                    <Box display="flex" justifyContent="center" mb={1.5} className="actions-list-post">

                                        <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                                            <Box mx={1}>
                                                <Button variant="contained" className="marginLeft buttonBox" size='small' color="primary" >
                                                    atualizar
                                                </Button>
                                            </Box>
                                        </Link>
                                        <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                                            <Box mx={1}>
                                                <Button variant="contained" size='small' color="secondary" className="buttonBox">
                                                    deletar
                                                </Button>
                                            </Box>
                                        </Link>
                                    </Box>

                                </CardActions>
                            </Box>
                        </Card>
                    </Box >
                ))
            }
        </Box >
    )
}

export default ListaPostagem;