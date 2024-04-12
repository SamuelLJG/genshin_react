import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ArtefactCard({WeaponsArtefactsContainer, WeaponsArtefactsOption, ContainerOption, ArtefactCardImage, ArtefactCardAlt, ArtefactCardTitle, ArtefactRarityImage, ArtefactRarityAlt, ArtefactRarityTitle, ArtefactTitle, ArtefactSubStats, ArtefactSubStats2, ArtefactSubStats3, ArtefactDescription, ArtefactDescription2}) {
    return <div className={WeaponsArtefactsContainer}> 
    <p className={ContainerOption}>{WeaponsArtefactsOption}</p>
    <div className="flex-wa">
        <div className="weapons-artefacts-image-container">
            <LazyLoadImage
            src={ArtefactCardImage}
            alt={ArtefactCardAlt}
            title={ArtefactCardTitle}
            />
            <br />
            <LazyLoadImage
            src={ArtefactRarityImage}
            alt={ArtefactRarityAlt}
            title={ArtefactRarityTitle}
            />
        </div>
        <div className="ag-title">
            <h4>{ArtefactTitle}</h4>
            <p><i class="fa-regular fa-hourglass-half"></i>&nbsp;{ArtefactSubStats}</p>
            <p><i class="fa-solid fa-trophy"></i>&nbsp;{ArtefactSubStats2}</p>
            <p><i class="fa-solid fa-crown"></i>&nbsp;{ArtefactSubStats3}</p>
        </div>
    </div>
    <p>{ArtefactDescription}</p>
    <br />
    <p>{ArtefactDescription2}</p>
</div>
}