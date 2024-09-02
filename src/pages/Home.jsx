import { Link } from "react-router-dom";
import Button from "../components/Button";
import Arrow from "../components/Arrow";

export default function Home(){
    return (
        <div className="home-container">
            <div className="details">
                <div className="home-title">
                    <div className="img"><img src="/imgs/dp.webp" alt="DP" id="profile-pic"/></div>
                    <div>
                        <h1>Ravindra Vithlani</h1>
                        <a href="tel:+917406281713" style={{margin:0}}>
                            <p style={{color:"var(--secondary-text)", display:'flex', alignItems:'center', fontSize:'11pt'}}>
                                <span className="material-symbols-outlined">call</span>
                                +91 7406281713
                            </p>
                        </a>
                        <a href = "mailto:ravindra.vithlani131101@gmail.com?subject=Hello%20there&body=I%20would%20like%20more%20information." style={{margin:0}}>
                            <p style={{color:"var(--secondary-text)", display:'flex', alignItems:'center', fontSize:'11pt'}}>
                                <span className="material-symbols-outlined">mail</span>
                                ravindra.vithlani131101@gmail.com
                            </p>
                        </a>
                    </div>
                </div>
                
                <div className="description">
                    <span style={{margin:0}}><br /><p style={{fontSize:'24pt', margin:'0',color:"var(--primary-text)" }}>Hello &#x1F44B;</p></span> <br />
                    <p>
                    &ensp;&ensp;&ensp;&ensp;I'm A passionate software developer with a strong foundation in web and mobile application development. With a background in both pure sciences and computer science, I've honed my skills in Node.js, Python, PHP and various frameworks like React, React Native, Django and Laravel. I thrive on turning ideas into functional, user-friendly solutions, whether it's a mobile app, a dynamic website, or an internal dashboard. My journey began with a spark of curiosity, and now I’m dedicated to creating impactful software that makes a difference.
                    </p>
                </div>
                <br />
                <div className="ext-links">
                    <Button name={"LinkedIn"} icon={"linkedin"} link={"https://www.linkedin.com/in/ravindra-vithlani-384a14252"}></Button>
                    <Button name={"GitHub"} icon={"github"} link={"https://github.com/RavindraVithlani"}></Button>
                    <Button name={"Geeks for Geeks"} icon={"gfg"} link={"https://www.geeksforgeeks.org/user/ravindravitha3pt/"}></Button>
                    <Button name={"HackerRank"} icon={"hackerrank"} link={"https://www.hackerrank.com/profile/ravindra_vithla1"}></Button>
                </div>
            </div>
            <div className="home-nav">
                <Link to="https://drive.google.com/file/d/1NMrltO50bAfbIrJNYrvqiQcu5xtT4D_y/view?usp=drive_link" target="_blank" rel="noreferrer" className="home-links"><p>Resume</p> <Arrow/></Link>
                <Link to="/projects" className="home-links"><p>Projects</p> <Arrow/></Link>
                <Link to="/education" className="home-links"><p>Education</p> <Arrow/></Link>
                <Link to="https://drive.google.com/drive/folders/1PrgXrdH0TRdo-6tQoGTOMQFv2d6ovn_D?usp=sharing" target="_blank" rel="noreferrer" className="home-links"><p>Certificates</p> <Arrow/></Link>
            </div>
        </div>
    )
}