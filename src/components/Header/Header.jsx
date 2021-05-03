import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import Styles from './Header.module.css'

import Logo from '../../assets/images/logo.svg'

export const Header = () => {
    const [open, setOpen] = useState(false)

    const openMenu = () => {
        setOpen(!open)
    }

    const links = [
        { label: 'О нас', target: '#main' },
        { label: 'Курсы', target: '#courses' },
        { label: 'Онлайн', target: '#online' },
        { label: 'Отзывы', target: '#reviews' },
        { label: 'Новости', target: '#news' },
        { label: 'Контакты', target: '#contacts' },
        { label: 'Войти', target: '#' },
    ]

    return (
        <header className={Styles.header}>
            <div className="container">
                <div className={Styles.block}>
                    <NavLink to="/">
                        <img src={ Logo } alt="logo"/>
                    </NavLink>
                    <nav className={`${Styles.menu} ${open ? Styles.active : ''}`}>
                        <ul>
                            {
                                links.map(({ label, target }, i) => {
                                    return (
                                        <li key={ i } className={Styles.item}>
                                            <a href={ target } className={Styles.link}>
                                                { label }
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <div className={`${Styles.hamburger} ${open ? Styles.active : ''}`} onClick={openMenu}>
                        <span className={Styles.line}></span>
                        <span className={Styles.line}></span>
                        <span className={Styles.line}></span>
                    </div>
                </div>                
            </div>
        </header>
    )
}
