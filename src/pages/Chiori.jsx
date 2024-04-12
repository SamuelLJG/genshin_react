import { ChioriHelmet } from "../components/Helmets"
import Characters from "../components/Characters"
import WeaponCard from "../components/WeaponCard"
import ArtefactCard from "../components/ArtefactCard"
import Weapons from "../components/Weapons.json"


const characterArtefactsListData = [
    {
        WeaponsArtefactsContainer: "weapons-artefacts-container-golden",
        ArtefactCardImage: "https://genshinbuild.com/images/Artefacts/Item_Bloom_Times.webp",
        ArtefactCardAlt: "Casca de Sonhos Opulentos",
        ArtefactCardTitle: "Casca de Sonhos Opulentos",
        ArtefactRarityImage: "https://genshinbuild.com/images/We/55star.webp",
        ArtefactRarityAlt: "5 Estrelas",
        ArtefactRarityTitle: "5 Estrelas",
        ArtefactTitle: "Casca de Sonhos Opulentos",
        ArtefactSubStats: "DEF % ",
        ArtefactSubStats2: "Bônus de Dano Geo",
        ArtefactSubStats3: "Taxa ou Dano CRIT",
        ArtefactDescription: "(2) Peças:  DEF +30%.",
        ArtefactDescription2: "(4) Peças: Um personagem com este conjunto de artefatos equipado obterá o efeito de Curiosidade nas seguintes condições: Quando estiver no campo de batalha, o personagem ganha 1 carga após atingir um adversário com um ataque Geo, isso pode ser desencadeado uma vez a cada 0.3s. Quando fora do campo de batalha, o personagem ganha 1 carga a cada 3s. A Curiosidade pode acumular em até 4 vezes, cada uma fornecendo 6% de DEF e um Bônus de Dano Geo de também 6%. Quando 6 segundos passam sem ganhar um acúmulo de Curiosidade, 1 acúmulo é perdido."
    },
    {
        WeaponsArtefactsContainer: "weapons-artefacts-container-golden",
        ArtefactCardImage: "https://genshinbuild.com/images/Artefacts/Item_Golden_Song's_Variation.webp",
        ArtefactCardAlt: "Trupe Dourada",
        ArtefactCardTitle: "Trupe Dourada",
        ArtefactRarityImage: "https://genshinbuild.com/images/We/55star.webp",
        ArtefactRarityAlt: "5 Estrelas",
        ArtefactRarityTitle: "5 Estrelas",
        ArtefactTitle: "Trupe Dourada",
        ArtefactSubStats: "DEF % ou Recarga de Energia",
        ArtefactSubStats2: "Bônus de Dano Geo",
        ArtefactSubStats3: "Taxa ou Dano CRIT",
        ArtefactDescription: "(2) Peças: Aumenta o dano da Habilidade Elemental em 20%.",
        ArtefactDescription2: "(4) Peças: Aumenta o Dano da Habilidade Elemental em 25%. Além disso, quando o personagem não está no campo de batalha, o Dano da Habilidade Elemental aumenta em mais 25%. Este efeito será removido 2s após o personagem entrar no campo de batalha."
    }
]

function Chiori() {
    return<>
    <ChioriHelmet/>
           
            <Characters
            characterbackground = "url(https://genshinbuild.com/images/FullQuality/Wish_Chiori.webp)"
            MainElement= "geo"
            EmblemImage= "https://genshinbuild.com/images/We/Emblema_Inazuma.webp"
            EmblemAlt= "Emblema de Inazuma"
            EmblemTitle= "Emblema de Inazuma"
            WeaponCharacterImage= "https://genshinbuild.com/images/AT/Espada.webp"
            WeaponCharacterAlt= "Espada"
            WeaponCharacterTitle= "Espada"
            CharacterName= "Chiori Build"
            CharacterFunction= "Sub-DPS"
            CharacterElement= "Geo"
            Rarity= "Raridade: 5"
            RarityBackground= "linear-gradient(135deg, #6b5453, #cea969)"
            BuildTitle = "Chiori Melhor Build (Sub-DPS)"
            BuildDescription = "A melhor build para a Chiori é a de Sub-DPS. Nessa build a Chiori utilizará sua Habilidade Elemental para causar a maior quantidade de dano fora de campo, estando presente apenas para usar seu Supremo e sua Habilidade Elemental, exercendo perfeitamente sua função de Off-Field."
            OtherWeapons = "Outras opções de armas para a Chiori são: Cortador de Jade Primordial, Espada Pútrida, Farpa e Haste de Cinábrio."
            BuildBestWeapon = "Chiori"
            BuildBestWeaponDescription = "A melhor para a Chiori é a Urakugo Rensai. Essa é a arma característica da Chiori e a melhor opção para ela. Ela aumenta bastante o dano dos Ataques Normais e da Habilidade Elemental, o que é ideal para a personagem, além de uma grande quantidade de Dano Crítico como Sub-Status."
            >
                
        {
            Weapons.map(function({WeaponsArtefactsContainer, WeaponsArtefactsOption, ContainerOption, WeaponCardImage, WeaponCardAlt, WeaponCardTitle, WeaponRarityImage, WeaponRarityAlt, WeaponRarityTitle, WeaponTitle, WeaponSubStats, WeaponDescription}){
                return (
                <WeaponCard
                WeaponsArtefactsContainer={WeaponsArtefactsContainer}
                WeaponsArtefactsOption={WeaponsArtefactsOption}
                ContainerOption={ContainerOption}
                WeaponCardImage={WeaponCardImage}
                WeaponCardAlt={WeaponCardAlt}
                WeaponCardTitle={WeaponCardTitle}
                WeaponRarityImage={WeaponRarityImage}
                WeaponRarityAlt={WeaponRarityAlt}
                WeaponRarityTitle={WeaponRarityTitle}
                WeaponTitle={WeaponTitle}
                WeaponSubStats={WeaponSubStats}
                WeaponDescription={WeaponDescription}
                >
                    
                </WeaponCard>
                )
            })
        }
        {
            characterArtefactsListData.map(function({WeaponsArtefactsContainer, ArtefactCardImage, ArtefactCardAlt, ArtefactCardTitle, ArtefactRarityImage, ArtefactRarityAlt, ArtefactRarityTitle, ArtefactTitle, ArtefactSubStats, ArtefactSubStats2, ArtefactSubStats3, ArtefactDescription, ArtefactDescription2}){
                return (
                <ArtefactCard
                WeaponsArtefactsContainer={WeaponsArtefactsContainer}
                ArtefactCardImage={ArtefactCardImage}
                ArtefactCardAlt={ArtefactCardAlt}
                ArtefactCardTitle={ArtefactCardTitle}
                ArtefactRarityImage={ArtefactRarityImage}
                ArtefactRarityAlt={ArtefactRarityAlt}
                ArtefactRarityTitle={ArtefactRarityTitle}
                ArtefactTitle={ArtefactTitle}
                ArtefactSubStats={ArtefactSubStats}
                ArtefactSubStats2={ArtefactSubStats2}
                ArtefactSubStats3={ArtefactSubStats3}
                ArtefactDescription={ArtefactDescription}
                ArtefactDescription2={ArtefactDescription2}
                />
                )
            })
        }
        </Characters>
        
    </>
}

export default Chiori