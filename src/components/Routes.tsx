import { Route, Routes } from "react-router-dom";
import { Fuentes, Login, Register, Tableros, Tracking, TrackingNuevo } from "../pages";
import GestionUsuarios from "../pages/GestionUsuarios";

const Router = () => {
    return(
        <Routes>
            <Route
                path="/tableros"
                element={<Tableros />}
            />
            <Route
                path="/login"
                element={<Login />}
            />
            <Route
                path="/register"
                element={<Register />}
            />
            <Route
                path="/tracking"
                element={<Tracking />}
            />
            <Route
                path="/trackingnuevo"
                element={<TrackingNuevo />}
            />
            <Route
                path="/fuentes"
                element={<Fuentes />}
            />
            <Route
                path="/gestion-usuarios"
                element={<GestionUsuarios />}
            />
        </Routes>
    )
}

export default Router