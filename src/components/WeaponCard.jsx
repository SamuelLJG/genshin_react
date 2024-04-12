import { LazyLoadImage } from "react-lazy-load-image-component";

export default function WeaponCard({WeaponsArtefactsContainer, WeaponsArtefactsOption, WeaponCardImage, WeaponCardAlt, WeaponRarityImage, WeaponRarityAlt, WeaponSubStats, WeaponDescription}) {
    return <div className={WeaponsArtefactsContainer}> 
    <p className={WeaponsArtefactsOption}>{WeaponsArtefactsOption}</p>
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
    <p>{WeaponDescription}</p>
</div>
}