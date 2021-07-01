var Shipping = /** @class */ (function () {
    function Shipping() {
    }
    Shipping.prototype.setStrategy = function (company) {
        this.company = company;
    };
    Shipping.prototype.calculate = function (parcel) {
        return this.company.calculate(parcel);
    };
    return Shipping;
}());
var NovaPoshta = /** @class */ (function () {
    function NovaPoshta() {
    }
    NovaPoshta.prototype.calculate = function (parcel) {
        // calculate
        return '15$';
    };
    return NovaPoshta;
}());
var Ukrposhta = /** @class */ (function () {
    function Ukrposhta() {
    }
    Ukrposhta.prototype.calculate = function (parcel) {
        return '8$';
    };
    return Ukrposhta;
}());
var Intime = /** @class */ (function () {
    function Intime() {
    }
    Intime.prototype.calculate = function (parcel) {
        return '6$';
    };
    return Intime;
}());
var parcel = { from: 'Kyiv', to: 'Odessa', weight: '2kg' };
var shipping = new Shipping();
var novaPoshta = new NovaPoshta();
var ukrposhta = new Ukrposhta();
var intime = new Intime();
shipping.setStrategy(novaPoshta);
console.log(shipping.calculate(parcel));
shipping.setStrategy(ukrposhta);
console.log(shipping.calculate(parcel));
shipping.setStrategy(intime);
console.log(shipping.calculate(parcel));
