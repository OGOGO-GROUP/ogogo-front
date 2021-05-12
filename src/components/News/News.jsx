import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGet } from '../../hooks/get.hook'
// import { useImport } from '../../hooks/import.hook'
import Styles from './News.module.css'

export const News = () => {
    const { data, loading } = useGet('news')

    // const { importAll } = useImport()
    // const images = importAll(require.context('./../../assets/images/news', false, /\.(png|jpe?g|svg)$/))

    // const news = [
    //     { image: images[0].default, title: 'Что Apple покажет на WWDC 2021?', date_created: '1 апреля 2021' },
    //     { image: images[1].default, title: 'Вспоминаем легендарные смартфоны LG', date_created: '31 марта 2021' },
    //     { image: images[2].default, title: 'Sony начала отменять предзаказы на PlayStation 5 в России', date_created: '30 марта 2021' },
    //     { image: images[3].default, title: 'Will.i.am показал защитную маску с наушниками, подсветкой и сменными фильтрами', date_created: '28 марта 2021' },
    // ]
    let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'ноября', 'декабря']
    return (
        <div className={Styles.news} id="news">
            <div className="container">
                <h3 className={Styles.heading}>
                    Новости
                    <NavLink to="/news">Все новости:</NavLink>
                </h3>
                <div className={Styles.block}>
                    {
                        loading ?
                        <div className="center"><div className="loading"></div></div> :
                        data.results ?
                        data.results.slice(0, 4).map(({ image, title, date_created }, i) => {
                            return (
                                <NavLink key={ i } to={`/news/${2}`}>
                                    <div data-aos="fade-right" data-aos-delay={i * 100} className={Styles.item}
                                        style={{
                                            background: `url(${image}) 0 0 no-repeat`,
                                            backgroundSize: 'cover'
                                        }}
                                    >
                                        <p>
                                            Новости - {
                                                `${new Date(date_created).getDate()}
                                                ${months[new Date(date_created).getMonth()]}
                                                ${new Date(date_created).getFullYear()}`
                                            }
                                        </p>
                                        <h4>{ title }</h4>
                                    </div>
                                </NavLink>
                            )
                        }) : ''
                    }
                </div>
            </div>
        </div>
    )
}
