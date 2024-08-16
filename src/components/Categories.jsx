const genres = ['Action', 'Indie', 'Adventure', 'RPG', 'Strategy', 'Fighting', 'Shooter', 'Casual', 'Platformer', 'Arcade', 'Racing', 'Massively Multiplayer'];
export default function Categories({selectCategory, isSelected}){
    const cssClasses = 'text-red-800 cursor-pointer hover:bg-red-800 hover:text-slate-900 font-bold rounded-lg px-5 py-2';
    return (
        <ul className="grid grid-flow-col gap-4 place-items-center mb-5">
            {genres.map(genre => <li onClick={() => selectCategory(genre.toLowerCase().replace(/ /g, '-').replace('rpg', 'role-playing-games-rpg'))} className={genre.toLowerCase().replace(/ /g, '-') === isSelected ? `${cssClasses} bg-red-800 text-slate-900 text-2xl` : `${cssClasses} bg-slate-400`} key={genre}>{genre}</li>)}
        </ul>
    )
}