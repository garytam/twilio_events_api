/**
 * Created by garytam on 2017-07-09.
 */

let mongoConnection = process.env.TWILIO_MONGO_URL;

export default {
    "port": 3005,
    "mongoUrl": "mongodb://" + mongoConnection,
    "bodyLimit": "100kb",
    "hours_offset": 64
}
