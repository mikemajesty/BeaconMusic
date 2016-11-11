var Playlist = require('../service/playlist');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.json(Playlist.songs());
}); 

router.post('/', function (req, res) {
    Playlist.add(req.body);

    res.status(200);
    res.send();
}); 

module.exports = router;