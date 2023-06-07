import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ImageForm from "./Components/ImageBoard";
import ImageList from "./Components/ImageBoard";
import ImageBoard from "./Components/ImageBoard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ImageBoard />

      <ImageList />
      {/* <ImageForm listOfImages={imageList} changeList={setImageList} /> */}
    </>
  );
}

export default App;
