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
The concept is simple:

* The bamazonCustomer.js command line displays the products available for sale. The customer can enter the Item ID and Quantity. The app checks the database to ensure enough products exists and returns the total price. See below for a gif example:

![alt text](https://github.com/lschmittling/bamazon-cli/blob/master/images/bamazonCust.gif "Logo Title Text 1")
  
  * 'my-tweets'
    * Returns the last 20 tweets from my account
  
  * 'spotify-this-song'
    * Returns information for the title of the song entered
    * If no song is entered, returns 'The Sign' by Ace of Base
  
  * 'movie-this'
    * Returns information for the title of the movie entered
    * If no song is entered, returns 'Mr. Nobody'
  
  * 'do-what-it-says'
    * Reads the file random.txt and executes the command

Struggles
=========
Some of the challenges I encountered:

* getting my tweets to only return the tweet and date
* getting a callback from spotify after installing its npm
* getting the if/else statement to return Ace of Base if no input