import React, {useState, useEffect} from 'react';
import style from "../styles/characters.module.css";
import axios from 'axios';
import CharacterCard from './CharacterCard';

const api = axios.create({
    baseURL: `https://the-one-api.dev/v2`,
    headers: {
        'Authorization': "Bearer Kip7_BHxywW2xRf9wOdX"
    }
})

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [dropDownValue, setDropDownValue] = useState('any');
    const [dropDownValueQuery, setDropDownValueQuery] = useState('any');

    useEffect(() => {
        getCharacters();
        setSearch('');
    },[])

    const updateSearch = e => {
        setQuery(e.target.value);
    }
    const getSearch = e => {
        e.preventDefault();
        setSearch(query);
        setDropDownValue(dropDownValueQuery);
    }

    const getCharacters = async () => {
        try{
            let data = await api.get('/character')
                .then(({data}) => data);
                console.log(data);
                setCharacters(data.docs);
        }
        catch(err) {
            console.log(err);
        }
    }

    const handleChange = (e) => {
        setDropDownValueQuery(e.target.value)
    }

    return(
        <div className={style.charactersHero}>
            <div className={style.searchOptionWrapper}>
                <form className={style.filterForm} onSubmit={getSearch}>
                    <h1 className={style.formTitle}>Filter:</h1>
                    <label>Name:
                        <input className={style.formInput} placeholder="Enter character name..." className={style.searchBar} type="text" value={query} onChange={updateSearch}/>
                    </label>
                    <label>
                      Race:
                      <select value={dropDownValueQuery} onChange={handleChange}>
                        <option value="any">Any</option>
                        <option value="Human">Human</option>
                        <option value="Elf">Elf</option>
                        <option value="Orc">Orc</option>
                        <option value="Hobbit">Hobbit</option>
                        <option value="Dwarf">Dwarf</option>
                      </select>
                    </label>
                    <button className={style.searchButton} type="submit">Search</button>
                </form>
            </div>
            <div className={style.cards}>
                {characters.map(character => {
                    if ((character.name.includes(search)) && ((character.race.includes(dropDownValue)) || (dropDownValue === "any"))){
                        return(
                            <CharacterCard id={character._id} name={character.name} 
                                race={character.race} gender={character.gender} 
                                wikiUlr={character.wikiUlr} 
                            />
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Characters;