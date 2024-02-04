import { Route, Routes } from "react-router-dom"
import Menu from "./components/Menu"
import Won from "./components/Won"
import Lost from "./components/Lost"
import Game from "./components/Game"
import GameHOC from "./containers/GameHOC"


const BaseRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/win" element={<Win />} />
            <Route path="/won" element={<Won />} />
            <Route path="/lost" element={<Lost />} />
            <Route path="/game" element={<GameHOC />} />
        </Routes>
    )
}

export default BaseRouter