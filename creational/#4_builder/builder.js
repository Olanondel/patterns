var Burger = /** @class */ (function () {
    function Burger() {
        this.ingredients = [];
    }
    Burger.prototype.getIngredientsList = function () {
        console.table(this.ingredients);
    };
    return Burger;
}());
var Builder = /** @class */ (function () {
    function Builder() {
        this.burger = new Burger();
    }
    Builder.prototype.addBun = function () {
        this.burger.ingredients.push('Bun');
        return this;
    };
    Builder.prototype.addLettuce = function () {
        this.burger.ingredients.push('Lettuce');
        return this;
    };
    Builder.prototype.addCheese = function () {
        this.burger.ingredients.push('Cheese');
        return this;
    };
    Builder.prototype.addBacon = function () {
        this.burger.ingredients.push('Bacon');
        return this;
    };
    Builder.prototype.build = function () {
        return this.burger;
    };
    return Builder;
}());
var burger1 = new Builder().addBun().addBacon().addCheese().addLettuce().build();
var burger2 = new Builder().addBun().addBacon().addLettuce().build();
console.log(burger1.getIngredientsList());
console.log(burger2.getIngredientsList());
