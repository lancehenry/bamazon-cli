# bamazon-cli

Bamazon is an Amazon-like storefront using node and a MySQL database. The bamazonCustomer.js app displays the products from the database to the customer who can then enter the Item ID and Quantity. It will return either "Insufficient Quantity" or complete the purchase. The bamazonManager.js app allows the manager to perform numerous managerial duties: View Products for Sale, View Low Inventory, Add to Inventory, Add New Products. See below for the app in action with some gif examples.

# Table of Contents

<!--ts-->
* [Table of Contents](#table-of-contents)
* [Philosophy](#philosophy)
* [Struggles](#struggles)
  <!--te-->

Philosophy
==========
Bamazon Customer:

* Using the command line, the bamazonCustomer.js displays the products available for sale. The customer can enter the Item ID and Quantity. The app checks the database to ensure enough products exists and returns the total price.

![alt text](https://github.com/lschmittling/bamazon-cli/blob/master/images/bamazonCust.gif "bamazonCustomer")

Bamazon Manager:

* Using the command line, the bamazonManager.js allows the Manageer full control of the products in their MySQL database. The Manager is able to achieve the following:

  * View Products for Sale
    * Displays all of the products for sale in a table.

  * View Low Inventory
    * This displays all of the products with less than 20 items (low inventory).

![alt text](https://github.com/lschmittling/bamazon-cli/blob/master/images/bamazonMan1.gif "bamazonManager1")
  
  * Add to Inventory
    * Select the Item by ID and add product to the inventory.

![alt text](https://github.com/lschmittling/bamazon-cli/blob/master/images/bamazonMan2.gif "bamazonManager1")

  * Add New Product
    * Add an item to the database.

![alt text](https://github.com/lschmittling/bamazon-cli/blob/master/images/bamazonMan3.gif "bamazonManager1")

Struggles
=========
Some of the challenges I encountered:

* getting the functionality correct to subtract quantity from the specific ItemID
* getting my 'INSERT' query correct for MySQL to add inventory