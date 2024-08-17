import { createPortal } from "react-dom";
import Button from "./Button";
import { useContext, useEffect, useRef } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { ModalContext } from "../store/context";

export default function Modal() {
    const modalCtx = useContext(ModalContext);

    const dialog = useRef();

    useEffect(() => {
        if(modalCtx.tabSelectedCtx.toggle) {
            dialog.current.showModal();
        }else {
            dialog.current.close();
        }
    }, [modalCtx.tabSelectedCtx.toggle])

    return createPortal(
        <dialog onClose={modalCtx.toggleModalFn} ref={dialog} className="backdrop:bg-slate-600 bg-slate-700 backdrop:opacity-50 modal border-2 border-slate-900 rounded-md py-5 px-10">
            <form className="mt-5" method="dialog">
                {modalCtx.tabSelectedCtx.tab === 'registrati' && <RegisterForm />}
                {modalCtx.tabSelectedCtx.tab === 'login' && <LoginForm />}
                {modalCtx.tabSelectedCtx.tab === 'newsletter' && <p className="text-2xl text-slate-200 font-bold">Complimenti, ti sei iscritto alla nostra newsletter!!!</p>}
                {modalCtx.tabSelectedCtx.tab === 'error' && <p className="text-2xl text-slate-200 font-bold">I valori inseriti non sono validi!!!</p>}
                <div className="mt-4 flex flex-row-reverse">
                    <Button>Close</Button>
                </div>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
}