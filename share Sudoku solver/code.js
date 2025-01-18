function find_empty_location(arr,l) {
var found= false;
  for (var row = 0; row < 9&&!found; row++) {
    for (var col = 0; col < 9&&!found; col++) {
      if (arr[row][col]===0) {
        l[0]=row;
        l[1]=col;
        found=true;
      }
    }
  }
return(found);
}

function used_in_row(arr,row,num) {
var found=false;
   for (var i = 0; i < 9&&!found; i++) {
     if (arr[row][i]==num) {
       found=true;
     }
   }
return(found);
}

function used_in_col(arr,col,num) {
var found=false;
   for (var i = 0; i < 9&&!found; i++) {
     if (arr[i][col]==num) {
       found=true;
     }
   }
return(found);
}

function used_in_box(arr,row,col,num) {



for (var i = 0; i < 3; i++) {

for (var j = 0; j < 3; j++) {

if ((arr[i+row])[j+col] == num) {


return (true);



   }



 }


}
return(false); 
}
function check_location_is_safe(arr,row,col,num){
  var x1 = !used_in_row(arr,row,num);
  var x2 = !used_in_col(arr,col,num);
  var x3 = !used_in_box(arr,row-row%3,col-col%3,num);
  return ((x1&&x2)&&x3) ;
}


function solve_sudoku(arr){
  var l=[0,0];
  if(!find_empty_location(arr,l)){
    return(true);
  }
  var row=l[0];
  var col=l[1];
  for (var num = 1; num < 10; num++) {
    if (check_location_is_safe(arr,row,col,num)) {
      arr[row][col]=num;
      if (solve_sudoku(arr)) {
        return (true);
      }
      arr[row][col]=0;
    }
  }
  //https://www.geeksforgeeks.org/sudoku-backtracking-7/
  return (false);
}
function textInputSudoku() {
  var id = 1;
  for (var y = 73; y < 355; y=y+34) {
    for (var x = 8; x < 290; x=x+34) {
      textInput("text_input"+id, "");
      setPosition("text_input"+id, x, y, 32, 32);
      id = id+1;
    }
  }
}
textInputSudoku();
function myFunction() {
  var grid = [[3,0,6,5,0,8,4,0,0], 
              [5,2,0,0,0,0,0,0,0], 
              [0,8,7,0,0,0,0,3,1], 
              [0,0,3,0,1,0,0,8,0], 
              [9,0,0,8,6,3,0,0,5], 
              [0,5,0,0,9,0,6,0,0], 
              [1,3,0,0,0,0,2,5,0], 
              [0,0,0,0,0,0,0,7,4], 
              [0,0,5,2,0,6,3,0,0]];
}
onEvent("button1", "click", function(event) {
  var grid = [];
  for (var input1 = 1; input1 < 10; input1++) {
    insertItem(grid, grid.length, [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    for (var input2 = 1; input2 < 10; input2++) {
      var read = getText("text_input" + ((input1-1)*9 + input2));
      if (read==="") {
        read = 0;
      } else {
        read = Number(read);
      }
      grid[input1-1][input2-1] = read;
    }
  }
  if (solve_sudoku(grid)){
    for (var input1_ = 1; input1_ < 10; input1_++) {
      for (var input2_ = 1; input2_ < 10; input2_++) {
        setNumber("text_input" + ((input1_-1)*9 + input2_), (grid[(input1_-1)])[input2_-1]);
      }
    }
    function myFunction() {
      setText("text_area1", grid.join("\n"));
    }
  }else{
    console.log("No solution exists");
  }
});

