interface Todo {
    id: number;
    name: string;
    state: TodoState;
}
declare enum TodoState {
    Active = 1,
    Complete = 2,
}
interface ITodoService {
    add(todo: Todo): Todo;
    add(todo: String): Todo;
    clearCompleted(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
    toggle(todoId: number): void;
}
declare class TodoService implements ITodoService {
    private static _lastId;
    private todos;
    constructor(todos: Todo[]);
    private static generateTodoId();
    private static clone<T>(src);
    add(todo: Todo): Todo;
    add(todo: string): Todo;
    clearCompleted(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
    toggle(todoId: any): void;
    private _find(todoId);
}
