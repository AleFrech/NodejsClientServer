/**
 * Created by AlejandroFrech on 11/19/2015.
 */

var method = FileManager.prototype;

function FileManager(){}
var fs = require('fs');

    method.writeUser = function(user){

        fs.appendFile('Data.txt',user+"\n",'utf8',function (err) {
            if (err)
                return err.toString();
            else
                return "Yes";

        });
    }

    method.reWriteFile=function(){
        fs.open('Data.txt','w',function(err,fd) {
            fs.write(" ");
            fs.close(fd,function(err){

            });
        });
    }


    method.getUsers=function(){
        var users = fs.readFileSync('Data.txt',"utf8");
        return users;
    }

    method.searchUser=function(username){
    var users =this.getUsers();
    var userlist=users.split("\n");
    for(var usr in userlist) {
        var tokens=userlist[usr].split(",");
        if(tokens[0]==username){
            return userlist[usr];
        }
    }
    return ' ';
}

    method.isUnique=function(str,pos) {
        var users =this.getUsers();
        var userlist=users.split("\n");
        if (userlist.length<=1)
            return true;
        for(var usr in userlist) {
            var tokens=userlist[usr].split(",");
            if (tokens.length<=1)
                return true;
            if(tokens[pos]==str){
                return false;
            }
        }
        return true;
    }

module.exports = FileManager;
