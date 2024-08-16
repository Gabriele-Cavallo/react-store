import psLogo from '../../public/ps.png';
import pcLogo from '../../public/pc.png';
import xboxLogo from '../../public/xbox.png';

export default function RatedGame({game}) {
    return (
        <li className="list-item rounded-3xl bg-slate-900 overflow-hidden">
            <div className="img-wrapper relative">
                <img className="w-full" src={game.background_image} alt={game.name} />
                <small className="absolute bottom-[20px] text-slate-200 bg-slate-900 rounded-md px-3 left-5">Punteggio: {game.rating}⭐</small>
                <small className="absolute bottom-[20px] text-slate-200 bg-slate-900 rounded-md px-3 right-5">Voti: {game.ratings_count}</small>
            </div>
            <div className="p-5 text-left">
                <h2 className="text-slate-200 mb-4 font-bold text-2xl">{game.name}</h2>
                <div className="score text-slate-200 flex gap-2"><strong>Platforms</strong>:    
                {game.platforms.map((platform) => 
                    (platform.platform.name === 'PlayStation 5' || platform.platform.name === 'PC' || platform.platform.name === 'Xbox One'||platform.platform.name === 'Xbox Series S/X') &&
                     <span key={platform.platform.id}>
                        {platform.platform.name === 'PlayStation 5' && <img className='tag-img ps' src={psLogo} alt={platform.platform.name} />}
                        {platform.platform.name === 'PC' && <img className='tag-img' src={pcLogo} alt={platform.platform.name} />}
                        {platform.platform.name === 'Xbox One' && <img className='tag-img' src={xboxLogo} alt={platform.platform.name} />}
                        {platform.platform.name === 'Xbox Series S/X' &&
                        <div className='flex'>
                            <img className='tag-img' src={xboxLogo} alt={platform.platform.name} />
                            <span className='text-slate-200 font-bold ms-1'>S/X</span>
                        </div>}
                    </span>)}
                </div>
                <div className="text-slate-200"><strong>Release date</strong>: {game.released}</div>
            </div>
        </li>
    )
}