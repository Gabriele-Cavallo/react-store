import { NavLink } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import { ModalContext } from "../store/context";

export default function Header() {
    const modalCtx = useContext(ModalContext);

    return (
        <header className="flex items-center justify-between p-5 px-10 border-b-2 border-slate-900 bg-slate-500 sticky">
            <img className="w-[100px] rounded-[50%]" src="https://plus.unsplash.com/premium_photo-1674374443275-20dae04975ac?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Logo" />
            <nav>
                <ul className="flex gap-5">
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'text-slate-700 active' : 'text-slate-200'} to="/" end>Home</NavLink> 
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'text-slate-900 active' : 'text-slate-200'} to="games" end>Games</NavLink> 
                    </li>
                </ul>
            </nav>
            <menu className="gap-5 flex">
                <Button openModal={() => modalCtx.toggleModalFn('registrati')}>Registrati</Button>
                <Button openModal={() => modalCtx.toggleModalFn('login')}>Login</Button>
            </menu>
        </header>
    )
}