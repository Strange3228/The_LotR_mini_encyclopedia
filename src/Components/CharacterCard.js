import React from 'react';
import style from "../styles/characters.module.css";

const CharacterCard = ({id, name, race, gender, wikiUrl}) => {

    //CTRL + V IT FOR COMPLETE PROJECT ITS WAS DONE FOR NOT TO USE UNSTOPPABLE GET

    //getCharacters();

    /*{characters.map(character => (
        <div className={style.card} key={character._id}>
            <h1 className={style.name}>{character.name}</h1>
            <h2 className={style.race}>{character.race}</h2>
            <h2 className={style.gender}>{character.gender}</h2>
            <button className={style.AddInfoBtn}><a href={character.wikiUrl}>Learn more...</a></button>
        </div>
    ))}*/

    return(
        <div className={style.card} key={id}>
            <h1 className={style.name}>{name}</h1>
            <h2 className={style.race}>{race}</h2>
            <h2 className={style.gender}>{gender}</h2>
            <button className={style.AddInfoBtn}><a href={wikiUrl}>Learn more...</a></button>
        </div>
    )
}

export default CharacterCard;