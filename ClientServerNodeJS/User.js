/**
 * Created by AlejandroFrech on 11/19/2015.
 */

var method = User.prototype;

function User(username, name, email, cedula, fecha,img){
    this.Username = username;
    this.Name = name;
    this.Email = email;
    this.Cedula = cedula;
    this.Fecha = fecha;
    this.Img = img;
}

method.toStr=function(){
    var userToString= this.Username+','+this.Name+','+this.Email+','+this.Cedula+','+this.Fecha+','+this.Img;
    return userToString;
};

module.exports = User;


