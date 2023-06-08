import React, { useState } from "react";

export default function ImageForm({ imageItems, setImageItems }) {
  const [url, setUrl] = useState("");
  const [caption, setCaption] = useState("");

  console.log({ caption });
  console.log({ url });
  //add caption and imageURL to listOfImages
  function handleImageSubmission(event) {
    event.preventDefault();
    console.log(imageItems);
    const newImage = { url: url, caption: caption };
    setImageItems([newImage, ...imageItems]);
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
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
        <label>Image Caption</label>
        <input
          type="text"
          value={caption}
          onChange={(event) => setCaption(event.target.value)}
          name=""
          id=""
        />

        <button>Cancel</button>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
