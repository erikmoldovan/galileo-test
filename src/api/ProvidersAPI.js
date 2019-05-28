import axios from 'axios'

const URL_BASE = 'https://testapi.io/api/akirayoglu/0/'

export default {
  getAllProviders () {
    return axios.get(`${URL_BASE}reference/getDoctors`)
                .then(response => response.data)
  },

  getProviderTasks () {
    return axios.get(`${URL_BASE}tasks/getTasks`)
                .then(response => response.data)
  }
}