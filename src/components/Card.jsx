import { Link } from "react-router-dom";

export default function Card({item}) {
    return (
        <li>
            <img src={item.background_image} alt={item.name} />
            <div className="p-4">
                <div>
                    <h2 className="text-center font-bold text-xl text-slate-200">{item.name}</h2>
                    <p className="text-slate-200"><strong>Score</strong>: {item.rating}</p>
                    <p className="text-slate-200"><strong>Release date</strong>: {item.released}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                    {item.tags.map((tag) => (tag.language === 'eng' && <span className="text-slate-200 bg-slate-500 font-bold rounded-lg px-2" key={tag.id}>{tag.name}</span>) )}
                </div>
            </div>
        </li>
    )
}