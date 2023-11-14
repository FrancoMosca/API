"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const dbConfig = {
    host: 'localhost',
    port: 3050,
    database: 'C:\\Users\\usuario7\\Desktop\\competencias.FDB',
    user: 'sysdba',
    password: 'masterkey',
    lowercase_keys: false,
    role: null,
    pageSize: 4096 // default when creating database
};
exports.dbConfig = dbConfig;
