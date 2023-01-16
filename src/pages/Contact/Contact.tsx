import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import './Contact.css';

const Contact = () => {
    return (
        <Box className='container-contato'>
            <Box className='contact'>
                <Box className='contatoArea'>
                    <form>
                        <img src="https://media.discordapp.net/attachments/1022847836406165517/1049076028527616002/c-removebg-preview.png" alt="" className="logoLogin" />

                        <Typography variant='h5' className='h5'>Contate-nos</Typography>
                        <input id='nome' className='input' type='text' placeholder='Nome' name='nome' />
                        <input id='usuario' className='input' type='text' placeholder='E-mail' name='usuario' />
                        <textarea name="assunto" id="assunto" placeholder="assunto" className="textarea"></textarea>
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant="contained" className='button'>
                                Enviar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact;