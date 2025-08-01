// // src/lib/stripe.ts
// import Stripe from 'stripe';
//
// export const stripe = new Stripe(process.env.STRIPE_STRIPE_KEY!, {
//     apiVersion: '2025-07-30.basil',
// });
// lib/stripe.js (WORKING)

import Stripe from 'stripe'; // v16.9.0

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: '2024-06-20',
    appInfo: {
        name: 'store-name',
        url: process.env.PUBLIC_URL as string,
    },
});
