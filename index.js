/* to check, if the file has loaded ir not -> to aviod getting null values from  getElement and query selectors */
document.addEventListener("readystatechange", (event) => {
   if (event.target.readyState == "complete") {
      console.log("readyState: complete");
      intitApp();
   }
});

const intitApp = () => {
   const sec1 = document.getElementById("cosmos");
   console.log(sec1);
   const sec2 = document.querySelector("#bio-eng");
   console.log(sec2);

   sec1.style.display = "grid";

   const class1 = document.getElementsByClassName("aquamarine");
   console.log(class1);
   const class2 = document.querySelectorAll(".aquamarine");
   console.log(class2);
   /*
    getElementsByClassName, returns a HMTLCollection
    querySelectorAll, returns a NodeList
    */

   for (let i = 0; i < class2.length; i++) {
      class2[i].style.background = "#555";
   }

   console.log(sec2.parentElement);
   console.log(sec2.parentElement.children);
   console.log(sec2.parentElement.childNodes);
   /*
    parentElement, go 1 lvl up the DOM tree
    children, returns a HMTLCollection
    childNodes, returns a NodeList
    */

   /* to navigate/traverse the DOM tree
    console.log(sec2.parentElement.hasChildNodes());
    console.log(sec2.parentElement.firstChild);
    console.log(sec2.parentElement.lastChild);
    console.log(sec2.parentElement.firstElementChild);
    console.log(sec2.parentElement.lastElementChild);
    console.log(sec2.parentElement.nextSibling);
    console.log(sec2.parentElement.nextElementSibling);
    console.log(sec2.parentElement.previousSibling);
    console.log(sec2.parentElement.previousElementSibling);
    */

   const class3 = document.getElementById("micro").querySelector(".sq-group");
   class3.lastElementChild.remove();
   console.log(class3);
   /* removes the last div animation ele */

   const createDiv = (parent, txt) => {
      const newDiv = document.createElement("div");
      newDiv.textContent = txt;
      newDiv.style.backgroundColor = "#333";
      newDiv.style.width = "100px";
      newDiv.style.height = "100px";
      newDiv.style.margin = "1rem";
      newDiv.style.display = "flex";
      newDiv.style.textAlign = "center";
      newDiv.style.alignItems = "center";
      parent.append(newDiv);
   };
   createDiv(sec1, "Just some random text from js");

   /* JS Event Listeners
    Syntax, addEventListener(event, function, useCapture);
    useCapture, def. false; false -> handler is set on bubbling phrase; true -> handler is set on capturing phase
    */
   const doSomething = () => {
      alert("Do something");
   };
   class3.addEventListener("click", doSomething, false);
   class3.removeEventListener("click", doSomething, false);

   const sec3 = document.getElementById("micro");
   const para = sec3.querySelector("p");

   sec3.addEventListener("click", (event) => {
      event.stopPropagation();
      sec3.style.backgroundColor = "#333";
   });
   para.addEventListener("click", (event) => {
      event.stopPropagation(); // stops the click from propogating to other elements eventListener -> either inwards or outwards; stops event bubbling
      para.style.backgroundColor = "#444";
   });

   /* form.addEventListener("submit", (event) => {
        event.preventDefault(); // prevents the page from reloading when submit button is pressed (i.e. the def.)
        console.log("submit event");
    }); */
   console.clear();

   /* Web Storage API - not part of DOM; refersto the window API; available to JS via global variable: window -> no need to type window (its implied) */

   const myObj = {
      name: "Qwerty",
      hobbies: ["eat", "sleep", "code"],
      logName: () => {
         console.log(this.name);
      },
   };

   sessionStorage.setItem("mySessionStore", JSON.stringify(myObj));
   const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
   const key = sessionStorage.key(1);
   console.log(key);
   console.log(mySessionData);

   localStorage.setItem("myLocalStore", JSON.stringify(myObj));
   const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
   localStorage.removeItem("myLocalStore");
   localStorage.clear();
   console.log(`${JSON.stringify(myLocalData)}`);
   console.log(localStorage.length);
   /* 
    sessionStorage, keeps the data only dduring the session (on website/logged-in); exit site -> data no longer stored
    localStorage, stores persistent data; continues to store data in browser (not the open tab); can reopen the browser to retrieve the data
    setItem, stores data to the storage in browser
    getItem, gets the item from browser wrt item name
    removeItem, removes the item in storage (mapped to the item name)
    clear(), removes all data from storage
    key(0), gets the name of first key/item name used to store the data
    length, gives the number of items stored in storage
    */
   console.clear();

   /* Fetch API - 
    Callbacks, Promises, Thenables, Async/Await

    Callbacks, call a fnc. which calls another fnc. (chain of events); leads to callback hell; seen in legacy codes -> promises solve this problem
    // "callback hell"
    firstFnc(para, function() {
        // do stuff
        secondFnc(para, function() {
            // do stuff
            thirdFnc(para, function() {       
                // do stuff
            });       
        });
    });

    Promises, 3 states: pending, fulfilled, rejected
    Thenables, 

    const myPromise = new Promise((reslove, reject) => {
        const error = false;
        if (!error) {
            reslove("Yes, promise resolved!");
        } else {
            reject("No, promise not resolved!");
        }
    });

    const myNextPromise = new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove("My next promise resolved!");
        }, 500);
    });

    myNextPromise.then(value => {
        console.log(value);
    });
    myPromise.then(value => {
        console.log(value);
    });

    const users = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(user => {
            console.log(user);
        })
    });

    Async/Await, 
    */

   const myUsers = {
      userList: [],
   };

   // another way to def. an async fnc.
   // async function myCoolFnc() {
   const myAsyncFnc = async () => {
      const response = await fetch(
         "https://jsonplaceholder.typicode.com/users"
      );
      const userData = await response.json();
      return userData;
   };
   const anotherFnc = async () => {
      const data = await myAsyncFnc();
      myUsers.userList = data;
      console.log("Inside fnc", myUsers.userList);
   };
   anotherFnc();
   console.log("Outside fnc", myUsers.userList);

   const getDadJoke = async () => {
      const response = await fetch("https://icanhazdadjoke.com/", {
         method: "GET", // def.
         headers: {
            Accept: "application/json",
            // Accept: "text/plain"
         },
      });
      const jokeData = await response.json();
      // const jokeData = await response.text();

      console.log(jokeData);
   };
   getDadJoke();

   const jokeObj = {
      id: "2TvX0wX89h",
      joke: "Why was Pavlov's beard so soft? Because he conditioned it.",
   };
   const postData = async (jokeObj) => {
      const response = await fetch("https://icanhazdadjoke.com/", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(jokeObj),
      });
      // read documentation of api -> how to post (for specific apis)
      const jokeResponse = await response.json();

      console.log(jokeResponse);
   };
   postData();

   /* 
    RegEx - regular expressions, used for string matching 

    For global scope, g
    [xyz], matches all occ. of x, y, z individually
    [^xyz], mathces all occ. except x, y, z
    [a-z], matches range of a to z
    ., selects everything except new line char
    \w, selects all word characters -> not - or '
    \W, selects all char which are not words
    \d, selects digits
    \D, selects everything except digits
    \s , selects white spaces -> inc. tabs and line breaks
    [\s\S], selects EVERYTHING

    For multi-line scope, m
    ^I, selects I all I at the beginning of line
    d$, selects d at end of each line
    \., selects . if it's at end of line

    ...too much to write :(
    */
};

import playGuitar from "./practice.js";
import { plucking as pluck } from "./practice.js";

import * as practice from "./practice.js";

console.log(playGuitar());
console.log(pluck());

const user = new practice.user("qwerty@mail.com", "qwerty");
console.log(user.greeting());

console.clear();
