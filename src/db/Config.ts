require('dotenv').config();

const dbOptions ={
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT), 
    database: process.env.DB_DATABASE,    
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    lowercase_keys: process.env.DB_LOWERCASE_KEYS === 'true',
    role: process.env.DB_ROLE,
    pageSize: Number(process.env.DB_PAGE_SIZE)
}
export {dbOptions};