// Хранитель
var Memento = /** @class */ (function () {
    function Memento(state) {
        this.state = state;
    }
    Memento.prototype.getState = function () {
        return this.state;
    };
    return Memento;
}());
// Смотритель
var Caretaker = /** @class */ (function () {
    function Caretaker() {
        this.mementos = [];
    }
    Caretaker.prototype.getMemento = function () {
        if (this.mementos[this.mementos.length - 1].state !== undefined) {
            return this.mementos.pop();
        }
    };
    Caretaker.prototype.setMemento = function (memento) {
        this.mementos.push(memento);
    };
    return Caretaker;
}());
// Хозяин
var Originator = /** @class */ (function () {
    function Originator() {
    }
    Originator.prototype.setState = function (state) {
        caretaker.setMemento(this.saveState());
        this.state = state;
    };
    Originator.prototype.getState = function () {
        console.log("Current state is: [ " + this.state + " ]");
    };
    Originator.prototype.saveState = function () {
        return new Memento(this.state);
    };
    Originator.prototype.restoreState = function (memento) {
        if (memento) {
            this.state = memento.getState();
        }
    };
    return Originator;
}());
var originator = new Originator();
var caretaker = new Caretaker();
originator.setState('name');
originator.setState('age');
originator.getState();
originator.restoreState(caretaker.getMemento());
originator.getState();
originator.restoreState(caretaker.getMemento());
originator.getState();
originator.restoreState(caretaker.getMemento());
originator.getState();
