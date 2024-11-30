import { ConnectionPool } from "mssql";
export declare const getPool: () => Promise<ConnectionPool>;
export default getPool;
