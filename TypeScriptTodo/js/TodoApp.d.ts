declare class TodoApp {
    private todos;
    private todoService;
    private todoList;
    constructor(el: any, todos: Todo[]);
    addTodo(todoName: any): void;
    clearCompleted: () => void;
    toggleTodoState(todoId: any): void;
    renderTodos(): void;
    initialize(el: any): void;
}
