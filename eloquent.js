//Minimum


function min(x, y) {
	if (y < x) {return y;}
	else if (x < y) {return y;}
}

//Recursion

function isEven(n) {
	if (n == 0) {
      return true;
    } else if (n == 1) {
      return false;
    } else if (n == -1) {
      return false;  
    } else  {
      return isEven(n - 2);
	}
}

//Bean Counting



function countBs(string) {
	let b = 0
    for(let i = 0; i < string.length; i++) {
      if(string[i] === "B") {
      b += 1;
      }
    }
  return b
}  



function countChar(string, char) {
	let b = 0
    for(let i = 0; i < string.length; i++) {
      if(string[i] === char) {
      b += 1;
      }
    }
  return b
}  
