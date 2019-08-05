import React from 'react'

export default function Hero({children, hero}) {
    return   <header className={hero}>{children}</header> // hero is a components but children will help for to change other picture 
    }
    

    Hero.defaultProps = {
        hero : "defaultHero"
    
};
