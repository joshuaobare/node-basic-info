const express = require("express")
const app = express()
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3080;


app.use(express.static("."))
app.use((req,res) => {
  fs.readFile("404.html", (err, data) => {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.status(500).write(data)
    return res.end();
  });
  
})

  app.listen(port, () => {
    console.log(`Server is running at http://{hostname}:${port}`);
  });
