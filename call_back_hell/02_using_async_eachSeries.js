/**
 * Created by garytam on 2017-07-09.
 */
'use strict';

const async = require('async');

 // eachSeries -> process in sequence
 // each -> process in parallel

let asyncProcess = function(thing, callback){
    setTimeout(function(){
        const error = Math.random() > .99 ? true: false;

        if (error){
            callback(new Error('Fail to process ' + thing));
        } else {
            console.log(thing + ' processed');
            callback(null);
        }
    }, 2000);
}


const thingsToProcess = [
    'do 1',
    'do 2',
    'do 3'
]

async.eachSeries(
    thingsToProcess,
    asyncProcess,
    function(err){
        if (err){
            console.log('An error happened');
            console.log(err);
            return;
        }

        console.log(' async.eachSeries Done');
        do_each();
    }
)

function do_each() {
    async.each(
        thingsToProcess,
        asyncProcess,
        function (err) {
            if (err) {
                console.log('An error happened');
                console.log(err);
                return;
            }

            console.log(' async.each Done');
        }
    );
}