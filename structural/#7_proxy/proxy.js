var Audi = /** @class */ (function () {
    function Audi() {
    }
    Audi.prototype.open = function () {
        console.log('You opened the car');
    };
    return Audi;
}());
var SecureAudi = /** @class */ (function () {
    function SecureAudi(car) {
        this.car = car;
    }
    SecureAudi.prototype.open = function (k) {
        if (k === 'myname') {
            this.car.open();
        }
        else {
            console.log('Access is denied!');
        }
    };
    return SecureAudi;
}());
var car1 = new Audi();
car1.open();
var car1withSecure = new SecureAudi(car1);
car1withSecure.open('123');
car1withSecure.open('myname');
