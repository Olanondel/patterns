var User = /** @class */ (function () {
    function User(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    User.prototype.clone = function () {
        return new User(this.name, this.age, this.position);
    };
    return User;
}());
var user = new User('oleg', 25, 'intern');
var cloneUser = user.clone();
cloneUser.name = 'John';
cloneUser.age = 30;
cloneUser.position = 'Senior Js Developer';
console.log(cloneUser);
