var path = require("path");
var bodyParser = require("body-parser");

var friends = require("../data/friends.js");

module.exports = function(app) {

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.get('/api/friends', function(req, res) {

        res.json(friends);

    })

    app.post('/api/friends', function(req, res) {

        var newFriend = req.body;

        var userScore = newFriend.score;

        console.log(newFriend);

        friends.push(newFriend);

        console.log(friends);

        match(userScore, friends.score);

        res.json(newFriend)

        function match(userScore, friendsScore) {

            for (var i = 0; i < friends.length; i++) {

                console.log(friends[i].score);
            }



        }

    })
}
