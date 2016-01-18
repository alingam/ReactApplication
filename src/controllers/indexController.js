/**
 * Created by aparnalingam on 1/17/16.
 */
exports.renderIndexPage = function (req, res) {
   res.render('index')
};

var influencersList=[
   {
      "id": 12345,
      "email": "vivek@edcast.com",
      "bio": "Appointments at Duke, Stanford, and Singularity University",
      "firstName": "Vivek",
      "lastName": "Wadhwa",
      "picture": "http://lorempixel.com/200/200",
      "handle": "@vivekwadhwa",
      "followersCount": 270
   },
   {
      "id": 100147,
      "email": "extremetechchallenge@edcast.com",
      "bio": "Extreme Tech Challenge brings together targeted resources and world class advisors to help high-energy, wicked-smart entrepreneurs that are executing on big ideas. Are YOU ready to give it your best?",
      "firstName": "Extreme Tech Challenge",
      "lastName": "",
      "picture": "http://lorempixel.com/300/300",
      "handle": "@ExtremeTechChallenge",
      "followersCount": 212,
   },
   {
      "id": 160061,
      "email": "biocon@edcast.com",
      "bio": "Delivering Affordable Innovation",
      "firstName": "Biocon",
      "lastName": "",
      "name": "Biocon",
      "picture": "http://lorempixel.com/400/400",
      "handle": "@Biocon",
      "followersCount": 14,
   }
];

exports.getInfluencers=function(req,res){
   console.log("Inside the get influencers =>");
   res.send(influencersList)
};

exports.postFollow=function(req,res){
   console.log("Post follow function inside index controller: "+JSON.stringify(req.body));
   res.send(req.body);
};

exports.deleteFollow=function(req,res){
   console.log("Delete follow function inside index controller: "+JSON.stringify(req.body));
   res.send(req.body);
};