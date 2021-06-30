import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        bookList: ['ফেলুদা সমগ্র ১', 'ফেলুদা সমগ্র ২', 'সেই সময়', 'শঙ্কু সমগ্র', 'দীপু নাম্বার টু']
    },

    getters: {
        totalBook(state) {
            return state.bookList.length;

        }
    },

    mutations: {
        addNewBook(state, data) {
            state.bookList.push(data)
        },
        removeBook(state, index) {
            state.bookList.splice(index, 1)
        }
    },
    actions: {
        addNewBook(context, data) {
            setTimeout(() => {
                context.commit('addNewBook', data)
            }, 200)

        }
    }

})