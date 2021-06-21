var Orc = /** @class */ (function () {
    function Orc() {
    }
    Orc.prototype.attack = function () {
        return 'You attack castle';
    };
    return Orc;
}());
var OrcWithHelloMethod = /** @class */ (function () {
    function OrcWithHelloMethod(warrior) {
        this.warrior = warrior;
    }
    OrcWithHelloMethod.prototype.attack = function () {
        return this.warrior.attack();
    };
    OrcWithHelloMethod.prototype.hello = function () {
        return 'Hello, i am Orc Warrior!';
    };
    return OrcWithHelloMethod;
}());
var orc = new Orc();
console.log(orc.attack());
var orcWithHello = new OrcWithHelloMethod(orc);
console.log(orcWithHello.attack());
console.log(orcWithHello.hello());
