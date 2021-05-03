import React, { useEffect } from 'react'
import { useImport } from '../../hooks/import.hook'
import Styles from './NewsPage.module.css'

export const NewsPage = () => {
    const { importAll } = useImport()
    const images = importAll(require.context('./../../assets/images/news', false, /\.(png|jpe?g|svg)$/))

    useEffect(() => {
        window.scrollTo(0,0);
        return () => {
            window.scrollTo(0,0);
        }
    })

    const news = [
        { image: images[0].default, title: 'Что Apple покажет на WWDC 2021?', date_created: '1 апреля 2021' },
        { image: images[1].default, title: 'Вспоминаем легендарные смартфоны LG', date_created: '31 марта 2021' },
        { image: images[2].default, title: 'Sony начала отменять предзаказы на PlayStation 5 в России', date_created: '30 марта 2021' },
        { image: images[3].default, title: 'Will.i.am показал защитную маску с наушниками, подсветкой и сменными фильтрами', date_created: '28 марта 2021' },
    ]

    return (
        <div className={Styles.news}>
            <div className="container">
                <div className={Styles.block}>
                    {
                        news.map(({ image, title, date_created }, i) => {
                            return (
                                <div data-aos="fade-right" data-aos-delay={i * 100} key={ i } className={Styles.item}
                                    style={{
                                        background: `url(${image}) 0 0 no-repeat`,
                                        backgroundSize: 'cover'
                                    }}
                                >
                                    <p>Новости - { date_created }</p>
                                    <h4>{ title }</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
