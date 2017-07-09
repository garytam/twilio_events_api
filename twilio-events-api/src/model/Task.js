/**
 * Created by garytam on 2017-07-09.
 */
'use strict';

import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let taskSchema = new Schema({
    _id: String,
    type: String
});

module.exports = mongoose.model('Task', taskSchema);