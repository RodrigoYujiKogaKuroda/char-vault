import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
    host: 'localhost',
    port: 5433,
    user: 'postgres',
    password: '159357000',
    database: 'char_vault',
})

export { connection }