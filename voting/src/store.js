import Vue from 'vue';
import Vuex from 'vuex';

import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    votingData: {
      nominees: [],
      joinedInfo: [],
      votedPerDate: [],
      totalVotersRatio: 0,
      totalVoters: 0,
      totalEligible: 0,
    },
    availableVotings: [],
    allVotingData: {},
    votingURL: '',
    votingKey: '',
  },
  mutations: {
    CHANGE_VOTING_DATA: function(state, allVotingData) {
      state.allVotingData = allVotingData;
      state.availableVotings = Object.keys(allVotingData);
    },
    CHANGE_SELECTED_VOTING: function(state, newVotingKey) {
      state.votingData = state.allVotingData[newVotingKey];
      state.votingURL = '/' + newVotingKey;
      state.votingKey = newVotingKey;
    }
  },
  actions: {
    setVotingData: function({ commit, state }, votingData) {
      commit("CHANGE_VOTING_DATA", votingData);

      const keys = votingData && Object.keys(votingData);
      const defaultVotingKey = votingData && Object.keys(votingData)[keys.length - 1];
      const routeVotingKey = state.route.params && state.route.params.votingKey;
      const votingKey = routeVotingKey || defaultVotingKey;
      commit("CHANGE_SELECTED_VOTING", votingKey);
    },
    changeVoting: function({ commit, state }, newVotingKey) {
      const currentLocation = router.history.current.path;
      const oldVotingKey = state.votingKey;
      const newVotingURL = currentLocation.replace(oldVotingKey, newVotingKey);

      commit("CHANGE_SELECTED_VOTING", newVotingKey);
      router.push(newVotingURL);
    }
  },
});
