import * as api from '../api/index'
import { FETCH_PODCASTS } from './types'

export const fetchPodcasts = () => async (dispatch) => {
  try {
    const response = await api.fetchPodcasts()
    dispatch({ type: FETCH_PODCASTS, payload: response.data })
  } catch (error) {
    console.log('ERROR', error)
  }
}
