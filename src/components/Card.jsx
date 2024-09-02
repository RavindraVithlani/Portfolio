export default function Card({children, title, link, preview}){
    return(
        <>
        <div className="card">
            <div className="small-preview">
                <img src={preview} alt="preview-img" />
            </div>
            <div className="content">
                <div className="project-title">
                    <h2>{title}</h2>
                </div>
                <div className="project-des">
                    <p>{children}</p>
                </div>
                <div className="project-link">
                    <a href={link} target="_blank" rel="noreferrer">View Project</a>
                </div>
            </div>
        </div>
        </>
    )

}