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

For the `votingResultsFilePath` path, download the voting result page (the one with the comments) locally (HTML).

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
the relevant output documents. So please, never try to merge this into main. To start a deployment, you can run:

```
$ npm run deploy
```

which will automatically push it to GitHub.

Reminder
----

You can get a list of Reps who haven't voted yet. This will never be publicly published from Peers or Council. This can be used to send reminders, but also there Peers and Council should not spam people who haven't voted. Some people just do not want to vote for reasons.

```
$ npm install
$ cp config.sample.json config.json
$ FETCH_REPS=true npm run reminder
```

Add the required information to the ```config.json``` file. For the `votingResultsFilePath` path, download the voting result page (the one with the comments) locally (HTML). For the reminder, you don't need to fill out anything else apart from the `votingResultsFilePath`.

The output will contain a CSV. Subsequent calls don't need to include the `FETCH_REPS` env variable, as the data should be already there.
