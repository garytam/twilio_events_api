/**
 * Created by garytam on 2017-07-09.
 */

'use strict';

const fs = require('fs');

function openFile(){
    fs.open('./test.txt', 'a+', function(err, fd){
        if (err){
            throw err;
        }

        writeFile(fd);
    });
}


function writeFile(fd){
    fs.write(fd, 'testing 123', function(err, written, string){
        if (err){
            throw err;
        }

        closeFile(fd);
    });
}

function closeFile(fd){
    fs.close(fd, function(err){
        if (err){
            throw err;
        }
    });
}

openFile();