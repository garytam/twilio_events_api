/**
 * Created by garytam on 2017-07-09.
 */
import mongoose from 'mongoose';
import config from './config';

export default callback => {
    let db = mongoose.connect(config.mongoUrl);
    callback(db);
}
