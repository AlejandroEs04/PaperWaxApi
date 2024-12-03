import { Request } from "mssql";
import getPool from "../config/db";

export abstract class ActiveRecord<T> {
    private tableName: string;

    constructor(tableName: string) {
        this.tableName = tableName;
    }

    public async getRequest(): Promise<Request> {
        const pool = await getPool();
        return pool.request();
    }

    async getAll(): Promise<T[]> {
        const query = `SELECT * FROM [paperWaxDb].[${this.tableName}]`;
        try {
            const request = await this.getRequest();
            const result = await request.query(query);
            return result.recordset as T[];
        } catch (error) {
            console.error(error);
            throw new Error("Error fetching all records");
        }
    }

    async getById(id: number | string): Promise<T> {
        const query = `SELECT * FROM [paperWaxDb].[${this.tableName}] WHERE id = @id`;
        try {
            const request = await this.getRequest();
            request.input("id", id);
            const result = await request.query(query);
            return result.recordset[0] as T;
        } catch (error) {
            console.error(error);
            throw new Error("Error fetching the record");
        }
    }

    async getByElement(element: string, value: string | number): Promise<T[]> {
        const query = `SELECT * FROM [paperWaxDb].[${this.tableName}] WHERE ${element} = @value`;
        try {
            const request = await this.getRequest();
            request.input("value", value);
            const result = await request.query(query);
            return result.recordset as T[];
        } catch (error) {
            console.error(error);
            throw new Error("Error fetching records");
        }
    }

    async create(item: Omit<T, "id">): Promise<T> {
        const keys = Object.keys(item).filter((key) => key !== "tableName" && key !== "id");
        const values = keys.map((key) => `@${key}`).join(", ");
        const query = `INSERT INTO [paperWaxDb].[${this.tableName}] (${keys.join(", ")}) OUTPUT INSERTED.id VALUES (${values})`;
    
        try {
            const request = await this.getRequest();
            keys.forEach((key) => request.input(key, (item as any)[key]));
            const result = await request.query(query);
            return await this.getById(result.recordset[0].id)
        } catch (error) {
            console.error(error);
            throw new Error("Error creating record");
        }
    }
    
    async update(id: number | string, item: Partial<T>): Promise<void> {
        const keys = Object.keys(item).filter((key) => key !== "tableName" && key !== "id");
        const setString = keys.map((key) => `${key} = @${key}`).join(", ");
        const query = `UPDATE [paperWaxDb].[${this.tableName}] SET ${setString} WHERE id = @id`;
    
        try {
            const request = await this.getRequest();
            keys.forEach((key) => request.input(key, (item as any)[key]));
            request.input("id", id);
            await request.query(query);
        } catch (error) {
            console.error(error);
            throw new Error("Error updating record");
        }
    }
    
    async deleteById(id: number | string): Promise<void> {
        const query = `DELETE FROM [paperWaxDb].[${this.tableName}] WHERE id = @id`;

        try {
            const request = await this.getRequest();
            request.input("id", id);
            await request.query(query);
        } catch (error) {
            console.error(error);
            throw new Error("Error deleting record");
        }
    }
}
