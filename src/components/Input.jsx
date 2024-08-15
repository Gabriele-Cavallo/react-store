export default function Input({input, ...props}) {
    return (
        <div className="input flex gap-2 flex-col mb-2">
            <label htmlFor={input}>{input.charAt(0).toUpperCase() + input.toLowerCase().slice(1)}</label>
            <input {...props} name={input} id={input} />
        </div>
    )
}