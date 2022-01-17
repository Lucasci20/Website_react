
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

import logoImg from '../assets/images/eye.png'
import vrImg from '../assets/images/VR.jpg'
import voiceRec from '../assets/images/voice-recognition.jpg'
import videoConf from '../assets/images/video-conference.jpg'

import '../styles/main.scss'

export function Main() {
    const { user } = useAuth()

    return (
        <div id='main-page'>
            <main>
                <header>
                    <nav className='navbar'>
                        <div className="logo">
                            <img src={logoImg} alt="" />
                        </div>
                        <Link to={'/'} className='logo-description'>
                            <h2>Porto</h2>
                            <p>technologies</p>
                        </Link>   
                        <ul>
                            <Link to="/">Home</Link>
                            <Link to="/services">Serviços</Link>
                            <Link to="/about">Sobre Nós</Link>
                            <span>Bem vindo, {user?.name}</span>
                        </ul>
                    </nav>
                </header>

                <section className='container white'>
                    <div className='title'>
                       <h1>Realidade Virtual</h1>
                       <p>Com a tecnoligia de realidade virtual (VR), tenha acesso ao que o futuro o reserva</p>
                    </div>
                    <aside>
                        <div>
                            <img src={vrImg} alt="" />
                            </div>
                    </aside>
                </section>

                <div className='divider'></div>

                <section className='container'>
                    <div className='title'>
                       <h1>Reconhecimento de Voz</h1>
                       <p>Experimente este recurso e faça com que todas as vozes sejam ouvidas</p>
                    </div>
                    <aside>
                        <div>
                            <img src={voiceRec} alt="" />
                            </div>
                    </aside>
                </section>

                <div className='divider'></div>

                <section className='container white'>
                    <div className='title'>
                       <h1>Salas online de Bate-papo</h1>
                        <p>Tenha acesso a salas personalizavéis para discutir com seus colegas de trabalho ou amigos</p>
                    </div>
                    <aside>
                        <div>
                            <img src={videoConf} alt="" />
                            </div>
                    </aside>
                </section>
                
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