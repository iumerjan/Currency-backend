export interface ICurrency {
    name: string,
    code: string,
    value: number,
    is_deleted: boolean, // used for soft deletion of currency   
}