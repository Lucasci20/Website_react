import googleIconImg from '../assets/images/google.png'
import logoImg from '../assets/images/eye.png'

import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

import { Button } from '../components/Button'


import '../styles/home.scss'

export function Home() {
    const history = useHistory() 
    const { user, sigInWithGoogle } = useAuth()

   async function navigateToMainPage() {
        if (!user) {
          await  sigInWithGoogle()
        }

        history.push('/main')
        }

        return (
            <div id='home-page'>
                    <header>
                        <nav className='navbar'>
                            <div className='logo'>
                                <img src={logoImg} alt="logo" />
                            </div>
                            <div className='logo-description'>
                                <h2>Porto</h2>
                                <p>technologies</p>
                            </div>
                                <ul>
                                    <Link to="/">Home</Link>
                                    <Link to="/services">Serviços</Link>
                                    <Link to="/about">Sobre Nós</Link>
                                </ul>
                        </nav>
                    </header>
                <main>
                    <section className='container'>
                        <div className='home-title'>
                            <h1>Crie, teste, inove e repita!</h1>
                            <p>
                                O futuro está aqui. este é o espaço para as nossas criações,
                                inovações e tecnologias de ponta para você!
                            </p>
                        </div>
                        <aside>
                            <div>
                                <img src={logoImg} alt="logo" />
                            </div>
                        </aside>
                    </section>
    
                    <div className='container'>
                        <Button onClick={navigateToMainPage}>
                            <img src={googleIconImg} alt="google" />
                            Conecte-se com o Google
                        </Button>
                    </div>
                </main>

                <div className='divider'></div>

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