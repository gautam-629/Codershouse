import { Home } from "./pages/Home/Home";
import './app.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from "./components/shared/Navigation/Navigation";
import Authenticate from "./pages/Authenticate/Authenticate";
import Activate from "./pages/Activate/Activate.js";
import Rooms from "./pages/Rooms/Rooms";
const isAuth = false;
const user = {
    activated: false
}
function App() {
    return (
        <>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<GuestRouter Component={Home} />} />
                </Routes>
                <Routes>
                    <Route path="/authenticate" element={<GuestRouter Component={Authenticate} />} />
                </Routes>
                <Routes>
                    <Route path="/activate" element={<SemiProtectedRoute Component={Activate} />} />
                </Routes>
                <Routes>
                    <Route path="/rooms" element={<ProtectedRoute Component={Rooms} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
const GuestRouter = ({ Component }) => {
    if (isAuth) {
        return <Navigate to={"/rooms"} />
    }
    return (
        <Component />
    )
}
const SemiProtectedRoute = ({ Component }) => {
    if (isAuth && !user.activated) {
        return <Component />
    }
    if (!isAuth) {
        return <Navigate to={"/"} />
    }

    else {
        return <Navigate to={"/rooms"} />
    }
}
const ProtectedRoute = ({ Component }) => {
    if (!isAuth) {
        return <Navigate to={"/"} />
    }
    else if (isAuth && !user.activated) {
        return <Navigate to={"/activate"} />
    }
    return (
        <Component />
    )
}
export default App;