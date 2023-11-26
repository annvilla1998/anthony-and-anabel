import React from 'react'


export default function Home() {

  return (
    <div className="home">
      <div className="cover-image">
        <img
          src="/images/cover.jpg"
          style={{objectFit: "scale-down", fill: "true"}}
          alt="Engagement day"
        />
      </div>
      <div className="about-section">
        <h1 className="text-4xl">About Us</h1>
        <p className="text-lg">All about us</p>
      </div>
    </div>
  )
}