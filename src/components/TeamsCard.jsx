import { Link } from "react-router-dom"

export default function Teams({CharacterTeamName, CharacterUrl, CharacterTeamNameImage, CharacterTeamElement, CF, id}) {
    return <> 
    <Link to={CharacterUrl} className="character-team-card">
        <img loading="lazy" className={CharacterTeamElement} src={CharacterTeamNameImage} alt={CharacterTeamName} title={CharacterTeamName} />
        <h4>{CharacterTeamName}</h4>
        <p>{CF[id]}</p>
        

    </Link>
</>
}