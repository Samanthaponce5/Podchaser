import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPodcasts } from '../actions'
import Podcast from './Podcast'
import '../styles/home.css'

export default function Home() {
  const podcasts = useSelector((state) => state.podcasts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPodcasts())
  }, [dispatch])

  const displayPodcasts = () => {
    return podcasts.list.items.map((podcast, index) => {
      return (
        <Link key={index} to={`/podcast/${podcast.entity.id}`}>
          <Podcast podcast={podcast} />
        </Link>
      )
    })
  }

  return (
    <div className="Home page-width">
      <div>
        <h1>All Podcasts</h1>
        <p>Browse the details of every podcast, ever.</p>
      </div>
      <ul data-test="podcastList" className="podcastList">
        {podcasts.list ? displayPodcasts() : null}
      </ul>
    </div>
  )
}
