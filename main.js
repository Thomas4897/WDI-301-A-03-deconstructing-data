//* spread operator, rest operator and Deconstructing data

const userPersonalData = {
  name: "peter",
  age: "56",
  birthday: "jan 1st",
};
const userGameData = {
  score: 4546,
  accomplishments: [
    "won award for being good gamer",
    "won 1st win",
    "got good score on the weekend",
  ],
};

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//! Function that combines two seperate Objects into one Object
const combineObjects = (arr1, arr2) => {
  return { ...arr1, ...arr2 };
};

const newUserInfo = combineObjects(userPersonalData, userGameData);

console.log("\ncombineObjects:", newUserInfo);

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Make a copy of your new user object but override the birthday to december 31st
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//! Creates a copy of an Object and Updates 'birthday' value
const updatedCopiedObject = { ...newUserInfo, birthday: "december 31st" };

console.log("\ncopiedObject:", updatedCopiedObject);

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Use the spread operator to make a copy of the accomplishments array and store it in a new variable
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//! Copy the 'accomplishments' values into a new array
const copyOfAccomplishments = [...updatedCopiedObject.accomplishments];

console.log("\ncopyOfAccomplishments:", copyOfAccomplishments);

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  4.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var user = {
  name: "pete",
  age: "32",
  favoriteThings: {
    food: ["pizza", "tacos", "burgers", "italian"],
    movies: [],
  },
};

//! Nested Destructing
const {
  favoriteThings: { food },
} = user;

console.log("\nfood:", food);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5. Once you have grabbed the favorite foods. Descontrusct the food array to grab only the first 2 values. //
////////////////////////////////////////////////////////////////////////////////////////////////////////////

//! Deconstruct only first two values
const [firstValue, secondValue] = food;

console.log("\nFirst two values of food Array:", firstValue, secondValue);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 6. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food.
// The food variable should have all the array items starting from the third one.
////////////////////////////////////////////////////////////////////////////////////////////////////////////
const data = ["peter", "34", "apple", "oranges", "pizza", "tacos"];

//! Deconstrunct and Rest
const [name, age, ...food2] = data;

console.log(`\nDeconstruct and Rest: ${name}, ${age}, ${food2}`);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 7. use object destructuring to grab the following from the userData object:
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing
////////////////////////////////////////////////////////////////////////////////////////////////////////////

const userData = {
  name: "Peter",
  favorites: {
    needs: {
      food: ["burger", "pizza", "tacos", "fried chicken", "sushi"],
    },
    wants: {
      things: ["cars", "jewelry"],
    },
  },
};

//! Nested Duconstructing and Renaming
const {
  name: userName,
  favorites: {
    needs: { food: favoriteFood },
    wants: {
      things: [favoriteThing, secondfavoriteThing],
    },
  },
} = userData;

console.log(
  `\nuserName: ${userName}, favoriteFood: ${favoriteFood}, favoriteThing: ${favoriteThing}, secondfavoriteThing: ${secondfavoriteThing}`
);

console.log("");
