import React, { useRef } from "react"
import Styles from "./App.module.css"
import { Switch, Route } from "react-router-dom"
import { Header, Topline, WhyUs, Online, Reviews, News, Animated, Certificate, Footer, Courses } from "./components"
import { NewsPage, Frontend, Python, ProjectManager, JavaBackend, Android, HTML, Design, CoursesPage } from "./pages"
import { NewsFragment } from "./fragments/NewsFragment";

export const useRoutes = () => {
    const TOPLINE_LINK = useRef(null);
    const COURSES_LINK = useRef(null);
    const WHY_US_LINK = useRef(null);
    const ONLINE_LINK = useRef(null);
    const REVIEWS_LINK = useRef(null);
    const NEWS_LINK = useRef(null);
    const ANIMATED_LINK = useRef(null);
    const CERTIFICATE_LINK = useRef(null);

    return (
        <div>
            <Header routers={
                [
                    TOPLINE_LINK,
                    COURSES_LINK,
                    WHY_US_LINK,
                    ONLINE_LINK,
                    REVIEWS_LINK,
                    NEWS_LINK,
                    ANIMATED_LINK,
                    CERTIFICATE_LINK,
                ]
            } />
            <Switch>
                <Route path="/" exact>
                    <div className={Styles.main}>
                        <Topline link={TOPLINE_LINK} />
                        <Courses link={COURSES_LINK} />
                        <WhyUs link={WHY_US_LINK} />
                        <Online link={ONLINE_LINK} />
                        <Reviews link={REVIEWS_LINK} />
                        <News link={NEWS_LINK} />
                        <Animated link={ANIMATED_LINK} />
                        <Certificate link={CERTIFICATE_LINK} />
                    </div>
                </Route>
                <Route path="/news" exact>
                    <NewsPage />
                </Route>
                <Route path="/news/:id" exact>
                    <NewsFragment />
                </Route>
                <Route path="/courses" component={CoursesPage} exact />
                <Route path="/courses/JavaScript" component={Frontend} exact />
                <Route path="/courses/Python Backend" component={Python} exact />
                <Route path="/courses/Project Management" component={ProjectManager} exact />
                <Route path="/courses/Java Backend" component={JavaBackend} exact />
                <Route path="/courses/Android разработка" component={Android} exact />
                <Route path="/courses/HTML/CSS" component={HTML} exact />
                <Route path="/courses/UI/UX Design" component={Design} exact />
            </Switch>
            <Footer />
        </div>
    )
}