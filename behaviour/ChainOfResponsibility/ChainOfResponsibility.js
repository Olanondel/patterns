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
var Orc = /** @class */ (function () {
    function Orc() {
    }
    Orc.prototype.kill = function (target) {
        if (target.hitPoints < this.attack) {
            console.log(this.name + " \u0443\u0431\u0438\u043B \u043C\u043E\u043D\u0441\u0442\u0440\u0430!");
        }
        else if (this.next) {
            this.next.kill(target);
        }
        else {
            console.log("You has not enough power");
        }
    };
    Orc.prototype.setNext = function (next) {
        this.next = next;
    };
    return Orc;
}());
var JuniorOrc = /** @class */ (function (_super) {
    __extends(JuniorOrc, _super);
    function JuniorOrc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Junior Orc';
        _this.attack = 80;
        return _this;
    }
    return JuniorOrc;
}(Orc));
var MiddleOrc = /** @class */ (function (_super) {
    __extends(MiddleOrc, _super);
    function MiddleOrc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Middle Orc';
        _this.attack = 100;
        return _this;
    }
    return MiddleOrc;
}(Orc));
var SeniorOrc = /** @class */ (function (_super) {
    __extends(SeniorOrc, _super);
    function SeniorOrc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Senior Orc';
        _this.attack = 120;
        return _this;
    }
    return SeniorOrc;
}(Orc));
var Monster = /** @class */ (function () {
    function Monster(hitPoints) {
        this.hitPoints = hitPoints;
    }
    return Monster;
}());
var jun = new JuniorOrc();
var mid = new MiddleOrc();
var sen = new SeniorOrc();
var monster = new Monster(119);
var monster2 = new Monster(60);
var monster1 = new Monster(95);
jun.setNext(mid);
mid.setNext(sen);
jun.kill(monster);
jun.kill(monster1);
jun.kill(monster2);
