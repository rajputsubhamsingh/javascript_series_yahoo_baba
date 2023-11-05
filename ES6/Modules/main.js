//user as us mean here we change the function name user to us
//ab "us" se hi user function call hoga 


//first way to "import" file

// import { message, user as us, test } from './library.js';

// us('i am shubham');
// console.log(message);

// //create object for test class
// let a = new test();
// console.log(a);
 

//second way to "import" file
// import * as yahoo from './library.js';

// yahoo.user('i am shubham');
// console.log(yahoo.message);

// //create object for test class
// let a = new yahoo.test();
// console.log(a);


//here is also a default function
// import { default as yahoo } from "./library.js";
// yahoo();