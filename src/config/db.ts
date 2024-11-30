import sql, { ConnectionPool } from "mssql";
import dotenv from "dotenv";

dotenv.config();

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true, // Use encryption for data in transit
    trustServerCertificate: true, // Set to true for self-signed certs
  },
  pool: {
    max: 200,
    min: 0,
    idleTimeoutMillis: 30000
  },
};

let pool: ConnectionPool | null = null;

export const getPool = async (): Promise<ConnectionPool> => {
  if (!pool) {
    try {
      pool = await sql.connect(dbConfig);
      console.log("Connected to SQL Server!");
    } catch (error) {
      console.error("Failed to connect to SQL Server:", error);
      throw error;
    }
  }
  return pool;
};

export default getPool;
