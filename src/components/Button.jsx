export default function Button({children, openModal}) {
    return (
        <button onClick={openModal} className="text-xl font-bold text-orange-600 p-2 px-4 rounded-lg bg-[greenyellow]">{children}</button>
    )
}