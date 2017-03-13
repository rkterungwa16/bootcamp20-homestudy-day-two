var rl = require("readline");
var prompts = rl.createInterface(process.stdin, process.stdout);

var GitHubApi = require("github");

var github = new GitHubApi({
    
    debug: true,
    protocol: "https",
    host: "api.github.com", 
    pathPrefix: "", 
    headers: {
        "user-agent": "rkterungwa16" 
    },
    Promise: require('bluebird'),
    followRedirects: false, 
    timeout: 5000
});



prompts.question("Enter Username: ", function (name) {
    var data = {};
    data.username = name;
    
    github.users.getFollowingForUser(data, function(err, res) {
    console.log(JSON.stringify(res));
  });
    console.log(data);
});




