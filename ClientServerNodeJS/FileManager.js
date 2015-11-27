/**
 * Created by AlejandroFrech on 11/19/2015.
 */

var method = FileManager.prototype;

function FileManager(){}
var fs = require('fs');

    method.writeUser = function(user){
        var x=fs.appendFileSync('Data.txt', user+'\n','utf8');
        if(x === undefined){
            return true;
        }else{
            return false;
        }
    }

    method.reWriteFile=function(){
        fs.open('Data.txt','w');
        fs.write(' ');
        fs.close();
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
        var userlist=users.split("\n");
        var list=' ';
        for(var u in userlist) {
            if(userlist[u]!='')
                list+=userlist[u];
        }
        return list;
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
