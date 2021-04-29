import { Todo, TodoState } from "./Model.js";

export interface ITodoService {
  add(todo: Todo): Todo;
  add(todo: String): Todo;
  clearCompleted(): void;
  getAll(): Todo[];
  getById(todoId: number): Todo;
  toggle(todoId: number): void;
}

let _lastId = 0;

const generateTodoId = () => {
  return (_lastId += 1);
}

const clone = <T>(src: T): T => {
  const clone = JSON.stringify(src);
  return JSON.parse(clone);
}

export class TodoService implements ITodoService {

  private todos: Todo[] = [];

  constructor(todos: Todo[]) {
    var _this = this;

    if (todos) {
      todos.forEach((todo) => _this.add(todo));
    }
  }

  add(todo: Todo): Todo;
  add(todo: string): Todo;
  add(input): Todo {
    const todo = {
      id: generateTodoId(),
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
    return clone(this.todos);
  }

  getById(todoId: number): Todo {
    var todo = this._find(todoId);
    return clone(todo);
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
