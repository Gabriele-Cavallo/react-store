import Button from "./Button";

export default function SignUpNewsletter() {
    return (
        <>
            <div className="flex gap-5 py-5 justify-center px-10 items-center">
                <div className="text-2xl">Iscriviti alla newsletter</div>
                <div className="">
                    <label htmlFor="newsletter"></label>
                    <input className="p-3 border-2 border-slate-400 w-[500px] rounded-2xl" type="email" id="newsletter" name="newsletter" placeholder="Inserisci la tua mail qui" />
                </div>
                <Button>Iscriviti</Button>
            </div>
        </>
    )
}