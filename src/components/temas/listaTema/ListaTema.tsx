import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import Tema from '../../../models/Tema';
import './ListaTema.css';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';
import ModalTema from '../modalTema/ModalTemas';

function ListaTema() {
    const [temas, setTemas] = useState<Tema[]>([])
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == '') {

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


    async function getTema() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }


    useEffect(() => {
        getTema()
    }, [temas.length])

    return (
        <Box className='temas-container'>
            <Box className='temasTitle'>
                <Typography variant='h2'>Temas</Typography>
            </Box>
            <Box className='temaList'>
                {temas.length <= 0 &&
                    <Box className="fundoPostagem">
                        <img src="https://i.pinimg.com/originals/a9/ff/d7/a9ffd714fbd4966d46ef4ee77ce96e95.gif" alt="" />
                    </Box>
                }
                {
                    temas.map(tema => (
                        <Box m={2} className="eachTema">
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        Tema
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        {tema.educacao}
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        {tema.serie}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Box display="flex" justifyContent="center" mb={1.5} >

                                        <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                            <Box mx={1}>
                                                <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                    atualizar
                                                </Button>
                                            </Box>
                                        </Link>
                                        <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                                            <Box mx={1}>
                                                <Button variant="contained" size='small' color="secondary">
                                                    deletar
                                                </Button>
                                            </Box>
                                        </Link>
                                    </Box>
                                </CardActions>
                            </Card>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    );
}


export default ListaTema;