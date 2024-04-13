import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom"

export default function Teams({CharacterTeamName, CharacterUrl, CharacterTeamNameImage, CharacterTeamElement, CF, id}) {
    return <> 
    <Link to={CharacterUrl} className="character-team-card">
        <LazyLoadImage className={CharacterTeamElement} src={CharacterTeamNameImage} alt={CharacterTeamName} title={CharacterTeamName} />
        <h4>{CharacterTeamName}</h4>
        <p>{CF[id]}</p>
        

    </Link>
</>
}