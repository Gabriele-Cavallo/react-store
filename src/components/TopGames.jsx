import { useEffect, useState } from "react";
import { apiKey } from "../apiKey";
import RatedGame from "./RatedGame";

export default function TopGames() {
    const [topGames, setTopGames] = useState([]);
    
    useEffect(() => {
        const date = new Date();
        const year = date.getFullYear().toString();
        let day = date.getDate().toString();
        let month = (date.getMonth() + 1).toString();

        if(day.length < 2){
            day = '0' + day;
        }
        if(month.length < 2){
            month = '0' + month;
        }

        fetch(`https://api.rawg.io/api/games?key=${apiKey}&dates=${year}-01-01,${year}-${month}-${day}&ordering=-rating&page_size=6&page=1`)
        .then(response => response.json())
        .then(data => setTopGames(data.results))
    }, []);

    return (
        <section>
            <h2 className="text-center text-slate-200 mb-10 text-3xl font-bold">I GIOCHI MIGLIORI SECONDO GLI UTENTI</h2>
            <ul className="text-center  grid grid-cols-3 max-w-[80%] gap-10">
                {topGames.map((game) => (
                    <RatedGame key={game.id} game={game} />
                ))}
            </ul>
        </section>
    )
}