/**
 * Created by garytam on 2017-07-09.
 */
'use strict';

const async = require('async');

// eachSeries -> process in sequence
// each -> process in parallel


let asyncProcess = function(task, timeout, callback){
    console.log('processing ' + task);
    setTimeout(function(){
        // const error = Math.random() > .99 ? true: false;
        let error = false;
        if (error){
            console.log('error from random');
            callback(new Error('Fail to process ' + task));
        } else {
            console.log(new Date() + ' ' + task + ' processed');
            callback(null, 'from ' + task);
        }
    }, timeout);
}


console.log(new Date() + " starting ...");

async.series(
    [
        function(callback){
            asyncProcess('task 1', 2000, callback);
        },

        function(callback){
            asyncProcess('task 2', 1500, callback);
        },

        function(callback){
            asyncProcess('task 3', 3000, callback)
        }
    ],
    function(err, results){
        if (err){
            console.log('An error happened');
            console.log(err);
            return;
        }

        results.forEach(function(result){
            console.log('result -> ' + result);
        })

        console.log(new Date() + ' async.eachSeries Done');
    }
)
