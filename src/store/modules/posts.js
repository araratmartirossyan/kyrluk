import * as types from '../mutation-types'
import { clientApi } from '../../utils/clientApi'

const isLiked = id => {
  let likedItems = JSON.parse(localStorage.getItem('likedItems')) || []
  const isLiked = likedItems.includes(id)
  if (isLiked) {
    likedItems.splice(likedItems.indexOf(id), 1)
  } else {
    likedItems.push(id)
  }
  localStorage.setItem('likedItems', JSON.stringify(likedItems))
  return isLiked
}

const state = {
  categories: [],
  posts: []
}

const getters = {
  categories: () => state.categories,
  posts: () => state.posts
}

const mutations = {
  [types.fetchCategories](payload, data) {
    state.categories = data
  },
  [types.fetchPosts](payload, { data, key }) {
    state.posts = data
    state.activeCategory = key
  }
}

const actions = {
  fetchCategories({ commit }) {
    clientApi('get', 'categories')
      .then(data => commit('fetchCategories', data))
  },
  fetchPosts({ commit }, key = 1) {
    clientApi('get', `posts/sort/${key}`)
      .then(data => commit('fetchPosts', { data, key }))
  },
  like({ state, dispatch }, id) {
    const url = isLiked(id) ? `posts/unlike/${id}` : `posts/like/${id}`
    clientApi('post', url)
      .then(() => dispatch('fetchPosts', state.activeCategory))
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
