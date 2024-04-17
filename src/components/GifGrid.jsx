// import { useEffect, useState } from "react"
import { GifItem } from "./GifItem";
import { useFetchGifts } from "../hooks/useFetchGifts";
// import { getGifs } from "../helpers/getGifs"

export function GifGrid({category}) {

    // Custom Hook
    const {images, isLoading} = useFetchGifts(category);

    // console.log({i});

    // const [images, setImages] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }
 
    // useEffect( () => {
    //     // getGifs(category)
    //     getImages();
    // }, [])


    return (
        <>
            <h3>{category}</h3> 

            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifItem 
                            key={image.id} 
                            {...image} 
                        />
                    ))
                }
            </div>
        </>
    )
}

