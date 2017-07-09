'use strict';

const failPercent = 0.99;

function getRandomNumber(param) {
    console.log('getRandomNumber ' + param)
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const randomValue = Math.random();
            const error = randomValue > failPercent ? true : false;

            if (error) {
                reject(new Error('Ooops, something broke!' + error));
            } else {
                resolve(randomValue);
            }
        }, 1000);
    });
}
//
// getRandomNumber()
//     .then(function(value) {
//         console.log('Async success!', value);
//     })
//     .catch(function(err) {
//         console.log('Caught an error!', err);
//     });


function getRandomNumber2(param) {
    console.log('getRandomNumber2 ' + param);
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const randomValue = Math.random();
            const error = randomValue > failPercent ? true : false;

            if (error) {
                reject(new Error('Ooops, something broke!' + error));
            } else {
                resolve(randomValue);
            }
        }, 2000);
    });
}

function method3(param){
    console.log('method3 ' + param);
    return new Promise(function(resolve, reject) {
        const randomValue = Math.random();
        const error = randomValue > failPercent ? true : false;

        if (error) {
            reject(new Error('Ooops, something broke!' + error));
        } else {
            resolve(randomValue);
        }

    });
}
getRandomNumber2('Value 0')
    .then(function(value) {
        console.log('Value 1:', value);
        return getRandomNumber2('var 1');
    })
    .then(function(value) {
        console.log('Value 2:', value);
        return getRandomNumber('var 2');
    })
    .then(function(value) {
        // console.log('Value 3:', value);
        return method3(value);
    })
    .catch(function(err) {
        console.log('Caught an error!', err);
    });