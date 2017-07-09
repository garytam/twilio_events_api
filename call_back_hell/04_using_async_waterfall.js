let async = require('async')


// In waterfall, the callback of the first function is the second function
// method_1 -> callback(null, 'Pink Floyd', 'Rock and Roll') will call
//             function(arg1, arg2, callback)

function method_1(param1, callback){
    setTimeout(function(){
        console.log('method_1 ' + param1);
        callback(null, param1, ' Shine on you crazy diamonds');
    }, 2000);
}

function method_2(param1, param2, callback){
    setTimeout(function(){
        console.log('method_2 ' + param1 + ' ' + param2);
        callback(null, param1 + ' : ' + param2 + ' the greatest thing since ');
    }, 1000);
}


function callAsyncWaterfall() {
    async.waterfall(
        [
            function (callback) {
                method_1('Ping Floyd', callback);
            },
            function (arg1, arg2, callback) {
                method_2(arg1, arg2, callback);
            },
            function (caption, callback) {
                caption += ' slice bread !!!!!';
                callback(null, caption);
            }
        ],
        function (err, caption) {
            console.log(caption);
        }
    );
}

callAsyncWaterfall()