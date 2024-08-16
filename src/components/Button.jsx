export default function Button({children, openModal}) {
    return (
        <button onClick={openModal} className="text-xl font-bold text-red-800 p-2 px-4 rounded-lg bg-slate-900">{children}</button>
    )
}