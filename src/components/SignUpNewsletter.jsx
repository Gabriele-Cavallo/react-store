import { useContext } from "react";
import Button from "./Button";
import { ModalContext } from "../store/context";

export default function SignUpNewsletter() {
    const modalCtx = useContext(ModalContext);

    return (
        <>
            <div className="flex gap-5 py-5 justify-center px-10 items-center">
                <div className="text-2xl">Iscriviti alla newsletter</div>
                <div>
                    <label htmlFor="newsletter"></label>
                    <input value={modalCtx.email} onChange={(event) => modalCtx.emailInput(event.target.value)} className="p-3 border-2 border-slate-400 w-[500px] rounded-2xl" type="email" id="newsletter" name="newsletter" placeholder="Inserisci la tua mail qui" />
                </div>
                {modalCtx.email && <Button openModal={!modalCtx.email.includes('@') || !modalCtx.email.includes('.it') && !modalCtx.email.includes('.com') ? () => modalCtx.toggleModalFn('error') : () => modalCtx.toggleModalFn('newsletter')}>Iscriviti</Button>}
            </div>
        </>
    )
}