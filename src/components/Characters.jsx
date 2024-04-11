import { LazyLoadImage } from "react-lazy-load-image-component";
function Characters(props) {
        return <>
        <section
        id={props.PersElement}
        >
            <img width="100px"
            src={props.EmblemImage}
            alt={props.EmblemAlt}
            title={props.EmblemTitle}
            />
            <img width="100px"
            src={props.CharacterPortraitImage}
            alt={props.CharacterPortraitAlt}
            title={props.CharacterPortraitTitle}
            />
            <div
            id={props.PersBkg}
            >
            </div>
            <div>
                <img
                src={props.WeaponCharacterImage}
                alt={props.WeaponCharacterAlt}
                title={props.WeaponCharacterTitle}
                />
                <h1>
                    {props.CharacterName}
                </h1>
                <div>
                    <p>
                        {props.FunctionElement}
                    </p>
                </div>
                <p>
                    {props.Rarity}
                </p>
            </div>
        </section>
        <section className="weapons-artefats-section">

<div>
    <p></p>
    <div>
        <LazyLoadImage
        src={props.WeaponCardImage}
        alt={props.WeaponCardAlt}
        title={props.WeaponCardTitle}
        />
        <LazyLoadImage
        src={props.WeaponRarityImage}
        alt={props.WeaponRarityAlt}
        title={props.WeaponRarityTitle}
        />
    </div>
    <div>
        <h4>{props.WeaponTitle}</h4>
        <p>{props.WeaponSubStats}</p>
    </div>
    <p>{props.WeaponDescription}</p>
</div>
</section>
    </>
};

function ArtefactCard(props) {
    return <>
<section className="weapons-artefacts-section">

<div>
<p></p>
<div>
    <LazyLoadImage
    src={props.ArtefactCardImage}
    alt={props.ArtefactCardAlt}
    title={props.ArtefactCardTitle}
    />
    <LazyLoadImage
    src={props.ArtefactRarityImage}
    alt={props.ArtefactRarityAlt}
    title={props.ArtefactRarityTitle}
    />
</div>
<div>
    <h4>{props.ArtefactTitle}</h4>
    <div>
    <p><i class="fa-regular fa-hourglass-half"></i>&nbsp;{props.ArtefactSubStats}</p>
    <p><i class="fa-solid fa-trophy"></i>&nbsp;{props.ArtefactSubStats2}</p>
    <p><i class="fa-solid fa-crown"></i>&nbsp;{props.ArtefactSubStats3}</p>
    </div>
</div>
<p>{props.ArtefactDescription}</p>
</div>
</section>
</>
}

export {Characters,ArtefactCard}