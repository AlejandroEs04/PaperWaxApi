"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveRecord = void 0;
const db_1 = __importDefault(require("../config/db"));
class ActiveRecord {
    tableName;
    constructor(tableName) {
        this.tableName = tableName;
    }
    async getRequest() {
        const pool = await (0, db_1.default)();
        return pool.request();
    }
    async getAll() {
        const query = `SELECT * FROM [paperWaxDb].[${this.tableName}]`;
        try {
            const request = await this.getRequest();
            const result = await request.query(query);
            return result.recordset;
        }
        catch (error) {
            console.error(error);
            throw new Error("Error fetching all records");
        }
    }
    async getById(id) {
        const query = `SELECT * FROM [paperWaxDb].[${this.tableName}] WHERE id = @id`;
        try {
            const request = await this.getRequest();
            request.input("id", id);
            const result = await request.query(query);
            return result.recordset[0];
        }
        catch (error) {
            console.error(error);
            throw new Error("Error fetching the record");
        }
    }
    async getByElement(element, value) {
        const query = `SELECT * FROM [paperWaxDb].[${this.tableName}] WHERE ${element} = @value`;
        try {
            const request = await this.getRequest();
            request.input("value", value);
            const result = await request.query(query);
            return result.recordset;
        }
        catch (error) {
            console.error(error);
            throw new Error("Error fetching records");
        }
    }
    async create(item) {
        const keys = Object.keys(item).filter((key) => key !== "tableName" && key !== "id");
        const values = keys.map((key) => `@${key}`).join(", ");
        const query = `INSERT INTO [paperWaxDb].[${this.tableName}] (${keys.join(", ")}) VALUES (${values})`;
        try {
            const request = await this.getRequest();
            keys.forEach((key) => request.input(key, item[key]));
            await request.query(query);
        }
        catch (error) {
            console.error(error);
            throw new Error("Error creating record");
        }
    }
    async update(id, item) {
        const keys = Object.keys(item).filter((key) => key !== "tableName" && key !== "id");
        const setString = keys.map((key) => `${key} = @${key}`).join(", ");
        const query = `UPDATE [paperWaxDb].[${this.tableName}] SET ${setString} WHERE id = @id`;
        try {
            const request = await this.getRequest();
            keys.forEach((key) => request.input(key, item[key]));
            request.input("id", id);
            await request.query(query);
        }
        catch (error) {
            console.error(error);
            throw new Error("Error updating record");
        }
    }
    async deleteById(id) {
        const query = `DELETE FROM [paperWaxDb].[${this.tableName}] WHERE id = @id`;
        try {
            const request = await this.getRequest();
            request.input("id", id);
            await request.query(query);
        }
        catch (error) {
            console.error(error);
            throw new Error("Error deleting record");
        }
    }
}
exports.ActiveRecord = ActiveRecord;
//# sourceMappingURL=ActiveRecord.js.map