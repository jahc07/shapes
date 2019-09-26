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
    Rectangle.prototype.getArea = function () {
        var area = this.height + this.width;
        return area;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
var Rectangle1 = new Rectangle(7, 5, 3, 7);
Rectangle1.setposX(150);
console.log(Rectangle1);
console.log(Rectangle1.getposX());
var Squard = /** @class */ (function () {
    function Squard(px, py) {
        this.posX = px;
        this.posY = py;
    }
    Squard.prototype.setposX = function (px) {
        this.posX = px;
    };
    Squard.prototype.getposX = function () {
        return this.posX;
    };
    Squard.prototype.setposY = function (py) {
        this.posY = py;
    };
    Squard.prototype.getposY = function () {
        return this.posY;
    };
    return Squard;
}());
exports.Squard = Squard;
var Squard1 = new Squard(10, 5);
Squard1.setposX(60);
console.log(Squard1);
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.contructor = function (r) {
        this.radio = r;
    };
    Circle.prototype.setradio = function (r) {
    };
    Circle.prototype.getradio = function () {
        return this.radio;
    };
    return Circle;
}());
exports.Circle = Circle;
var Circle1 = new Circle();
Circle1.setradio(24);
console.log(Circle1);
var Sector = /** @class */ (function () {
    function Sector(ax, ry) {
        this.angX = ax;
        this.radY = ry;
    }
    Sector.prototype.getangX = function () {
        return this.angX;
    };
    Sector.prototype.setradY = function (ry) {
        this.radY = ry;
    };
    Sector.prototype.getradY = function () {
        return this.radY;
    };
    return Sector;
}());
exports.Sector = Sector;
var Sector1 = new Sector(12, 34);
Sector1.setradY(40);
console.log(Sector1);
