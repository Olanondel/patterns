var Vessel = /** @class */ (function () {
    function Vessel(name, speed, size) {
        this.name = name;
        this.speed = speed;
        this.size = size;
    }
    Vessel.prototype.accept = function (visitor) {
        visitor(this);
    };
    Vessel.prototype.getName = function () { return this.name; };
    Vessel.prototype.getSpeed = function () { return this.speed; };
    Vessel.prototype.getSize = function () { return this.size; };
    Vessel.prototype.setSpeed = function (speed) { this.speed = speed; };
    Vessel.prototype.setSize = function (size) { this.size = size; };
    return Vessel;
}());
var VesselSpeedUp = /** @class */ (function () {
    function VesselSpeedUp() {
    }
    VesselSpeedUp.prototype.setExtraSpeed = function (vessel) {
        vessel.setSpeed(vessel.getSpeed() * 2);
    };
    return VesselSpeedUp;
}());
var VesselEnlarge = /** @class */ (function () {
    function VesselEnlarge() {
    }
    VesselEnlarge.prototype.setExtraLarge = function (vessel) {
        vessel.setSize(vessel.getSize() * 2);
    };
    return VesselEnlarge;
}());
var vessel = new Vessel('Vessel', 80, 200);
var vesselSpeedUp = new VesselSpeedUp();
var vesselEnlarge = new VesselEnlarge();
vessel.accept(vesselSpeedUp.setExtraSpeed);
vessel.accept(vesselEnlarge.setExtraLarge);
console.log(vessel.getSize());
console.log(vessel.getSpeed());
