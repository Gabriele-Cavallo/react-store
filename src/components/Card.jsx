import { Link } from "react-router-dom";

export default function Card({item}) {
    return (
        <div>
            <img className="border-2 border-orange-600" src={item.background_image} alt={item.name} />
            <h2 className="text-center font-bold text-xl text-orange-600">{item.name}</h2>
            <p className="text-orange-600"><strong>Score</strong>: {item.rating}</p>
            <p className="text-orange-600"><strong>Release date</strong>: {item.released}</p>
            <div className="flex flex-wrap gap-2 mt-2">
                {item.tags.map((tag) => (tag.language === 'eng' && <span className="text-orange-600 bg-[greenyellow] font-bold rounded-lg px-2" key={tag.id}>{tag.name}</span>) )}
            </div>
        </div>
    )
}