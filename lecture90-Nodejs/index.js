const fs = require("fs");
const os = require("os");
const http = require("http");
const url = require("url");


/* node core functionaliteies :-fs,os,http,url */
/* file operations 
// fs.writeFileSync("name.txt","hello my name is Prajwal")
// fs.writeFileSync("name.txt","this is rewriting file again")
// fs.appendFileSync("name.txt","new data added in file\n")

*/
// const res = fs.readFileSync("name.txt", "utf-8");
// console.log(res);
// fs.readFile("name.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log("data", data);
//   }
// });

/* os thing */
// console.log(os.cpus().length)

/* http server */
const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico" || req.url.startsWith("/.well-known"))
    return res.end();
  const myurl = url.parse(req.url);
  console.log(myurl);
  const log = `${Date.now()} ${req.url}  \n`;
  fs.appendFile("log.txt", log, () => {
    switch (req.url) {
      case "/":
        res.end("home page");
        break;
      default:
        res.end("404 not found");
    }
  });
});

myServer.listen(8000, () => {
  console.log("server at 8000");
});
