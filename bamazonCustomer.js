// Require the mysql database
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    console.log("Connected as id: " + connection.threadId);
}); 