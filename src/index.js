import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'

const loader = document.querySelector('#loader')

const showLoader = () => loader.classList.remove('hideLoader')

const hideLoader = () => loader.classList.add('hideLoader')

setTimeout(() => {
    ReactDOM.render(
        <React.StrictMode>
            <App hideLoader={hideLoader} showLoader={showLoader} />
        </React.StrictMode>,
        document.getElementById('root')
    )
}, 3000)

// ReactDOM.render(
//     <React.StrictMode>
//         <App hideLoader={hideLoader} showLoader={showLoader} />
//     </React.StrictMode>,
//     document.getElementById('root')
// )