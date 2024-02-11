// Use an array to store data
let yourArray = [10, false, "hello", undefined, 16]; // Change this line

// Access an array's content using brackets
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "Not B"
// Only change code above this line
console.log(myArray);

// Add items with push() and unshift()
function mixedNumbers(arr) {
    // Only change code below this line
  arr.unshift("I", 2, 'three')
  arr.push(7, 'VIII', 9)
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));

//   Remove items with pop() and shift()
function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

//   Remove items using splice()
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1, 4)
// Only change code above this line
console.log(arr);

// Add items using splice()
function htmlColorNames(arr) {
    // Only change code below this line
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond")
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

//  Copy Array items using slice()
function forecast(arr) {
    // Only change code below this line
  
    return arr.slice(2, 4);
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//   Copy with Spread Operator
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
    newArr.push([...arr])
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));

//   Combine with Spread Operator
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
    return sentence;
  }
  
  console.log(spreadOut());

//   Check for an element with indexOf()
function quickCheck(arr, elem) {
    // Only change code below this line
  return arr.indexOf(elem) >= 0 ? true: false;
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// Iterate through array items with for loops
function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
  for(let i = 0; i < arr.length; i++){
    if(arr[i].indexOf(elem) == -1){
  newArr.push(arr[i])
    }
  }
  
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//   Create complex multi-dimesional arrays
let myNestedArray = [
    // Only change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array', ['deep']],
    ['mutate', 1327.98, 'splice', 'slice', 'push', [['deeper']]],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[['deepest']]]]
    // Only change code above this line
  ];

// Add key-value pairs to JS objects
const foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  // Only change code below this line
  foods['bananas'] = 13
  foods['grapes'] = 35
  foods['strawberries'] = 27
  // Only change code above this line
  
  console.log(foods);

//   Modify object nested in object
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // Only change code below this line
  userActivity.data.online = 45;
  // Only change code above this line
  
  console.log(userActivity);

//   Bracket notation
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    // Only change code below this line
  return foods[scannedItem]
    // Only change code above this line
  }
  
  console.log(checkInventory("apples"));

//   Use delete to remove object prperties
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // Only change code below this line
  delete foods.oranges
  delete foods.plums
  delete foods.strawberries
  // Only change code above this line
  
  console.log(foods);

//  Check if object has property
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name => userObj.hasOwnProperty(name));
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));

//   Iterate through keys of an object with for...in statement
const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(allUsers) {
    // Only change code below this line
  let result = 0
  for (let user in allUsers){
    if(allUsers[user].online === true){
      result++
    }
  }
  return result
    // Only change code above this line
  }
  
  console.log(countOnline(users));

//   Generate an array of all objects with Object.keys()
let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    // Only change code below this line
  return Object.keys(obj)
  
    // Only change code above this line
  }
  
  console.log(getArrayOfUsers(users));

//   Modify array stored in object
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // Only change code below this line
  userObj.data.friends.push(friend)
  return userObj.data.friends
    // Only change code above this line
  }
  
  console.log(addFriend(user, 'Pete'));