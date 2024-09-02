import { Outlet, Link, useLocation } from "react-router-dom";

export default function Layout() {
    const location = useLocation();
    const path = location.pathname
    const isHomePage = path === "/";

    return (
        <div className="container">
            {!isHomePage && (
                <>
                {/* <div className="logo-img"><img src="/imgs/dp.webp" alt="" /></div> */}
                <nav className="menu-bar">
                    <Link className = "nav-links"  to="/" ><p>Home</p> </Link>
                    <Link className = "nav-links"  to="https://drive.google.com/file/d/1NMrltO50bAfbIrJNYrvqiQcu5xtT4D_y/view?usp=drive_link" target="_blank" rel="noreferrer"><p>Resume</p> </Link>
                    <Link className = {`nav-links ${path ==="/projects"? "active":""}` }  to="/projects" ><p>Projects</p> </Link>
                    <Link className = {`nav-links ${path ==="/education"? "active":""}` }  to="/education"><p>Education</p> </Link>
                    <Link className = "nav-links"  to="https://drive.google.com/drive/folders/1PrgXrdH0TRdo-6tQoGTOMQFv2d6ovn_D?usp=sharing" target="_blank" rel="noreferrer"><p>Certificates</p> </Link>
                </nav>
                </>
            )}
            <Outlet />
        </div>
    );
}
