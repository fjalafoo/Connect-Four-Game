//identifiy the elements in js 
//making a board and all circles clickable
let gameboard = document.querySelector('.circles')

let myarr = []

// updateToken()



gameboard.addEventListener('click', handleClick)

function handleClick(event){
    console.log(event.target.id)

    let i = event.target.id
    let token=document.getElementById(i)
    token.src=('circlered.svg')

    // let img1 = document.getElementById("1")
    // if(event.target.id==1){
    //     img1.src=('circlered.svg')
    // }
  
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
  [21,28,35,42]


]



//Changing the token

function updateToken(event){
    // for(let i=1; i<43; i++){
    //     let img=document.getElementById(i)
       
    // }

   

}

/**
make player turn, then make two types of images one for player 1 and one for player 2, 
then a function to check first empty circle in the column

if the event.target.id was 1,8,15, 22, 29, 36 => then we will check if 36 is filled or not, if it is filled
it will go to the one above it, if it is empty it will insert the token of the current player
 */






//start game function

//restart function

//player turn function










