import Section from "../components/Section"

export default function Education(){
    return (
        <>
        <h1>My Timeline</h1>
        <div className="education">
            <Section status={'end'} school={'M S Ramaiah Institute of Technology'} clas={'Master of Computer Applications'} year={'2024'}/>
            <Section school = {'St. Joseph`s College'} clas={'Bachelor of Science'} year={'2022'}/>
            <Section school={'Sarvajna Composite PU College'} clas={'12th Grade'} year={'2019'}/> 
            <Section status={'start'} school={'N K S English High School'} clas={'10th Grade'} year={'2017'}/>
        </div>
        </>
    )
}