import { Hono } from "hono";

const auth = new Hono();

auth.post("/login", async (c) => {
    const { email } = await c.req.json();
    console.log(email);
    c.json({ message: "login successful" });
});

auth.post("/verify-otp", async (c) => {
    const { otp } = await c.req.json();
    console.log(otp);
    c.json({ message: "OTP verified" });
});

export default auth;
