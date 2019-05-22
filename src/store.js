import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({ 
  state: {
    nextId: 3,
    messages: [
      {
        'id': 1,
        'from': 'admin',
        'text': 'Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотела бы отметить очень важную область исследования',
        'time': 'Вчера в 17:45'
      },
      {
        'id': 2,
        'from': 'user',
        'text': 'Что из себя представляет вулкан? Просто хочу убедиться, что готова к такому путешествию.',
        'time': 'Вчера в 18:45'
      }
    ]
  },
  getters: {
    getMessages(state) {
      return state.messages;
    }
  },
  mutations: {
    addMessage(state, value) {
      state.messages.push({'id': state.nextId, 'from': value.from ? 'admin' : 'user', 'text': value.text, 'time': 'Только что'})
      state.nextId ++
    }
  },
  actions: {
    sendMessage({commit}, {from, text}) {
      commit('addMessage', {
        from,
        text
      })
    }
  }
})