//sanity check
console.log("-----------------------------------------");
console.log(" 1B09_P2021445_ChengLuiKhee > server.js");
console.log("-----------------------------------------");


//------------------------------------------------------------
// imports
//------------------------------------------------------------
const app = require("./app");


//------------------------------------------------------------
// configurations
//------------------------------------------------------------

const hostname = 'localhost';
const port = 3000;


//------------------------------------------------------------
// main
//------------------------------------------------------------



// start listening for requests
app.listen(port, hostname, () => {
  console.log(`Server started and accessible via http://${hostname}:${port}/`);
});


  //how to decide 
  //search endpoint .. GET/POST??

  //1. anything in the request body(postman)?
  //Yes -- POST
  //No --  GET

  //2. Did you mutate any data in DB?
  //No --mostly.. GET
  //Yes -- Not GET