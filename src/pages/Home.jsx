import Carousel from "../components/Carousel";
import Main from "../components/Main";
import TopGames from "../components/TopGames";

export default function Home() {
    return (
        <>
            <Main>
                <TopGames />
                <Carousel />
            </Main>
        </>
    )
}