// Require the mysql database
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

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
    
    var table = new Table({
        head: ["Item ID", "Product", "Price"],
        colWidths: [10, 20, 10],
        style: {
            head: ["green"],
        }
    });

    for (var i = 0; i < res.length; i++) {
        table.push(
            [res[i].item_id, res[i].product_name, res[i].price]
        );
    }
    console.log(table.toString() + "\n");
    promptUser();
  });
}

function promptUser() {
    inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "What's the ID of the product you'd like to buy?"
        },
        {
            type: "input",
            name: "units",
            message: "How many would you like to buy?"
        }
    ]).then(answers => {
        connection.query("SELECT * FROM products WHERE item_id=?", ["answers.units"], function(err, res) {
            if (err) throw err;
            if (answers.units > res.stock_quantity) {
                console.log("INSUFFICIENT QUANTITY!");
                promptUser();
            } else {
                console.log(answers.id);
                console.log(answers.units);
                console.log("it worked");
            }
            connection.end();
        });
    });
}


// console.log("--------------------------------------------");
    // console.log("ITEMS FOR SALE");
    // console.log("--------------------------------------------\n");
    // for (var i = 0; i < res.length; i++) {
    //   console.log("ID: " + res[i].item_id + " | Item: " + res[i].product_name + " | Price: $" + res[i].price);
    // }
    // console.log("\n--------------------------------------------\n")
    // promptUser();