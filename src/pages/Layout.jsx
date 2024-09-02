import { Outlet, Link, useLocation } from "react-router-dom";

export default function Layout() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <div className="container">
            {!isHomePage && (
                <>
                {/* <div className="logo-img"><img src="/imgs/dp.webp" alt="" /></div> */}
                <nav className="menu-bar">
                    <Link to="/" ><p>Home</p> </Link>
                    <Link to="https://drive.google.com/file/d/1NMrltO50bAfbIrJNYrvqiQcu5xtT4D_y/view?usp=drive_link" target="_blank" rel="noreferrer"><p>Resume</p> </Link>
                    <Link to="/projects" ><p>Projects</p> </Link>
                    <Link to="/education"><p>Education</p> </Link>
                    <Link to="https://drive.google.com/drive/folders/1PrgXrdH0TRdo-6tQoGTOMQFv2d6ovn_D?usp=sharing" target="_blank" rel="noreferrer"><p>Certificates</p> </Link>
                </nav>
                </>
            )}
            <Outlet />
        </div>
    );
}
