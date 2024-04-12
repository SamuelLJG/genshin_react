import { LazyLoadImage } from "react-lazy-load-image-component";

function Characters(props) {
        return <main id={props.MainElement}>
            <section id="section-character" className={props.MainElement}>
                <div id="character-background" style={{backgroundImage:props.characterbackground}}></div>
                <LazyLoadImage id="emblem"
                src={props.EmblemImage}
                alt={props.EmblemAlt}
                title={props.EmblemTitle}
                />
                <div className={props.MainElement}>
                </div>
                <div id="character-name-container">
                    <LazyLoadImage
                    src={props.WeaponCharacterImage}
                    alt={props.WeaponCharacterAlt}
                    title={props.WeaponCharacterTitle}
                    />
                    <h1>
                        {props.CharacterName}
                    </h1>
                    <div>
                        <p>{props.CharacterFunction}</p>&nbsp;|&nbsp;<p>{props.CharacterElement}</p>
                    </div>
                    <p id="rarity" style={{backgroundImage:props.RarityBackground}}>
                        {props.Rarity}<i class="fa-solid fa-star"></i>
                    </p>
                </div>
            </section>
        <article className="character-section-main">
            
            <h2>{props.BuildTitle}</h2>
            <p>{props.BuildDescription}</p>
            <br />
            <div className="ads"></div>
            <br />
            <h3>{props.BuildBestWeapon} Melhor Arma</h3>
            <p>{props.BuildBestWeaponDescription}</p>
            <br />
            <section className="weapons-artefacts-section">{props.children[0]}</section>
            <br />
            <p>{props.OtherWeapons}</p>
            <br />
            <section className="weapons-artefacts-section">{props.children[1]}</section>
        </article>
</main>
}

export default Characters