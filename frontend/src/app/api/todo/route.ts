import { NextResponse } from "next/server";
import * as mysql from "promise-mysql";
import dotenv from "dotenv";

// 環境変数
dotenv.config({ path: "./project-root/.env" });

// 書籍一覧取得API
export async function GET() {
  const connection = await mysql.createConnection({
    host: "db",
    port: 3306,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });

  const sql = "SELECT * FROM todos";
  const result = await connection.query(sql);
  connection.end();

  return NextResponse.json(result);
}
