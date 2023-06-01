import React, { useState } from 'react';

export default function ImageForm(props) {
    const[imageURL, setImageURL] = useState("");
    const[imageCaption, setImageCaption] = useState("");


//  function ImageForm(props){
//     const[imageUrl, setImageURL] = useState("");
//     const[imageCaption, setImageCaption] = useState("");
//     console.log(props.imgURL)
//     console.log(props.changeURL)

    return(
    <>
      <form>
        {/* <input type="url" name="" id="" />
        <input type="url" onChange={(e) => props.changeURL(e.target.value)} value={props.imgURL} />
         */}
        <input type="url" onChange={(e) => props.setImageUrl(e.target.value)} value={props.imageURL} placeholder='Image URL'/>
        <textarea type="text" name="caption"  placeholder='Image Caption'/>
        
        <input type="button" value="" placeholder='Cancel'/>
        <input type="button"  placeholder="Add Image" />
        
      </form>
    </>
    );
   

};
