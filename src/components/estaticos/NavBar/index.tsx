import React, { useEffect, useState } from 'react';
import { AppBar, TextField, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { addToken } from '../../../store/tokens/Actions';
import { toast } from 'react-toastify';
import { HomeRounded, ExitToAppRounded, LibraryBooksRounded, GroupRounded, AssignmentRounded, ContactMailRounded } from '@mui/icons-material';


function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [active, setActive] = useState('translateX(100%)');
    const [buttonAnim, setButtonAnim] = useState('');
    const [buttonAnim2, setButtonAnim2] = useState('');
    const [buttonAnim3, setButtonAnim3] = useState('');

    const goLogout = () => {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    const showResponseMenu = () => {
        active === 'translateX(100%)' ? setActive('translateX(0)') : setActive('translateX(100%)');
    }
    const showResponseMenu2 = () => {
        active === 'translateX(0)' ? setActive('translateX(100%)') : setActive('translateX(0)');
    }

    const changeAnimModule = () => {
        buttonAnim === '' ? setButtonAnim('rotate(-45deg) translate(-8px, 8px)') : setButtonAnim('');
        buttonAnim2 === '' ? setButtonAnim2('0') : setButtonAnim2('');
        buttonAnim3 === '' ? setButtonAnim3('rotate(45deg) translate(-5px, -7px)') : setButtonAnim3('');
    }

    if (token != "") {
        navbarComponent = <nav className='nav'>
            <Box className="logo" >
                <img src="https://cdn.discordapp.com/attachments/1022847836406165517/1049076028527616002/c-removebg-preview.png" alt="" className="logo" />
            </Box>
            <Box className='mobile-menu' onClick={() => (showResponseMenu(), changeAnimModule())}>
                <Box style={{ transform: buttonAnim }}></Box>
                <Box style={{ opacity: buttonAnim2 }}></Box>
                <Box style={{ transform: buttonAnim3 }}></Box>
            </Box>
            <ul>
                <Link to="/home" className="a">
                    <HomeRounded />
                    <Box >Home</Box>
                </Link>
                <Link to="/posts" className="a">
                    <LibraryBooksRounded />
                    <Box>Postagens</Box>
                </Link>
                <Link to="/temas" className="a">
                    <AssignmentRounded />
                    <Box >Temas</Box>
                </Link>
                <Link to="/sobre" className="a">
                    <GroupRounded />
                    <Box >Sobre</Box>
                </Link>
                <Link to="/contato" className="a">
                    <ContactMailRounded />
                    <Box >Contato</Box>
                </Link>
                <Link to="/" className="a" onClick={goLogout}>
                    <ExitToAppRounded />
                    <Box >Logout</Box>
                </Link>
            </ul>
            <input className='input' placeholder='pesquisar' />
            <Box className='nav-list' style={{ transform: active }}>
                <Link to="/home" className="a">
                    <HomeRounded />
                    <Box onClick={() => (showResponseMenu2(), changeAnimModule())} >Home</Box>
                </Link>
                <Link to="/posts" className="a">
                    <LibraryBooksRounded />
                    <Box onClick={() => (showResponseMenu2(), changeAnimModule())}>Postagens</Box>
                </Link>
                <Link to="/temas" className="a">
                    <AssignmentRounded />
                    <Box onClick={() => (showResponseMenu2(), changeAnimModule())}>Temas</Box>
                </Link>
                <Link to="/sobre" className="a">
                    <GroupRounded />
                    <Box onClick={() => (showResponseMenu2(), changeAnimModule())} >Sobre</Box>
                </Link>
                <Link to="/contato" className="a">
                    <ContactMailRounded />
                    <Box onClick={() => (showResponseMenu2(), changeAnimModule())} >Contato</Box>
                </Link>
                <Link to="/" className="a" onClick={goLogout}>
                    <ExitToAppRounded />
                    <Box >Logout</Box>
                </Link>
            </Box>
        </nav>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;