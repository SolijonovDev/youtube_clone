import React from 'react';
import s from './s.module.css';


const Search=()=>{
    return (
        <div className={s.search}>
            <div className={s.text}>
                <input type="text" placeholder="qidirish..."/>
            </div>
            <form action="">
                <label htmlFor="" >korilganlar <input type="radio" name="search"/></label>
                <label htmlFor="">xabarlar <input type="radio" name="search"/></label>
            </form>
        </div>
    )
}

export default Search;