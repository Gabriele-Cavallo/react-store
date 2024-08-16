import { createPortal } from "react-dom";
import Button from "./Button";
import { useEffect, useRef } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

export default function Modal({open, onClose, tab}) {
    const dialog = useRef();

    useEffect(() => {
        if(open) {
            dialog.current.showModal();
        }else {
            dialog.current.close();
        }
    }, [open])

    return createPortal(
        <dialog onClose={onClose} ref={dialog} className="backdrop:bg-slate-600 bg-slate-700 backdrop:opacity-50 modal border-2 border-slate-900 rounded-md py-5 px-10">
            <form className="mt-5" method="dialog">
                {tab === 'registrati' && <RegisterForm />}
                {tab === 'login' && <LoginForm />}
                <div className="mt-4 flex flex-row-reverse">
                    <Button>Close</Button>
                </div>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
}