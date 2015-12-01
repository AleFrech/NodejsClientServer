/**
 * Created by AlejandroFrech on 11/19/2015.
 */

function StartClient() {
    var s = require('net').Socket();
    s.connect(8888);
    return s;

}
function HandleClient (){
    this.SartClient = StartClient

}

exports.HandleClient = HandleClient;