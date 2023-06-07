import React, { useState } from "react";
import ImageForm from "./ImageForm";
import ImageList from "./ImageList";
const INITIAL_IMAGES = [
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416135_1280.jpg",
    caption: "Santorini",
  },
  {
    id: 2,
    src: "https://cdn.pixabay.com/photo/2020/02/11/12/07/portofino-4839356_1280.jpg",
    caption: "Portifino",
  },
  {
    id: 3,
    src: "https://cdn.pixabay.com/photo/2017/08/07/10/05/neuschwanstein-2602208_1280.jpg",
    caption: "Neuschwanstein, Castle,",
  },
];

export default function ImageBoard() {
  const [imageList, setImageList] = useState(INITIAL_IMAGES);
  

  return (
    <div>
      <h1>My Image Board</h1>
      <ImageForm listofImages={imageList} setImageList={imageList} />
      <ImageList imageList img={imageList} />
    </div>
  );
}
