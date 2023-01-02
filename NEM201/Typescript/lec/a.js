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
var a4 = 10;
console.log(a4);
var d = null;
var e = undefined;
var c = true;
var f = [1, 2, 34];
var f1 = [1, 2, 34];
var f2 = ["a", "b", "c"];
var f3 = ["A", "B", "F"];
//array of objects
var i1 = [
    { id: 1, name: "Name 1", employeed: true },
    { id: 2, name: "Name 2", employeed: true },
    { id: 3, name: "Name 3", employeed: true },
];
var i2 = [
    { id: 1, name: "Name 1", employeed: true, age: { value: 20 } },
    { id: 2, name: "Name 2", employeed: true },
    { id: 3, name: "Name 3", employeed: true },
];
//arrray of arary
var t2 = [
    [0, "ad"],
    [1, "adw"],
    [2, "ads"]
];
//or 
var x;
x = 1;
x = "JAVA";
//or opeartor
var v = ["222", 2, "df"];
// {
//     tasks:[]
//     posts:[]
// }
var j = {
    tasks: [],
    posts: []
};
var k1 = {
    tasks: [1, 3, 2],
    posts: [1, 2, 3]
};
//Array of specific strings
var l1 = [
    "India",
    "China"
];
var m1 = [
    { name: "a", age: 22, gender: "Male" },
    { name: "b", age: 23, gender: "Female" },
    { name: "c", age: 24, gender: "Male" },
];
//tuple in js
var h222 = [2, "dbhk"];
var ha1 = [
    [2, "sjbhjkb"]
];
var add = function (a, b) { return a + b; };
add(1, 2);
var dosomething = function (a, b) {
    console.log(a + b);
};
dosomething(1, 1);
var Car = /** @class */ (function () {
    function Car(tyres, engine, engineTypes) {
        this.tyres = tyres;
        this.engine = engine;
        this.engineTypes = engineTypes;
    }
    Car.prototype.getTypes = function () {
        return this.tyres;
    };
    Car.prototype.getEngine = function () {
        return this.engine;
    };
    Car.prototype.getEngineType = function () {
        return this.engineTypes;
    };
    return Car;
}());
var Nexon = /** @class */ (function (_super) {
    __extends(Nexon, _super);
    function Nexon(tyres, engine, engineTypes) {
        return _super.call(this, tyres, engine, engineTypes) || this;
    }
    Nexon.prototype.setTyres = function (newTyresCount) {
        this.tyres = newTyresCount;
    };
    return Nexon;
}(Car));
var india = new Car(4, "3 stroke", ["Petrol", "Diesel", "EV"]);
var nexon = new Car(4, "V8", ["EV"]);
var nexon2 = new Nexon(5, "V8", ["EV"]);
nexon2.setTyres(5);
