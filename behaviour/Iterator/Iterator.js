var Iterator = /** @class */ (function () {
    function Iterator(items) {
        this.items = items;
        this.index = 0;
    }
    Iterator.prototype.next = function () {
        return this.items[this.index++];
    };
    Iterator.prototype.hasNext = function () {
        if (this.index < this.items.length) {
            return this.index < this.items.length;
        }
        this.index = 0;
    };
    return Iterator;
}());
var items = ['My', 'name', 'is', '"name"', '!'];
var iterator = new Iterator(items);
while (iterator.hasNext()) {
    console.log(iterator.next());
}
console.log(iterator.index);
