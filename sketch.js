
let canvasWidth = window.innerWidth
let canvasHeight = window.innerHeight
let c
let waveHeight = canvasHeight/4
let back = 50

//import { readFileSync } from 'fs'
const fileName = 'all_cards.txt';
const word = /\r\n\r\n\r\n/;

let deckStr = " ";

let on =1;

function preload(){
    crack_pack()
}
function crack_pack(){
    fetch(fileName)
    .then(response => response.text())
    .then(fullText => {
        // Split contents using the specified word
        const contents = fullText.split(word);
        //console.log(contents)

        // Randomly pick cards
        const packCards = [];
        for (let i = 0; i < 15; i++) {
            packCards.push(contents[Math.floor(Math.random() * contents.length)]);
            //console.log(packCards)
        }
        const separator = "\n";

        deckStr = packCards.join(separator);

        // Do something with packCards
        console.log(deckStr);
    })
    .catch(error => console.error('Error reading file:', error));

}

function setup(){
    createCanvas(canvasWidth, canvasHeight)
    noStroke()
}


function draw(){
    if(deckStr != " "){
        if (on == 1){
            background(220);
            fill(0); // Set text color to black
            textSize(32); // Set text size

            console.log(deckStr);
            // Display the text at position (x, y)
            text(deckStr, 50, 100);
            on=0
        }
    }


} 
function mousePressed(){
    crack_pack()
    on=1
}


