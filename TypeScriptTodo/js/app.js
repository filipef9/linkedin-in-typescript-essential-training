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
var todo = {
    id: 123,
    name: 'Pick up drycleaning',
    completed: true
};
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
function Counter(el) {
    var _this = this;
    this.count = 0;
    el.innerHTML = this.count;
    el.addEventListener('click', function () {
        _this.count += 1;
        el.innerHTML = _this.count;
    });
}
new Counter(container);
var filtered = [1, 2, 3].filter(function (x) { return x > 0; });
