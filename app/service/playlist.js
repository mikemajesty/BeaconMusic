var playlist = [];

var add = function(song) {
    playlist.push(song);
};

var songs = function() {
    return playlist;
};

module.exports = {
    add: add,
    songs: songs
};