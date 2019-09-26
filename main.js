"use strict";
exports.__esModule = true;
var Rectangle = /** @class */ (function () {
    function Rectangle(px, py, h, w) {
        this.posX = px;
        this.posY = py;
        this.height = h;
        this.width = w;
    }
    Rectangle.prototype.setposX = function (px) {
        this.posX = px;
    };
    Rectangle.prototype.getposX = function () {
        return this.posX;
    };
    Rectangle.prototype.setposY = function (py) {
        this.posY = py;
    };
    Rectangle.prototype.getposY = function () {
        return this.posY;
    };
    Rectangle.prototype.setheight = function (h) {
        this.height = h;
    };
    Rectangle.prototype.getheight = function () {
        return this.height;
    };
    Rectangle.prototype.setwidth = function (w) {
        this.width = w;
    };
    Rectangle.prototype.getwidth = function () {
        return this.width;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
var Rectangle1 = new Rectangle(7, 5, 3, 7);
Rectangle1.setposX(150);
console.log(Rectangle1.getposX());
console.log(Rectangle1);
