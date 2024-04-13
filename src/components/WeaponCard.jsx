import { LazyLoadImage } from "react-lazy-load-image-component";

export default function WeaponCard({WeaponsArtefactsContainer, WeaponCardImage, WeaponCardAlt, WeaponRarityImage, WeaponRarityAlt, WeaponSubStats, WeaponDescription}) {
    return <div className={'best-optional '+WeaponsArtefactsContainer}> 
    <div className="flex-wa">
        <div className="weapons-artefacts-image-container">
            <LazyLoadImage
            src={WeaponCardImage}
            alt={WeaponCardAlt}
            title={WeaponCardAlt}
            />
            <br />
            <LazyLoadImage
            src={WeaponRarityImage}
            alt={WeaponRarityAlt}
            title={WeaponRarityAlt}
            />
        </div>
        <div className="ag-title">
            <h4>{WeaponCardAlt}</h4>
            <p>{WeaponSubStats}</p>
        </div>
    </div>
    <p className="wa-p-margin-top">{WeaponDescription}</p>
</div>
}