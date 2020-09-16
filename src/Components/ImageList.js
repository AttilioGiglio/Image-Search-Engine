import React from 'react';
import Image from './Image'

const ImageList = ({images}) => {
    return (
        <div className='col-12p-5 row'>
            {images.map(imagen => 
                <Image 
                key={imagen.id}
                imagen={imagen}
                />
                )}
        </div>
    )
}

export default ImageList
