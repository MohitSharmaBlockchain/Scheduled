import { schedule } from "@netlify/functions";

export const handler = schedule("* * * * *", async (event: any) => {
    console.log("deploying...")
    return {
        statusCode: 200,
        body: "Hello from Netlify"
    }
})