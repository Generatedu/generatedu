import React, { useState } from 'react';
import './About.css';
import { Box, Typography } from '@mui/material';
import { Collections } from '@mui/icons-material';
import { integrantes } from '../../utils/integrantes';

const About = () => {

    const [heightDesc, setHeightDesc] = useState('200px')
    const [leia, setLeia] = useState('Leia mais...')

    const changeText = () => {
        if(heightDesc == '200px' && leia === 'Leia mais...') {
            setHeightDesc('')
            setLeia('Leia menos...')
        } else {
            setHeightDesc('200px')
            setLeia('Leia mais...')
        }
    }

    return (
        <Box className='container-About' data-aos="fade-up">
            <Box className='fundoAboutImg'>
                <Box className='transparentAbout'></Box>
                <img src="https://www.engenhariaradio.pt/wp-content/uploads/2021/02/alfons-morales-ylswjsy7stw-unsplash-1536x901.jpg" alt="" />
            </Box>
            <Box className='conteudoAbout'>
                <Box className='ourMissionArea'>
                    <Box className='our-mission meio'>
                        <Box>
                            <Typography variant='h4' className='fontes laranja'>Sobre nós</Typography>
                            <Box className='branco'>Somos um grupo de jovens que participam de um
                                Bootcamp da Generation, promovido por um projeto da
                                Prefeitura do Rio de Janeiro - Programadores Cariocas.
                                Visando o conhecimento na área do desenvolvimento na
                                tecnologia.</Box>
                        </Box>
                        <Box>
                            <img src="https://cdn.discordapp.com/attachments/1014218248998367252/1069710778090913883/logogeneratedu.png" alt="" />
                        </Box>
                    </Box>
                    <Box className='our-mission meio'>
                        <Box>
                            <img src="https://microsistec.com.br/wp-content/uploads/time-unido.jpg" alt="" />
                        </Box>
                        <Box>
                            <Typography variant='h4' className='fontes laranja'>Nossa Missão</Typography>
                            <Box className='branco'>Nossa missão e visão através do nosso projeto
                                GENERATEDU - GERAR EDUCAÇÃO é propor uma rede
                                voltada ao público de alunos e professores da rede
                                pública, fazendo o compartilhamento de pensamentos,
                                feedbacks e ideias inovadoras para os métodos de
                                ensinamentos massivos que são estabelecido ao
                                mesmo módulos há séculos. Acreditamos que faltam
                                estímulos mais dinâmicos e atrativos, para os jovens se
                                interessarem mais pela Educação.</Box>
                        </Box>
                    </Box>
                </Box>
                <Box className='integrantes'>
                    <Box className='integranteaTitulo fontes laranja'><h1>Integrantes</h1></Box>
                    {integrantes.map((item, index) => (
                        <>
                            {
                                item.id % 2 == 0 ?
                                    <Box className='eachIntegrante' key={index}>
                                        <Box>
                                            <img src={item.img} alt="" />
                                        </Box>
                                        <Box className='eachIntegranteInfo'>
                                            <Typography className='fontes' variant='h4'>{item.name}</Typography>
                                            <Box>{item.descricao}</Box>

                                            <Box className='botaozao'>
                                            <Box className='memberCurriculo'>
                                                <a href={item.linkedin} target="_blank">Linkedin</a>
                                            </Box>

                                            <Box className='memberCurriculo'>
                                                <a href={item.github} target="_blank">Github</a>
                                            </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    :
                                    <Box className='eachIntegrante'  key={index}>

                                        <Box className='eachIntegranteInfo'>
                                            <Typography className='fontes'   variant='h4'>{item.name}</Typography>
                                            <Box>{item.descricao}</Box>

                                            <Box className="botaozao">
                                            <Box className='memberCurriculo'>
                                                <a href={item.linkedin} target="_blank">Linkedin</a>
                                            </Box>

                                            <Box className='memberCurriculo'>
                                                <a href={item.github} target="_blank">Github</a>
                                            </Box>
                                            </Box>
                                        </Box>

                                        <Box>
                                            <img src={item.img} alt="" />
                                        </Box>
                                    </Box>
                            }
                            <Box className='eachIntegrante2' key={index}>
                                <Box>
                                    <img src={item.img} alt="" />
                                </Box>
                                <Box className='eachIntegranteInfo'>
                                    <Typography variant='h5'>{item.name}</Typography>
                                    <Box className='integranteDescricao' style={{height: heightDesc}}>
                                        <p>{item.descricao}</p>
                                    </Box>
                                    <Box className='readMore' onClick={() => changeText()}>
                                        {leia}
                                    </Box>
                                    <Box className='memberCurriculo'>
                                        <a href={item.linkedin} target="_blank">Linkedin</a>
                                    </Box>

                                    <Box className='memberCurriculo'>
                                        <a href={item.github} target="_blank">Github</a>
                                    </Box>
                                </Box>
                            </Box>
                        </>
                    ))}
                </Box>
            </Box>

        </Box>
    )
}

export default About;