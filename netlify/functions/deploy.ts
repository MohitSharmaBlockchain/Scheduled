import { schedule } from "@netlify/functions";
var count = 0

export const handler = schedule("* * * * *", async (event: any) => {
    console.log("deploying...", count)
    count++
    return {
        statusCode: 200,
        body: "Hello from Netlify"
    }
})