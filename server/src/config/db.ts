import dotenv from "dotenv";
import { Pool } from "pg";

const DB_USER: string = process.env.DB_USER as string;
const DB_HOST: string = process.env.DB_HOST as string;
const DB_DATABASE: string = process.env.DB_DATABASE as string;
const DB_PASSWORD: string = process.env.DB_PASSWORD as string;
const DB_PORT: number = Number(process.env.DB_PORT);

const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_DATABASE,
  password: DB_PASSWORD,
  port: DB_PORT,
});

export default pool;
