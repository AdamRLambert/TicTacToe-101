let board = [
  ["", "", ""], // <-- Row 1, index 0
  ["", "", ""], // <-- Row 2, index 1
  ["", "", ""] // <-- Row 3, index 2
]

// The variable will change from X to O based on what player turn it is. We need to hold this so we can place an X or O on the board when they're clicked.
let currentMarker = 'X'

const row = parseInt(element.id.charAt(0))
const column = parseInt(element.id.charAt(2))

board [row][column] = currentMarker






const handleClick = (Hotdog) => {

  // this uses the "log" method on the "console" to log out the element's id so we can see it with our human eyes
  console.log(`The element you clicked on has an id:  ${Hotdog.id}`)

  // this next line prevents an X being changed to an O or an O being changed to an X by...
  //  checking to see if the square clicked has anything in it, if not continue
  if(!document.getElementById(Hotdog.id).innerHTML){
    addMarker(Hotdog.id)
  }
}


const addMarker = (changeMarker) => {

   
  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
  
  

  
  document.getElementById(id).innerHTML=currentMarker
  
  // changeMarker()
  checkForWin()
}



const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
    
  }
}

const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    window.alert(`Player ${currentMarker} won!`)
  } else {
    changeMarker()
  }
}

const resetBoard = () => {
  
  
  const squares = document.getElementsByTagName ("TD")
  
  // loops over the HTML Collection of TDs and clears out the Xs and Os
  for (i=0; i < squares.length; i++) {

    // will log out the id of each square as it loops over them.
    console.log(squares[i].id)

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null
  }  
}

/* let board - [
  ["0-0", "0-1", "0-2"]
  ["1-0", "1-1", "1-2"]
  ["2-0", "2-1", "2-2"]
]
*/

function horiztonalWin () {

  if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")) {return true}

  else if ((board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") (board[1][0] == "O" && board[1][1] == "O" && board[1][2] =="O")) {return true}

  else if ((board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") (board[2][0] == "O" && board[2][1] == "O" && board[2][2] =="O")) {return true}

  else {
    return false
  }

}
   
 function verticalWin () {

  if((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")) {return true}

  else if ((board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") (board[0][1] == "O" && board[1][1] == "O" && board[2][1] =="O")) {return true}

  else if ((board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") (board[0][2] == "O" && board[1][2] == "O" && board[2][2] =="O")) {return true}

  else {
    return false
  }

 } 

 function diagonalWin () {

  if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")) {return true}

  else if ((board[2][0] == "X" && board[1][1] == "X" && board[0][2] == "X") (board[2][0] == "O" && board[1][1] == "O" && board[0][2] =="O")) {return true}

  else {
    return false

  }

}
