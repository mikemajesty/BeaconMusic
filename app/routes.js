module.exports = function (app) {

    app.use('/api/song', require('./api/song'));
    app.use('/api/playlist', require('./api/playlist'));

    // Mobile Application
    app.get('/mobile/*', function (req, res) {
        res.sendFile(__dirname + '/mobile/index.html');
    });

    // Player Application
    app.get('/player/*', function (req, res) {
        res.sendFile(__dirname + '/player/index.html');
    });
};
