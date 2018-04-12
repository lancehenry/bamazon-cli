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

    // Using npm cli-table for table layout in console
    var table = new Table({
      head: ["Item ID", "Product", "Price"],
      colWidths: [10, 20, 10]
    });

    // Loop through results and push them to the cli-table
    for (var i = 0; i < res.length; i++) {
      table.push([res[i].item_id, res[i].product_name, res[i].price]);
    }
    console.log(table.toString() + "\n");
    promptUser();
  });
}

function promptUser() {
  inquirer
    .prompt([
    {
        type: "input",
        name: "itemID",
        message: "What's the ID of the product you'd like to buy?"
    },
	{
        type: "input",
        name: "quantity",
        message: "How many would you like to buy?"
    }
    ])
    .then(function(answers) {
    	connection.query("SELECT * FROM products WHERE item_id= " + answers.itemID, function(err, res) {
			if (err) throw err;
			if (answers.quantity <= res[0].stock_quantity) {

        // Calculates Total price for amount of items purchased
				var totalPrice = (parseInt(answers.quantity * res[0].price));
				console.log("\n--------------------------------------------");
				console.log("\nThank you for your purchase!\nYour total for " + answers.quantity + " items is $" + totalPrice + ".\n");
        console.log("--------------------------------------------\n");

        // Stored new quantity in a variable. This is the only way I got the query to update below.
        var updateQuantity = (res[0].stock_quantity - answers.quantity);

        // Updates MySql database with entered quantities
        connection.query("UPDATE products SET stock_quantity=? WHERE item_id=?", [updateQuantity, answers.itemID]);
        donePurchasing();
			} else {
				console.log("\n--------------------------------------------");
				console.log("\nINSUFFICIENT QUANTITY!\n");
				console.log("--------------------------------------------\n");
				readProducts();
			}
		})
  });
}

function donePurchasing() {
  inquirer.prompt([
    {
      type: "list",
      name: "finished",
      message: "Are you done purchasing?",
      choices: ["Yes", "No"]
    }
  ])
  .then(function(answers) {
    if (answers.finished === "No") {
      readProducts();
    } else {
      console.log("\n--------------------------------------------");
			console.log("\nCOME BACK SOON!\n");
			console.log("--------------------------------------------\n");
      connection.end();
    }
  }) 
}
