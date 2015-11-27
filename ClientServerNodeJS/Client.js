/**
 * Created by AlejandroFrech on 11/19/2015.
 */

var method = Cliente.prototype;

function Cliente(){}
method.iniciateClient = function(){
    var s = require('net').Socket();
    s.connect(8888);
    return s;
}
module.exports = Cliente