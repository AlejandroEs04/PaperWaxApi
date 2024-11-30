"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPool = void 0;
const mssql_1 = __importDefault(require("mssql"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
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
let pool = null;
const getPool = async () => {
    if (!pool) {
        try {
            pool = await mssql_1.default.connect(dbConfig);
            console.log("Connected to SQL Server!");
        }
        catch (error) {
            console.error("Failed to connect to SQL Server:", error);
            throw error;
        }
    }
    return pool;
};
exports.getPool = getPool;
exports.default = exports.getPool;
//# sourceMappingURL=db.js.map