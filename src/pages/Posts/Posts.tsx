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
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'></Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Ajude-nos a melhorar a qualidade de ensino</Typography>
                        <Box className="buttonAreaPosts">
                            <ModalPostagem />
                            <ModalTema />
                        </Box>
                    </Box>
                </Grid>
                <Box className="fundoImg-postModal">
                    <img src="https://scontent.fsdu7-1.fna.fbcdn.net/v/t31.18172-8/21014136_1540925725964606_8011355081135325967_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=B5wnrBfHoZ0AX-biZwr&_nc_ht=scontent.fsdu7-1.fna&oh=00_AfD_FQiuLyiqIosmxKaar-FcNaosUxDFobgSDX-TJLZRdw&oe=63FFD74A" alt="" width="500px" height="500px" />
                </Box>
                <Grid xs={12} className='postagens' >
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Posts;