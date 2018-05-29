/*
Program : Interface & Classe
Écrit par : Dan Duc Dao
*/
var Admin = /** @class */ (function () {
    function Admin(nom, prenom) {
        this.Nom = nom;
        this.Prenom = prenom;
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
        var info = "Nom complet : " + this.Prenom + " " + this.Nom + "\n";
        info += "User name : " + this.UserName + "\n";
        info += "Password : " + this.Password;
        return info;
    };
    return Admin;
}());
var admin = new Admin('Doe', 'Jonh');
admin.UserName = "Jonh.Doe@exemple.com";
admin.Password = "1234";
console.log(admin.getAdmminInfo());
