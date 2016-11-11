var Song = require('../models/song');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
//   Song.find(function (err, songs) {

//         if (err) {
//             res.send(err);
//         }

//         res.json(songs);
//     });
    res.json([
        {
            name: "Astronomy Domine",
            artist: "Pink Floyd",
            url: "/mp3/101-pink_floyd-astronomy_domine.mp3",
            image: "https://upload.wikimedia.org/wikipedia/pt/e/e1/Echoes_best_pink_floyd.jpeg"
        },
    ]);
}); 

module.exports = router;