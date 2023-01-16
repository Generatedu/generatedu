import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import './CadastroUsuario.css';

function CadastroUsuario() {
    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(confirmarSenha == user.senha && user.usuario !== '' && user.nome !== ''){
        cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        toast.success('Usuario cadastrado com sucesso', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
            });
        }else{
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
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
    }

    return (
        <Box className='container'>
            <Box className='signup'>
                <Box className='cadastroArea'>
                    <form onSubmit={onSubmit}>
                        <img src="https://media.discordapp.net/attachments/1022847836406165517/1049076028527616002/c-removebg-preview.png" alt="" className="logoLogin" />

                        <Typography variant='h4'>Cadastre-se</Typography>
                        <Typography variant='h6'>E transforme sua qualidade de ensino</Typography>

                        <TextField className='inputArea' value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' placeholder='Nome' name='nome' />


                        <TextField className='inputArea' value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' placeholder='E-mail' name='usuario' />


                        <TextField className='inputArea' value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' type='password' placeholder='Senha' name='senha' />

                        <TextField className='inputArea' value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='senha' type='password' placeholder='Confirmar Senha' name='senha' />

                        <TextField className='inputArea' value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' placeholder='foto link' name='foto' />



                        <Box marginTop={2} textAlign='center' className='cadastroControler'>
                            <Link to='/login' className='text-decorator-none'>
                                <Box className='btnCancelar'>
                                    CANCELAR
                                </Box>
                            </Link>
                            <Button type='submit' variant="contained" className='buttonCadastro'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
            <Box className="fundoPreto">
                <img src="https://cdn.discordapp.com/attachments/1022847836406165517/1049076028527616002/c-removebg-preview.png" alt="" />
            </Box>
            <Box className="imagemCadastro">
                <img src="https://errejotanoticias.com.br/wp-content/uploads/2021/08/dia-do-estudante.jpg" alt="" />
            </Box>
        </Box>
    )
}

export default CadastroUsuario;