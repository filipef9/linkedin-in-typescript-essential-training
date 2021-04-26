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
/*function countdown({
    initial,
    final: final = 0,
    interval: interval = 1,
    initial: current
}) {
    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }
}

countdown({initial: 0, final: 0, interval: 1});*/
// -> The spread operator
function add() {
    var values = Array.prototype.splice.call(arguments, [1]), total = 0;
    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
        var value = values_1[_i];
        total += value;
    }
    return total;
}
;
var add2 = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i - 0] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, values_2 = values; _a < values_2.length; _a++) {
        var value = values_2[_a];
        total += value;
    }
    return total;
};
add2(1, 2, 3, 4);
var add3 = function (action) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, values_3 = values; _a < values_3.length; _a++) {
        var value = values_3[_a];
        switch (action) {
            case 'add':
                total += value;
                break;
            case 'subtract':
                total -= value;
                break;
            default:
                console.log('invalid action');
        }
    }
    return total;
};
add3('subtract', 1, 2, 3, 4, 5);
var source = [3, 4, 5];
var target = [1, 2].concat(source, [6, 7]);
var list = [1, 2, 3];
var toAdd = [4, 5, 6];
list.push.apply(list, toAdd);
