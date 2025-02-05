import sql from 'mssql';

export async function getUser(req, res) {
  const result = await sql.query('SELECT * FROM utilisateur');
  res.json({
    message: 'Liste des utilisateurs',
    status: true,
    data: result.recordset
  })
}

export async function getUserUnique(req, res) {
  const { id } = req.body;
  const result = await sql.query('SELECT * FROM utilisateur WHERE id = ?', [id]);
  res.json({
    message: 'Liste des utilisateurs',
    status: true,
    data: result.recordset
  })
}
