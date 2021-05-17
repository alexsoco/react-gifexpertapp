import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';



export const GifGrid = ({category}) => {     //lista de elementos doraemon..etc

    
    const { data:images, loading} = useFetchGifs(category);

    
    return (
        <>
        <h3 className='animate__animated animate__fadeIn'> {category}</h3>    {/*resultado del enter en el input*/} 

        {loading && <p className='animate__animated animate__flash'>Loading</p>}

        <div className='card-grid'>
            
            
                {
                    images.map(img=>(
                        <GifGridItem 
                        key={img.id}        //es necesario el key para cada child
                        {...img}        //para que no se tenga que poner en GifGridItem
                        />
                    ))
                }
            
        </div>
        </>
    )
}
