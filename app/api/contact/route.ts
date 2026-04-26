import nodemailer from "nodemailer"

export async function POST(req: Request) {
    const { username, email, message, subject, mobile } =await req.json()

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    })

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: subject,
            text: `
            Name: ${username}
            Mobile: ${mobile}
            Email: ${email}
            Subject: ${subject}
            Message: ${message}
            `,
        })

        return Response.json({ success: true })
    } catch (error) {
        return Response.json({ success: false, error })
    }
}