var gzip = zlib.createGzip();
var fs = require('fs');
var inp = fs.createReadStream('input.txt');
var out = fs.createWriteStream('input.txt.gz');

inp.pipe(gzip).pipe(out);

if in libs folder but not gz
    upload to s3
    set 'Content-Type' to 'application/javascript' or 'text/css'
    set 'Content-Encoding' to 'gzip'