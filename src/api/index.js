import axios from 'axios'

export const fetchPodcasts = () =>
  axios.get('https://api.podchaser.com/userlists/27998')

export const fetchPodcast = (podcastId) =>
  axios.get(`https://api.podchaser.com/podcasts/${podcastId}`)
