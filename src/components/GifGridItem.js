import React from 'react'

export const GifGridItem = ({title,url}) => {       //muestra cada gif con su título


    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title} />
            <p>{title}</p>        
        </div>
    )
}
