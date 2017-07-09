/**
 * Created by garytam on 2017-07-09.
 */

'use strict';

let mongoConnection = process.env.TWILIO_MONGO_URL
let mongojs = require('mongojs');
let db = mongojs(mongoConnection, ['events', 'tasks', 'workers']);


function processWorkers(workers){
    workers.forEach(function(worker){
        console.log(worker.name + ' status(' + worker.state + ')');
    })
}
db.workers.find(function(err, docs){
   processWorkers(docs);
   process.exit();
});