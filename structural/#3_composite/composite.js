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
var Employee = /** @class */ (function () {
    function Employee(name, position, progress) {
        this.name = name;
        this.position = position;
        this.progress = progress;
    }
    Employee.prototype.getProgress = function () {
        return this.progress;
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Developer;
}(Employee));
var DevTeamLead = /** @class */ (function (_super) {
    __extends(DevTeamLead, _super);
    function DevTeamLead(name, position, progress) {
        var _this = _super.call(this, name, position, progress) || this;
        _this.teamMembers = [];
        return _this;
    }
    DevTeamLead.prototype.addMember = function (employee) {
        this.teamMembers.push(employee);
    };
    DevTeamLead.prototype.getProgress = function () {
        for (var _i = 0, _a = this.teamMembers; _i < _a.length; _i++) {
            var el = _a[_i];
            console.log(el.getProgress());
        }
        return;
    };
    DevTeamLead.prototype.showTeam = function () {
        for (var _i = 0, _a = this.teamMembers; _i < _a.length; _i++) {
            var el = _a[_i];
            console.log(el.name);
        }
    };
    return DevTeamLead;
}(Employee));
var teamLead = new DevTeamLead("Regina", "Dev Team Lead", "90%");
var teamLead1 = new DevTeamLead("Regina1", "Dev Team Lead1", "90%");
var teamLead2 = new DevTeamLead("Regina2", "Dev Team Lead2", "90%");
var seniorDev = new Developer('Rachel', 'Senior Developer', '60%');
var juniorDev = new Developer("Joey", "Junior Developer", "50%");
var seniorDev1 = new Developer('Rachel1', 'Senior Developer1', '60%');
var juniorDev1 = new Developer("Joey1", "Junior Developer1", "50%");
var seniorDev2 = new Developer('Rachel2', 'Senior Developer2', '60%');
var juniorDev2 = new Developer("Joey2", "Junior Developer2", "50%");
teamLead.addMember(seniorDev);
teamLead.addMember(juniorDev);
teamLead.addMember(teamLead1);
teamLead1.addMember(seniorDev1);
teamLead1.addMember(juniorDev1);
teamLead1.addMember(teamLead2);
teamLead2.addMember(seniorDev2);
teamLead2.addMember(juniorDev2);
console.log("Team members list:");
teamLead.showTeam();
console.log("Get Team members progress:");
teamLead.getProgress();
