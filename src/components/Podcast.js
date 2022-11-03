import React from 'react'
import moment from 'moment'

export default function Podcast({ podcast }) {
  const {start_date, image_url, title, description} = podcast.entity
  const date = new Date(start_date)

  return (
    <li>
      <img src={image_url} alt={image_url} />

      <div className="info">
        <h3>{title}</h3>
        <div>
          <span>{moment(date).format('MMMM Do, YYYY')}</span> <b>•</b>
          <span> {description} </span>
        </div>
      </div>
    </li>
  )
}
