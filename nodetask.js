var fs = require('fs');
var path = require('path');
var url = path.resolve('./');

function loopDirs(url) {

    var dirs = fs.readdirSync(url);

    for(var dir of dirs){


        var stat = fs.statSync(url+'\\'+dir);

        if(stat.isDirectory()){
            console.log(dir, stat.size + " bytes");

            var newUrl = path.resolve(url, dir);


            loopDirs(newUrl);

        } else if(stat.isFile()){
            console.log(dir, stat.size + " bytes");
        }
    }
}

loopDirs(url);