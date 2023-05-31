 function ImageForm(props){
    const[imageUrl, setImageURL] = useState("");
    const[imageCaption, setImageCaption] = useState("");
    console.log(props.imgURL)
    console.log(props.changeURL)

    return(
  
      <form>
        <input type="url" onChange={(e) => props.changeURL(e.target.value)} value={props.imgURL} />
        
        <input type="url" onChange={(e) => setImageUrl(e.target.value)} value={imageURL} />
        <textarea type="text" name="caption"  placeholder='Image Caption'/>
        <input
        type="file"
        id="upload-button"
      />
        <input type="button" value="" placeholder='Cancel'/>
        <input type="button"  placeholder="Add Image" />
        
      </form>
  
    );
   

};
export default ImageForm