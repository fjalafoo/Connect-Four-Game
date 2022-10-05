//identifiy the elements in js 
//making a board and all circles clickable
let gameboard = document.querySelector('.circles')
let playerStat = document.getElementById('pturn')
let winnerEnd = document.getElementById('winner')

gameboard.addEventListener('click', handleClick)

let p1 = 'Hogwarts'
let p2 = 'Death Eaters'
let currentPlayer = p1
let winner = ""



let takenArr=["","","","","","","",
"","","","","","","",
"","","","","","","",
"","","","","","","",
"","","","","","","",
"","","","","","",""]


//defining each img as row column using r#c#

//nested forloop rows and columns
//first column
let r1c1=document.getElementById('1');let r2c1=document.getElementById('8');let r3c1=document.getElementById('15');let r4c1=document.getElementById('22');let r5c1=document.getElementById('29');let r6c1=document.getElementById('36')

//second column
let r1c2=document.getElementById('2');let r2c2=document.getElementById('9');let r3c2=document.getElementById('16');let r4c2=document.getElementById('23');let r5c2=document.getElementById('30');let r6c2=document.getElementById('37')

//third column
let r1c3=document.getElementById('3');let r2c3=document.getElementById('10');let r3c3=document.getElementById('17');let r4c3=document.getElementById('24');let r5c3=document.getElementById('31');let r6c3=document.getElementById('38')

//fourth column
let r1c4=document.getElementById('4');let r2c4=document.getElementById('11');let r3c4=document.getElementById('18');let r4c4=document.getElementById('25');let r5c4=document.getElementById('32');let r6c4=document.getElementById('39')

//fifth column
let r1c5=document.getElementById('5');let r2c5=document.getElementById('12');let r3c5=document.getElementById('19');let r4c5=document.getElementById('26');let r5c5=document.getElementById('33');let r6c5=document.getElementById('40')

//sixth column
let r1c6=document.getElementById('6');let r2c6=document.getElementById('13');let r3c6=document.getElementById('20');let r4c6=document.getElementById('27');let r5c6=document.getElementById('34');let r6c6=document.getElementById('41')

//seventh column
let r1c7=document.getElementById('7');let r2c7=document.getElementById('14');let r3c7=document.getElementById('21');let r4c7=document.getElementById('28');let r5c7=document.getElementById('35');let r6c7=document.getElementById('42')

function handleClick(event){
    let turnCounter=0

    let id=(event.target.id)
    //let token=document.getElementById(event.target.id)
   playerStat.innerHTML=currentPlayer
    if(currentPlayer==p1){
      
       updateToken1(id)
       currentPlayer=p2
       playerStat.innerHTML=currentPlayer
       turnCounter++
    }
    else {
        updateToken2(id)
        currentPlayer=p1
        playerStat.innerHTML=currentPlayer
        turnCounter++
    }

    // console.log(id)
    checkWinner(winningCombos,takenArr)
 
    console.log(winner)
    if(winner!=null){
        winnerEnd.innerHTML=(`${winner} WINS!`)
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

function checkWinner(winningCombos, takenArr){
    let Arr1=winningCombos[0]; let Arr2=winningCombos[1]; let Arr3=winningCombos[2]; let Arr4=winningCombos[3]; let Arr5=winningCombos[4]; let Arr6=winningCombos[5]; let Arr7=winningCombos[6]; let Arr8=winningCombos[7]; let Arr9=winningCombos[8]; let Arr10=winningCombos[9]; let Arr11=winningCombos[10]; let Arr12=winningCombos[11]; let Arr13=winningCombos[12]; let Arr14=winningCombos[13]; let Arr15=winningCombos[14]; let Arr16=winningCombos[15]; let Arr17=winningCombos[16]; let Arr18=winningCombos[17]; let Arr19=winningCombos[19]; let Arr20=winningCombos[19]; let Arr21=winningCombos[20]; let Arr22=winningCombos[21]; let Arr23=winningCombos[22]; let Arr24=winningCombos[23]; let Arr25=winningCombos[24]; let Arr26=winningCombos[26]; let Arr27=winningCombos[26]; let Arr28=winningCombos[27]; let Arr29=winningCombos[28]; let Arr30=winningCombos[29]; let Arr31=winningCombos[30]; let Arr32=winningCombos[31];let Arr33=winningCombos[32]; let Arr34=winningCombos[33]; let Arr35=winningCombos[34]; let Arr36=winningCombos[35]; let Arr37=winningCombos[36]; let Arr38=winningCombos[37]; let Arr39=winningCombos[38]; let Arr40=winningCombos[39] ;let Arr41=winningCombos[40]; let Arr42=winningCombos[41]; let Arr43=winningCombos[42]; let Arr44=winningCombos[43]; let Arr45=winningCombos[44]; let Arr46=winningCombos[45]; let Arr47=winningCombos[46]; let Arr48=winningCombos[47] ;let Arr49=winningCombos[48]; let Arr50=winningCombos[49]; let Arr51=winningCombos[50]; let Arr52=winningCombos[51]; let Arr53=winningCombos[52]; let Arr54=winningCombos[53]; let Arr55=winningCombos[54]; let Arr56=winningCombos[55] ;let Arr57=winningCombos[57]; let Arr58=winningCombos[57]; let Arr59=winningCombos[58]; let Arr60=winningCombos[59]; let Arr61=winningCombos[60]; let Arr62=winningCombos[61]; let Arr63=winningCombos[62]; let Arr64=winningCombos[63] ;let Arr65=winningCombos[64]; let Arr66=winningCombos[65]; let Arr67=winningCombos[66]; let Arr68=winningCombos[67]; let Arr69=[winningCombos[68]]
   
    // console.log(takenArr[firstArr[0]-1])

    
 

    if(takenArr[(Arr1[0]-1)]=='player1' && takenArr[(Arr1[1]-1)]=='player1' && takenArr[(Arr1[2]-1)]=='player1' && takenArr[(Arr1[3]-1)]=='player1'){
       winner=p1
      
     }
    else if(takenArr[(Arr2[0]-1)]=='player1' && takenArr[(Arr2[1]-1)]=='player1' && takenArr[(Arr2[2]-1)]=='player1' && takenArr[(Arr2[3]-1)]=='player1'){
        winner=p1
        
     }

    else if(takenArr[(Arr3[0]-1)]=='player1' && takenArr[(Arr3[1]-1)]=='player1' && takenArr[(Arr3[2]-1)]=='player1' && takenArr[(Arr3[3]-1)]=='player1'){
        winner=p1
        
    }
    
    else if(takenArr[(Arr4[0]-1)]=='player1' && takenArr[(Arr4[1]-1)]=='player1' && takenArr[(Arr4[2]-1)]=='player1' && takenArr[(Arr4[3]-1)]=='player1'){
        winner=p1
        
    }
    else if(takenArr[(Arr5[0]-1)]=='player1' && takenArr[(Arr5[1]-1)]=='player1' && takenArr[(Arr5[2]-1)]=='player1' && takenArr[(Arr5[3]-1)]=='player1'){
        winner=p1
        
    }
    else if(takenArr[(Arr6[0]-1)]=='player1' && takenArr[(Arr6[1]-1)]=='player1' && takenArr[(Arr6[2]-1)]=='player1' && takenArr[(Arr6[3]-1)]=='player1'){
        winner=p1
      
    }
    else if(takenArr[(Arr7[0]-1)]=='player1' && takenArr[(Arr7[1]-1)]=='player1' && takenArr[(Arr7[2]-1)]=='player1' && takenArr[(Arr7[3]-1)]=='player1'){
        winner=p1
        
    }
    else if(takenArr[(Arr8[0]-1)]=='player1' && takenArr[(Arr8[1]-1)]=='player1' && takenArr[(Arr8[2]-1)]=='player1' && takenArr[(Arr8[3]-1)]=='player1'){
        winner=p1
       
    }



  

    if(takenArr[(Arr9[0]-1)]=='player1' && takenArr[(Arr9[1]-1)]=='player1' && takenArr[(Arr9[2]-1)]=='player1' && takenArr[(Arr9[3]-1)]=='player1'){
        winner=p1
       }
      else if(takenArr[(Arr10[0]-1)]=='player1' && takenArr[(Arr10[1]-1)]=='player1' && takenArr[(Arr10[2]-1)]=='player1' && takenArr[(Arr10[3]-1)]=='player1'){
          winner=p1
       }
  
      else if(takenArr[(Arr11[0]-1)]=='player1' && takenArr[(Arr11[1]-1)]=='player1' && takenArr[(Arr11[2]-1)]=='player1' && takenArr[(Arr11[3]-1)]=='player1'){
          winner=p1
      }
      
      else if(takenArr[(Arr12[0]-1)]=='player1' && takenArr[(Arr12[1]-1)]=='player1' && takenArr[(Arr12[2]-1)]=='player1' && takenArr[(Arr12[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr13[0]-1)]=='player1' && takenArr[(Arr13[1]-1)]=='player1' && takenArr[(Arr13[2]-1)]=='player1' && takenArr[(Arr13[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr14[0]-1)]=='player1' && takenArr[(Arr14[1]-1)]=='player1' && takenArr[(Arr14[2]-1)]=='player1' && takenArr[(Arr14[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr15[0]-1)]=='player1' && takenArr[(Arr15[1]-1)]=='player1' && takenArr[(Arr15[2]-1)]=='player1' && takenArr[(Arr15[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr16[0]-1)]=='player1' && takenArr[(Arr16[1]-1)]=='player1' && takenArr[(Arr16[2]-1)]=='player1' && takenArr[(Arr16[3]-1)]=='player1'){
          winner=p1
      }

 

    if(takenArr[(Arr17[0]-1)]=='player1' && takenArr[(Arr17[1]-1)]=='player1' && takenArr[(Arr17[2]-1)]=='player1' && takenArr[(Arr17[3]-1)]=='player1'){
        winner=p1
       }
      else if(takenArr[(Arr18[0]-1)]=='player1' && takenArr[(Arr18[1]-1)]=='player1' && takenArr[(Arr18[2]-1)]=='player1' && takenArr[(Arr18[3]-1)]=='player1'){
          winner=p1
       }
  
      else if(takenArr[(Arr19[0]-1)]=='player1' && takenArr[(Arr19[1]-1)]=='player1' && takenArr[(Arr19[2]-1)]=='player1' && takenArr[(Arr19[3]-1)]=='player1'){
          winner=p1
      }
      
      else if(takenArr[(Arr20[0]-1)]=='player1' && takenArr[(Arr20[1]-1)]=='player1' && takenArr[(Arr20[2]-1)]=='player1' && takenArr[(Arr20[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr21[0]-1)]=='player1' && takenArr[(Arr21[1]-1)]=='player1' && takenArr[(Arr21[2]-1)]=='player1' && takenArr[(Arr21[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr22[0]-1)]=='player1' && takenArr[(Arr22[1]-1)]=='player1' && takenArr[(Arr22[2]-1)]=='player1' && takenArr[(Arr22[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr23[0]-1)]=='player1' && takenArr[(Arr23[1]-1)]=='player1' && takenArr[(Arr23[2]-1)]=='player1' && takenArr[(Arr23[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr24[0]-1)]=='player1' && takenArr[(Arr24[1]-1)]=='player1' && takenArr[(Arr24[2]-1)]=='player1' && takenArr[(Arr24[3]-1)]=='player1'){
          winner=p1
      }

       

    if(takenArr[(Arr25[0]-1)]=='player1' && takenArr[(Arr25[1]-1)]=='player1' && takenArr[(Arr25[2]-1)]=='player1' && takenArr[(Arr25[3]-1)]=='player1'){
        winner=p1
       }
      else if(takenArr[(Arr26[0]-1)]=='player1' && takenArr[(Arr26[1]-1)]=='player1' && takenArr[(Arr26[2]-1)]=='player1' && takenArr[(Arr26[3]-1)]=='player1'){
          winner=p1
       }
  
      else if(takenArr[(Arr27[0]-1)]=='player1' && takenArr[(Arr27[1]-1)]=='player1' && takenArr[(Arr27[2]-1)]=='player1' && takenArr[(Arr27[3]-1)]=='player1'){
          winner=p1
      }
      
      else if(takenArr[(Arr28[0]-1)]=='player1' && takenArr[(Arr28[1]-1)]=='player1' && takenArr[(Arr28[2]-1)]=='player1' && takenArr[(Arr28[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr29[0]-1)]=='player1' && takenArr[(Arr29[1]-1)]=='player1' && takenArr[(Arr29[2]-1)]=='player1' && takenArr[(Arr29[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr30[0]-1)]=='player1' && takenArr[(Arr30[1]-1)]=='player1' && takenArr[(Arr30[2]-1)]=='player1' && takenArr[(Arr30[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr31[0]-1)]=='player1' && takenArr[(Arr31[1]-1)]=='player1' && takenArr[(Arr31[2]-1)]=='player1' && takenArr[(Arr31[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr32[0]-1)]=='player1' && takenArr[(Arr32[1]-1)]=='player1' && takenArr[(Arr32[2]-1)]=='player1' && takenArr[(Arr32[3]-1)]=='player1'){
          winner=p1
      }

      
    if(takenArr[(Arr33[0]-1)]=='player1' && takenArr[(Arr33[1]-1)]=='player1' && takenArr[(Arr33[2]-1)]=='player1' && takenArr[(Arr33[3]-1)]=='player1'){
        winner=p1
       }
      else if(takenArr[(Arr34[0]-1)]=='player1' && takenArr[(Arr34[1]-1)]=='player1' && takenArr[(Arr34[2]-1)]=='player1' && takenArr[(Arr34[3]-1)]=='player1'){
          winner=p1
       }
  
      else if(takenArr[(Arr34[0]-1)]=='player1' && takenArr[(Arr34[1]-1)]=='player1' && takenArr[(Arr34[2]-1)]=='player1' && takenArr[(Arr34[3]-1)]=='player1'){
          winner=p1
      }
      
      else if(takenArr[(Arr35[0]-1)]=='player1' && takenArr[(Arr35[1]-1)]=='player1' && takenArr[(Arr35[2]-1)]=='player1' && takenArr[(Arr35[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr36[0]-1)]=='player1' && takenArr[(Arr36[1]-1)]=='player1' && takenArr[(Arr36[2]-1)]=='player1' && takenArr[(Arr36[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr37[0]-1)]=='player1' && takenArr[(Arr37[1]-1)]=='player1' && takenArr[(Arr37[2]-1)]=='player1' && takenArr[(Arr37[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr38[0]-1)]=='player1' && takenArr[(Arr38[1]-1)]=='player1' && takenArr[(Arr38[2]-1)]=='player1' && takenArr[(Arr38[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr39[0]-1)]=='player1' && takenArr[(Arr39[1]-1)]=='player1' && takenArr[(Arr39[2]-1)]=='player1' && takenArr[(Arr39[3]-1)]=='player1'){
          winner=p1
      }
  
     

      if(takenArr[(Arr40[0]-1)]=='player1' && takenArr[(Arr40[1]-1)]=='player1' && takenArr[(Arr40[2]-1)]=='player1' && takenArr[(Arr40[3]-1)]=='player1'){
        winner=p1
       }
      else if(takenArr[(Arr41[0]-1)]=='player1' && takenArr[(Arr41[1]-1)]=='player1' && takenArr[(Arr41[2]-1)]=='player1' && takenArr[(Arr41[3]-1)]=='player1'){
          winner=p1
       }
  
      else if(takenArr[(Arr42[0]-1)]=='player1' && takenArr[(Arr42[1]-1)]=='player1' && takenArr[(Arr42[2]-1)]=='player1' && takenArr[(Arr42[3]-1)]=='player1'){
          winner=p1
      }
      
      else if(takenArr[(Arr43[0]-1)]=='player1' && takenArr[(Arr43[1]-1)]=='player1' && takenArr[(Arr43[2]-1)]=='player1' && takenArr[(Arr43[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr44[0]-1)]=='player1' && takenArr[(Arr44[1]-1)]=='player1' && takenArr[(Arr44[2]-1)]=='player1' && takenArr[(Arr44[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr45[0]-1)]=='player1' && takenArr[(Arr45[1]-1)]=='player1' && takenArr[(Arr45[2]-1)]=='player1' && takenArr[(Arr45[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr46[0]-1)]=='player1' && takenArr[(Arr46[1]-1)]=='player1' && takenArr[(Arr46[2]-1)]=='player1' && takenArr[(Arr46[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr47[0]-1)]=='player1' && takenArr[(Arr47[1]-1)]=='player1' && takenArr[(Arr47[2]-1)]=='player1' && takenArr[(Arr47[3]-1)]=='player1'){
          winner=p1
      }
  
      if(takenArr[(Arr48[0]-1)]=='player1' && takenArr[(Arr48[1]-1)]=='player1' && takenArr[(Arr48[2]-1)]=='player1' && takenArr[(Arr48[3]-1)]=='player1'){
        winner=p1
       }
      else if(takenArr[(Arr49[0]-1)]=='player1' && takenArr[(Arr49[1]-1)]=='player1' && takenArr[(Arr49[2]-1)]=='player1' && takenArr[(Arr49[3]-1)]=='player1'){
          winner=p1
       }
  
      else if(takenArr[(Arr50[0]-1)]=='player1' && takenArr[(Arr50[1]-1)]=='player1' && takenArr[(Arr50[2]-1)]=='player1' && takenArr[(Arr50[3]-1)]=='player1'){
          winner=p1
      }
      
      else if(takenArr[(Arr51[0]-1)]=='player1' && takenArr[(Arr51[1]-1)]=='player1' && takenArr[(Arr51[2]-1)]=='player1' && takenArr[(Arr51[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr52[0]-1)]=='player1' && takenArr[(Arr52[1]-1)]=='player1' && takenArr[(Arr52[2]-1)]=='player1' && takenArr[(Arr52[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr53[0]-1)]=='player1' && takenArr[(Arr53[1]-1)]=='player1' && takenArr[(Arr53[2]-1)]=='player1' && takenArr[(Arr53[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr54[0]-1)]=='player1' && takenArr[(Arr54[1]-1)]=='player1' && takenArr[(Arr54[2]-1)]=='player1' && takenArr[(Arr54[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr55[0]-1)]=='player1' && takenArr[(Arr55[1]-1)]=='player1' && takenArr[(Arr55[2]-1)]=='player1' && takenArr[(Arr55[3]-1)]=='player1'){
          winner=p1
      }

      if(takenArr[(Arr56[0]-1)]=='player1' && takenArr[(Arr56[1]-1)]=='player1' && takenArr[(Arr56[2]-1)]=='player1' && takenArr[(Arr56[3]-1)]=='player1'){
        winner=p1
       }
      else if(takenArr[(Arr57[0]-1)]=='player1' && takenArr[(Arr57[1]-1)]=='player1' && takenArr[(Arr57[2]-1)]=='player1' && takenArr[(Arr57[3]-1)]=='player1'){
          winner=p1
       }
  
      else if(takenArr[(Arr58[0]-1)]=='player1' && takenArr[(Arr58[1]-1)]=='player1' && takenArr[(Arr58[2]-1)]=='player1' && takenArr[(Arr58[3]-1)]=='player1'){
          winner=p1
      }
      
      else if(takenArr[(Arr59[0]-1)]=='player1' && takenArr[(Arr59[1]-1)]=='player1' && takenArr[(Arr59[2]-1)]=='player1' && takenArr[(Arr59[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr60[0]-1)]=='player1' && takenArr[(Arr60[1]-1)]=='player1' && takenArr[(Arr60[2]-1)]=='player1' && takenArr[(Arr60[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr61[0]-1)]=='player1' && takenArr[(Arr61[1]-1)]=='player1' && takenArr[(Arr61[2]-1)]=='player1' && takenArr[(Arr61[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr61[0]-1)]=='player1' && takenArr[(Arr61[1]-1)]=='player1' && takenArr[(Arr61[2]-1)]=='player1' && takenArr[(Arr61[3]-1)]=='player1'){
          winner=p1
      }
      else if(takenArr[(Arr62[0]-1)]=='player1' && takenArr[(Arr62[1]-1)]=='player1' && takenArr[(Arr62[2]-1)]=='player1' && takenArr[(Arr62[3]-1)]=='player1'){
          winner=p1
      }

      else if(takenArr[(Arr63[0]-1)]=='player1' && takenArr[(Arr63[1]-1)]=='player1' && takenArr[(Arr63[2]-1)]=='player1' && takenArr[(Arr63[3]-1)]=='player1'){
        winner=p1
     }

    else if(takenArr[(Arr64[0]-1)]=='player1' && takenArr[(Arr64[1]-1)]=='player1' && takenArr[(Arr64[2]-1)]=='player1' && takenArr[(Arr64[3]-1)]=='player1'){
        winner=p1
    }
    
    else if(takenArr[(Arr65[0]-1)]=='player1' && takenArr[(Arr65[1]-1)]=='player1' && takenArr[(Arr65[2]-1)]=='player1' && takenArr[(Arr65[3]-1)]=='player1'){
        winner=p1
    }
    else if(takenArr[(Arr66[0]-1)]=='player1' && takenArr[(Arr66[1]-1)]=='player1' && takenArr[(Arr66[2]-1)]=='player1' && takenArr[(Arr66[3]-1)]=='player1'){
        winner=p1
    }
    else if(takenArr[(Arr67[0]-1)]=='player1' && takenArr[(Arr67[1]-1)]=='player1' && takenArr[(Arr67[2]-1)]=='player1' && takenArr[(Arr67[3]-1)]=='player1'){
        winner=p1
    }
    else if(takenArr[(Arr68[0]-1)]=='player1' && takenArr[(Arr68[1]-1)]=='player1' && takenArr[(Arr68[2]-1)]=='player1' && takenArr[(Arr68[3]-1)]=='player1'){
        winner=p1
    }
    else if(takenArr[(Arr69[0]-1)]=='player1' && takenArr[(Arr69[1]-1)]=='player1' && takenArr[(Arr69[2]-1)]=='player1' && takenArr[(Arr69[3]-1)]=='player1'){
        winner=p1
    }


  
}



//Changing the token

function updateToken1(id){
    let col1=['1','8','15','22','29','36']
    let col2=['2','9','16','23','30','37']
    let col3=['3','10','17','24','31','38']
    let col4=['4','11','18','25','32','39']
    let col5=['5','12','19','26','33','40']
    let col6=['6','13','20','27','34','41']
    let col7=['7','14','21','28','35','42']

    // console.log(takenArr)

   
        
            if(col1.includes(id)){
        
                if(takenArr[0]===""){
                    r1c1.src=('p1.svg')
                    takenArr[0]="player1"
                    
                }
                else if(takenArr[7]===""){
                    r2c1.src=('p1.svg')
                    takenArr[7]="player1"
                }
                else if(takenArr[14]===""){
                    r3c1.src=('p1.svg')
                    takenArr[14]="player1"
                }
                else if(takenArr[21]===""){
                    r4c1.src=('p1.svg')
                    takenArr[21]="player1"
                }
                else if(takenArr[28]===""){
                    r5c1.src=('p1.svg')
                    takenArr[28]="player1"
                }
                else if(takenArr[35]==="") {
                    r6c1.src=('p1.svg')
                    takenArr[35]="player1"
                }
        
        
             }

             if(col2.includes(id)){
        
                if(takenArr[1]===""){
                    r1c2.src=('p1.svg')
                    takenArr[1]="player1"
                    
                }
                else if(takenArr[8]===""){
                    r2c2.src=('p1.svg')
                    takenArr[8]="player1"
                }
                else if(takenArr[15]===""){
                    r3c2.src=('p1.svg')
                    takenArr[15]="player1"
                }
                else if(takenArr[22]===""){
                    r4c2.src=('p1.svg')
                    takenArr[22]="player1"
                }
                else if(takenArr[29]===""){
                    r5c2.src=('p1.svg')
                    takenArr[29]="player1"
                }
                else if(takenArr[36]==="") {
                    r6c2.src=('p1.svg')
                    takenArr[36]="player1"
                }
        
        
             }

             if(col3.includes(id)){
        
                if(takenArr[2]===""){
                    r1c3.src=('p1.svg')
                    takenArr[2]="player1"
                    
                }
                else if(takenArr[9]===""){
                    r2c3.src=('p1.svg')
                    takenArr[9]="player1"
                }
                else if(takenArr[16]===""){
                    r3c3.src=('p1.svg')
                    takenArr[16]="player1"
                }
                else if(takenArr[23]===""){
                    r4c3.src=('p1.svg')
                    takenArr[23]="player1"
                }
                else if(takenArr[30]===""){
                    r5c3.src=('p1.svg')
                    takenArr[30]="player1"
                }
                else if(takenArr[37]==="") {
                    r6c3.src=('p1.svg')
                    takenArr[37]="player1"
                }
        
        
             }
             
             if(col4.includes(id)){
        
                if(takenArr[3]===""){
                    r1c4.src=('p1.svg')
                    takenArr[3]="player1"
                    
                }
                else if(takenArr[10]===""){
                    r2c4.src=('p1.svg')
                    takenArr[10]="player1"
                }
                else if(takenArr[17]===""){
                    r3c4.src=('p1.svg')
                    takenArr[17]="player1"
                }
                else if(takenArr[24]===""){
                    r4c4.src=('p1.svg')
                    takenArr[24]="player1"
                }
                else if(takenArr[31]===""){
                    r5c4.src=('p1.svg')
                    takenArr[31]="player1"
                }
                else if(takenArr[38]==="") {
                    r6c4.src=('p1.svg')
                    takenArr[38]="player1"
                }
        
        
             }

             if(col5.includes(id)){
        
                if(takenArr[4]===""){
                    r1c5.src=('p1.svg')
                    takenArr[4]="player1"
                    
                }
                else if(takenArr[11]===""){
                    r2c5.src=('p1.svg')
                    takenArr[11]="player1"
                }
                else if(takenArr[18]===""){
                    r3c5.src=('p1.svg')
                    takenArr[18]="player1"
                }
                else if(takenArr[25]===""){
                    r4c5.src=('p1.svg')
                    takenArr[25]="player1"
                }
                else if(takenArr[32]===""){
                    r5c5.src=('p1.svg')
                    takenArr[32]="player1"
                }
                else if(takenArr[39]==="") {
                    r6c5.src=('p1.svg')
                    takenArr[39]="player1"
                }
        
        
             }

             if(col6.includes(id)){
        
                if(takenArr[5]===""){
                    r1c6.src=('p1.svg')
                    takenArr[5]="player1"
                    
                }
                else if(takenArr[12]===""){
                    r2c6.src=('p1.svg')
                    takenArr[12]="player1"
                }
                else if(takenArr[19]===""){
                    r3c6.src=('p1.svg')
                    takenArr[19]="player1"
                }
                else if(takenArr[26]===""){
                    r4c6.src=('p1.svg')
                    takenArr[26]="player1"
                }
                else if(takenArr[33]===""){
                    r5c6.src=('p1.svg')
                    takenArr[33]="player1"
                }
                else if(takenArr[40]==="") {
                    r6c6.src=('p1.svg')
                    takenArr[40]="player1"
                }
             }

             if(col7.includes(id)){
        
                if(takenArr[6]===""){
                    r1c7.src=('p1.svg')
                    takenArr[6]="player1"
                    
                }
                else if(takenArr[13]===""){
                    r2c7.src=('p1.svg')
                    takenArr[13]="player1"
                }
                else if(takenArr[20]===""){
                    r3c7.src=('p1.svg')
                    takenArr[20]="player1"
                }
                else if(takenArr[27]===""){
                    r4c7.src=('p1.svg')
                    takenArr[27]="player1"
                }
                else if(takenArr[34]===""){
                    r5c7.src=('p1.svg')
                    takenArr[34]="player1"
                }
                else if(takenArr[41]==="") {
                    r6c7.src=('p1.svg')
                    takenArr[41]="player1"
                }
        
        
             }
 
        // console.log(takenArr)



}

function updateToken2(id){
    
    let col1=['1','8','15','22','29','36']
    let col2=['2','9','16','23','30','37']
    let col3=['3','10','17','24','31','38']
    let col4=['4','11','18','25','32','39']
    let col5=['5','12','19','26','33','40']
    let col6=['6','13','20','27','34','41']
    let col7=['7','14','21','28','35','42']

   

    if(col1.includes(id)){
        
        if(takenArr[0]===""){
            r1c1.src=('p2.svg')
            takenArr[0]="player2"
            
        }
        else if(takenArr[7]===""){
            r2c1.src=('p2.svg')
            takenArr[7]="player2"
        }
        else if(takenArr[14]===""){
            r3c1.src=('p2.svg')
            takenArr[14]="player2"
        }
        else if(takenArr[21]===""){
            r4c1.src=('p2.svg')
            takenArr[21]="player2"
        }
        else if(takenArr[28]===""){
            r5c1.src=('p2.svg')
            takenArr[28]="player2"
        }
        else if(takenArr[35]==="") {
            r6c1.src=('p2.svg')
            takenArr[35]="player2"
        }


     }

     if(col2.includes(id)){

        if(takenArr[1]===""){
            r1c2.src=('p2.svg')
            takenArr[1]="player2"
            
        }
        else if(takenArr[8]===""){
            r2c2.src=('p2.svg')
            takenArr[8]="player2"
        }
        else if(takenArr[15]===""){
            r3c2.src=('p2.svg')
            takenArr[15]="player2"
        }
        else if(takenArr[22]===""){
            r4c2.src=('p2.svg')
            takenArr[22]="player2"
        }
        else if(takenArr[29]===""){
            r5c2.src=('p2.svg')
            takenArr[29]="player2"
        }
        else if(takenArr[36]==="") {
            r6c2.src=('p2.svg')
            takenArr[36]="player2"
        }


     }

     if(col3.includes(id)){

        if(takenArr[2]===""){
            r1c3.src=('p2.svg')
            takenArr[2]="player2"
            
        }
        else if(takenArr[9]===""){
            r2c3.src=('p2.svg')
            takenArr[9]="player2"
        }
        else if(takenArr[16]===""){
            r3c3.src=('p2.svg')
            takenArr[16]="player2"
        }
        else if(takenArr[23]===""){
            r4c3.src=('p2.svg')
            takenArr[23]="player2"
        }
        else if(takenArr[30]===""){
            r5c3.src=('p2.svg')
            takenArr[30]="player2"
        }
        else if(takenArr[37]==="") {
            r6c3.src=('p2.svg')
            takenArr[37]="player2"
        }


     }
     
     if(col4.includes(id)){

        if(takenArr[3]===""){
            r1c4.src=('p2.svg')
            takenArr[3]="player2"
            
        }
        else if(takenArr[10]===""){
            r2c4.src=('p2.svg')
            takenArr[10]="player2"
        }
        else if(takenArr[17]===""){
            r3c4.src=('p2.svg')
            takenArr[17]="player2"
        }
        else if(takenArr[24]===""){
            r4c4.src=('p2.svg')
            takenArr[24]="player2"
        }
        else if(takenArr[31]===""){
            r5c4.src=('p2.svg')
            takenArr[31]="player2"
        }
        else if(takenArr[38]==="") {
            r6c4.src=('p2.svg')
            takenArr[38]="player2"
        }


     }

     if(col5.includes(id)){

        if(takenArr[4]===""){
            r1c5.src=('p2.svg')
            takenArr[4]="player2"
            
        }
        else if(takenArr[11]===""){
            r2c5.src=('p2.svg')
            takenArr[11]="player2"
        }
        else if(takenArr[18]===""){
            r3c5.src=('p2.svg')
            takenArr[18]="player2"
        }
        else if(takenArr[25]===""){
            r4c5.src=('p2.svg')
            takenArr[25]="player2"
        }
        else if(takenArr[32]===""){
            r5c5.src=('p2.svg')
            takenArr[32]="player2"
        }
        else if(takenArr[39]==="") {
            r6c5.src=('p2.svg')
            takenArr[39]="player2"
        }


     }

     if(col6.includes(id)){

        if(takenArr[5]===""){
            r1c6.src=('p2.svg')
            takenArr[5]="player2"
            
        }
        else if(takenArr[12]===""){
            r2c6.src=('p2.svg')
            takenArr[12]="player2"
        }
        else if(takenArr[19]===""){
            r3c6.src=('p2.svg')
            takenArr[19]="player2"
        }
        else if(takenArr[26]===""){
            r4c6.src=('p2.svg')
            takenArr[26]="player2"
        }
        else if(takenArr[33]===""){
            r5c6.src=('p2.svg')
            takenArr[33]="player2"
        }
        else if(takenArr[40]==="") {
            r6c6.src=('p2.svg')
            takenArr[40]="player2"
        }
     }

     if(col7.includes(id)){

        if(takenArr[6]===""){
            r1c7.src=('p2.svg')
            takenArr[6]="player2"
            
        }
        else if(takenArr[13]===""){
            r2c7.src=('p2.svg')
            takenArr[13]="player2"
        }
        else if(takenArr[20]===""){
            r3c7.src=('p2.svg')
            takenArr[20]="player2"
        }
        else if(takenArr[27]===""){
            r4c7.src=('p2.svg')
            takenArr[27]="player2"
        }
        else if(takenArr[34]===""){
            r5c7.src=('p2.svg')
            takenArr[34]="player2"
        }
        else if(takenArr[41]==="") {
            r6c7.src=('p2.svg')
            takenArr[41]="player2"
        }


     }
//    console.log(takenArr)



}

function reset(){
   
    for(let i=1;i<43;i++){
        let m=document.getElementById(i)
        m.src=('empty.svg')
    }
    currentPlayer=p1
    winner=null
}

