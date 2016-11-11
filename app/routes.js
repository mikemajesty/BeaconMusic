var Todo = require('./models/todo');

function getTodos(res) {
    Todo.find(function (err, todos) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }
        res.json(todos); // return all todos in JSON format
    });
}

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
