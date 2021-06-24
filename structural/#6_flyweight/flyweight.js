var Flyweight = /** @class */ (function () {
    function Flyweight(make, model, processor) {
        this.make = make;
        this.model = model;
        this.processor = processor;
    }
    return Flyweight;
}());
var FlyweightFactory = /** @class */ (function () {
    function FlyweightFactory() {
        this.flyweights = {};
    }
    FlyweightFactory.prototype.get = function (make, model, processor) {
        if (!this.flyweights[make + model]) {
            this.flyweights[make + model] = new Flyweight(make, model, processor);
        }
        return this.flyweights[make + model];
    };
    FlyweightFactory.prototype.consoleFlyweightsList = function () {
        console.table(this.flyweights);
    };
    return FlyweightFactory;
}());
var factory = new FlyweightFactory();
var Computer = /** @class */ (function () {
    function Computer(make, model, processor, os, hardDisc, videoCard) {
        this.os = os;
        this.hardDisc = hardDisc;
        this.videoCard = videoCard;
        this.flyweight = factory.get(make, model, processor);
    }
    return Computer;
}());
var computers = [
    new Computer('Dell', 'dellModel', 'dellProc', 'dellOs', 'dellHd', 'dellVideo'),
    new Computer('Dell', 'dellModel', 'dellProc', 'dellOs1', 'dellHd1', 'dellVideo1'),
    new Computer('Dell', 'dellModel', 'dellProc', 'dellOs2', 'dellHd2', 'dellVideo2'),
    new Computer('Dell', 'dellModel', 'dellProc', 'dellOs3', 'dellHd3', 'dellVideo3'),
    new Computer('Acer', 'acerModel', 'acerProc', 'acerOs1', 'acerHd1', 'acerVideo1'),
    new Computer('Acer', 'acerModel', 'acerProc', 'acerOs2', 'acerHd2', 'acerVideo2'),
];
factory.consoleFlyweightsList();
