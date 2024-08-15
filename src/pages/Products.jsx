import { json, useLoaderData } from "react-router-dom";
import Card from "../components/Card";

export default function Products() {
    const {productsData} = useLoaderData();

    return (
        <section id="products" className="border-2 border-[red] m-5 rounded-lg">
            <h1>Ecco tuttu i nostri prodotti</h1>
            <ul className="flex flex-wrap gap-5">
                {productsData.map(item => (
                    <li key={item.id}>
                        <Card item={item} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

async function productsFetch(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if(!response.ok) {
        return json({message: 'Something went wrong!'}, {status: 404})
    }

    const productsData = await response.json();
    return productsData;
}

export async function loader() {
    const productsData = await productsFetch();
    return {productsData};
}