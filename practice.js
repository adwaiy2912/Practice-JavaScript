/* JSON (JavaScript Object Notation), used to send and recieve data; text format -> language independent */
/*
const myObj = { 
    name: "Qwerty",
    hobbies: ["eat", "sleep", "code"],
    hello: () => {
        console.log("Hello");
    }
};

console.log(myObj);
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);
const recieveJSON = JSON.parse(sendJSON);
console.log(recieveJSON);
console.log(typeof recieveJSON);
*/

/* JS erroes and error handling */

// const makeError = () => {
//     try {
//         throw new Error("Error Message!");
//     } catch (err) {
//         console.error(err.name);
//         console.error(err.message);
//     } finally {
//         console.log("In finally");
//     }
// };
// makeError();

/*
import val from "./posts.js"; -> imports the default value
import {val1, val2} from "./posts.js"; -> imports multiple values from posts.js
import * from "./posts.js"; -> imports all from posts
import * as util from "./posts.js"; -> imports all from posts (naming it as util)
import {val1, val2 as newVal2} from "./posts.js"; -> renaming values on import
*/

export default function playGuitar() {
   return "Playing guitar";
}

export const plucking = () => {
   return "Plucking some strings...";
};

export const tuning = () => {
   return "Tuning the strings";
};

export class user {
   constructor(mail, name) {
      this._id = mail;
      this._name = name;
      // _variable, used to create private variables
   }

   greeting() {
      return `Hi, my name is ${this._name}`;
   }
}
/*
to export functions externally in single export statement -> only 1 def.
export default playGuitar;
export {plucking, tuning};
*/

/* higher order functions - filter, map, reduce */

import { posts } from "./posts.js";

posts.forEach((post) => {
   console.log(post);
});

const filteredPost = posts.filter((post) => {
   return post.userId === 5;
});
const filteredPost2 = posts.filter((post) => post.userId == 5); // does the same thing
console.log(filteredPost);

const mappedPost = filteredPost.map((post) => {
   return post.id * 10;
});
const mappedPost2 = filteredPost.map(
   (post) => ({ item: post }) // create a new object using map fnc
);
console.log(mappedPost);

const reducedPost = mappedPost.reduce((sum, post) => {
   return sum + post;
});
console.log(reducedPost);

/* Destructuring */

const [fName, lName] = ["ABC", "XYZ"];
/*
fName = userName[0];
lName = userName[1];
*/

const { name: aliasName, age } = {
   name: "hello",
   age: 21,
};
/*
const aliasName = user.name;
const age = user.age;
*/

/* Spread operator */

const hobbies = ["Sports", "Cooking"];
const newHobbies = ["Reading"];

const mergedHobbies = [...hobbies, ...mergedHobbies]; // merges arrays without nesting -> pulls out array values and adds as comma seperated values
console.log(mergedHobbies);

const extendeduser = {
   isImp: true,
   ...user,
};
