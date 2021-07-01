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
var Mediator = /** @class */ (function () {
    function Mediator(button, modal) {
        this.button = button;
        this.modal = modal;
    }
    Mediator.prototype.notify = function (sender, event) {
        if (sender === this.button && event === 'click') {
            this.button.state = false;
            this.modal.display = 'block';
            console.log('Mediator switch states');
        }
        else if (sender === this.modal && event === 'click') {
            this.modal.display = 'none';
            this.button.state = true;
            console.log('Mediator switch states');
        }
    };
    return Mediator;
}());
var Component = /** @class */ (function () {
    function Component() {
        this.mediator = null;
    }
    Component.prototype.click = function () {
        this.mediator.notify(this, 'click');
    };
    return Component;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = true;
        return _this;
    }
    return Button;
}(Component));
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.display = 'none';
        return _this;
    }
    return Modal;
}(Component));
var btn = new Button();
var modal = new Modal();
var mediator = new Mediator(btn, modal);
btn.mediator = mediator;
modal.mediator = mediator;
btn.click();
modal.click();
