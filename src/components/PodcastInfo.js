import React, { useEffect, useState } from 'react'
import StarRatings from 'react-star-ratings'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import moment from 'moment'

import * as api from '../api'
import '../styles/podcastInfo.css'

export default function PodcastInfo() {
  const { id } = useParams()
  const [podcast, setPodcast] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.fetchPodcast(id).then((singlePodcast) => {
      setPodcast(singlePodcast.data)

      setLoading(false)
    })
  }, [id])
  const followers = Math.floor(Math.random() * (1000000 - 100 + 1)) + 100
  //   Add k if it's more than 9999
  const followerskFormatter = (num) => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
      : Math.sign(num) * Math.abs(num)
  }

  return loading ? (
    <div className="details loading page-width">
      <AiOutlineLoading3Quarters /> <span>Loading....</span>
    </div>
  ) : (
    <div className="detail-wrapper page-width">
      <div className="details-inner">
        <div className="details" data-test='details'>
          <img
            className="podcastImg"
            src={podcast.image_url}
            alt={podcast.image_url}
          />
          <div className="details_info">
            <span className="title_ratings">
              <h1>{podcast.title}</h1>
            </span>

            <span>A podcast with {podcast.number_of_episodes} episodes</span>
            <span>
              <StarRatings
                rating={parseInt(podcast.initial_rating)}
                starRatedColor="#f80567"
                numberOfStars={5}
                name="rating"
                starDimension="35px"
              />
            </span>
          </div>
        </div>
        <p className="description">{podcast.description}</p>
      </div>

      <div data-test='ctas' className="ctas page-width">
        <button  className="follow">Follow</button>
        <button className="rate">Rate</button>
        {/* Generate any number between 100 - 1000000 for the followers */}
        <p>
          <span>{followerskFormatter(followers)} followers</span> <b>•</b>{' '}
          <span>200 ratings</span>
        </p>
      </div>
      <div data-test='latest-episodes' className="latest-episodes">
        <h1>Recent Episodes</h1>
        <div>
          <img
            className="podcastImg"
            src={podcast.image_url}
            alt={podcast.image_url}
          />

          <div>
            <h2>{podcast.latest_episode.title}</h2>
            <div className="latest-episode-info">
              <p>
                {moment(podcast.latest_episode.air_date).format(
                  'MMMM Do, YYYY',
                )}
              </p>
              <b>•</b>
              <p>Episode description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
