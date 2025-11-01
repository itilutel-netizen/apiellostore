export default function handler(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const token = url.searchParams.get('token');
  const API_TOKEN = process.env.API_TOKEN || 'ELLOFF2025';

  if (!token) {
    return res.status(200).json({
      ok: true,
      info: 'Gunakan ?update&token=<token> untuk cek versi.'
    });
  }

  if (token === API_TOKEN) {
    return res.status(200).json({
      ok: true,
      version: '2.3.1',
      changelog: 'Initial release'
    });
  }

  return res.status(401).json({
    ok: false,
    error: 'Invalid token for update.'
  });
}
