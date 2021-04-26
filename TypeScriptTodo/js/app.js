var container = document.getElementById('container');
// Default parameters
/*function countdown(initial, final = 0, interval = 1) {
    var current = initial;

    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }
}

countdown(40, 0, 1);*/
// Template strings
var todo = {
    id: 123,
    name: 'Pick up drycleaning',
    completed: true
};
//var displayName = `Todo #${todo.id}`;
//container.innerHTML = displayName;
container.innerHTML = "\n    <div todo=\"" + todo.id + "\" class=\"list-group-item\">\n        <i class=\"" + (todo.completed ? '' : 'hidden') + " text-success glyphicon glyphicon-ok\"></i>\n        <span class=\"name\">" + todo.name + "</span>\n    </div>\n";
