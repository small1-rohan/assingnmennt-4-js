//                                           First Problem

//input a number and get a different number by simple calculation--(your number *3, then +10, then  /2, then -5 )

function mindGame(input) {
  if (typeof input == "number") {
    let multiply = input * 3;
    let add = multiply + 10;
    let divide = add / 2;
    let subtract = divide - 5;
    return subtract;
  } else {
    return "Please input a number";
  }
}

//                                          second problem

// check the number of  letter of a word is oven or odd --(your input data id contain with latter , check is it contain with even number of latter or odd number of latter)

function evenOdd(input) {
  if (typeof input == "string") {
    let len = input.length;
    if (len % 2 !== 0) {
      return "odd";
    } else {
      return "even";
    }
  } else {
    return "Please input a string";
  }
}

//                                           third problem

// check is it less then seven or grater then seven --(your number will subtract by 7 and if is less then 7 then you will get the different rather you  will get the double of your input)

function isLGSeven(input) {
  if (typeof input == "number") {
    let subtract = input - 7;

    if (subtract < 7) {
      return subtract;
    } else {
      let output = input * 2;
      return output;
    }
  } else {
    return "Please input a number";
  }
}

//                                           forth problem

// check how many negative number are there in the array --(input a array contain with number and you can see how many negative number are there)
function findingBadData(input) {
  if (typeof input == "object") {
    let count = 0;

    for (let i = 0; i < input.length; i++) {
      const element = input[i];

      if (element < 0) {
        count = count + 1;
      }
    }
    return count;
  } else {
    return "Please input an array";
  }
}

//                                           fifth problem

//convert your three friend gems to diamond --(if 3 of your friend have worth of 2000 value or more than that gems you can convert it to diamond rather you can see your gem value)

function gemsToDiamond(first, second, third) {
  if (
    typeof first == "number" &&
    typeof second == "number" &&
    typeof third == "number"
  ) {
    let firstGem = first * 21;
    let secondGem = second * 32;
    let thirdGem = third * 43;

    const totalGem = firstGem + secondGem + thirdGem;

    if (totalGem > 1000 * 2) {
      const output = totalGem - 2000;
      return output;
    } else {
      return totalGem;
    }
  } else {
    return "Please ensure that you input 3 values and all of them are number";
  }
}
