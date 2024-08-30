export default function Button({icon, name, link}){
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <div className="link-buttons">
                <div className="link-button-icons"><img src={`/imgs/${icon}.png`} alt="" /></div>
                <p>{name}</p>
            </div>
        </a>
    )
}