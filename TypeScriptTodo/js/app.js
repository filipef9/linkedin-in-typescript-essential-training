var container = document.getElementById('container');
// -> Default parameters
/*function countdown(initial, final = 0, interval = 1) {
    var current = initial;

    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }
}

countdown(40, 0, 1);*/
// -> Template strings
/*var todo = {
    id: 123,
    name: 'Pick up drycleaning',
    completed: true
};*/
//var displayName = `Todo #${todo.id}`;
//container.innerHTML = displayName;
/*container.innerHTML = `
    <div todo="${todo.id}" class="list-group-item">
        <i class="${todo.completed ? '' : 'hidden'} text-success glyphicon glyphicon-ok"></i>
        <span class="name">${todo.name}</span>
    </div>
`;*/
// -> Let and const
/*for (var x = 0; x <= 5; x++) {
    var counter = x;
}*/
/*for (var x = 0; x <= 5; x++) {
    let counter = x;
}*/
/*for (var x = 0; x <= 5; x++) {
    const counter = x;
    counter = 1;
}

console.log(counter);*/
// -> For...of loops
/*const array = [
    'Pick up drycleaning',
    'Clean Batcave',
    'Save Gotham'
];

for (let index in array) {
    let value = array[index];
    console.log(`${index}: ${value}`);
}

for (var value of array) {
    console.log(`${value}`);
}*/
// -> Lambdas
/*function Counter(el) {
    this.count = 0;

    el.innerHTML = this.count;

    el.addEventListener('click', function () {
        this.count += 1;
        el.innerHTML = this.count;
    });
}*/
/*function Counter(el) {
    this.count = 0;

    el.innerHTML = this.count;

    let _this = this;

    el.addEventListener('click', function () {
        _this.count += 1;
        el.innerHTML = _this.count;
    });
}*/
/*function Counter(el) {
    this.count = 0;

    el.innerHTML = this.count;

    el.addEventListener('click', () => {
        this.count += 1;
        el.innerHTML = this.count;
    });
}

new Counter(container);

const filtered = [1, 2, 3].filter(x => x > 0);*/
// -> Destructuring
/*const array = [123, 'Pick up drycleaning', false];
const [id, title, completed] = array;

let a = 1;
let b = 5;
[a, b] = [b, a];

const todo = {
    id: 123,
    title: 'Pick up drycleaning',
    completed: false
};

const { id, title, completed } = todo;*/
/*function getTodo(id) {
    const todo = {
        id: 123,
        title: 'Pick up drycleaning',
        completed: false
    };

    return todo;
}

const { id, title, completed } = getTodo(123);*/
function countdown(_a) {
    var initial = _a.initial, _b = _a.final, final = _b === void 0 ? 0 : _b, _c = _a.interval, interval = _c === void 0 ? 1 : _c, current = _a.initial;
    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }
}
