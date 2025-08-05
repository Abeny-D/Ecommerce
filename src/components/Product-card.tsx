import Stripe from "stripe";
import Link from "next/link";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import React from "react";


interface props {
    product: Stripe.Product;
}

export function ProductCard({product}: props) {
    const price = product.default_price as Stripe.Price


    return (
        <Link href={`/products/${product.id}`}>
            <Card>
                {product.images && product.images[0] && (
                    <div className="relative h-80 w-full">
                        <Image
                            alt={product.name}
                            src={product.images[0]}
                            layout="fill"
                            objectFit="cover"
                            className="transition-opacity duration-500  ease-in-out"
                        />
                    </div>
                )}
                <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardContent>{price && price.unit_amount && <p className="text-xl ">
                        ${(price.unit_amount / 100).toFixed(2)}
                    </p>}
                        {product.description}</CardContent>
                </CardHeader>
            </Card>

        </Link>
    )
}
