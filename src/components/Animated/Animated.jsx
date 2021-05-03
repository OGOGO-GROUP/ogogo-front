import React from 'react'
import Styles from './Animated.module.css'

export const Animated = () => {
    return (
        <div className={Styles.animated}>
            <div className="container">
                <div className={Styles.block} data-aos="zoom-in">
                    <div className={Styles.item}>
                        <div>
                            <h3 className={Styles.heading}>OGOGO ты уже <br/> дошел до сюда?</h3>
                            <p className={Styles.text}>Тогда самое время <br/> записаться к нам!</p>
                            <button className={Styles.button}>Оставить заявку</button>
                        </div>
                    </div>
                    <div className={Styles.item}>
                    </div>
                </div>
            </div>
        </div>
    )
}
