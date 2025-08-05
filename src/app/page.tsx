import {stripe} from "@/lib/stripe"
import Image from "next/image"
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Carousel} from "@/components/carousel";

export default async function Home() {

    const products = await stripe.products.list({
        expand: ["data.default_price"],
        limit: 5,
    });


    return (

        <div>
            <section className="rounded bg-neutral-100 py-8 sm:py-12 mx-auto max-w-7xl my-4">
                <div className="mx-auto grid grid-cols-2 items-center justify-center gap-8 px-8 sm:px-16">
                    <div className="max-w-md space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Welcome to the online shoppe</h2>
                        <p className="text-neutral-600">Discover the product you want with the best deal in town.</p>
                        <Button
                            asChild variant="default"
                            className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black ">
                            <Link
                                href="/Product"
                                className="inline-flex items-center justify-center rounded-full px-6 py-3"
                            >Browse all products
                            </Link>
                        </Button>
                    </div>
                    <Image
                        alt="banner image"
                        width={200}
                        height={200}
                        src={products.data[2].images[0]}
                        className="mx-auto"

                    />
                </div>
            </section>
            <section className="max-w-7xl mx-auto"><Carousel products={products.data}/></section>

        </div>
    );
}
