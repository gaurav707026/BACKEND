#!/usr/bin/env node
// the above written line is sheband 
// this is used to run the js file in treminal using input argument or by just file name.

// afte writing sheband we have to make sure that file have the permission to execute in terminal
// to check this we run 'ls -l'. this show all the file with their permission
// permission look like --rwx-xr..(r:read, w:write, x:execute)
// to change the permission we run 'chmod 777 script.js' this give all the permission to file



console.log("hello bkl");
// to run this file on terminal we have to run cmd node script.js


console.log(process.argv);

console.log(process.argv[2].split("=")[1]);