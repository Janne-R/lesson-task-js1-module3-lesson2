// question 1
/* Give the below function's name parameter a default value of "John"

function greet(name) {
    return `Hello ${name}!`;
}*/

function greet(name = "John") {
  console.log(name);
  return `Hello ${name}!`;
}

greet();

//question 2
/* Create a reusable function that accepts two parameters, then returns a dynamic HTML <div> element.
The <div> it creates should insert one of the parameters as a class, and the other as the inner value. Similar to the below HTML:

<div class="class">value</div>*/


const divContainer = document.querySelector(".new-div");
const message = acceptsTwoParameters("success", "hello");
divContainer.innerHTML = message;

//question 3
/*Convert the below API call to use a try-catch-finally statement.

async function getFact() {
    const response = await fetch("https://cat-fact.herokuapp.com/facts");
    const results = await response.json();
    console.log(results[8].text);
}*/

async function getFact() {
  try {
    const response = await fetch("https://cat-fact.herokuapp.com/facts");
    const results = await response.json();
    console.log(results[8].text);
  }
  catch (error) {
    console.log("an error occurred");
  }
  finally {
    console.log("This will run wheter there is an error or not");
  }

}

getFact();