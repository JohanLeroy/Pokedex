import dotenv from 'dotenv';
import sql from 'mssql';

dotenv.config();

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER,
  port: parseInt(process.env.DB_PORT, 10),
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

export async function connectDB() {
  try {
    await sql.connect(dbConfig);
    console.log("✅ Connexion à SQL Server réussie !");
  } catch (err) {
    console.error("❌ Erreur de connexion à SQL Server :", err);
  }
}
