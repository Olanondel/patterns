var MainPage = /** @class */ (function () {
    function MainPage(theme) {
        this.theme = theme;
    }
    MainPage.prototype.getContent = function () {
        return "MainPage is used in " + this.theme.getColorName() + " color!";
    };
    MainPage.prototype.setTheme = function (theme) {
        this.theme = theme;
    };
    return MainPage;
}());
var WhiteTheme = /** @class */ (function () {
    function WhiteTheme() {
    }
    WhiteTheme.prototype.getColor = function () {
        return '#fff';
    };
    WhiteTheme.prototype.getColorName = function () {
        return 'White';
    };
    return WhiteTheme;
}());
var DarkTheme = /** @class */ (function () {
    function DarkTheme() {
    }
    DarkTheme.prototype.getColor = function () {
        return '#000';
    };
    DarkTheme.prototype.getColorName = function () {
        return 'Dark';
    };
    return DarkTheme;
}());
var mainPage = new MainPage(new WhiteTheme());
console.log(mainPage.getContent());
mainPage.setTheme(new DarkTheme());
console.log(mainPage.getContent());
