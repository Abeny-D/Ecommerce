"use client"
import React, {useEffect, useState} from 'react';
import {Card, CardContent, CardTitle} from "@/components/ui/card";
import Stripe from "stripe";
import Image from "next/image";


interface props {
    products: Stripe.Product[];
}

export const Carousel = ({products}: props) => {
    const [current, setCurrent] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % products.length)
        }, 2000)
        return () => {
            clearInterval(interval)
        }
    }, [products.length])

    const currentProduct = products[current];
    const price = currentProduct.default_price as Stripe.Price

    return (
        <div className="relative overflow-hidden rounded-lg shadow-md border-gray-300">
            <Card>{currentProduct.images && currentProduct.images[0] && (
                <div className="relative h-80 w-full">
                    <Image
                           alt={currentProduct.name}
                           src={currentProduct.images[0]}
                           layout="fill"
                           objectFit="cover"
                           className="transition-opacity duration-500  ease-in-out"
                    />
                </div>
            )}
                <CardContent className="absolute inset-0 flex flex-col items-center justify-center ">
                   <CardTitle className="text-3xl font-bold mb-2 text-black">{currentProduct.name}</CardTitle>
                    {price && price.unit_amount && <p className="text-xl ">
                        ${(price.unit_amount / 100).toFixed(2)}
                    </p>}
                </CardContent>

            </Card>
        </div>
    );
};

