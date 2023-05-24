import { useEffect, useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImageUrl: "./meme-test.jpg",
  });

  const [allMemes, setallMemes] = useState([]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setMeme((prevMemeText) => ({ ...prevMemeText, [name]: value }));
  }

  function getImage() {
    const randomImage = allMemes[Math.floor(Math.random() * allMemes.length)];
    const url = randomImage.url;
    setMeme((prevMemeImage) => ({ ...prevMemeImage, randomImageUrl: url }));
  }

  useEffect(() => {
    async function getMemes() {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      const memes = data.data.memes;
      setallMemes(memes);
    }
    getMemes();
  }, []);

  return (
    <main className="flex h-full items-center justify-between bg-gradient-to-b from-purple-700 to-purple-300">
      <div className="grid grid-cols-2 gap-5 mb-5 mt-3 ml-10 p-5 h-full">
        <input
          className="border-2 border-gray-300 indent-1.5 rounded-md"
          type="text"
          placeholder="top text"
          name="topText"
          onChange={handleInputChange}
          value={meme.topText}
        />
        <input
          className="border-2 border-gray-300 indent-1.5 rounded-md"
          type="text"
          placeholder="bottom text"
          name="bottomText"
          onChange={handleInputChange}
          value={meme.bottomText}
        />
        <button
          className="col-span-2 rounded-md bg-gradient-to-r from-purple-700 to-purple-900 text-white border-none cursor-pointer h-10"
          onClick={getImage}
        >
          Get an image
        </button>
      </div>
      <div className="relative m-4 p-5 w-[800px] aspect-w-[16] aspect-h-[9] h-[600px] items-center">
        <img
          className="w-full h-full rounded-md m-0 object-contain"
          src={meme.randomImageUrl}
          alt="Random-img"
        />
        <h3
          style={{
            textShadow:
              "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000, 2px 2px 5px #000",
          }}
          className="absolute top-0 w-80 text-center left-1/2 transform -translate-x-1/2 my-4 px-2 font-impact text-2xl uppercase text-white tracking-wider"
        >
          {meme.topText}
        </h3>
        <h3
          style={{
            textShadow:
              "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000, 2px 2px 5px #000",
          }}
          className="absolute bottom-0 w-80 text-center left-1/2 transform -translate-x-1/2 my-4 px-2 font-impact text-2xl uppercase text-white tracking-wider"
        >
          {meme.bottomText}
        </h3>
      </div>
    </main>
  );
}
