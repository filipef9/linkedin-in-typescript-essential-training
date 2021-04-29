import { Todo } from "./Model";
export interface ITodoService {
    add(todo: Todo): Todo;
    add(todo: String): Todo;
    clearCompleted(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
    toggle(todoId: number): void;
}
export declare class TodoService implements ITodoService {
    private todos;
    constructor(todos: Todo[]);
    add(todo: Todo): Todo;
    add(todo: string): Todo;
    clearCompleted(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
    toggle(todoId: any): void;
    private _find;
}
