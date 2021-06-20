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
var Sword = /** @class */ (function () {
    function Sword() {
    }
    Sword.prototype.attack = function () {
        return 'attack with SWORD';
    };
    return Sword;
}());
var Axe = /** @class */ (function () {
    function Axe() {
    }
    Axe.prototype.attack = function () {
        return 'attack with AXE';
    };
    return Axe;
}());
var MageSword = /** @class */ (function () {
    function MageSword() {
    }
    MageSword.prototype.attack = function () {
        return 'attack with MAGESWORD';
    };
    return MageSword;
}());
var AbstractArmor = /** @class */ (function () {
    function AbstractArmor() {
    }
    AbstractArmor.prototype.fight = function (collaboration) {
        var result = collaboration.attack();
        return this.defend() + " with collaboration " + result;
    };
    return AbstractArmor;
}());
var BodyArmor = /** @class */ (function (_super) {
    __extends(BodyArmor, _super);
    function BodyArmor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BodyArmor.prototype.defend = function () {
        return 'Defend with BODYARMOR';
    };
    return BodyArmor;
}(AbstractArmor));
var OrcArmor = /** @class */ (function (_super) {
    __extends(OrcArmor, _super);
    function OrcArmor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrcArmor.prototype.defend = function () {
        return 'Defend with ORCARMOR';
    };
    return OrcArmor;
}(AbstractArmor));
var Cloak = /** @class */ (function (_super) {
    __extends(Cloak, _super);
    function Cloak() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cloak.prototype.defend = function () {
        return 'Defend with CLOAK';
    };
    return Cloak;
}(AbstractArmor));
var WarriorFactory = /** @class */ (function () {
    function WarriorFactory() {
    }
    WarriorFactory.prototype.createWeapon = function () {
        return new Sword();
    };
    WarriorFactory.prototype.createArmor = function () {
        return new BodyArmor();
    };
    return WarriorFactory;
}());
var OrcFactory = /** @class */ (function () {
    function OrcFactory() {
    }
    OrcFactory.prototype.createWeapon = function () {
        return new Axe();
    };
    OrcFactory.prototype.createArmor = function () {
        return new OrcArmor();
    };
    return OrcFactory;
}());
var MageFactory = /** @class */ (function () {
    function MageFactory() {
    }
    MageFactory.prototype.createWeapon = function () {
        return new MageSword();
    };
    MageFactory.prototype.createArmor = function () {
        return new Cloak();
    };
    return MageFactory;
}());
// Client Code --------------------------------------
function clientCode(factory) {
    var sword = factory.createWeapon();
    var armor = factory.createArmor();
    console.log(sword.attack());
    console.log(armor.fight(sword));
}
console.log('Client: Warrior -------------------');
console.log(clientCode(new WarriorFactory()));
console.log('Client: Orc -------------------');
console.log(clientCode(new OrcFactory()));
console.log('Client: Mage -------------------');
console.log(clientCode(new MageFactory()));
