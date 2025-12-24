import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-12-15.clover",
});

export async function POST(req: NextRequest) {
    try {
        // For now, redirect to Stripe's billing portal
        // In production, you'd look up the customer ID from your database

        const portalSession = await stripe.billingPortal.sessions.create({
            customer: process.env.STRIPE_TEST_CUSTOMER_ID || "cus_placeholder",
            return_url: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/dashboard`,
        });

        return NextResponse.json({ url: portalSession.url });
    } catch (error: any) {
        console.error("Portal session error:", error.message);

        // If customer doesn't exist, just redirect to pricing
        return NextResponse.json({
            url: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/pricing`,
            message: "No active subscription found"
        });
    }
}
