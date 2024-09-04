export default function Section({status, children, school, clas, year}){
    return(
        <>
            <div className="section">
                <div className="icon-div">
                    <div className="line" style={(status==='end')?({visibility:'hidden'}):({visibility:'visible'})}></div>
                    <div className="icon">
                        {status ==='end' && <div className="icon-animation"></div>}
                    </div>
                    <div className="line" style={(status==='start')?({visibility:'hidden'}):({visibility:'visible'})}></div>
                </div>
                <div className="details">
                    <h2 className="education-heading">{clas},</h2>
                    <p>{school}</p>
                    <p>Batch of {year}</p>
                    {children}
                </div>
            </div>
        </>
    )
}