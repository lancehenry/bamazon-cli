// Require the mysql database
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
});

connection.connect(function(err) {
    console.log("Connected as id: " + connection.threadId);
});

var queryString = "SELECT * FROM bamazon.products";

connection.query(queryString, function(err, rows, fields) {
    if (err) throw err;
 
    for (var i in rows) {
        console.log("Product " + rows[i].id + ": " + rows[i].product_name);
    }
});
 
connection.end();


// var start = function() {
//     inquirer.prompt({
//         name: "postOrBid",
//         type: "rawlist",
//         message: "Would you like to [POST] or [BID]?",
//         choices: ["POST", "BID"]
//     }).then(function(answer){
//         if (answer.postOrBid.toUpperCase() == "POST") {
//             console.log("success");
//         } else {
//             console.log("failure");
//         }
//     })
// }
