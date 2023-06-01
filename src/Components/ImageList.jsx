import React, { useState } from 'react';


export const image = [{
    id: 0, 
    url: "https://pixabay.com/photos/owl-bird-animal-bird-of-prey-50267/",
    caption: "Owl bird of prey"
    
}, {
    id: 1, 
    url:  "https://cdn.pixabay.com/photo/2017/05/31/18/38/sea-2361247_1280.jpg",
    caption: "Sea turtle in the sea"
}, {
    id: 2, 
    url: "https://cdn.pixabay.com/photo/2014/10/01/10/44/animal-468228_1280.jpg",
    caption: "Baby Hedgehog"
}];
     
export default function ImageList({image}){
    const listImages = image.map(animal =>
        <li key={animal.id}>
            <img src="{getImageForm.ImageUrl)" alt={animal} />
            <p>
            <b>{image.url}</b>
            {image.caption}
            </p>
        </li>);
        
        <ul>
        {listImages}
        
        </ul>
       
      
  };
