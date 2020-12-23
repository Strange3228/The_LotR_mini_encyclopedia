import React from 'react';
import style from "../styles/home.module.css";

const Home = () => {

    return(
        <div className={style.hero}>
            <div className={style.title}>
                <h1 className={style.titleText}>Hello My Lord</h1>
            </div>
            <p className={style.subtitle}>I will show you everything that you asked.</p>
            <p className={style.additionalText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Maiores, veniam inventore. Harum at, voluptas maxime aperiam commodi dolorem cupiditate 
                laboriosam numquam nulla. Officiis iusto nobis quam ea deleniti perspiciatis sequi.</p>
        </div>
    )
}

export default Home;