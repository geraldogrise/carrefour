export interface IRepository<TEntity>
{
    Insert:(entity: TEntity)=> Promise<any>;
    InsertRange:(entity: Array<TEntity>)=> Promise<any>;
    Update:(entity: TEntity)=> Promise<any>;
    UpdateRange:(entity: Array<TEntity>)=> Promise<any>;
    DeleteObject:(entity: TEntity)=> Promise<any>;
    Delete:(id: number)=> Promise<any>;
    DeleteRange:(entity: Array<TEntity>)=> Promise<any>;
    GetByFilter:(filter: any)=> Promise<any>;
    GetAll:()=> Promise<TEntity[]>;
}