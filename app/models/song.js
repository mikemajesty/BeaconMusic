var mongoose = require('mongoose');

module.exports = mongoose.model('Song', {
    name: { type: String, default: '' },
    author: { type: String, default: '' },
    url: { type: String, default: '' }
});