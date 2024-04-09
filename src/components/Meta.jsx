import React from 'react';

export default function Meta(props){
    return <>
        <meta name={props.name} content={props.description} />
        <meta property={props.property} content={props.content} />
        <link rel={props.rel} href={props.href} hrefLang={props.hrefLang} />
    </>
}

//<meta name="description" content={"Maximize o potencial "+props.prefix+" personagem "+props.url+" em Genshin Impact com nossas builds especializadas! Confira as melhores opções de armas, artefatos e times."} />