/*
* Excercise 1
*
*/

const colorBlock = document.querySelector("#color-block");
const colorName = colorBlock.querySelector("#color-name");

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    //Write a condition determine what color it should be changed to
    let curColor = getComputedStyle(colorBlock).backgroundColor;

    if (curColor === 'rgb(240, 128, 128)'){
        //change the background color using JS
        colorBlock.setAttribute("style", "background-color: #0000FF");
        //Change the text of the color using the span id color-name
        colorName.textContent = '#0000FF';
    }
    else{
        //change the background color using JS
        colorBlock.setAttribute("style", "background-color: #F08080");
        //Change the text of the color using the span id color-name
        colorName.textContent = '#F08080';

    }
}

colorBlock.addEventListener('click', e => {
    changeColor();
})


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/
const submit = document.querySelector("#convertbtn");

function convertTemp(){
    //Calculate the temperature here
    //Send the calculated temperature to HTML
    const fahrenheit = parseFloat(document.querySelector("#f-input").value)

    if (!isNaN(fahrenheit)) {
        let celsius = (fahrenheit - 32) * 5 / 9;
        celsius = Math.round(celsius * 100) / 100
        console.log(celsius)
        document.querySelector("#c-output").textContent = celsius.toString();
    }


}

submit.addEventListener('click', convertTemp)
