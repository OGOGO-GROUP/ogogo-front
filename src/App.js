import React, { useEffect } from 'react'
import Styles from './App.module.css';
import { BrowserRouter as Router } from "react-router-dom"
import { useRoutes } from "./routes"

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({duration: 1500, startEvent: 'load'});
export const App = ({hideLoader}) => {
    const routes = useRoutes()

    useEffect(() => {
        hideLoader()
        return () => {
            hideLoader()
        }
    }, [hideLoader])
    
    return (
		<Router>
            <div className={Styles.app}>
                { routes }
            </div>
        </Router>
  	)
}
