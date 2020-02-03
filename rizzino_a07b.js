/* Julie Rizzino
rizzino_a07b.js
INFO 2124
Thoendel
1/29/20 */

/* DO NOT MODIFY CODE BETWEEN THESE LINES */
const standardInput = process.stdin;            
standardInput.resume();
standardInput.setEncoding('utf8');
const badFoods = [];
const groceryItems = [];
clearScreen();
console.log(getPrompt(groceryItems));
/* DO NOT MODIFY CODE BETWEEN THESE LINES */

//Step 1
buildFoodsList (badFoods, "bread", "pasta", "pizza", "fries", "candy");          

standardInput.on('data', function (text) {
    //This line will remove line breaks 
    //\n\r in window, \r in macOS
    text = text.replace('\n', '').replace('\r', '');
    //Step 4 Begin

    
    //Step 4 End
});

/* DEFINE YOUR FUNCTIONS BETWEEN THIS LINE */

//Step 2

function buildFoodsList(badFoods, args) {
    function rest(...args){
        return args;
    }
    for (var i = 0; i < badFoods.length; i++) {
        args = badFoods[i];
    }
}

function getPrompt(groceryItems) {
    console.log(
`Your grocery list contains ${groceryItems.length} items. 
Please enter a grocery item. 
Enter Q to quit 
======================`);
}

//Step 3


/* AND THIS LINE */

function clearScreen() {
    console.log('\033[2J');
}