import { useEffect, useState } from "react";
import { apiKey } from "../apiKey";

export default function TopGames() {
    const [topGames, setTopGames] = useState([]);
    
    useEffect(() => {
        const date = new Date();
        const year = date.getFullYear().toString();
        const day = date.getDay().toString();
        const month = date.getMonth().toString();
        console.log('year' , year);
        console.log('day' , day);
        console.log('month' , month);

        fetch(`https://api.rawg.io/api/games?key=${apiKey}&dates=2024-01-01,${year}-0${month}-0${day}&ordering=-rating&page_size=6&page=1`)
        .then(response => response.json())
        .then(data => setTopGames(data.results))
    }, []);

    return (
        <section>
            <h2 className="text-center mb-5 text-3xl font-bold">I GIOCHI MIGLIORI SECONDO GLI UTENTI</h2>
            <ul className="text-center  grid grid-cols-3 max-w-[80%] gap-10">
                {topGames.map((game) => (
                    <li key={game.id} className="list-item rounded-3xl bg-slate-900 overflow-hidden">
                    <div className="img-wrapper relative">
                        <img className="w-full" src={game.background_image} alt={game.name} />
                        <small className="absolute bottom-[20px] bg-slate-900 rounded-md px-3 left-5">Punteggio: {game.rating}⭐</small>
                        <small className="absolute bottom-[20px] bg-slate-900 rounded-md px-3 right-5">Voti: {game.ratings_count}</small>
                    </div>
                    <div className="p-5 text-left">
                        <h2 className="mb-4 font-bold text-2xl">{game.name}</h2>
                        <div className="score"><strong>platforms</strong>: [platforms]</div>
                        <div className="title"><strong>release date</strong>: {game.released}</div>
                    </div>
                </li>
                ))}
            </ul>
        </section>
    )
}