import React, { useState } from 'react'
import { useGet } from '../../hooks/get.hook'
import { Modal } from '../Modal/Modal'
import Styles from './Topline.module.css'

export const Topline = () => {
    const { data } = useGet('courses')
    const [modal, setModal] = useState({
        opened: false,
        course: ''
    })

    const openModal = (select, on) => {
        setModal({
            opened: true,
            on: on,
            select: select
        })
    }

    const select = data.map(({ title }) => {
        return { course: title }
    })

    return (
        <div className={Styles.topline} id="main">
            <div className={Styles.block}>
                <h2 className={Styles.heading}>OGOGO Academy</h2>
                <p className={Styles.text}>Самая большая IT академия <br/> программирования в Кыргызстане</p>
                <button onClick={() => {openModal(select, true)}} className={Styles.button}>
                    Оставить заявку
                </button>
            </div>
            {
                modal.opened === true ?
                <Modal modal={ modal } setModal={ setModal } /> : null
            }
        </div>
    )
}
