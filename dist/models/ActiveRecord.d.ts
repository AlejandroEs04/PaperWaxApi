export declare abstract class ActiveRecord<T> {
    private tableName;
    constructor(tableName: string);
    private getRequest;
    getAll(): Promise<T[]>;
    getById(id: number | string): Promise<T>;
    getByElement(element: string, value: string | number): Promise<T[]>;
    create(item: Omit<T, "id">): Promise<void>;
    update(id: number | string, item: Partial<T>): Promise<void>;
    deleteById(id: number | string): Promise<void>;
}
