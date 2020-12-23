import React, {useState, useEffect} from 'react';
import style from "../styles/books.module.css";
import axios from 'axios';

const api = axios.create({
    baseURL: `https://the-one-api.dev/v2`,
    headers: {
        'Authorization': "Bearer Kip7_BHxywW2xRf9wOdX"
    }
})

const Films = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        getFilms();
    },[])

    const getFilms = async () => {
        try{
            let data = await api.get('/movie')
                .then(({data}) => data);
                console.log(data);
                setFilms(data.docs);
        }
        catch(err) {
            console.log(err);
        }
    }

    return(
        <div className={style.hero}>
            <div className={style.listBlock}>
                <h1 className={style.listTitle}>List of Movies:</h1>
                <ul className={style.list}>
                    {films.map(film => (
                        <li className={style.listItem} key={film.id}>{film.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Films;