/**
 * Created by AlejandroFrech on 11/16/2015.
 */
    var readline = require('readline');
    var Client = require("./Client.js");
    var Validations= require("./Validations.js");
    var val= new Validations();
    var User =require("./User.js");
    var c = new Client();
    var client= c.iniciateClient();
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

        var readline = require('readline'), rl = readline.createInterface(process.stdin, process.stdout);
        rl.setPrompt("    1) Add User\n" +
            "    2) Show User\n" +
            "    3) Delete User\n" +
            "    4) Send user to Email\n" +
            "    5) Exit...\n" +
            "    Choose a option ");
        rl.prompt();
        rl.on('line', function (line) {
            switch (line.trim()) {
                case '1':
                    var username = "", name = "", email = "", cedula = "", date = "", img = "";
                    rl.question('    Enter Username: ', function (u) {
                        username = u;
                        rl.question('    Enter Name: ', function (n) {
                            name = n;
                            rl.question('    Enter Email: ', function (e) {
                                email = e;
                                rl.question('    Enter Id number: ', function (c) {
                                    cedula = c;
                                    rl.question('    Enter birth date : ', function (d) {
                                        date = d;
                                        rl.question('    Enter Img Url: ', function (i) {
                                            img = i;
                                            if ((val.verifyUser(username) == 1 ) && (val.verifyEmail(email) == 1) && (val.veirfyCedula(cedula) == 1) && (val.veirfyDate(date) == 1)) {
                                                var user = new User(username, name, email, cedula, date, img);
                                                client.write('Add' + "\n" + user.toStr());
                                                client.on('data', function (data) {
                                                    console.log(data.toString());
                                                    if (data.toString() === 'Yes') {
                                                        console.log("User added successfully!!!");
                                                    } else {
                                                        console.log("Error User not added!!!");
                                                    }
                                                   // client.destroy(); // kill client after server's response
                                                });
                                                client.on('delete',function(del){
                                                    console.log(del)
                                                });
                                            }
                                            rl.close();
                                        });
                                    });
                                });
                            });
                        });
                    });
                    break;
                case '2':
                    var username ="";
                    rl.question('    Enter Username to Show : ', function (u) {
                        username = u;
                        client.write('ShowUser' + "\n" + username);
                        client.on('data', function (data) {
                            console.log(data.toString());
                            if (data.toString() === ' ') {
                                console.log("User not in database!!!");
                            } else {
                                var tokens=data.toString().split(',');
                                console.log("----User Info--------")
                                console.log("   Username : "+tokens[0])
                                console.log("   Name : "+tokens[1])
                                console.log("   Email : "+tokens[2])
                                console.log("   Identity Card : "+tokens[3])
                                console.log("   Birth Date  : "+tokens[4])
                            }
                           // client.destroy(); // kill client after server's response
                        });
                        client.on('delete',function(del){
                            console.log(del)
                        });
                        rl.close();
                    });
                    break;
                case '3':
                    var username ="";
                    rl.question('    Enter Username to Delete : ', function (u) {
                        username = u;
                        client.write('DeleteUser' + "\n" + username);
                        client.on('data', function (data) {
                            console.log(data.toString());
                            if (data.toString() === 'Yes') {
                                console.log("User deleted successfully!!!");
                            } else {
                                console.log("Error User does not exist!!!");
                            }
                            //client.destroy(); // kill client after server's response
                        });
                        rl.close();
                        client.on('delete',function(del){
                            console.log(del)
                        });
                    });
                    break;
                case '4':
                    var username="";
                    var email="";
                    rl.question('    Enter username to send info : ', function (u) {
                        username=u;
                        rl.question('    Enter email : ', function (e) {
                            email = e;
                            client.write('SendEmail' + "\n" + username+"\n"+email);
                            client.on('data', function (data) {
                                console.log(data.toString());
                                if (data.toString() === 'Yes') {
                                    console.log("Email sent  successfully!!!");
                                } else {
                                    console.log("Error email not added!!!");
                                }
                                   //client.destroy(); // kill client after server's response
                                });
                            rl.close();
                            client.on('delete',function(del){
                                console.log(del)
                            });
                        });
                    });
                    break;
                case '5':
                    process.exit(0)
                    break;
            }
        }).on('close', function () {
            process.exit(0);
        });