// Minimal route so Next.js generates pages-manifest.json during build
export default function handler(req, res) {
  res.status(200).json({ ok: true });
}
