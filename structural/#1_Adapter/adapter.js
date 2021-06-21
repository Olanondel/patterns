var HumanWarrior = /** @class */ (function () {
    function HumanWarrior() {
        this.hitPoints = 80;
    }
    HumanWarrior.prototype.fight = function () {
        this.hitPoints -= 15;
        console.log("Human you are damaged: [ hitPoints: " + this.hitPoints + " ]");
    };
    return HumanWarrior;
}());
var OrcWarrior = /** @class */ (function () {
    function OrcWarrior() {
        this.hitPoints = 100;
    }
    OrcWarrior.prototype.fight = function () {
        this.hitPoints -= 12;
        console.log("Orc you are damaged: [ hitPoints: " + this.hitPoints + " ]");
    };
    return OrcWarrior;
}());
var Dwarf = /** @class */ (function () {
    function Dwarf() {
        this.lifePoints = 110;
    }
    Dwarf.prototype.attack = function () {
        this.lifePoints -= 10;
    };
    return Dwarf;
}());
var WarriorAdapter = /** @class */ (function () {
    function WarriorAdapter(fighter) {
        this.fighter = fighter;
        this.hitPoints = fighter.lifePoints;
    }
    WarriorAdapter.prototype.fight = function () {
        this.hitPoints -= 10;
        console.log("Dwarf you are damaged: [ hitPoints: " + this.hitPoints + " ]");
    };
    return WarriorAdapter;
}());
var human = new HumanWarrior();
var orc = new OrcWarrior();
var dwarf = new Dwarf();
human.fight();
orc.fight();
var adapter = new WarriorAdapter(dwarf);
adapter.fight();
