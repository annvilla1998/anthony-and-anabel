import React from 'react';
import "./home.css";


export default function Home() {

  return (
    <div className="home card">
      <figure>
        <img
          src="/images/cover.jpg"
          alt="Engagement day"
        />
      </figure>
      <div className="card-body items-center text-center about-section">
        <h1 className="text-2xl card-title">About Us</h1>
        <p>All about us</p>
      </div>
    </div>
  )
}