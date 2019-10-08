const config = require('./config.json');
const Fetcher = require('./lib/fetcher');
const VotingAnalysis = require('./lib/voting-analysis');
const votingAnalysis = new VotingAnalysis(config);

(async function() {
  if (process.env.FETCH_REPS && process.env.FETCH_REPS === 'true') {
    const fetch = new Fetcher();
    await fetch.fetchAll();
  }

  if (process.env.FETCH_ONLY && process.env.FETCH_ONLY === 'true') {
    return;
  }

  await votingAnalysis.analyze();
})();
