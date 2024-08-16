import { json, Link, useLoaderData } from "react-router-dom";
import Card from "../components/Card.jsx";
import { apiKey } from '../apiKey.js';

export default function Games() {
    const {games} = useLoaderData();

    return (
        <section id="games" className="max-w-[80%] rounded-lg">
            <h1 className="text-center mb-5 text-3xl font-bold text-slate-200">Ecco i nostri giochi</h1>
            <ul className="flex flex-wrap gap-5">
                {games.map(item => (
                    <Link to={`/games/${item.id}`} id="list-item" className="rounded-3xl bg-slate-900 overflow-hidden" key={item.id}>
                        <Card item={item} />
                    </Link>
                ))}
            </ul>
        </section>
    )
}

async function gamesFetch(){
    const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}&dates=2022-01-01,2023-06-30&ordering=-added`);

    if(!response.ok) {
        return json({message: 'Something went wrong!'}, {status: 404})
    }

    const gamesData = await response.json();
    return gamesData;
}

export async function loader() {
    const gamesData = await gamesFetch();
    return {games: gamesData.results};
}