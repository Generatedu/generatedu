import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import ListaPostagem from '../../components/postagens/listaPostagem/ListaPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import books from '../../utils/books';
import podcasts from '../../utils/podcasts';

const Apresentacao = () => {

    let navigate = useNavigate();
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

    return (
        <Box className='container-home'>
            <Box className='homeDegrade'>
                <Typography variant='h5'>A Nossa Missão é</Typography>
                <Typography variant='h3'>GERAR RESULTADOS</Typography>
                <Typography variant='h6'>Uma rede social que motiva alunos e professores a compartilharem idéias e ensinamentos.</Typography>
                <Link to="/postagem" className="linkPost"><Box className='showPost'>Ver Postagens</Box></Link>
            </Box>
            <img className='homeImg' src="https://media.discordapp.net/attachments/1012745470659010570/1054415218903634000/Leitura_Brasil_Header.webp" alt="" />
            <Box className='hHome'>
                <Box className='generateduBox'>
                    <Typography variant='h3'>Somos a Generatedu</Typography>
                    <Typography variant='h6'>A rede social que gera educação</Typography>
                </Box>
            </Box>

            <Box className='conteudos-home'>
                <Link to="/postagem" className='link-home-content'>
                    <Card sx={{ maxWidth: 300 }}>
                        <CardMedia
                            component="img"
                            height="230"
                            image="https://projetoacademico.com.br/wp-content/uploads/2021/08/escrevendo-notebook.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Postagens
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Compartilhe suas idéias e ensinamentos, tire duvidas e melhore sua didática vendo opniões de alunos e professores.
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
                <Link to="/sobre" className='link-home-content'>
                    <Card sx={{ maxWidth: 300 }}>
                        <CardMedia
                            component="img"
                            height="230"
                            image="./images/imagens/trabalhoEquipe.gif"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Sobre
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Venha conhecer mais sobre a Generatedu e conheça também a equipe que tornou tudo isso possivel.
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
                <Box className='quadrado'></Box>
            </Box>

            <Box className='livros-home'>
                <Box className='bookImg'>
                    <img src="https://conteudo.imguol.com.br/c/entretenimento/9d/2019/04/22/como-voce-vai-comemorar-o-dia-do-livro-1555959523311_v2_450x450.jpg" alt="" className='lendo-livro' />
                </Box>
                <Box className='livros-img'>
                    <Typography gutterBottom variant="h4">
                        Livros
                    </Typography>
                    <Typography gutterBottom variant="h6">
                        Livros que expandem o conhecimento
                    </Typography>
                    <Box className='booksArea'>
                        {books.map((item, index) => (
                            <Box className='livros' key={index}>
                                <img src={item.img} alt="" />
                                <Box>{item.nome}</Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
            <Box className='podcasts-home'>
                <Box className='podcasts-img'>
                    <Typography gutterBottom variant="h3">
                        Podcasts
                    </Typography>
                    <Typography gutterBottom variant="h6">
                        Podcasts que agregam ao conhecimento
                    </Typography>
                    <Box style={{ display: 'flex' }} className='podcast-list'>
                        {podcasts.map((item, index) => (
                            <Box className='podcasts' key={index}>
                                <img src={item.img} alt="" />
                                <Box>{item.nome}</Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default Apresentacao;