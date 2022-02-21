import { createStore } from 'vuex'
import { applications } from './modules/applications.js'
import { about_me } from './modules/about-me.js'


export const store = createStore({
    modules: {
        about_me: about_me,
		applications: applications
    },
})