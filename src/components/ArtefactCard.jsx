import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ArtefactCard({WeaponsArtefactsContainer, WeaponsArtefactsOption, ContainerOption, ArtefactCardImage, ArtefactCardAlt, ArtefactRarityImage, ArtefactRarityAlt, ArtefactSubStats, ArtefactSubStats2, ArtefactSubStats3, ArtefactDescription, ArtefactDescription2}) {
    return <div className={WeaponsArtefactsContainer}> 
    <p className={ContainerOption}>{WeaponsArtefactsOption}</p>
    <div className="flex-wa">
        <div className="weapons-artefacts-image-container">
            <LazyLoadImage
            src={ArtefactCardImage}
            alt={ArtefactCardAlt}
            title={ArtefactCardAlt}
            />
            <br />
            <LazyLoadImage
            src={ArtefactRarityImage}
            alt={ArtefactRarityAlt}
            title={ArtefactRarityAlt}
            />
        </div>
        <div className="ag-title">
            <h4>{ArtefactCardAlt}</h4>
            <p><i className="fa-regular fa-hourglass-half"></i>&nbsp;{ArtefactSubStats}</p>
            <p><i className="fa-solid fa-trophy"></i>&nbsp;{ArtefactSubStats2}</p>
            <p><i className="fa-solid fa-crown"></i>&nbsp;{ArtefactSubStats3}</p>
        </div>
    </div>
    <p>{ArtefactDescription}</p>
    <br />
    <p>{ArtefactDescription2}</p>
</div>
}