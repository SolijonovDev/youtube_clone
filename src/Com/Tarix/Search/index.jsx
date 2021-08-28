import React from 'react';
import s from './s.module.scss';

import SearchIcon from '@material-ui/icons/Search';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import SettingsIcon from '@material-ui/icons/Settings';

const Search = () => {
    return (
        <div className={s.search}>
            <div className={s.text}>
                <SearchIcon />
                <input type="text" placeholder="qidirish..." />
            </div>
            <h2>Tarix turi</h2>
            <form action="">
                <label htmlFor="" >korilganlar <input checked type="radio" name="search" /></label>
                <label htmlFor="">xabarlar <input type="radio" name="search" /></label>
            </form>
           <div className={s.clear}>
           <div className={s.item}>
                <DeleteForeverIcon /> <span>Tomosha tarixi toalash</span>
            </div>
            <div className={s.item}>
                <PauseCircleOutlineIcon /><span>Tomosha tarixini pauza qilish</span>
            </div>
            <div className={s.item}>
            <SettingsIcon/> <span>Butun tarixni boshqarish</span>
            </div>
           </div>
        </div>
    )
}

export default Search;