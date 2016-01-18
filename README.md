# ReactApplication
React Application for showing the list of Influencers and follow

Install bower and grunt-cli globally:

```sh
$ npm install -g bower
$ npm install -g grunt-cli
```

Install your dependencies:

```sh
$ npm install 

runs bower install also. If not Please run: 

$ bower install
```

Run grunt
```sh
$ grunt

Does

* less to css compilation
* css minification
* jsx to js transformation
* js minification

```

Start your server

```sh
node server.js 

server startes - http://localhost:3000
```


* Logged in user id hardcoded as "00000" in componentDidMount()
* follow - Passing the userId and InfluencerId 
* unfollow - Passing the userId and InfluencerId.