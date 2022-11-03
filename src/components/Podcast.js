import React from 'react'
import moment from 'moment'

export default function Podcast({ podcast }) {
  const date = new Date(podcast.entity.start_date)

  return (
    <li>
      <img src={podcast.entity.image_url} alt={podcast.entity.image_url} />

      <div className="info">
        <h3>{podcast.entity.title}</h3>
        <div>
          <span>{moment(date).format('MMMM Do, YYYY')}</span> <b>•</b>
          <span> {podcast.entity.description} </span>
        </div>
      </div>
    </li>
  )
}
