import { Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TokenState } from '../../../store/tokens/TokensReducer';
import './style.css';

const redesSociais = [
    { nome: 'Facebook', img: 'https://media.discordapp.net/attachments/1022847836406165519/1049086575335710800/facebook.png', link: 'https://facebook.com/' },
    { nome: 'Github', img: 'https://images-ext-2.discordapp.net/external/iZ94LczwIzbDJ39dY2QYodiOxEsLDl8Qjfgu5h6fgDA/https/cdn-icons-png.flaticon.com/512/1051/1051326.png', link: 'https://github.com/Generatedu' },
    { nome: 'Twitter', img: 'https://images-ext-2.discordapp.net/external/-QjVf4IDnmTvcd1f-L8YlpPxoTRB2C9_N88DrtWR0bo/https/cdn-icons-png.flaticon.com/512/3670/3670211.png', link: 'https://twitter.com/' },
    { nome: 'Instagram', img: 'https://images-ext-2.discordapp.net/external/AWJVLQLuh3XGx9Ef8TvVfDnRzlw3nRG0uz3JzzDAZak/https/cdn-icons-png.flaticon.com/512/3955/3955024.png', link: 'https://www.instagram.com/' }
]

const navigation = [
    { nome: 'Home', href: '/home' },
    { nome: 'Posts', href: '/postagem' },
    { nome: 'Sobre', href: '/sobre' },
    { nome: 'Contato', href: '/contato' },
    { nome: 'Login', href: '/login' }
]

const Footer = () => {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footercomponent;

    if(token != ""){
        footercomponent = <Box className='footer'>
        <Box className='links'>
            <h3>- Links Uteis -</h3>
            {navigation.map((item, index) => (
                <Link to={item.href} key={index}>{item.nome}</Link>
            ))}
        </Box>

        <Box className='line'></Box>
        
        <Box className='middle'>
        <img src="https://cdn.discordapp.com/attachments/1022847836406165517/1049076028527616002/c-removebg-preview.png" alt="" className="logo" />
        <Box className='direitos'>&copy; Todos os direitos Reservados para GeneratEdu</Box>
        </Box>

        <Box className='line'></Box>
        
        <Box className='contato'>

            <Box className='redesSociais'>
                <h3>Contate-nos</h3>
                <p></p>
                {redesSociais.map((item, index) => (
                    <a href={item.link} target="_blank" key={index}><img src={item.img} alt="" /></a>
                ))}
            </Box>
        </Box>
    </Box>
    }
    return (
        <>
        {footercomponent}
        </>
    )
}

export default Footer;