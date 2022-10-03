Mozilla Reps Voting Analysis
=====

Starting the frontend for development
------

The frontend (charts) for the analysis is written with Vue. You can run the development server with:

```bash
npm ci
npm run serve
```

Now you can reach the locally running website (using the statistics you've just exported) at [localhost:8080](http://localhost:8080).

Deploying a new build to gh-pages
------

The website is hosted on GitHub Pages. We are using the gh-pages branch for this. Please note that this branch only contains
the relevant output documents. So please, never try to merge this into main. To start a deployment, you can run:

```bash
npm run deploy
```

which will automatically push it to GitHub.
