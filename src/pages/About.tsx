import logoImg from '../assets/images/eye.png'

import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'

import '../styles/about.scss'

export function About() {
    const { user } = useContext(AuthContext)

    return (
        <div id='about-page'>
            <main>
                <header className='container'>
                    <nav className='navbar'>
                        <div className="logo">
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
                                <span>Bem vindo, {user?.name}</span>
                            </ul>
                    </nav>
                </header>
                <section className='container'>
                    <div className='title'>
                       <h1>Sobre Nós</h1>
                    </div>
                </section>

                <div className='container'>
                   <div className="title">
                       <p>
                           We don’t hide the secret formula in this lab.
                            Years ago, we all came together to make the internet great. That’s why 
                            everyone is invited to wander in and see what we've been working on here at Porto. Here, we 
                            measure innovation by how good it can be for the internet and consider every project a success.
                            <br />

                            Above all, this is a digital research laboratory. It’s where we examine new technologies and figure 
                            out what works and what doesn’t. Some projects will become new Porto products and others will stay 
                            in the exploration stage.
                            <br />
                            Our foundation is the Porto Manifesto and the commitment to a healthy internet. We bring it to life 
                            by testing, asking questions and staying open.
                            <br />
                            There are no lone geniuses in this lab, because at Porto Technology many minds are always better than one.
                        </p>
                   </div>
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
                            <a>
                                <i className='icon-twitter'></i>
                            </a>
                            <a>
                                <i className='icon-facebook'></i>
                            </a>
                            <a>
                                <i className='icon-instagram' ></i>
                            </a>
                            <a>
                                <i className='icon-youtube'></i>
                            </a>
                        </div>
                    </section>
                </footer>
        </div>
    )
}