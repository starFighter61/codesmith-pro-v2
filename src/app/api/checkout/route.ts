import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

// Initialize Stripe (only if secret key exists)
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

// Price IDs from Stripe Dashboard
const PRICES = {
    monthly: process.env.STRIPE_PRICE_MONTHLY,
    yearly: process.env.STRIPE_PRICE_YEARLY,
};

export async function POST(req: NextRequest) {
    try {
        // Check if Stripe is configured
        if (!stripeSecretKey) {
            console.error("STRIPE_SECRET_KEY is not set");
            return NextResponse.json(
                { error: "Stripe is not configured. Please add STRIPE_SECRET_KEY to .env.local" },
                { status: 500 }
            );
        }

        const stripe = new Stripe(stripeSecretKey, {
            apiVersion: "2025-12-15.clover",
        });

        const body = await req.json();
        const { priceType = "monthly" } = body;

        // Get the price ID
        const priceId = PRICES[priceType as keyof typeof PRICES];

        if (!priceId) {
            console.error(`Price ID not found for ${priceType}. STRIPE_PRICE_MONTHLY: ${PRICES.monthly}, STRIPE_PRICE_YEARLY: ${PRICES.yearly}`);
            return NextResponse.json(
                { error: `Price ID for ${priceType} is not configured. Please add STRIPE_PRICE_${priceType.toUpperCase()} to .env.local` },
                { status: 500 }
            );
        }

        console.log(`Creating checkout session for price: ${priceId}`);

        // Create Checkout Session
        const checkoutSession = await stripe.checkout.sessions.create({
            mode: "subscription",
            payment_method_types: ["card"],
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            success_url: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/pricing?canceled=true`,
            metadata: {
                priceType,
            },
        });

        console.log(`Checkout session created: ${checkoutSession.id}`);

        return NextResponse.json({
            sessionId: checkoutSession.id,
            url: checkoutSession.url
        });
    } catch (error: any) {
        console.error("Stripe checkout error:", error.message);
        console.error("Full error:", error);
        return NextResponse.json(
            { error: error.message || "Failed to create checkout session" },
            { status: 500 }
        );
    }
}
