//10/15/2018
function evaluate(x) {
	xp = x.split(";")
		console.log(xp)
		xp.forEach(function (item, index) {
			console.log(index)
			if (index != 0) {
				eval(item)
			}
			if (index == (xp.length - 1)) {
var ss = (("(" + xp[0]).replace(/(\+|-)/g, ")+(") + ")").replace(/([0-9]+)([a-z]{1})/g, "$1*$2")
console.log(ss)				
console.log(eval(ss));
			}

		})
		//Write code here
		return x
	evaluate("9a+8b+m-5n+z;a=2;b=0;m=-8;n=24;z=9");
}
function simplify(exp) {
  while ((exp.includes("-+"))) {
    exp = exp.replace(/\-\+/gi, "-");
  }
  while ((exp.includes("--"))) {
    exp = exp.replace(/\-\-/gi, "+");
  }
  var equation = exp.split("+");
  var newequation = [];
  for (var i = 0; i < equation.length; i++) {
    appendItem(newequation, add_minusSymbol((equation[i]).split("-")));
  }
  // 
  var variablesArray = [];
  var correspondingValues = [];
  var numberArray = [];
  for (var k = 0; k < newequation.length; k++) {
    for (var l = 0; l < (newequation[k]).length; l++) {
      if (newequation[k][l]==="") {
        
      } else {
        function myFunction() {
          //could have used the line below for the below if statement. Didn't use it because it works for only "x"
          console.log((newequation[k])[l].includes("x"));
        }
        if (JSON.stringify(newequation[k][l]).match(/[a-z]/i)) {
          var string = newequation[k][l];
          var letter = string.substring(string.length-1, string.length);
          if (JSON.stringify(variablesArray).includes(letter)) {
            
          } else {
            appendItem(variablesArray, letter);
            appendItem(correspondingValues, []);
          }
          appendItem(correspondingValues[(variablesArray.indexOf(letter))], string.substring(0, string.length-1));
        } else {
          appendItem(numberArray, newequation[k][l]);
        }
      }
    }
  }
  var Theanswer = [];
  for (var u = 0; u < variablesArray.length; u++) {
    var thevariable = variablesArray[u];
    var CoefficientOfTheVariable = sumOfArray(correspondingValues[u]);
    appendItem(Theanswer, CoefficientOfTheVariable+thevariable);
  }
  appendItem(Theanswer, sumOfArray(numberArray));
  return Theanswer;
}
function add_minusSymbol(x) {
  var array = [x[0]];
  for (var i = 1; i < x.length; i++) {
    appendItem(array, "-"+x[i]);
  }
  return array;
}
function sumOfArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum+Number(array[i]);
  }
  return sum;
}
function simplifyEquation(x) {
  var BeforeEquals = simplify(x.substring(0, x.indexOf("=")));
  var AfterEquals = simplify(x.substring(x.indexOf("=")+1, x.length));
  var variablesArray = [];
  var ConstantsArray = [];
  for (var i = 0; i < BeforeEquals.length; i++) {
    if (BeforeEquals[i].toString().match(/[a-z]/i)) {
      appendItem(variablesArray, BeforeEquals[i]);
    } else {
      appendItem(ConstantsArray, "-"+BeforeEquals[i]);
    }
  }
  for (var k = 0; k < AfterEquals.length; k++) {
    if ((AfterEquals[k]).toString().match(/[a-z]/i)) {
      appendItem(variablesArray, "-"+AfterEquals[k]);
    } else {
      appendItem(ConstantsArray, AfterEquals[k]);
    }
  }
  variablesArray = (variablesArray.toString()).replace(/,/gi, "+");
  ConstantsArray = (ConstantsArray.toString()).replace(/,/gi, "+");
  // 
  var left = simplify(variablesArray);
  removeItem(left, left.length-1);
  left = SortTheVariablesInOrder(left);
  var right = simplify(ConstantsArray);
  return [left,right];
}
function Equations(array) {
  for (var i = 0; i < array.length; i++) {
    var temp = array[i][0];
    for (var k = 0; k < temp.length; k++) {
      temp[k] = Number(temp[k].substring(0, temp[k].length-1));
    }
    appendItem(temp, array[i][1][0]);
    // 
    removeItem(array[i], 1);
    array[i] = array[i][0];
  }
  return array;
}
console.log(simplifyEquation("3x+4y+7s+2y+5t+1.5x=75s+0.6t+2p-0.5t-5p"));
console.log(Equations([(simplifyEquation("3x+2y=5")), (simplifyEquation("9x+1y=12"))]));
console.log(SystemsOfEquations(Equations([(simplifyEquation("3x+2y=5")), (simplifyEquation("0y+9x=12"))]), ["x","y"]));
// 
onEvent("button1", "click", function(event) {
  var inputVar = getText("text_input1");
  inputVar = inputVar.replace(/,/g, "\",\"");
  inputVar = ("["+"\""+inputVar)+"\""+"]";
  var inputVarArray = JSON.parse(inputVar);
  var theEquations = "\""+(getText("text_area2")).replace(/\n/g, "\",\"")+"\"";
  var theEquationsArray = JSON.parse("["+theEquations+"]");
  var simplifyingEq = [];
  for (var o = 0; o < theEquationsArray.length; o++) {
    appendItem(simplifyingEq, simplifyEquation(theEquationsArray[o]));
  }
  setText("text_area1", SystemsOfEquations(Equations(simplifyingEq), inputVarArray));
});
function SortTheVariablesInOrder(terms) {
  function compareFunction(a, b) {
    var letter1 = a.substring(a.length-1, a.length);
    var letter2 = b.substring(b.length-1, b.length);
    if (letter1.charCodeAt(0) > letter2.charCodeAt(0)) {
      return 1;
    } else {
      return -1;
    }
  }
  terms.sort(compareFunction);
  return terms;
}
function myFunction() {
  console.log(SystemsOfEquations([([3,2, 4]), [9,3,7]], ["x","y"]));
}
//idea borrowed from my project: https://studio.code.org/projects/applab/bqyeSOvyNVHQI7GsgQ3HiTl26PRWicNd-SuKV_-MIKw/edit
function SystemsOfEquations(matriX, theVar) {
  var M;
  M = eval(matriX);
  //stored temp with a string to avoid reference to the same array while manipulation
  var temp = eval(JSON.stringify(M));
  var answer = "";
  var denominator_determinant = det(Coefficient_Matrix(M));
  for (var j = 0; j < M.length; j++) {
    M = eval(JSON.stringify(temp));
    // 
    var value_of_variable = det(Matrix_Manipulation(M,j+1)) / denominator_determinant;
    answer = answer+((theVar[j]+" = ")+value_of_variable+"\n");
  }
  return answer;
  
  function det(M1) {
      function deleteRowAndColumn(M1,index) {
          var temp = [];
          for (var i=0; i<M1.length; i++) { temp.push((M1[i]).slice(0)); } 
          temp.splice(0,1); 
          for (var i=0; i<temp.length; i++) { temp[i].splice(index,1); } 
          return temp;
      }
      if (M1.length==1) { return M1[0][0];}
      if (M1.length==2) { return ((M1[0])[0]*(M1[1])[1])-((M1[0])[1]*(M1[1])[0]); }
      var answer = 0;
      for (var i=0; i< M1.length; i++) { answer += Math.pow(-1,i)*(M1[0])[i]*det(deleteRowAndColumn(M1,i)); }
      return answer;
  }
  //https://www.cliffsnotes.com/study-guides/algebra/algebra-ii/linear-equations-in-three-variables/linear-equations-solutions-using-determinants-with-three-variables
  function Matrix_Manipulation(matrix, column) {
    var Matrix = [];
    //"matrix" changes even if I made a temporary variable ("array") as for lists its reference not assignment: https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0
    for (var i = 0; i < matrix.length; i++) {
      var array = matrix[i];
      array[(column+-1)] = array[array.length-1];
      //used .slice instead of removeItem function to avoid matrix to be changed
      appendItem(Matrix, array.slice(0, array.length-1));
    }
    return Matrix;
  }
  function Coefficient_Matrix(matrix) {
    var Matrix = [];
    for (var i = 0; i < matrix.length; i++) {
      var array = matrix[i];
      //used .slice instead of removeItem function to avoid matrix to be changed
      appendItem(Matrix, array.slice(0, array.length-1));
    }
    return Matrix;
  }
}
