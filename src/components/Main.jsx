import SignUpNewsletter from "./SignUpNewsletter";

export default function Main({children}) {
    return(
        <>
        <SignUpNewsletter />
        <main>
        </main>
        {children}
        </>
    )
}