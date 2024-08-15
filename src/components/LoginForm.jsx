import Input from "./Input";

export default function LoginForm() {
    return (
        <div className="form">
            <Input type="email" input={'email'} />
            <Input type="password" input={'password'} />
        </div>
    )
}