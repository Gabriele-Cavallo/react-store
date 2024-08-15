import { createPortal } from "react-dom";
import Button from "./Button";
import { useEffect, useRef } from "react";

export default function Modal({children, open, onClose}) {
    const dialog = useRef();

    useEffect(() => {
        if(open) {
            dialog.current.showModal();
        }else {
            dialog.current.close();
        }
    }, [open])

    return createPortal(
        <dialog onClose={onClose} ref={dialog} className="backdrop:bg-indigo-600 backdrop:opacity-50 modal border-2 border-orange-600 rounded-md py-5 px-10">
            <h1>Ciao sono una modale</h1>
            {children}
            <form className="flex justify-end mt-5" method="dialog">
                <Button>Close</Button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
}