import sql from "mssql";

export default function getConnect(req, res) {
  res.json({
    message: 'Connexion OK',
    status: true
  })
}

export const message = async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({
      message: 'Message Not Found',
      status: false
    })
  }
  console.log(message);
  return res.status(200).json({
    message: 'Message bien reçu',
    status: true
  })
}
