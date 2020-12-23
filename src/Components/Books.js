import React, {useState, useEffect} from 'react';
import style from "../styles/books.module.css";
import axios from 'axios';

const api = axios.create({
    baseURL: `https://the-one-api.dev/v2`,
    headers: {
        'Authorization': "Bearer Kip7_BHxywW2xRf9wOdX"
    }
})

const Books = () => {
    const [books, setBooks] = useState([]);
    const [chapters, setChapter] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');

    useEffect(() => {
        getBooks();
        getChapter();
    },[])

    const updateSearch = e => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    const getBooks = async () => {
        try{
            let data = await api.get('/book')
                .then(({data}) => data);
                console.log(data);
                setBooks(data.docs);
        }
        catch(err) {
            console.log(err);
        }
    }
    const getChapter = async () => {
        try{
            let data = await api.get(`/chapter`)
                .then(({data}) => data);
                console.log(data.docs);
                setChapter(data.docs)
        }
        catch(err) {
            console.log(err);
        }
    }

    let idBook;

    return(
        <div className={style.hero}>
            <div className={style.listBlock}>
                <h1 className={style.listTitle}>List of Books:</h1>
                <ul className={style.list}>
                    {books.map(book => (
                        <li className={style.listItem} key={book.id}>{book.name}</li>
                    ))}
                </ul>
            </div>
            <div className={style.searchFormBlock}>
                <h1 className={style.listTitle}>Chapter search:</h1>
                <form className={style.searchForm} onSubmit={getSearch}>
                    <input placeholder="Enter chapter name..." className={style.searchBar} type="text" value={search} onChange={updateSearch}/>
                    <button className={style.searchButton} type="submit">Search</button>
                </form>
                <ul className={style.listChapters}>
                {
                    chapters.map(chapter => {
                        if (chapter.chapterName.includes(search)){
                            {books.map(book => {
                                if(book.id = chapter.book){
                                    idBook = book.name
                                }
                            })}
                            return(<li className={style.listItemChapters} key={chapter.id}>{chapter.chapterName} : {idBook}</li>)
                        }
                    })
                }
                </ul>
            </div>
        </div>
    )
}

export default Books;