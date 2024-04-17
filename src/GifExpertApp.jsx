import { useState } from "react"
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories] =  useState([ 'One Punch' ]);

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return

        setCategories([newCategory, ...categories])
        // setCategories( cat => [...cat, 'Valoratn'])
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory 
                // setCategories={setCategories}
                onNewCategory={event => onAddCategory(event)}
            ></AddCategory>

            {/* Listado de Gif */}
            {/* <button onClick={ onAddCategory }>Agregar</button> */}
            {/* <button>Agregar</button> */}
          
            {/* Gif Item */}
            {
                categories.map( category => (
                    <GifGrid 
                        key={category} 
                        category={category} 
                    />
                ))
            }
            
        </>
    )
}


