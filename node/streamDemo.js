const fs = require('fs');
const transformstream = require('stream');
let fileStream = fs.createReadStream(__dirname+"/text.txt");

// this is our writestream or outputstream
let outputStream = process.stdout;

let middleStream = new transformstream.Transform({
    transform(chunk, encoding, nextchunk){
        let modifiedChunk = chunk.toString();
        this.push(modifiedChunk);
        setTimeout(nextchunk, 1500);
    }
});

let newReadableStream = fileStream.pipe(middleStream);
newReadableStream.pipe(outputStream);



// for connecting readstream and writestream to print all the data that we are writing from input stream
// readStream.pipe(writeStream);
// fileStream.pipe(outputStream);