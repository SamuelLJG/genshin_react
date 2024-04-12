import { ChioriHelmet } from "../components/Helmets"
import Characters from "../components/Characters"
import WeaponCard from "../components/WeaponCard"
import ArtefactCard from "../components/ArtefactCard"
import Weapons from "../components/WeaponsData.json"
import Artefacts from "../components/ArtefactsData.json"

export default function Chiori() {
    return<>
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
        >
            <WeaponCard
            WeaponsArtefactsContainer={Weapons[0].WeaponsArtefactsContainer}
            WeaponsArtefactsOption="Melhor"
            ContainerOption="best"
            WeaponCardImage={Weapons[0].WeaponCardImage}
            WeaponCardAlt={Weapons[0].WeaponCardAlt}
            WeaponRarityImage={Weapons[0].WeaponRarityImage}
            WeaponRarityAlt={Weapons[0].WeaponRarityAlt}
            WeaponSubStats={Weapons[0].WeaponSubStats}
            WeaponDescription={Weapons[0].WeaponDescription}
            />
            <WeaponCard
            WeaponsArtefactsContainer={Weapons[1].WeaponsArtefactsContainer}
            WeaponsArtefactsOption="Opcional"
            ContainerOption="optional"
            WeaponCardImage={Weapons[1].WeaponCardImage}
            WeaponCardAlt={Weapons[1].WeaponCardAlt}
            WeaponRarityImage={Weapons[1].WeaponRarityImage}
            WeaponRarityAlt={Weapons[1].WeaponRarityAlt}
            WeaponSubStats={Weapons[1].WeaponSubStats}
            WeaponDescription={Weapons[1].WeaponDescription}
            />
            <ArtefactCard
            WeaponsArtefactsContainer={Artefacts[0].WeaponsArtefactsContainer}
            WeaponsArtefactsOption="Melhor"
            ContainerOption="best"
            ArtefactCardImage={Artefacts[0].ArtefactCardImage}
            ArtefactCardAlt={Artefacts[0].ArtefactCardAlt}
            ArtefactRarityImage={Artefacts[0].ArtefactRarityImage}
            ArtefactRarityAlt={Artefacts[0].ArtefactRarityAlt}
            ArtefactSubStats="DEF %"
            ArtefactSubStats2="Bônus de Dano Geo"
            ArtefactSubStats3="Taxa ou Dano CRIT"
            ArtefactDescription={Artefacts[0].ArtefactDescription}
            ArtefactDescription2={Artefacts[0].ArtefactDescription2}
            />
            <ArtefactCard
            WeaponsArtefactsContainer={Artefacts[1].WeaponsArtefactsContainer}
            WeaponsArtefactsOption="Opcional"
            ContainerOption="optional"
            ArtefactCardImage={Artefacts[1].ArtefactCardImage}
            ArtefactCardAlt={Artefacts[1].ArtefactCardAlt}
            ArtefactRarityImage={Artefacts[1].ArtefactRarityImage}
            ArtefactRarityAlt={Artefacts[1].ArtefactRarityAlt}
            ArtefactSubStats="DEF %"
            ArtefactSubStats2="Bônus de Dano Geo"
            ArtefactSubStats3="Taxa ou Dano CRIT"
            ArtefactDescription={Artefacts[1].ArtefactDescription}
            ArtefactDescription2={Artefacts[1].ArtefactDescription2}
            />
        </Characters>
    </>
}
