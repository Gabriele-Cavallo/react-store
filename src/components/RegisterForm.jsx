import Input from "./Input";

export default function RegisterForm() {
    return (
        <div className="form">
            <Input input={'name'} />
            <Input input={'surname'} />
            <Input type="email" input={'email'} />
            <Input type="password" input={'password'} />
        </div>
    )
}