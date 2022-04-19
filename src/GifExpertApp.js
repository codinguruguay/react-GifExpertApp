import { useState } from "react";
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Manchester City'])

    return <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr></hr>
        
            {categories.map(category => {
                return <GifGrid key={ category } category={ category }/>
            })}
        
    </>

};
