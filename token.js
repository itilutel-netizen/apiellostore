// api/token.js
export default function handler(req, res) {
  res.status(200).json({
    token: "ELLOFF2025",
    message: "Token generated successfully"
  })
}
