Mozilla Reps Voting Analysis
=====


Setting up the server
-----

First install [Node](http://nodejs.org/).

Then you will need to install the dependencies and copy the configuration.

```
$ git clone <URL>
$ npm install
$ cp config.sample.json config.json
```

Add the required information to the ```config.json``` file. This can be gathered from the voting page / YouTube videos.

Now you can run the script:

```
$ FETCH_REPS=true npm start
```

You can leave off ```FETCH_REPS="true"``` if you already have a local file with the data.

This will create a ```voting_analysis.json``` file which then will be used by the frontend code.

Starting the frontend for development
------

The frontend (charts) for the analysis is written with Vue. You can run the development server with:

```
$ cd voting
$ npm install
$ npm run serve
```

Now you can reach the locally running website (using the statistics you've just exported) at [localhost:8080](http://localhost:8080).

Deploying a new build to gh-pages
------

The website is hosted on GitHub Pages. We are using the gh-pages branch for this. Please note that this branch only contains
the relevant output documents. So please, never try to merge this into master. To start a deployment, you can run:

```
$ npm run deploy
```

which will automatically push it to GitHub.