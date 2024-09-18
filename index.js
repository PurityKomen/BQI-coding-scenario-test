//Section 1

//Scenario 1: Array Manipulation: Implement the function `removeDuplicates(arr)` to remove duplicate contacts.
function removeDuplicates(arr) {
  const uniqueContacts = [
    ...new Set(arr.map((obj) => JSON.stringify(obj))),
  ].map((s) => JSON.parse(s));
  return uniqueContacts;
}
//the array we are passing to the object
const contacts = [
  { firstName: "John", middleName: "A", lastName: "Doe" },
  { firstName: "Jane", middleName: "B", lastName: "Doe" },
  { firstName: "John", middleName: "A", lastName: "Doe" },
];
removeDuplicates(contacts);


//Scenario 2: Object Manipulation: Implement the function `mergeObjects(obj1, obj2)` to merge two objects.
function mergeObjects(obj1, obj2) {
  return Object.assign(obj1, obj2);
}
//the 2 objects we want to merge
const obj1 = { name: "Alice", age: 25 };
const obj2 = { age: 30, city: "New York" };
mergeObjects(obj1, obj2);



//Section 2

//Scenario 1: Debugging: Correct the increment function.
function incrementArray(arr) {
  return arr.map((num) => (num += 1));
}
incrementArray([1, 2, 3]);



//Scenario 2: Closures: Explain closures with an example.

/* A closure gives a function access to its outer scope.A closure is created
every time a function is created */

Example

function displayName(){
  let name = 'Lucy'

  function output(){
    console.log(`My name is ${name}`)
  }
  output()
}
displayName()



//Scenario 3: Performance Optimization : Describe three optimization strategies.

Answer
/* 1. Remove unused code - if there is code that you are not using anywhere in your application,
its advisable to remove it

2. Reduce amount of looped code- use a loop only where you need it

3. Consider a simpler solution - always to prefer to implement something simple that users will
 find easy to use
 
4. Use asynchoronous code - use asynchronous code such as fetch to handle fetching api request 
or setTimeout to do something after some time */


 
//Scenario 4: Data Manipulation: Implement the function `getAdultNames(users)` to filter users by age.
function getAdultNames(users) {
  //filter users whose age is above 18 and return them
  return users.filter((user) => user.age >= 18).map((user) => user.name);
}

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
];
console.log(getAdultNames(users));



//Scenario 5: Asynchronous Data Handling: Implement `fetchUserPosts(apiUrl)` to handle async API calls.

function fetchUserPosts(apiUrl) {
  //fetch a post request using the api and return a response which could be a success or a failure
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

