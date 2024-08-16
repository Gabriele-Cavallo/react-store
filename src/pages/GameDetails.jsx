import { json,Link, useLoaderData } from "react-router-dom";
import Button from "../components/Button";
import { apiKey } from "../apiKey";

export default function GameDetails() {
    const {gameData} = useLoaderData();
    return (
        <section id="game-details" className="p-10">
            <div className="text-center gap-5 items-center">
                <h1 className="text-3xl mb-5 font-bold text-red-800">{gameData.name}</h1>
                <img className="w-1/2" src={gameData.background_image} alt={gameData.name} />
                <div className="flex gap-5 justify-center my-5">
                    {gameData.parent_platforms.map((platform) => (<span className="text-red-800 bg-slate-900 font-bold rounded-lg px-2" key={platform.platform.id}>{platform.platform.name}</span>))}
                </div>
                <p className="px-72">{gameData.description_raw}</p>
            </div>
            <div className="flex justify-end">
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