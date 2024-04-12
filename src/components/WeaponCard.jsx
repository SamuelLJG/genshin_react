import { LazyLoadImage } from "react-lazy-load-image-component";

export default function WeaponCard({WeaponsArtefactsContainer, WeaponsArtefactsOption, ContainerOption, WeaponCardImage, WeaponCardAlt, WeaponCardTitle, WeaponRarityImage, WeaponRarityAlt, WeaponRarityTitle, WeaponTitle, WeaponSubStats, WeaponDescription}) {
    return <div className={WeaponsArtefactsContainer}> 
    <p className={ContainerOption}>{WeaponsArtefactsOption}</p>
    <div className="flex-wa">
        <div className="weapons-artefacts-image-container">
            <LazyLoadImage
            src={WeaponCardImage}
            alt={WeaponCardAlt}
            title={WeaponCardTitle}
            />
            <br />
            <LazyLoadImage
            src={WeaponRarityImage}
            alt={WeaponRarityAlt}
            title={WeaponRarityTitle}
            />
        </div>
        <div className="ag-title">
            <h4>{WeaponTitle}</h4>
            <p>{WeaponSubStats}</p>
        </div>
    </div>
    <p>{WeaponDescription}</p>
</div>
}