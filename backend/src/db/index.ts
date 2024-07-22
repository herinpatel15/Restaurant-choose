import { Pool, QueryResult, QueryResultRow } from "pg"

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASS,
    port: parseInt(process.env.PG_PORT!)
})

type SqlQuery = string;
type QueryParams = any[] | undefined;

interface DbQueryMethod {
    <T extends QueryResultRow = any>(text: SqlQuery, params?: QueryParams): Promise<QueryResult<T>>;
}

const dbQuery: DbQueryMethod = (text, params) => pool.query(text, params)

export default {
    query: dbQuery
}