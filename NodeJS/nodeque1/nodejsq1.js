const http = require("http");
const fs = require("fs");
const url = require("url");
const calc = require("./calc");

server = http.createServer(function (req, resp) {
    var q = url.parse(req.url, true);


    resp.writeHeader(200, { 'content-type': 'text/html' });

    switch (q.pathname) {
        case "/home":
            rs = fs.createReadStream("./nodeque.html");
            rs.pipe(resp);
            break;

        case "/addition":
            resp.write("Number 1:" + q.query.num1 + "<br>Number 2:" + q.query.num2);
            var ans = calc.addition(q.query.num1, q.query.num2);
            resp.write("<br>Addition :" + ans);
            resp.end();
            break;
        case "/subtraction":
            resp.write("Number 1:" + q.query.num1 + "<br>Number 2:" + q.query.num2);
            var ans = calc.subtraction(q.query.num1, q.query.num2);
            resp.write("<br>Subtraction :" + ans);
            resp.end();
            break;
        case "/multiplication":
            resp.write("Number 1:" + q.query.num1 + "<br>Number 2:" + q.query.num2);
            var ans = calc.multiplication(q.query.num1, q.query.num2);
            resp.write("<br>Multiplication :" + ans);
            resp.end();
            break;
        case "/division":
            resp.write("Number 1:" + q.query.num1 + "<br>Number 2:" + q.query.num2);
            var ans = calc.division(q.query.num1, q.query.num2);
            resp.write("<br>Division :" + ans);
            resp.end();
            break;

    }


})
server.listen(3000);
console.log("Server is running at port 3000");