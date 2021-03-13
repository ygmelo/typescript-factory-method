var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car;
(function (Car) {
    Car[Car["HONDA"] = 0] = "HONDA";
    Car[Car["AUDI"] = 1] = "AUDI";
})(Car || (Car = {}));
var CarPart = /** @class */ (function () {
    function CarPart() {
    }
    CarPart.getFactory = function (key) {
        var hondaFactory = new HondaFactory();
        var audiFactory = new AudiFactory();
        switch (key) {
            case Car.HONDA: {
                return hondaFactory;
                break;
            }
            case Car.AUDI: {
                return audiFactory;
                break;
            }
        }
    };
    return CarPart;
}());
var HondaFactory = /** @class */ (function (_super) {
    __extends(HondaFactory, _super);
    function HondaFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HondaFactory.prototype.getLeftDoor = function () {
        return new HondaLeftDoor();
    };
    HondaFactory.prototype.getRightDoor = function () {
        return new HondaRightDoor();
    };
    return HondaFactory;
}(CarPart));
var HondaLeftDoor = /** @class */ (function () {
    function HondaLeftDoor() {
    }
    HondaLeftDoor.prototype.makePart = function () {
        return "Im honda left door";
    };
    return HondaLeftDoor;
}());
var HondaRightDoor = /** @class */ (function () {
    function HondaRightDoor() {
    }
    HondaRightDoor.prototype.makePart = function () {
        return "Im honda right door";
    };
    return HondaRightDoor;
}());
var AudiFactory = /** @class */ (function (_super) {
    __extends(AudiFactory, _super);
    function AudiFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AudiFactory.prototype.getLeftDoor = function () {
        return new AudiLeftDoor();
    };
    AudiFactory.prototype.getRightDoor = function () {
        return new AudiRightDoor();
    };
    return AudiFactory;
}(CarPart));
var AudiLeftDoor = /** @class */ (function () {
    function AudiLeftDoor() {
    }
    AudiLeftDoor.prototype.makePart = function () {
        return "Im Audi left door";
    };
    return AudiLeftDoor;
}());
var AudiRightDoor = /** @class */ (function () {
    function AudiRightDoor() {
    }
    AudiRightDoor.prototype.makePart = function () {
        return "Im Audi right door";
    };
    return AudiRightDoor;
}());
var factory = CarPart.getFactory(Car.HONDA);
var rightdoor = factory.getRightDoor();
var leftdoor = factory.getLeftDoor();
console.log(rightdoor.makePart(), "\n", leftdoor.makePart());
factory = CarPart.getFactory(Car.AUDI);
rightdoor = factory.getRightDoor();
leftdoor = factory.getLeftDoor();
console.log(rightdoor.makePart(), "\n", leftdoor.makePart());
