/**
 * Created by garytam on 2017-07-09.
 */
import express from 'express';
import config from '../config';
import initializeDb from '../db';
import middleware from '../middleware';
import taskController from '../controller/task';

let router = express();

// connect to db
initializeDb(db => {

    // internal middleware
    router.use(middleware({ config, db }));

    // api routes v1 (/v1)
    router.use('/task', taskController({config, db}));

});

export default router;
