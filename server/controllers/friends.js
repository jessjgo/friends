console.log('*************************friends controller');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
require('../config/mongoose');
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

// Build out the methods in the friendsControllers below
function FriendsController(){
    this.index = function(req, res) {
        //your code here
        Friend.find({}, function(err, friends) {
            res.json({placeholder:'index', friends: friends});
        })
    };
    this.create = function(req,res){
        //your code here
        console.log("***********", req.body)
        var friend = new Friend({
            firstname: req.body.firstname,
            lastname: req.body.lastname, 
            birthday: req.body.birthday,
            created_at: new Date()
        });
        friend.save(function(err) {
            if(err) {
                console.log("error on create");
            } else {
                res.json({placeholder:'create', friend: friend});
            }
        })
    };
    this.update = function(req,res){
        //your code here
        /*console.log("*******", req.params.id)*/
        Friend.findOne({_id: req.params.id}, function(err, friend) {
            if(err) {
                console.log("error on update");
            } else {
                friend.firstname = req.body.firstname;
                friend.lastname = req.body.lastname;
                friend.birthday = req.body.birthday;
                friend.save(function(err) {
                    if(err) {
                        console.log("error on update");
                    } else {
                        res.json({placeholder:'update', friend: friend});
                    }
                })
            }
        })
    };
    this.delete = function(req,res){
        //your code here
        Friend.remove({_id: req.params.id}, function(err, friend) {
            if(err) {
                console.log("error on delete");
            } else {
                console.log("successful on delete");
                res.json({placeholder:'delete', friend: friend});
            }
        })
    };
    this.show = function(req,res){
        //your code here
        Friend.findOne({_id: req.params.id}, function(err, friend) {
            if(err) {
                console.log("error on show");
            } else {
                res.json({placeholder:'show', friend: friend});
            }
        })
    };
}
module.exports = new FriendsController(); // what does this export?