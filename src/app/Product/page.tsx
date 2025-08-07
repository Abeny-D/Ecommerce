import {stripe} from "@/lib/stripe";
import {ProductList} from "@/components/product-list";

export default async function ProductPage(){

    const products = await stripe.products.list({
        expand: ["data.default_price"],
    });

    return (
        <div className="pb-8 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold leading-none tracking-tight text-foreground text-center mb-8 p-4" >Products list</h1>
            <ProductList products={products.data}></ProductList>
        </div>
    )
}
