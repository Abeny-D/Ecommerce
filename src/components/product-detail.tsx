"use client"
import Stripe from "stripe";
import Image from "next/image";
import React from "react";

interface Props {

    product: Stripe.Product;

}


 export const ProductDetail = ({product}:Props)=> {

     const price = product.default_price as Stripe.Price | null;

    return ( <div>
        <div>
            <Image
                alt={product.name}
                src={product.images[0]}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-500 ease-in-out rounded-t-2xl"
            />
        </div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{price?.unit_amount}</p>
        </div>
    )
 };
