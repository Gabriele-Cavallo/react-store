import Categories from "./Categories";
import useEmblaCarousel from 'embla-carousel-react';
import { useRef, useEffect, useCallback, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { apiKey } from "../apiKey";
import { Link } from "react-router-dom";



export default function Carousel(){
    const embla = useRef();
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
    useEffect(() => {
    if (emblaApi) {
        console.log(emblaApi.slideNodes())
    }
    }, [emblaApi]);

    const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
        const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()  
    }, [emblaApi])

    const [categoryGame, setCategoryGame] = useState('action');
    const [categoryGames, setCategoryGames] = useState([]);
    
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

        fetch(`https://api.rawg.io/api/games?key=${apiKey}&dates=${year}-01-01,${year}-${month}-${day}&ordering=-rating&page_size=50&genres=${categoryGame}`)
        .then(response => response.json())
        .then(data => setCategoryGames(data.results))
    }, [categoryGame]);

    function handleCategorie(category){{
        setCategoryGame(category);
    }}

    return (
        <section id="carousel" className=" py-10 bg-slate-900">  
            <div className="max-w-[90%]">
                <h2 className="text-center font-bold mb-5 text-slate-200 text-3xl">Scegli la tua categoria preferita</h2>
                <Categories isSelected={categoryGame} selectCategory={handleCategorie} />
                <div className="embla" ref={emblaRef}>
                    <ul className="embla__container">
                        {categoryGames.map(game => 
                        <Link to={`games/${game.id}`} key={game.id}>
                            <img className="w-full h-[250px] rounded-lg border-4 border-slate-900" src={game.background_image} alt={game.name} />
                            <h2 className="text-slate-200 font-bold text-2xl text-center">{game.name}</h2>
                        </Link>)}
                    </ul>
                </div>
                <div className="flex justify-center gap-10 mx-5">
                    <button className="embla__prev bg-slate-400 rounded-[50%] text-red-800 p-4" onClick={scrollPrev}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                    <button className="embla__next bg-slate-400 rounded-[50%] text-red-800 p-4" onClick={scrollNext}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}





