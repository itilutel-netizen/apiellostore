export default function handler(req, res) {
  const { token } = req.query;

  if (token === "ELLOFF2025") {
    res.status(200).json({ message: "Update berhasil 🚀" });
  } else {
    res.status(401).json({ message: "Token salah ❌" });
  }
}
