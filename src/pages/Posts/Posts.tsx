import React, { useEffect } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Posts.css';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/TokensReducer';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ModalTema from '../../components/temas/modalTema/ModalTemas';

function Posts() {

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
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa' >
                <Grid alignItems="center" item xs={6} style={{ zIndex: '2' }}>
                    <Box paddingX={20} style={{ zIndex: '2' }} className="bemVindoArea">
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                        <Box className="buttonAreaPosts">
                            <ModalPostagem />
                            <ModalTema />
                        </Box>
                    </Box>
                </Grid>
                <Box className="fundoImg-postModal">
                    <img src="https://media.tutormundi.com/wp-content/uploads/2020/07/30132806/sala-de-aula-invertida-min-1-1.png" alt="" width="500px" height="500px" />
                </Box>
                <Grid xs={12} className='postagens' >
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Posts;