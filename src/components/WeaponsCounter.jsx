

function WeaponsCounter(weapons) {
    return <>
    {
        weapons.map( weapons => {
            return <div key={ weapons.id }>
                {weapons.WeaponsArtefactsContainer}
                {weapons.ArtefactsOption}
                {weapons.ContainerOption}
                {weapons.WeaponCardImage}
                {weapons.WeaponCardAlt}
                {weapons.WeaponCardTitle}
                {weapons.WeaponRarityImage}
                {weapons.WeaponRarityAlt}
                {weapons.WeaponRarityTitle}
                {weapons.WeaponTitle}
                {weapons.WeaponSubStats}
                {weapons.WeaponDescription}
                
            </div>
        })
    }
   </>
  }
  
  export default WeaponsCounter