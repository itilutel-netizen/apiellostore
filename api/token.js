export default function handler(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const token = url.searchParams.get('token');
  const API_TOKEN = process.env.API_TOKEN || 'ELLOFF2025';

  // Jika tidak ada parameter (seperti ?token=%s)
  if (!token || token === '%s') {
    return res.status(200).json({
      token: API_TOKEN,
      message: 'Token default dikembalikan.'
    });
  }

  // Jika token cocok
  if (token === API_TOKEN) {
    return res.status(200).json({
      ok: true,
      message: 'Token valid.'
    });
  }

  // Jika token salah
  return res.status(401).json({
    ok: false,
    error: 'Invalid token.'
  });
}
