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
/*function add() {
    let values = Array.prototype.splice.call(arguments, [1]),
        total = 0;

    for (let value of values) {
        total += value;
    }

    return total;
};

const add2 = (...values) => {
    let total = 0;

    for (let value of values) {
        total += value;
    }

    return total;
};
add2(1, 2, 3, 4);

const add3 = (action, ...values) => {
    let total = 0;

    for (let value of values) {
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

const source = [3, 4, 5];
const target = [1, 2, ...source, 6, 7];

const list = [1, 2, 3];
const toAdd = [4, 5, 6];
list.push(...toAdd);*/

// -> Computed properties
const isSupported = (os) => Math.random() >= 0.5;
const osPrefix = 'os_';
const support = {
    [osPrefix + 'iOS']: isSupported('iOS'),
    [osPrefix + 'Windows']: isSupported('Windows'),
    [osPrefix + 'Android']: isSupported('Android')
};

