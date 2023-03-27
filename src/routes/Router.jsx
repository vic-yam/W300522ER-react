import { Route, Routes } from "react-router-dom"
import ROUTES from "./routesModel"
import CardsPage from "../cards/pages/CardsPage"
import AboutPage from "../pages/AboutPage"
import ErrorPage from "../pages/ErrorPage"
import SandBox from "../sandbox/SandBox"


const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.CARDS} element={<CardsPage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path="/sandbox" element={<SandBox />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>

    )
}

export default Router