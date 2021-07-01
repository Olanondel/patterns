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
var TrafficLight = /** @class */ (function () {
    function TrafficLight() {
        this.states = [new RedLight(), new YellowLight(), new GreenLight()];
        this.state = this.states[0];
        this.states = [new RedLight(), new YellowLight(), new GreenLight()];
        this.state = this.states[0];
    }
    TrafficLight.prototype.changeState = function () {
        var totalStates = this.states.length;
        var currentIndex = this.states.indexOf(this.state);
        if (currentIndex + 1 < totalStates)
            this.state = this.states[currentIndex + 1];
        else
            this.state = this.states[0];
    };
    TrafficLight.prototype.sign = function () {
        return this.state.sign();
    };
    return TrafficLight;
}());
var Light = /** @class */ (function () {
    function Light(light) {
        this.light = light;
    }
    return Light;
}());
var RedLight = /** @class */ (function (_super) {
    __extends(RedLight, _super);
    function RedLight() {
        return _super.call(this, 'red') || this;
    }
    RedLight.prototype.sign = function () {
        return 'STOP';
    };
    return RedLight;
}(Light));
var YellowLight = /** @class */ (function (_super) {
    __extends(YellowLight, _super);
    function YellowLight() {
        return _super.call(this, 'yellow') || this;
    }
    YellowLight.prototype.sign = function () {
        return 'STEADY';
    };
    return YellowLight;
}(Light));
var GreenLight = /** @class */ (function (_super) {
    __extends(GreenLight, _super);
    function GreenLight() {
        return _super.call(this, 'green') || this;
    }
    GreenLight.prototype.sign = function () {
        return 'GO!';
    };
    return GreenLight;
}(Light));
var trafficLight = new TrafficLight();
console.log(trafficLight.sign());
trafficLight.changeState();
console.log(trafficLight.sign());
trafficLight.changeState();
console.log(trafficLight.sign());
