// Require the mysql database
var mysql = require("mysql");
var inquirer = require("inquirer");
// var cTable = require('console.table');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  console.log("Connected as id: " + connection.threadId + "\n");
  readProducts();
});

// Read the products from the MySQL database
function readProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log("---------------------------------------");
    console.log("ITEMS FOR SALE");
    console.log("---------------------------------------");
    for (var i = 0; i < res.length; i++) {
      console.log("ID: " + res[i].item_id + " | Item: " + res[i].product_name + " | Price: $" + res[i].price);
    }
    console.log("---------------------------------------\n")
    connection.end();
  });
}
