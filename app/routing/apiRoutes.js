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

        // console.log(newFriend);

        friends.push(newFriend);

        // console.log(friends);

        match(friends.score, userScore);

        res.json(newFriend)

        function match(friends, userScore) {

            var diff = 0;

            for (var i = 0; i < friends.length; i++) {

                console.log(friends[i].score);
            }

            for (var j = 0; j < userScore.length; j++) {

                diff += Math.abs(friends[i].score[j] - userScore[j]);

                console.log('these are the diffs!: ' + diff);
            }


        }

    })
}
