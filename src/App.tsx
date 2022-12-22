import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Login from './pages/login/Login';
import Navbar from './components/estaticos/NavBar';
import CadastroUsuario from './pages/CadastroUsuario/CadastroUsuario';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home';
import Footer from './components/estaticos/Footer';
import store from './store/store';
import { Provider } from 'react-redux';
import ListaTema from './components/temas/listaTema/ListaTema';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Posts from './pages/Posts/Posts';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/sobre' element={<About />} />
          <Route path='/cadastrousuario' element={<CadastroUsuario />} />
          <Route path='/contato' element={<Contact />} />

          <Route path="/temas" element={<ListaTema />} />

          <Route path="/postagem" element={<ListaPostagem />} />
          <Route path="/posts" element={<Posts />} />

          <Route path="/formularioPostagem" element={<CadastroPost />} />

          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

          <Route path="/formularioTema" element={<CadastroTema />} />

          <Route path="/formularioTema/:id" element={<CadastroTema />} />

          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

          <Route path="/deletarTema/:id" element={<DeletarTema />} />

        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;