var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Dragon = /** @class */ (function () {
    function Dragon() {
        this.heals = 60;
    }
    Dragon.prototype.attack = function () {
        this.heals -= 10;
    };
    return Dragon;
}());
var Snake = /** @class */ (function () {
    function Snake() {
        this.heals = 45;
    }
    Snake.prototype.attack = function () {
        this.heals -= 8;
    };
    return Snake;
}());
var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.fightMonster = function () {
        var monster = this.makeMonster();
        monster.attack();
        return monster;
    };
    return Player;
}());
var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Warrior.prototype.makeMonster = function () {
        return new Dragon();
    };
    return Warrior;
}(Player));
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Knight.prototype.makeMonster = function () {
        return new Snake();
    };
    return Knight;
}(Player));
var warrior = new Warrior();
console.log(warrior.fightMonster());
var knight = new Knight();
console.log(knight.fightMonster());
