var mysql = require('mysql');
var inquirer = require('inquirer');
var prompt = require('prompt');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "",
    database: "bamazon_DB"
}); //end of var connection

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
}); //end of connect

function afterConnection() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log('Bamazons inventory');
        for (var i = 0; i < res.length; i++) {
        console.log("Item ID: " + res[i].id + " | Product: " + res[i].product_name + " | Department: " + res[i].department_name + " | Price: " + res[i].price + " | Quantity: " + res[i].stock_quantity);
    }
});
    order();
} //end of afterConnection function


    function order() {
        inquirer
            .prompt([{
                    name: "item",
                    type: "input",
                    message: "What is the item you would like to buy?"
                },
                {
                    name: "quantity",
                    type: "input",
                    message: "How many would you like to buy?"
                },

            ])
            .then(function(answer) {

                        connection.query(
                        'select * from products WHERE id = ' + answer.item, function(err, res){
                          if (err) throw err;
                          console.log(res[0].stock_quantity); 
                          if (res[0].stock_quantity< answer.quantity) {
                            console.log('sorry insufficent quantity');
                          } else {
                            totalCost(res[0].id,res[0].stock_quantity,answer.quantity,res[0].price);
                            connection.query('UPDATE products SET stock_quantity WHERE id =' + stock_quantity - answer.quantity,function(err, res){
                                console.log('Stock has been updated!')
                            });
                          } 
                        } 

        )
    });
        }

        function totalCost(item_id, stock_quantity,userQuantity,price){
            var totalCost = userQuantity * price
            console.log('Your total is; '+ totalCost);

        }

        // function updateQuantity (item_id, stock_quantity,userQuantity){
        //     var updateQuantity = stock_quantity - userQuantity
        //     console.log(updateQuantity);
        // }






