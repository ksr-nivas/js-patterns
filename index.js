// Import stylesheets
import './style.css';

// Pattern - 1
// *
// * *
// * * *
// * * * *
// * * * * *

function pattern1() {
  console.log('----------- Pattern - 1 ---------');
  let patternString = '';
  for(let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      patternString += '* ';
    }
    patternString += '\n'
  }

  console.log(patternString);
}

// Pattern - 2
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
function pattern2() {
  console.log('----------- Pattern - 2 ---------');
  let patternString = '';
  for(let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      patternString += '* ';
    }
    patternString += '\n'
  }

  console.log(patternString);
}

// Pattern - 3
// * * * * *
// * * * * 
// * * * 
// * * 
// * 

function pattern3() {
  console.log('----------- Pattern - 3 ---------');
  let patternString = '';
  for(let i = 5; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
      patternString += '* ';
    }
    patternString += '\n'
  }

  console.log(patternString);
}

// Pattern - 4
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * 
// * * * 
// * * 
// * 

function pattern4() {
  console.log('----------- Pattern - 4 ---------');
  let patternString = '', cols = 1;
  for(let row = 1; row <= 10; row++) {
    cols = row > 10/2 ? (2 * 5 - row) : row;
    for (let col = 1; col <= cols; col++) {
      patternString += '* ';
    }
    patternString += '\n'
  }

  console.log(patternString);
}


// Pattern - 5
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * * 
//   * * * 
//    * * 
//     * 

function pattern5() {
  console.log('----------- Pattern - 5 ---------');
  let patternString = '', cols = 1;
  for(let row = 1; row <= 10; row++) {
    patternString += '';
    cols = row > 10/2 ? (2 * 5 - row) : row;
    for (let col = 1; col <= cols; col++) {
      patternString += '* ';
    }
    patternString += '\n'
  }

  console.log(patternString);
}



pattern1();
pattern2();
pattern3();
pattern4();
pattern5();

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Patterns</h1>`;