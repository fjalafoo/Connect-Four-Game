//identifiy the elements in js 
//making a board and all circles clickable
let gameboard = document.querySelector('.circles')

gameboard.addEventListener('click', handleClick)

let p1 = 'p1'
let p2 = 'p2'
let currentPlayer = p1

let winArr=[]

let takenArr=[" "," ", " ", " ", " ", " ", " ",
" "," ", " ", " ", " ", " ", " ",
" "," ", " ", " ", " ", " ", " ",
" "," ", " ", " ", " ", " ", " ",
" "," ", " ", " ", " ", " ", " ",
" "," ", " ", " ", " ", " ", " "]


//defining each img as row column using r#c#

//nested forloop rows and columns
//first column
let r1c1=document.getElementById('1')
let r2c1=document.getElementById('8')
let r3c1=document.getElementById('15')
let r4c1=document.getElementById('22')
let r5c1=document.getElementById('29')
let r6c1=document.getElementById('36')

//second column
let r1c2=document.getElementById('2')
let r2c2=document.getElementById('9')
let r3c2=document.getElementById('16')
let r4c2=document.getElementById('23')
let r5c2=document.getElementById('30')
let r6c2=document.getElementById('37')

//third column
let r1c3=document.getElementById('3')
let r2c3=document.getElementById('10')
let r3c3=document.getElementById('17')
let r4c3=document.getElementById('24')
let r5c3=document.getElementById('31')
let r6c3=document.getElementById('38')

//fourth column
let r1c4=document.getElementById('4')
let r2c4=document.getElementById('11')
let r3c4=document.getElementById('18')
let r4c4=document.getElementById('25')
let r5c4=document.getElementById('32')
let r6c4=document.getElementById('39')

//fifth column
let r1c5=document.getElementById('5')
let r2c5=document.getElementById('12')
let r3c5=document.getElementById('19')
let r4c5=document.getElementById('26')
let r5c5=document.getElementById('33')
let r6c5=document.getElementById('40')

//sixth column
let r1c6=document.getElementById('6')
let r2c6=document.getElementById('13')
let r3c6=document.getElementById('20')
let r4c6=document.getElementById('27')
let r5c6=document.getElementById('34')
let r6c6=document.getElementById('41')

//seventh column
let r1c7=document.getElementById('7')
let r2c7=document.getElementById('14')
let r3c7=document.getElementById('21')
let r4c7=document.getElementById('28')
let r5c7=document.getElementById('35')
let r6c7=document.getElementById('42')

function handleClick(event){
    
    
    let id=(event.target.id)
    //let token=document.getElementById(event.target.id)
    
   
    if(currentPlayer==p1){
        // token.src=('p1.svg')
       updateToken1(id)
       currentPlayer=p2
     
        //currentPlayer=p2

        
    }
    else {
        updateToken2(id)
        currentPlayer=p1
    }

    console.log(id)
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

function updateToken1(id){
    let col1=['1','8','15','22','29','36']
    let col2=[2,9,16,23,30,37]
    let col3=[3,10,17,24,31,38]
    let col4=[4,11,18,25,32,39]
    let col5=[5,12,19,26,33,40]
    let col6=[6,13,20,27,34,41]
    let col7=[7,14,21,28,35,42]

    console.log(takenArr)

    for(let i=1; i<43; i++){
        
            if(col1.includes(id)){
        
                if(takenArr[0]===" "){
                    r1c1.src=('p1.svg')
                    takenArr[0]="player1"
                }
                else if(takenArr[7]===" "){
                    r2c1.src=('p1.svg')
                    takenArr[7]="player1"
                }
                else if(takenArr[14]===" "){
                    r3c1.src=('p1.svg')
                    takenArr[14]="player1"
                }
                else if(takenArr[21]===" "){
                    r4c1.src=('p1.svg')
                    takenArr[21]="player1"
                }
                else if(takenArr[28]===" "){
                    r5c1.src=('p1.svg')
                    takenArr[28]="player1"
                }
                else if(takenArr[36]===" ") {
                    r6c1.src=('p1.svg')
                    takenArr[36]="player1"
                }
        
        
    }
 
    

    }

    console.log(takenArr)

}

function updateToken2(id){
    
    let col1=['1','8','15','22','29','36']
    let col2=[2,9,16,23,30,37]
    let col3=[3,10,17,24,31,38]
    let col4=[4,11,18,25,32,39]
    let col5=[5,12,19,26,33,40]
    let col6=[6,13,20,27,34,41]
    let col7=[7,14,21,28,35,42]

    console.log(takenArr)

    for(let i=1; i<43; i++){
        
            if(col1.includes(id)){
        
                if(takenArr[0]===" "){
                    r1c1.src=('p1.svg')
                    takenArr[0]="player1"
                }
                else if(!takenArr[7]===" "){
                    r2c1.src=('p1.svg')
                    takenArr[7]="player1"
                }
                else if(!takenArr[14]===" "){
                    r3c1.src=('p1.svg')
                    takenArr[14]="player1"
                }
                else if(!takenArr[21]===" "){
                    r4c1.src=('p1.svg')
                    takenArr[21]="player1"
                }
                else if(!takenArr[28]===" "){
                    r5c1.src=('p1.svg')
                    takenArr[28]="player1"
                }
                else {
                    r6c1.src=('p1.svg')
                    takenArr[36]="player1"
                }
        
        
    }
 
    

    }

    console.log(takenArr)


}


/**
make player turn, then make two types of images one for player 1 and one for player 2, 
then a function to check first empty circle in the column

if the event.target.id was 1,8,15, 22, 29, 36 => then we will check if 36 is filled or not, if it is filled
it will go to the one above it, if it is empty it will insert the token of the current player
 *///


 