import nodemailer from "nodemailer";

// Simple in-memory rate limit (resets when server restarts).
// Prevents someone from spamming the form repeatedly in a short time.
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // max 3 submissions per minute per IP

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip) || { count: 0, start: now };

  if (now - entry.start > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, start: now });
    return false;
  }

  entry.count += 1;
  rateLimitMap.set(ip, entry);
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    if (isRateLimited(ip)) {
      return Response.json(
        { error: "Terlalu banyak percobaan. Coba lagi dalam 1 menit." },
        { status: 429 }
      );
    }

    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return Response.json({ error: "Semua field wajib diisi." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Format email tidak valid." }, { status: 400 });
    }

    if (message.length > 5000) {
      return Response.json({ error: "Pesan terlalu panjang." }, { status: 400 });
    }

    // Set up the Gmail transporter using credentials from environment variables.
    // NEVER hardcode email/password directly in code.
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // pesan masuk ke inbox lo sendiri
      replyTo: email, // biar tinggal klik "Reply" buat balas ke pengirim
      subject: `Pesan baru dari ${name} — Portfolio Website`,
      text: `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>Pesan baru dari website portfolio</h2>
          <p><strong>Nama:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Pesan:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json(
      { error: "Terjadi kesalahan di server. Coba lagi nanti." },
      { status: 500 }
    );
  }
}