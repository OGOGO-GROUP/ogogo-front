import React from 'react'
import Styles from './Topline.module.css'

export const Topline = () => {
    return (
        <div className={Styles.topline} id="main">
            <div className={Styles.block}>
                <h2 className={Styles.heading}>OGOGO Academy</h2>
                <p className={Styles.text}>Самая большая IT академия <br/> программирования в Кыргызстане</p>
                <a href="#courses" className={Styles.button}>Оставить заявку</a>
            </div>
        </div>
    )
}
