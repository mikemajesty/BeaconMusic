module.exports = function (app) {

    app.use('/api/song', require('./api/song'));
    app.use('/api/playlist', require('./api/playlist'));

    // Player Application
    // app.get('/player/*', function (req, res) {
    //     res.sendFile(__dirname + '/player/index.html');
    // });

    // Mobile Application
    // app.get('/*', function (req, res) {
    //     res.sendFile(__dirname + '/index.html');
    // });
};
