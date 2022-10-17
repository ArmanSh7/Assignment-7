/*eslint-env browser*/
function menu(){
    "use strict";
    window.console.log("Welcome to the Inventory Management System\n");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products");
    window.console.log("update - update an existing product’s inventory (quantity)");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

function view(inventory) {
    "use strict";
    inventory.forEach(function (product) {
        window.console.log(String(product[0]) + " " +product[1] +"("+String(product[2])+") $"+ String(product[3]));
    });
    window.console.log("");
}
function update(inventory) {
    "use strict";
    var productSkuNum = window.prompt("Please enter the product sku number:");
    var newQuantity = window.prompt("Please enter the new quantity for the product:");
    var updated = false;
    for(var index in inventory){
        if(inventory[index][0]== productSkuNum){
            inventory[index][2] = newQuantity;
            window.console.log("Quantity of the product "+inventory[index][2] + " with Sku number " + productSkuNum+ " is updated!");
            updated = true;
        }
    }

    if(updated == false)
        window.console.log("Product Not fund!")

    window.console.log("");
}

function main() {
    "use strict";
    var command;
    var inventory = [[4824, "Shirt", 10, 15.99],
    [6343, "Jeans", 22, 39,99],
    [3223, "Socks", 36, 9.99],
    [2233, "Hat", 12, 14.99],
    [9382, "Jacket", 5, 49.99]
    ]
     
    menu();
    var quit =0;
    while (quit != 1) {
        command = window.prompt("Please enter your command");
        if (command !== null) {
            switch(command){
                case "view":
                    view(inventory);
                    break;
                case "update":
                    update(inventory);
                    break;
                case "exit":
                    quit = 1;
                    break;
                default:
                    window.alert("That is not a valid command.");
                    command = window.prompt("Enter 1 if you want to quit!");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}
main();