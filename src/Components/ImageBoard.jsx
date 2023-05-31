import React, { useState } from 'react';

function ImageBoard(){
  const[image, setImage] = useState("")

    return(
      <div>
        <h1>Image Board</h1>
        <ImageForm imgURL={image} changeURL={setImage} />
        <ImageList img={image}  />
      </div>
    )
}

export default ImageBoard