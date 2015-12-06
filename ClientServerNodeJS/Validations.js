/**
 * Created by AlejandroFrech on 11/20/2015.
 */

var method = Validations.prototype;

var FileManager = require("./FileManager.js");

function Validations(){}

    method.verifyEmail=function(str){
        var fm= new FileManager();
        if(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str) && fm.isUnique(str,2)){
            return 1;
        }else{
            console.log("Email already taken or not valid");
            return -1;
        }
    }
    method.verifyUser=function(str){
        var fm = new FileManager();
        if(fm.isUnique(str,0)){
            return 1;
        }else{
            console.log("Username already taken");
            return -1;
        }
    }
method.veirfyCedula=function(str){
        var fm= new FileManager();
        if(/\d{4}-\d{4}-\d{5}/.test(str) && fm.isUnique(str,3)){
            return 1;
        }else{
            console.log("Id Number already taken or not valid");
            return -1;
        }

    }
    method.veirfyDate=function(str){
        if(/\d{2}-\d{2}-\d{4}/.test(str)){
            return 1;
        }else{
            console.log("Date is not valid");
            return -1;
        }
    }

module.exports = Validations;

