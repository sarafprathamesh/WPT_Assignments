const fs = require("fs");
const http = require("http");
const url = require("url");
const calc = require("./calcq2.js");

server = http.createServer(function (req, resp) {
    var q = url.parse(req.url, true);

    resp.writeHeader(200, { 'content-type': 'text/html' });
    

    if (q.pathname == "/") {
        rs = fs.createReadStream("./nodeque2.html");
        rs.pipe(resp);

    }

    else if (q.pathname == "/home") {
        var num = parseInt(q.query.num1);
        console.log(num);
        if (num <= 5) {
           
            var ans = calc.factorial(num);
            resp.write("Facorial of " + num + " is " + ans);
            resp.end();
        }
        else if (num > 5 && num <= 10) {
            
            var ansarr = calc.printable(num);
            resp.write(ansarr);
            resp.end();

        }
        else {
            console.log("Hi");
            var ans = calc.prime(num);
            resp.write(ans);
            resp.end();
        }
    }
})
server.listen(3000);
console.log("server is running at port 3000");