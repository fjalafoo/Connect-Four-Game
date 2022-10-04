//identifiy the elements in js 
//making a board and all circles clickable
let gameboard = document.querySelector('.circles')

 
gameboard.addEventListener('click', handleClick)

let p1 = 'p1'
let p2 = 'p2'
let currentPlayer = p1

function handleClick(event){
    // console.log(event.target.id)
    // console.log(event.target)
   //let i = event.target.id
    let token=document.getElementById(event.target.id)
    // token.src=('p1.svg')
   
    if(currentPlayer==p1){
        token.src=('p1.svg')
        currentPlayer=p2
        
    }
    else {
        token.src=('p2.svg')
        currentPlayer=p1
    }

    console.log(currentPlayer)

    // let i = event.target.id
    // let token=document.getElementById(i)
    // token.src=('p1.svg')

    // token.src=('p2.svg')



    for(let j=0; j<42; j++){
        //we have 42 circles, so 42 turns, will switch between them using for-loop
        
        // if(j%2==0){
        //     token.src=('p1.svg')
        //     console.log(j%2)
            
        // }
        // else if(j%2!=0) {
        //     token.src=('p2.svg')
        //     console.log(j%2)
           
        // }
    }
 
}


//create const for winning combos
//if img.id is equal to the array combo then win
//added vertical and horizental wins
const winningCombos=[
    [1,2,3,4],
    [2,3,4,5],
    [3,4,5,6],
    [4,5,6,7],
    [8,9,10,11],
    [9,10,11,12],
    [10,11,12,13],
    [11,12,13,14],
    [15,16,17,18],
    [16,17,18,19],
    [17,18,19,20],
    [18,19,20,21],
    [22,23,24,25],
    [23,24,25,26],
    [24,25,26,27],
    [25,26,27,28],
    [29,30,31,32],
    [30,31,32,33],
    [31,32,33,34],
    [32,33,34,35],
    [36,37,38,39],
    [37,38,39,40],
    [38,39,40,41],
    [39,40,41,42],
   [1,8,15,22],
   [8,15,22,29],
   [15,22,29,36],
   [2,9,16,23],
   [9,16,23,30],
   [16,23,30,37],
  [3,10,17,24],
  [10,17,24,31],
  [17,24,31,38],
  [4,11,18,25],
  [11,18,25,32],
  [18,25,32,39],
  [5,12,19,26],
  [12,19,26,33],
  [19,26,33,40],
  [6,13,20,27],
  [13,20,27,34],
  [20,27,34,41],
  [7,14,21,28],
  [14,21,28,35],
  [21,28,35,42],
  [15,23,31,39],
  [8,16,24,32],
  [16,24,32,40],
  [1,9,17,25],
  [9,17,25,33],
  [17,25,33,41],
  [2,10,18,26],
  [10,18,26,34],
  [18,26,34,42],
  [3,11,19,27],
  [11,19,27,35],
  [4,12,20,28],
  [21,27,33,39],
  [14,20,26,32],
  [20,26,32,38],
  [7,13,19,25],
  [13,19,25,31],
  [19,25,31,37],
  [6,12,18,24],
  [12,18,24,30],
  [18,24,30,36],
  [5,11,17,23],
  [11,17,23,29],
  [4,10,16,22]

]
//console.log(winningCombos) --> 69 winning combos


//Changing the token

function updateToken1(event){

    let i = event.target.id
    let token=document.getElementById(i)
    token.src=('p1.svg')
   

}

function updateToken2(event){
    let i = event.target.id
    let token=document.getElementById(i)
    token.src=('p2.svg')
   

}

/**
make player turn, then make two types of images one for player 1 and one for player 2, 
then a function to check first empty circle in the column

if the event.target.id was 1,8,15, 22, 29, 36 => then we will check if 36 is filled or not, if it is filled
it will go to the one above it, if it is empty it will insert the token of the current player
 */







//start game function

//restart function

