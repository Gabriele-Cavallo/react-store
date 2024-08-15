export default function Card({item}) {
    return (
        <div className="border-2 border-indigo-600 border-2 rounded-md p-3">
            <h2>{item.name}</h2>
            <h3>{item.username}</h3>
            <p>{item.email}</p>
        </div>
    )
}