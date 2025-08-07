import Stripe from "stripe";
import Link from "next/link";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import {Button} from "@/components/ui/button";


interface props {
    product: Stripe.Product;
}

export function ProductCard({product}: props) {
    const price = product.default_price as Stripe.Price


    return (
        <Link href={`/products/${product.id}`} className="block h-full">
            <Card className="group hover:shadow-2xl transition duration-300 py-0 h-full flex ">
                {product.images && product.images[0] && (
                    <div className="relative h-80 w-full">
                        <Image
                            alt={product.name}
                            src={product.images[0]}
                            layout="fill"
                            objectFit="cover"
                            className="transition-opacity duration-500 ease-in-out rounded-t-2xl"
                        />
                    </div>
                )}
                <CardHeader className="py-2">
                    <CardTitle className="text-xl font-bold text-gray-800">{product.name}</CardTitle>
                    <CardContent className="p-4 flex flex-grow flex-col justify-between">
                        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                        {price && price.unit_amount && <p className="text-lg font-semibold text-gray-900 ">
                            ${(price.unit_amount / 100).toFixed(2)}
                        </p>}
                        <Button className="mt-4 bg-black text-white">Detail</Button>
                    </CardContent>

                </CardHeader>
            </Card>

        </Link>
    )
}
