import React from "react"
import Styles from "./App.module.css"
import { Switch, Route } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { Topline } from "./components/Topline/Topline"
import { Courses } from "./components/Courses/Courses"
import { WhyUs } from "./components/WhyUs/WhyUs"
import { Online } from "./components/Online/Online"
import { Reviews } from "./components/Reviews/Reviews"
import { News } from "./components/News/News"
import { Animated } from "./components/Animated/Animated"
import { Certificate } from "./components/Certificate/Certificate"
import { Footer } from "./components/Footer/Footer"

import { NewsPage } from "./pages/NewsPage/NewsPage"
import { NewsFragment } from "./fragments/NewsFragment"

export const useRoutes = () => {
    return(
        <div>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <div className={Styles.main}>
                        <Topline />
                        <Courses />
                        <WhyUs />
                        <Online />
                        <Reviews />
                        <News />
                        <Animated />
                        <Certificate />
                    </div>
                </Route>
                <Route path="/news" exact>
                    <NewsPage />
                </Route>
                <Route path="/news/:id" exact>
                    <NewsFragment />
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}