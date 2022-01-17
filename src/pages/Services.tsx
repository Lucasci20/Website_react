import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'


import logoImg from '../assets/images/eye.png'
import vrImg from '../assets/images/VR.jpg'
import voiceRec from '../assets/images/voice-recognition.jpg'
import videoConf from '../assets/images/video-conference.jpg'

import '../styles/services.scss'

export function Services() {

    const { user } = useContext(AuthContext)
    return (
        <div id='services-page'>
            <main>
                <header className='container'>
                    <nav className='navbar'>
                        <div className='logo'>
                            <img src={logoImg} alt="" />
                        </div>
                        <div className='logo-description'>
                            <h2>Porto</h2>
                            <p>technologies</p>
                        </div>   
                        <ul>
                            <Link to="/">Home</Link>
                            <Link to="/services">Serviços</Link>
                            <Link to="/about">Sobre Nós</Link>
                            <span>Bem vindo, {user?.name}</span>
                        </ul>
                    </nav>
                </header>
                <section className='container'>
                    <div className='title'>
                        <h1>Serviços Disponíveis</h1>
                    </div>
                </section>

                <div className='container'>
                    <div className="cards">
                        <div className="card">
                            <img src={vrImg} alt="Realidade Virtual" />
                            <h3 className='title'>Realidade Virtual</h3>
                            <p>
                                Com a tecnoligia de realidade virtual <strong>(VR)</strong>, tenha acesso ao que o futuro o reserva.
                                oportunidades de interação mixada com imersão surreal.
                            </p>
                        </div>
                        <div className="card">
                            <img src={voiceRec} alt="" />
                            <h3 className='title'>Análise de voz</h3>
                            <p>
                                Experimente este recurso e faça com que todas as vozes sejam ouvidas com
                               esta tecnologia atualizada e precisa.
                            </p>
                        </div>
                        <div className="card">
                            <img src={videoConf} alt="" />
                            <h3 className='title'>Salas Online</h3>
                            <p>
                                Tenha acesso a salas personalizavéis para discutir com seus colegas de trabalho
                                 ou amigos
                            </p>
                        </div>
                        <div className="card">
                            <img src={videoConf} alt="" />
                            <h3 className='title'>Salas Online</h3>
                            <p>
                                Tenha acesso a salas personalizavéis para discutir com seus colegas de trabalho
                                 ou amigos
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                    <section className="container">
                        <div className='logo-description'>
                            <h2>Porto</h2>
                            <p>technologies</p>
                            </div>
                        <div className='footer-description'>
                        Portions of this content are ©1998–2018 by individual porto.org contributors.
                         Content available under a Creative Commons license.
                        </div>
                        <div className= 'footer-links'>
                            <a href="">
                                <i className='icon-twitter'></i>
                            </a>
                            <a href="">
                                <i className='icon-facebook'></i>
                            </a>
                            <a href="">
                                <i className='icon-instagram' ></i>
                            </a>
                            <a href="">
                                <i className='icon-youtube'></i>
                            </a>
                        </div>
                    </section>
                </footer>
        </div>
    )
}