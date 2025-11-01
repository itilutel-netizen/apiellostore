// api/update.js
export default function handler(req, res) {
  const token = req.query.token || ''
  const validToken = 'ELLOFF2025' // sama dengan di token.js

  if (token !== validToken) {
    return res.status(401).json({ error: 'Invalid token' })
  }

  res.status(200).json({
    status: 'ok',
    version: '1.0.0',
    changelog: 'Initial release'
  })
}
