var fs = require("fs");
var csv = require("fast-csv");
var stream = fs.createReadStream("my.csv");
var csvStream = csv()
    .fromPath("short.csv")
    .on("data", function(data){
        console.log(data[0]);
    })
    .on("end", function(){
        console.log("done");
    });
stream.pipe(csvStream);