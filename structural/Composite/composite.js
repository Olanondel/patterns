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
var Component = /** @class */ (function () {
    function Component(name, value) {
        if (name === void 0) { name = ''; }
        if (value === void 0) { value = 0; }
        this.name = name;
        this.value = value;
    }
    return Component;
}());
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Leaf.prototype.execute = function () { return this.value; };
    return Leaf;
}(Component));
var Composite = /** @class */ (function (_super) {
    __extends(Composite, _super);
    function Composite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = [];
        _this.self = _this;
        return _this;
    }
    Composite.prototype.add = function (component) {
        this.children.push(component);
    };
    Composite.prototype.remove = function (component) {
        this.children = this.children.filter(function (ch) { return ch !== component; });
    };
    Composite.prototype.execute = function () {
        var _this = this;
        this.children.forEach(function (component) {
            _this.self.value = _this.self.value + component.execute();
        });
        var sum = this.self.value;
        this.self.value = 0;
        return sum;
    };
    return Composite;
}(Component));
var kitchen = new Composite('Кухня');
var equipment = new Composite('Техника');
kitchen.add(new Leaf('Верхняя секция', 5200));
kitchen.add(new Leaf('Верхняя двойная секция', 10000));
kitchen.add(new Leaf('Нижняя секция', 4500));
kitchen.add(new Leaf('Нижняя угловая секция', 7800));
equipment.add(new Leaf('Газовая плита', 26400));
equipment.add(new Leaf('Холодильник', 32300));
equipment.add(new Leaf('Посудомойка', 21600));
equipment.add(new Leaf('Шейкер', 4600));
kitchen.add(equipment);
console.log("\u0418\u0442\u043E\u0433\u043E " + kitchen.execute() + " \u0440\u0443\u0431.");
console.log("\u0418\u0442\u043E\u0433\u043E " + kitchen.execute() + " \u0440\u0443\u0431.");
