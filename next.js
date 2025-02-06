import Head from "next/head";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

export default function Home() {
    return (
        <div>
            <Head>
                <title>E-Commerce Store</title>
            </Head>
            <Navbar />
            <div className="grid grid-cols-3 gap-4 p-6">
                <ProductCard title="Product 1" price="$50" />
                <ProductCard title="Product 2" price="$80" />
                <ProductCard title="Product 3" price="$120" />
            </div>
        </div>
    );
}
