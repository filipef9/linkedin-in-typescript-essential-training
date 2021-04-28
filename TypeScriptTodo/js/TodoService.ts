interface Todo {
  id: number;
  name: string;
  state: TodoState;
}

enum TodoState {
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

class TodoService implements ITodoService {
  private static _lastId = 0;

  private todos: Todo[] = [];

  constructor(todos: Todo[]) {
    var _this = this;

    if (todos) {
      todos.forEach((todo) => _this.add(todo));
    }
  }

  private static generateTodoId() {
    return (TodoService._lastId += 1);
  }

  private static clone<T>(src: T): T {
    const clone = JSON.stringify(src);
    return JSON.parse(clone);
  }

  add(todo: Todo): Todo;
  add(todo: string): Todo;
  add(input): Todo {
    const todo = {
      id: TodoService.generateTodoId(),
      name: null,
      state: TodoState.Active,
    };

    if (typeof input === "string") {
      todo.name = input;
    } else if (typeof input.name === "string") {
      todo.name = input.name;
    } else {
      throw "Invalid Todo name!";
    }

    this.todos = [...this.todos, todo];
    return todo;
  }

  clearCompleted() {
    this.todos = this.todos.filter((x) => x.state == TodoState.Active);
  }

  getAll(): Todo[] {
    return TodoService.clone(this.todos);
  }

  getById(todoId: number): Todo {
    var todo = this._find(todoId);
    return TodoService.clone(todo);
  }

  toggle(todoId) {
    var todo = this._find(todoId);
    if (!todo) return;
    switch (todo.state) {
      case TodoState.Active:
        todo.state = TodoState.Complete;
        break;
      case TodoState.Complete:
        todo.state = TodoState.Active;
        break;
    }
  }

  private _find(todoId: number): Todo {
    var filtered = this.todos.filter((x) => x.id == todoId);

    if (filtered.length) {
      return filtered[0];
    }

    return null;
  }
}
