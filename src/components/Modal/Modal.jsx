import React, { useCallback, useEffect, useState } from 'react'
import { usePost } from '../../hooks/post.hook'
import Styles from './Modal.module.css'

export const Modal = ({ modal, setModal }) => {
    const { postHandler, loading } = usePost()
    const [form, setForm] = useState({})

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value, 'course_name': modal.course })
    }

    const escHandler = useCallback((event) => {
        if(event.keyCode === 27) {
            setModal({ opened: false, course: '' })
        }
    }, [setModal])

    useEffect(() => {
        document.addEventListener("keydown", escHandler, false)
        return () => {
            document.removeEventListener("keydown", escHandler, false)
        }
    }, [escHandler])

    const inputs = [
        { type: 'text', name: 'name', id: 'name', placeholder: 'Как вас зовут?', label: 'Ваше имя' },
        { type: 'tel', name: 'phone', id: 'phone', placeholder: '0999-99-99-99', label: 'Ваш номер телефона' },
    ]

    return (
        <div className={Styles.modal}>
            <div
                className={Styles.overlay}
                onClick={() => {
                    setModal({ opened: false, course: '' })
                }}
            ></div>
            <div className={Styles.block}>
                <h3 className={Styles.heading}>
                    Заполните <br/> заявку
                    <button
                        onClick={() => {
                            setModal({ opened: false, course: '' })
                        }}
                    >
                        <span className={`material-icons ${Styles.icon}`}>
                            close
                        </span>
                    </button>
                </h3>
                <p className={Styles.text}>
                    <span>
                        <span className={`material-icons ${Styles.arrow}`}>
                            chevron_right
                        </span>
                        Выбранная услуга
                    </span> <br/>
                    Записаться на курс "{modal.course}"
                </p>
                <form action="POST">
                    {inputs.map(({ type, name, id, placeholder, label }, i) => {
                        return (
                            <div key={ i } className={Styles.inputBlock}>
                                <label htmlFor={ id }>{label}</label>
                                <input
                                    id={id}
                                    className={Styles.input}
                                    type={type}
                                    name={name}
                                    placeholder={placeholder}
                                    onChange={changeHandler}
                                />
                            </div>
                        )
                    })}
                    <button onClick={(e) => {e.preventDefault(); postHandler(form, 'forms/')}} className={Styles.button}>
                        {
                            loading ?
                            <span className={Styles.loading}></span> :
                            'Оставить заявку'
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}