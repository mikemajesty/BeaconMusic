var Song = require('../models/song');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.json([
        {
            name: "Astronomy Domine",
            artist: "Pink Floyd",
            url: "/mp3/101-pink_floyd-astronomy_domine.mp3",
            image: "https://upload.wikimedia.org/wikipedia/pt/e/e1/Echoes_best_pink_floyd.jpeg"
        },
        {
            name: "See emily play",
            artist: "Pink Floyd",
            url: "/mp3/102-pink_floyd-see_emily_play.mp3",
            image: "https://upload.wikimedia.org/wikipedia/pt/e/e1/Echoes_best_pink_floyd.jpeg"
        },
        {
            name: "The happiest days of our lives",
            artist: "Pink Floyd",
            url: "/mp3/103-pink_floyd-the_happiest_days_of_our_lives.mp3",
            image: "https://upload.wikimedia.org/wikipedia/pt/e/e1/Echoes_best_pink_floyd.jpeg"
        },
        {
            name: "Another brick in the wall (part 2)",
            artist: "Pink Floyd",
            url: "/mp3/104-pink_floyd-another_brick_in_the_wall_(part_2).mp3",
            image: "https://upload.wikimedia.org/wikipedia/pt/e/e1/Echoes_best_pink_floyd.jpeg"
        }
    ]);
}); 

module.exports = router;