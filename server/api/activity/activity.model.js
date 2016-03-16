'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ActivitySchema = new mongoose.Schema({
    message: String,
    project: {
        ref: 'project',
        type: mongoose.Schema.Types.ObjectId

    },
    user: {
        ref: 'user',
        type: mongoose.Schema.Types.ObjectId
    },
    date: { type: Date, default: Date.now }

});

export default mongoose.model('Activity', ActivitySchema);
