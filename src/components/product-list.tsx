"use client"
import Stripe from "stripe";
import {ProductCard} from "@/components/Product-card";
import {useState} from "react";


interface props {

    products: Stripe.Product[];
}

export function ProductList({products}: props) {

    const [searchText, setSearchText] = useState<string>("");
    // const [testIfMatch, setTestIfMatch] = useState<string>("");

    const filterdProducts = products.filter((product) => {

        const ChangeToLowerCaseSearch = searchText.toLowerCase();
        const searchName = product.name.toLowerCase().includes(ChangeToLowerCaseSearch);
        const searchDescription = product.description ? product.description.toLowerCase().includes(ChangeToLowerCaseSearch) : false;



       return searchName || searchDescription;

    })

    return (
        <div>
            <div className="mb-6 flex justify-center">
                <input type="text" placeholder="search products"
                       value={searchText}
                       onChange={(e) => setSearchText(e.target.value)}
                       className="w-full max-w-md rounded border border-gray-300 px-4 py-2 focus:outline-none "/>
            </div>
            <ul className="mt-6 grid grid-cols-1 gap4 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterdProducts.map((product, key) => {

                    return <li key={key}>
                        <ProductCard product={product}></ProductCard>
                    </li>
                })}
            </ul>
        </div>
    )
}
