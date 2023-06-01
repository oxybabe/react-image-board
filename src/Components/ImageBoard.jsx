import React, { useState } from 'react';
import ImageForm from './ImageForm';
import ImageList from './ImageList';
import { image } from './ImageList';


export default function ImageBoard(){
  const[image, setImage] = useState("")

    return(
      <div>
        <h1>Image Board</h1>
        <ImageForm imgURL={image} changeURL={setImage} />
        {/* <ImageList img={image}  /> */}
      </div>
    )
}

