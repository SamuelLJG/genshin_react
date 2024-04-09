import { BaizhuHelmet } from "../components/Helmets";
import { Characters, WeaponCard, ArtefactCard, Br } from "../components/Characters";


const characterCardListData = [
    {
        PersElement: "PersGeo",
        PersBkg: "GeoBkg",
        EmblemImage: "https://genshinbuild.com/images/We/Emblema_Inazuma.webp",
        EmblemAlt: "Emblema de Inazuma",
        EmblemTitle: "Emblema de Inazuma",
        CharacterPortraitImage: "https://genshinbuild.com/images/FullQuality/Wish_Baizhu.webp",
        CharacterPortraitAlt: "Baizhu",
        CharacterPortraitTitle: "Baizhu",
        WeaponCharacterImage: "https://genshinbuild.com/images/AT/Espada.webp",
        WeaponCharacterAlt: "Espada",
        WeaponCharacterTitle: "Espada",
        CharacterName: "Baizhu",
        FunctionElement: "Sub-DPS | Geo",
        Rarity: "Raridade: 5"
    }
]

const characterWeaponsListData = [
    {
        WeaponCardImage: "https://genshinbuild.com/images/Armas/Weapon_Uraku_Misugiri.webp",
        WeaponCardAlt: "Urakugo Rensai",
        WeaponCardTitle: "Urakugo Rensai",
        WeaponRarityImage: "https://genshinbuild.com/images/We/55star.webp",
        WeaponRarityAlt: "5 Estrelas",
        WeaponRarityTitle: "5 Estrelas",
        WeaponTitle: "Urakugo Rensai",
        WeaponSubStats: "Dano Crítico",
        WeaponDescription: "Aumenta o Dano do Ataque Normal em 16-32%. Aumenta o Dano da Habilidade Elemental em 24-48%. Quando um personagem ativo próximo causa Dano Geo, os efeitos mencionados acima serão aumentados em 100% por 15s. Além disso, a DEF do personagem que está com essa arma equipada aumenta em 20-40%."
    },
    {
        WeaponCardImage: "https://genshinbuild.com/images/Armas/Weapon_Harbinger_of_Dawn.webp",
        WeaponCardAlt: "Prenúncio do Alvorecer",
        WeaponCardTitle: "Prenúncio do Alvorecer",
        WeaponRarityImage: "https://genshinbuild.com/images/We/33star.webp",
        WeaponRarityAlt: "3 Estrelas",
        WeaponRarityTitle: "3 Estrelas",
        WeaponTitle: "Prenúncio do Alvorecer",
        WeaponSubStats: "Taxa Crítica",
        WeaponDescription: "Quando a Vida estiver acima 90%, aumenta a Taxa Crítica em 14-28%."
    }
]

const characterArtefactsListData = [
    {
        ArtefactCardImage: "https://genshinbuild.com/images/Artefacts/Item_Bloom_Times.webp",
        ArtefactCardAlt: "Casca de Sonhos Opulentos",
        ArtefactCardTitle: "Casca de Sonhos Opulentos",
        ArtefactRarityImage: "https://genshinbuild.com/images/We/55star.webp",
        ArtefactRarityAlt: "5 Estrelas",
        ArtefactRarityTitle: "5 Estrelas",
        ArtefactTitle: "Casca de Sonhos Opulentos",
        ArtefactSubStats: "DEF % Bônus de Dano Geo % Taxa ou Dano CRIT",
        ArtefactDescription: "(2) Peças: Aumenta o dano da Habilidade Elemental em 20%. (4) Peças: Aumenta o Dano da Habilidade Elemental em 25%. Além disso, quando o personagem não está no campo de batalha, o Dano da Habilidade Elemental aumenta em mais 25%. Este efeito será removido 2s após o personagem entrar no campo de batalha."
    },
    {
        ArtefactCardImage: "https://genshinbuild.com/images/Artefacts/Item_Golden_Song's_Variation.webp",
        ArtefactCardAlt: "Trupe Dourada",
        ArtefactCardTitle: "Trupe Dourada",
        ArtefactRarityImage: "https://genshinbuild.com/images/We/55star.webp",
        ArtefactRarityAlt: "5 Estrelas",
        ArtefactRarityTitle: "5 Estrelas",
        ArtefactTitle: "Trupe Dourada",
        ArtefactSubStats: "DEF % Bônus de Dano Geo % Taxa ou Dano CRIT",
        ArtefactDescription: "(2) Peças: Aumenta o dano da Habilidade Elemental em 20%. (4) Peças: Aumenta o Dano da Habilidade Elemental em 25%. Além disso, quando o personagem não está no campo de batalha, o Dano da Habilidade Elemental aumenta em mais 25%. Este efeito será removido 2s após o personagem entrar no campo de batalha."
    }
]

function Baizhu() {
    return<>
        <BaizhuHelmet/>
        {
            characterCardListData.map(function(item){
                return (
                <Characters
                PersElement={item.PersElement}
                EmblemImage={item.EmblemImage}
                EmblemAlt={item.EmblemAlt}
                EmblemTitle={item.EmblemTitle}
                CharacterPortraitImage={item.CharacterPortraitImage}
                CharacterPortraitAlt={item.CharacterPortraitAlt}
                CharacterPortraitTitle={item.CharacterPortraitTitle}
                PersBkg={item.PersBkg}
                WeaponCharacterImage={item.WeaponCharacterImage}
                WeaponCharacterAlt={item.WeaponCharacterAlt}
                WeaponCharacterTitle={item.WeaponCharacterTitle}
                CharacterName={item.CharacterName}
                FunctionElement={item.FunctionElement}
                Rarity={item.Rarity}
                />
            )
    })}
    {
            characterWeaponsListData.map(function(item){
                return (
                <WeaponCard
                WeaponCardImage={item.WeaponCardImage}
                WeaponCardAlt={item.WeaponCardAlt}
                WeaponCardTitle={item.WeaponCardTitle}
                WeaponRarityImage={item.WeaponRarityImage}
                WeaponRarityAlt={item.WeaponRarityAlt}
                WeaponRarityTitle={item.WeaponRarityTitle}
                WeaponTitle={item.WeaponTitle}
                WeaponSubStats={item.WeaponSubStats}
                WeaponDescription={item.WeaponDescription}
                />
            )
    })}
    {
    characterArtefactsListData.map(function(item){
        return (
        <ArtefactCard
        ArtefactCardImage={item.ArtefactCardImage}
        ArtefactCardAlt={item.ArtefactCardAlt}
        ArtefactCardTitle={item.ArtefactCardTitle}
        ArtefactRarityImage={item.ArtefactRarityImage}
        ArtefactRarityAlt={item.ArtefactRarityAlt}
        ArtefactRarityTitle={item.ArtefactRarityTitle}
        ArtefactTitle={item.ArtefactTitle}
        ArtefactSubStats={item.ArtefactSubStats}
        ArtefactDescription={item.ArtefactDescription}
        />
    )
})}
    </>
}

export default Baizhu