import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_API_KEY as string, {
    apiVersion: "2023-10-16"
});

const endpointSecret = process.env.WEBHOOK_SECRET as string;

export async function POST(req: Request) {
    try {
        if (req.method !== "POST") {
            return new Response(JSON.stringify({ message: "Only POST request allowed" }), { status: 405 });
        }
        const sig: any = req.headers.get("stripe-signature");
        const body = await req.text();
        let event;
        try {
            event = stripe.webhooks.constructEvent(body, sig, endpointSecret);

        } catch (error) {
            return new Response(JSON.stringify({ message: "Webhook error", error }), { status: 400 });
        }
        console.log("event.type", JSON.stringify(event.type));
        if (event.type === "checkout.session.completed") {  
            const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
                (event.data.object as any).id,
                {
                    expand: ["line_items"]
                }
            );
            console.log(5);
            const lineItems = sessionWithLineItems.line_items;
            console.log(lineItems);
            if (!lineItems) {
                return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
            }
            try {
                console.log(lineItems.data);
                //Send req to client informing of success
            } catch (error) {
                return new Response(JSON.stringify({ message: "Failed to Send" }), { status: 400 });
            }
        }
        return new Response(JSON.stringify({ message: "Sucess" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
    }
}