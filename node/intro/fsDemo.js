// the fs(file system) is the default packages provided by the node module 
// we don't need to install this package
// this package is used to manage file system
//  e.g. for reading and writitng any file etc.
// it provide callBack and promises based function fs/promises and fs/..nhi pta..

// to import the fs module in common js module
// const fs = require('fs/promises');


// to read a file -------------------->
// to import the module in ES module
import {readFile, writeFile} from "fs/promises";

// although we can find the path by __dirname but this does not work in ES module

// to find the absolute path if index.html ..->
// file path of index.html
const filePath = new URL('./index.html', import.meta.url);

// to read the file at filePath and for converting the file in suitable format we use encoding :'utf-8'
let data = await readFile(filePath, {encoding : 'utf8'});
console.log(data);

// to write a file ------------------->
const obj = {
    title : 'my custon title',
    body : 'custom body',
}
for(const [key, value] of Object.entries(obj)){
    data = data.replace(`{${key}}`, value);
}

await writeFile(new URL('./index.html', import.meta.url), data);