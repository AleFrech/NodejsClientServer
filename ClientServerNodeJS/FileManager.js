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

    method.searchUser=function(username){
        var users = fs.readFileSync('Data.txt',"utf8");
        var userlist=users.split("\n");
        for(var line in userlist) {
            if(userlist[line].includes(username)){
                return userlist[line];
            }
        }
        return ' ';
    }

    method.getUsers=function(){
        var users = fs.readFileSync('Data.txt',"utf8");
        return users;
    }

    method.isUnique=function(str) {
        var users = fs.readFileSync('Data.txt',"utf8");
        var userlist=users.split("\n");
        for(var i=0;i<userlist.length;i++){
            if(userlist[i].includes(str))
                return false;
        }
        return true;
    }

module.exports = FileManager;
