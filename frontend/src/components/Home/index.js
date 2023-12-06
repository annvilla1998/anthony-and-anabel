import React from 'react';
import "./home.css";


export default function Home() {

  return (
    <div className="home card">
      <div className="card-body items-center text-center about-section">
        <h1 className="text-3xl card-title">Anthony and Anabel</h1>
        <h1 className="text-xl card-title">May 26, 2024</h1>
        <p>Temecula, CA</p>
      </div>
      <figure>
        <img
          src="/coverImage/cover.jpg"
          alt="Engagement day"
        />
      </figure>
    </div>
  )
}