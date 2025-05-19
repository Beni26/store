 import Stripe from 'stripe';
 
    // Ensure you have the STRIPE_SECRET_KEY environment variable set   
 
 if (!process.env.STRIPE_SECRET_KEY) {
   throw new Error('Missing STRIPE_SECRET_KEY environment variable');
    }

// Initialize Stripe with the secret key
 // and the API version
 const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
   apiVersion: '2025-04-30.basil',
 });
 export default stripe; 