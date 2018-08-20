import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    votingData: {
      nominees: [],
      joinedInfo: [],
      votedPerDate: [],
      totalVotersRatio: 0,
      totalVoters: 0,
      totalElegible: 0,
    },
  },
  mutations: {
    CHANGE_VOTING_DATA: (state, votingData) => {
      state.votingData = votingData;
    }
  },
  actions: {
    setVotingData: (context, votingData) => {
      context.commit("CHANGE_VOTING_DATA", votingData);
    }
  },
});
