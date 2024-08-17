import { json,Link, useLoaderData } from "react-router-dom";
import Button from "../components/Button";
import { apiKey } from "../apiKey";
import { useState } from "react";

export default function GameDetails() {
    const {gameData} = useLoaderData();
    const [selectedImage, setSelectedImage] = useState(gameData.background_image);

    function handleSelectedImage(image) {
        if(selectedImage !== image && selectedImage === gameData.background_image) {
            setSelectedImage(gameData.background_image_additional)
        }else if (selectedImage !== image){
            setSelectedImage(gameData.background_image)
        }
    }

    return (
        <section id="game-details" className="p-10">
            <div className="text-center gap-5 items-center">
                <h1 className="text-3xl mb-5 font-bold text-red-800">{gameData.name}</h1>
                <div className="mx-[auto] mt-10 grid grid-flow-col">
                    <img className="w-[80%] grid place-items-center" src={selectedImage} alt={gameData.name} />
                    <div className=" w-[80%]">
                        <h2 className="text-center font-bold text-3xl text-slate-200 uppercase mb-5">Screenshots</h2>
                        <div className="grid grid-cols-2 gap-10 mx-[auto]">
                            {gameData.background_image && <img  onClick={() => handleSelectedImage(gameData.background_image)} className="cursor-zoom-in" src={gameData.background_image} alt={gameData.name} />}
                            {gameData.background_image_additional && <img  onClick={() => handleSelectedImage(gameData.background_image_additional)} className="cursor-zoom-in" src={gameData.background_image_additional} alt={gameData.name} />}
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 justify-center my-5">
                    {gameData.parent_platforms.map((platform) => (<span className="text-red-800 bg-slate-900 font-bold rounded-lg px-2" key={platform.platform.id}>{platform.platform.name}</span>))}
                </div>
                <p className="px-72">{gameData.description_raw}</p>
            </div>
            <div className="flex justify-center gap-10 my-10">
                <Link to="..">
                    <Button>Home</Button>
                </Link>
                <Link to="../games">
                    <Button>Back</Button>
                </Link>
            </div>
        </section>
    )
}

async function gameFetch(gameId){
    const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`);

    if(!response.ok){
        return json('Something went wrong');
    }

    const gameData = await response.json();
    return gameData;
}

export async function loader({params}) {
    const gameId = params.gameId;
    const gameData = await gameFetch(gameId);
    return {gameData};
}