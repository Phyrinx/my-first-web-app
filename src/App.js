import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "https://picsum.photos/v2/list";

const getImagesData = async () => {
  const imagesData = await fetch(API_URL).then((response) => response.json());
  console.log(imagesData);
  return imagesData;
};

function App() {
  const [imagesMetaData, setImagesMetaData] = useState([]);

  useEffect(() => {
    (async () => {
      const imagesData = await getImagesData();
      setImagesMetaData(imagesData);
    })();
  }, []);

  return (
    <div className="App">
      Arnold's World
      {imagesMetaData.map((imageMetaData) => (
        <img src={imageMetaData.download_url} width={300} height={300} />
      ))}
      {imagesMetaData.map((imageMetaData) => (
        <div>{imageMetaData.author}</div>
      ))}
    </div>
  );
}

export default App;
