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

        var newFriend = req.body.score;

        // console.log(newFriend);

        friends.push(newFriend);

        // console.log(friends);

        // match(friends.score, userScore);

        res.json(newFriend)

        function match(friends, newFriend) {
            for (var i = 0; i < friends.length; i++) {

                var diff = 0;

                console.log(friends[i].score);
            }

            for (var j = 0; j < newFriend.length; j++) {

                diff += Math.abs(friends[i].score[j] - newFriend[j]);


            }
            console.log("heres the diffs: " + diff);
        }

        match(friends, newFriend);






    })
}
