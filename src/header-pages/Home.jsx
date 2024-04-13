import { Helmet } from "react-helmet-async"

function Home() {
    return <>
      <Helmet>
        <meta name="description" content="Saiba as melhores Builds, Times e TierList do seu personagem hoje em Genshin Impact. Fique por dentro de todas as atualizações do jogo." />
        <meta property="og:image" content="https://genshinbuild.com/images/FullQuality/Wish_Chiori.webp"/>
        <meta property="og:title" content="Genshin Impact | Builds, Times e TierList de Personagens" />
        <meta property="og:description" content="Saiba as melhores Builds, Times e TierList do seu personagem hoje em Genshin Impact. Fique por dentro de todas as atualizações do jogo." />
        <meta property="og:url" content="https://genshinbuild.com/" />
        <link rel="canonical" href="https://genshinbuild.com/" />
        <link rel="alternate" hreflang="pt-br" href="https://genshinbuild.com/" />
        <title>Genshin Impact | Builds, Times e TierList de Personagens</title>
      </Helmet>
      <h1>Home</h1>
    </>
  }
  
  export default Home
  