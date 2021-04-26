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
var array = [
    'Pick up drycleaning',
    'Clean Batcave',
    'Save Gotham'
];
for (var index in array) {
    var value_1 = array[index];
    console.log(index + ": " + value_1);
}
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var value = array_1[_i];
    console.log("" + value);
}
