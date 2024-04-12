import { LazyLoadImage } from "react-lazy-load-image-component";

function Characters(props) {
        return <><br />
       <main id={props.MainElement}>
            
            <section id="section-character" className={props.MainElement}>
                <div id="character-background" style={{backgroundImage:props.characterbackground}}></div>
                <LazyLoadImage id="emblem"
                src={props.EmblemImage}
                alt={props.EmblemAlt}
                title={props.EmblemAlt}
                />
                <div className={props.MainElement}>
                </div>
                <div id="character-name-container">
                    <LazyLoadImage
                    src={props.WeaponCharacterImage}
                    alt={props.WeaponCharacterAlt}
                    title={props.WeaponCharacterAlt}
                    />
                    <h1>
                        {props.CharacterName} Build
                    </h1>
                    <div>
                        <p>{props.CharacterFunction}</p>&nbsp;|&nbsp;<p>{props.CharacterElement}</p>
                    </div>
                    <p id="rarity" style={{backgroundImage:props.RarityBackground}}>
                        {props.Rarity}<i className="fa-solid fa-star"></i>
                    </p>
                </div>
            </section>
        <article className="character-section-main">
            
            <h2>{props.BuildTitle}</h2>
            <p>{props.BuildDescription}</p>
            <br />
            <div className="ads"></div>
            <br />
            <h3>{props.CharacterName} Melhor Arma</h3>
            <p>{props.BestWeaponDescription}</p>
            <br />
            <section className="weapons-artefacts-section">
                {props.children[0]}{props.children[1]}
            </section>
            <br />
            <p>{props.OtherWeapons}</p>
            <br />
            <h3>{props.CharacterName} Melhor Conjunto de Artefatos</h3>
            <p>{props.BestArtefactDescription}</p>
            <br />
            <section className="weapons-artefacts-section">
                {props.children[2]}{props.children[3]}
            </section>
            <br />
            <h3>{props.CharacterName} Artefatos Sub-Atributos</h3>
            <p>{props.ArtefactSubAttribute}</p>
            <br />
            <h3>{props.CharacterName} Prioridade de Talentos</h3>
            <p>{props.TalentPriority}</p>
        </article>
</main> </>
}

export default Characters