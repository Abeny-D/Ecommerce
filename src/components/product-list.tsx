import Stripe from "stripe";
import {ProductCard} from "@/components/Product-card";


interface props {

    products: Stripe.Product[];
}

export function ProductList({products}: props) {


    return (
        <div>
           <div>
               <input type="text" placeholder="search products" />
           </div>
            <ul>
                {products.map((product , key) => {

                    return <li key={key}>
                    <ProductCard product={product}></ProductCard>
                    </li>
                })}
            </ul>
        </div>
    )
}
