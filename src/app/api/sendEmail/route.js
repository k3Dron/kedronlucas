import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { email, message, subject } = await request.json();

    if (!email || !message || !subject) {
      return new Response(JSON.stringify({ success: false, error: "Missing fields" }), {
        status: 400,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: "kedronlucas@gmail.com",
      subject: subject,
      text: `From: ${email}\n\n${message}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(JSON.stringify({ success: false, error: "Internal error" }), {
      status: 500,
    });
  }
}
