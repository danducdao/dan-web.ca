"use strict";
/*
Program : Inheritance classe
Écrit par : Dan Duc Dao
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(nom, prenom) {
        return _super.call(this, nom, prenom) || this;
    }
    Object.defineProperty(Admin.prototype, "UserName", {
        get: function () {
            return this.userName;
        },
        set: function (username) {
            this.userName = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Admin.prototype, "Password", {
        get: function () {
            return this.password;
        },
        set: function (password) {
            this.password = password;
        },
        enumerable: true,
        configurable: true
    });
    Admin.prototype.getAdmminInfo = function () {
        var info = "Nom complet : " + _super.prototype.getNomComplete.call(this) + "\n";
        info += "User name : " + this.UserName + "\n";
        info += "Password : " + this.Password;
        return info;
    };
    return Admin;
}(Person_1.Person));
var admin = new Admin('Doe', 'Jonh');
admin.UserName = "JonhDoe@exemple.com";
admin.Password = "1234";
console.log(admin.getAdmminInfo());
