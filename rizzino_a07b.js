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
//buildFoodsList function has 5 items to be passed to the badFoods array.

standardInput.on('data', function (text) {
    //This line will remove line breaks 
    //\n\r in window, \r in macOS
    text = text.replace('\n', '').replace('\r', '');
    //Step 4 Begin
    if (text == "Q")
    //if statement for text equal to "Q" will clear the screen, say "Bye", and end the program.
    {
        clearScreen();
        console.log("Bye");
        process.exit();
    } else 
    //else statment for when text is something other than "Q" will clear the screen and perform checkItem function.
    {
        clearScreen();
        checkItem(text,badFoods);
        if (checkItem() == false)
        //if checkItem function returns false the text will be formated in the formatItem function, then added to the groceryList array, and output message for item added to list followed by the getPrompt function.
        {
            formatItem(text);
            groceryItem.push(groceryItems());
            console.log(`Item added to list!

List contains ${groceryItems.length} items`);
getPrompt();
        } else if (checkItem() == true) 
        //if checkItem function returns true the text will not be added and an error message will output followed by the getPrompt function.
        {
            console.log(`Error: that item is not safe for your allergies.
It has not been added to your grocery list.`);
getPrompt();
        } else 
        //if another response returns from the checkItem function it will output the getPrompt function as default.
        {
            getPrompt();
        }
    }
    
    //Step 4 End
});

/* DEFINE YOUR FUNCTIONS BETWEEN THIS LINE */

//Step 2

function buildFoodsList(badFoods, args) 
//the buildFoodsList function is building the badFoods array with a varible number of arguments. It will then iterate through the number of arguments and add them to the badFoods array.
{
    function rest(...args){
        return args;
    }
    for (var i = 0; i < badFoods.length; i++) {
        args = badFoods[i];
    }
}

function getPrompt(groceryItems) 
//the getPrompt function will output a message that says how many items are in your groceryList and will ask for items to be entered or give you the option to quit the program.
{
    console.log(
`Your grocery list contains ${groceryItems.length} items. 
Please enter a grocery item. 
Enter Q to quit 
======================`);
}

//Step 3

function checkItem(text,badFoods) 
//the checkItem function iterates through the badFoods array and compares the text entered to see if they match any of the badFoods items.  The text and badFoods items are changed to uppercase for comparing. If there is a match the if else statement will return true otherwise it will return false.
{
    for (var i = 0; i < badFoods.length; i++) {
        text.toUpperCase();
        badFoods[i].toUpperCase();
        text.includes(badFoods[i]);
        if (text.includes(badFoods[i] == true)){
            return true;
        } else {
            return false;
        }
    }
}

function formatItem(text)
//the formatItem funtion takes the text variable and trims off any extra spaces and capitalizes the first letter of the word.
{
    text.trim();
    const groceryItem = text.charAt(0).toUpperCase() + text.slice(1);

}

/* AND THIS LINE */

function clearScreen() {
    console.log('\033[2J');
}