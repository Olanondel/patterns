var News = /** @class */ (function () {
    function News() {
        this.subscribers = [];
    }
    News.prototype.register = function (user) {
        this.subscribers.push(user);
    };
    News.prototype.setState = function (state) {
        this.state = state;
        this.notifySubscribers();
    };
    News.prototype.notifySubscribers = function () {
        for (var _i = 0, _a = this.subscribers; _i < _a.length; _i++) {
            var user = _a[_i];
            user.notify("Dear " + user.name + ", " + this.state);
        }
    };
    return News;
}());
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.notify = function (message) {
        console.log(message);
    };
    return User;
}());
var John = new User('John');
var Elena = new User('Helen');
var Din = new User('Din');
var news = new News();
news.register(John);
news.register(Elena);
news.register(Din);
news.setState('New manufacture is open!');
