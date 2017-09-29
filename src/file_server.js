
var r = function () {
    var fs = require('fs');
    var url = require('url');
    var path = require('path');
    var http = require("http");
    var root = path.resolve(process.argv[2] || '.');
    
    var server = http.createServer((request, response) => {
        var pathname = url.parse(request.url).pathname;
        console.log('---------------------------------------------');
        console.log('url='+request.url);
        console.log('pathname='+pathname);
        var filepath = path.join(root, pathname);
        console.log('root='+root);
        console.log('filepath='+filepath);
        if (request.url = '/favicon.ico') {
            return;
        }
        fs.stat(filepath, (err, stats)=>{
            if (!err && stats.isFile()) {
                // process.execPath
                // process.cwd();
                // process.run
                console.log('200'+request.url);
                // response.write('200');
                // response.writeHead(200,{"Content-type":"text/plain"});
                response.writeHead(200,{"Content-type":"text/html"});
                fs.createReadStream(filepath).pipe(response);
                
            } else if(fs.existsSync(filepath = path.join(root, 'index.html'))){
                response.writeHead(200,{"Content-type":"text/html"});
                fs.createReadStream(filepath).pipe(response);
            } else {
                console.log('404'+request.url);
                response.writeHead(404,{"Content-type":"text/html"});
                response.end('404 Not Found!');
            }
        });
    }).listen(8888);
    
    console.log('Server running at http://127.0.0.1:8888/');
}()
