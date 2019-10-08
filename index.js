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

  if (process.env.GET_NOT_VOTED && process.env.GET_NOT_VOTED === 'true') {
    const notVoted = await votingAnalysis.getNotVoted();
    notVoted.forEach((rep) => {
      console.log(`${rep.first_name} ${rep.last_name},${rep.profile.remo_url}`);
    });
    return;
  }

  await votingAnalysis.analyze();
})();
