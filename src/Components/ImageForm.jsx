import React, { useState } from "react";

export default function ImageForm({ imageList, setImageList }) {
  const [imageUrl, setImageUrl] = useState("");
  const [imageCaption, setImageCaption] = useState("");

  console.log({ imageCaption });
  console.log({ imageUrl });
  //add caption and imageURL to listOfImages
  function handleImageSubmission(event) {
    event.preventDefault();
    console.log(imageList);
    const newImage = { imageUrl: imageUrl, imageCaption: imageCaption };
    setImageList([newImage, ...imageList]);
  }
  return (
    <>
      <form
        onSubmit={(event) => handleImageSubmission(event)}
        style={{ display: "flex" }}
      >
        <label>Image URL</label>
        <input
          type="url"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
        />
        <label>Image Caption</label>
        <input
          type="text"
          value={imageCaption}
          onChange={(event) => setImageCaption(event.target.value)}
          name=""
          id=""
        />

        <button>Cancel</button>
        <input type="submit" value="Submit" />

        {/* <input type="button" value="" placeholder='Cancel'/>
        <input type="button"  placeholder="Add Image" /> */}
      </form>
    </>
  );
}
