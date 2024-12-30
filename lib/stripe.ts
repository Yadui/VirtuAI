import Stripe from "stripe";

type DateString = "2022-11-15" | "2024-12-18";

export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: "2024-12-18.acacia", // Correctly specify the apiVersion as a property
  typescript: true,
});
