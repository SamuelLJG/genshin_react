import { ChioriHelmet } from "../components/Helmets"
import Characters from "../components/Characters"
import WeaponCard from "../components/WeaponCard"
import ArtefactCard from "../components/ArtefactCard"
import TeamsCard from "../components/TeamsCard"
import ArtefactsData from "../database/ArtefactsData.json"
import WeaponsData from "../database/WeaponsData.json"
import CharactersData from "../database/CharactersData.json"

const weaponsSelector = [WeaponsData[0],WeaponsData[1]]

const artefactsSelector = [ArtefactsData[0],ArtefactsData[1]]

const charactersTeamSelector = [CharactersData[0],CharactersData[1],CharactersData[2],CharactersData[3]]
const charactersTeamSelector2 = [CharactersData[3],CharactersData[2],CharactersData[1],CharactersData[0]]
const charactersTeamSelector3 = [CharactersData[1],CharactersData[3],CharactersData[0],CharactersData[2]]


export default function Chiori() {
    return <>
        <ChioriHelmet />
        <Characters
        characterbackground = "url(https://genshinbuild.com/images/FullQuality/Wish_Chiori.webp)"
        MainElement= "geo"
        EmblemImage= "https://genshinbuild.com/images/We/Emblema_Inazuma.webp"
        EmblemAlt= "Emblema de Inazuma"
        WeaponCharacterImage= "https://genshinbuild.com/images/AT/Espada.webp"
        WeaponCharacterAlt= "Espada"
        CharacterName= "Chiori"
        CharacterFunction= "Sub-DPS"
        CharacterElement= "Geo"
        Rarity= "Raridade: 5"
        RarityBackground= "linear-gradient(135deg, #6b5453, #cea969)"
        BuildTitle = "Chiori Melhor Build (Sub-DPS)"
        BuildDescription = "A melhor build para a Chiori é a de Sub-DPS. Nessa build a Chiori utilizará sua Habilidade Elemental para causar a maior quantidade de dano fora de campo, estando presente apenas para usar seu Supremo e sua Habilidade Elemental, exercendo perfeitamente sua função de Off-Field."
        BestWeaponDescription = "A melhor para a Chiori é a Urakugo Rensai. Essa é a arma característica da Chiori e a melhor opção para ela. Ela aumenta bastante o dano dos Ataques Normais e da Habilidade Elemental, o que é ideal para a personagem, além de uma grande quantidade de Dano Crítico como Sub-Status."
        OtherWeapons = "Outras opções de armas para a Chiori são: Cortador de Jade Primordial, Espada Pútrida, Farpa e Haste de Cinábrio."
        BestArtefactDescription = "O melhor conjunto de artefatos para a Chiori é o da Casca de Sonhos Opulentos. Ele aumenta muito a Defesa e o Bônus de Dano Geo. Entre os outros conjuntos de artefatos esse é o que tem o maior dano a para Chiori até o momento. A Trupe Dourada também é uma outra boa opção para aumentar o dano da Habilidade Elemental da Chiori."
        ArtefactSubAttribute="Como você precisará causar o máximo de dano possível, é importante buildar Dano Crítico e Taxa Crítica. Você também pode buildar DEF% e ATQ%, mas esses são de segunda prioridade."
        TalentPriority="O Talento da Chiori que você deve priorizar é a Habilidade Elemental, por ser a Skill que ela mais usará fora de campo. O Supremo é de segunda prioridade e o Ataque Básico não é necessário."
        TeamsDescription="Os melhores times para o Alhaitham normalmente são aqueles contêm personagens do tipo Hydro e Electro, para que junto ao elemento Dendro do personagen, possam ser desencadeadas reações de Aceleração e SuperFlorescimento. Portanto, você pode escolher os companheiros do Alhaitham baseando-se nesses elementos."
        TeamsTitle={["de Vaporização #1","de Vaporização #2","de Vaporização #3"]}
        TeamsCharacterDescription={[
        "Xiao funcionará bem com a Xianyun para curar e reduzir as necessidades de energia de ambos. Furina fornecerá buff e dano adicional para todo o time. Com Xianyun, o dano da Furina é aumentado e os acúmulos podem ser obtidos mais rapidamente. Faruzan fortalecerá Xiao e fornecer energia em constelações superiores.",

        "Furina fornecerá buff, dano adicional e irá aplicar hydro. Diluc será o Main DPS, estando a maior parte do tempo em campo causando dano com Ataques Imersivos e gerando reações de vaporização. Bennett irá fornecer bastante dano para toda a equipe e cua. Xianyun irá curar juntamente com Bennett e aumentar significativamente o dano do Diluc.",
            
        "Hu Tao será a Main DPS, causando dano com Ataques Imersivos e reações de vaporização com a ajuda da Furina e Xingqiu. Furina fornecerá buff e dano adicional para todo o time. Xingqiu irá causar dano Off-Field e aplicar hydro. Xianyun irá fornecer cura e aumentar significativamente no dano da Hu Tao."
        ]}
        >
        {
            weaponsSelector.map(function (item,id)  {
                return (
                    <WeaponCard
                    key={id}
                    WeaponsArtefactsContainer={item.WeaponsArtefactsContainer}
                    WeaponCardImage={item.WeaponCardImage}
                    WeaponCardAlt={item.WeaponCardAlt}
                    WeaponRarityImage={item.WeaponRarityImage}
                    WeaponRarityAlt={item.WeaponRarityAlt}
                    WeaponSubStats={item.WeaponSubStats}
                    WeaponDescription={item.WeaponDescription}
                    />
                )
             })
        }
        {
            artefactsSelector.map(function (item,id)  {
                return (
                    <ArtefactCard
                    key={id}
                    WeaponsArtefactsContainer={item.WeaponsArtefactsContainer}
                    ArtefactCardImage={item.ArtefactCardImage}
                    ArtefactCardAlt={item.ArtefactCardAlt}
                    ArtefactRarityImage={item.ArtefactRarityImage}
                    ArtefactRarityAlt={item.ArtefactRarityAlt}
                    ArtefactSubStats={["DEF %", "Bônus de Dano Geo", "Taxa ou Dano CRIT"]}
                    ArtefactDescription={item.ArtefactDescription}
                    />
                )
            })
        }
        {
            charactersTeamSelector.map(function (item,id)  {
                return (
                    <TeamsCard
                    key={id}
                    id={item.id}
                    CharacterTeamName={item.CharacterTeamName}
                    CharacterTeamNameImage={item.CharacterTeamNameImage}
                    CharacterUrl={item.CharacterUrl}
                    CharacterTeamElement={item.CharacterTeamElement}
                    CF={['Main DPS','Sub-DPS','Sub-DPS','Suporte']}
                    />
                )
            })
        }
        {
            charactersTeamSelector2.map(function (item,id)  {
                return (
                    <TeamsCard
                    key={id}
                    id={item.id}
                    CharacterTeamName={item.CharacterTeamName}
                    CharacterTeamNameImage={item.CharacterTeamNameImage}
                    CharacterUrl={item.CharacterUrl}
                    CharacterTeamElement={item.CharacterTeamElement}
                    CF={['Main DPS','Sub-DPS','Sub-DPS','Suporte']}
                    />
                )
            })
        }
        {
            charactersTeamSelector3.map(function (item,id)  {
                return (
                    <TeamsCard
                    key={id}
                    id={item.id}
                    CharacterTeamName={item.CharacterTeamName}
                    CharacterTeamNameImage={item.CharacterTeamNameImage}
                    CharacterUrl={item.CharacterUrl}
                    CharacterTeamElement={item.CharacterTeamElement}
                    CF={['Main DPS','Sub-DPS','Sub-DPS','Suporte']}
                    />
                )
            })
        }
        </Characters>
    </>
}
