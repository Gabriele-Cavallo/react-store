import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex items-center justify-between p-5 px-10 border-b-2 border-[greenyellow] bg-indigo-600 sticky">
            <img className="w-[100px] rounded-[50%]" src="https://plus.unsplash.com/premium_photo-1674374443275-20dae04975ac?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Logo" />
            <nav>
                <ul className="flex gap-5">
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'text-[greenyellow] active' : 'text-slate-400'} to="/" end>Home</NavLink> 
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'text-[greenyellow] active' : 'text-slate-400'} to="products">Products</NavLink> 
                    </li>
                </ul>
            </nav>
            <menu>
                <button>Registrati</button>
                <button>Login</button>
            </menu>
        </header>
    )
}