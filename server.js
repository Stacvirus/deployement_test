const http = require("http")
const app = http.createServer((req, res) =>{
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.end("hello world!")
})

const port = process.env.PORT || 3005;

app.listen(port, () =>{
    console.log("started at port ",port);
});
