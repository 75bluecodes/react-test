import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../header/navbar";
import Footer from "../footer/footer";

function MainLayout(){
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>

    )
}

export default MainLayout;