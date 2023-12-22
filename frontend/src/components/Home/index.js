import React from 'react';
import "./home.css";


export default function Home() {

  return (
    <div className="home card justify-center items-center">
      <div className="card-body items-center text-center about-section">
        <h1 className="text-3xl card-title">Anthony and Anabel</h1>
        <h1 className="text-xl card-title">May 26, 2024</h1>
        <p>Temecula, CA</p>
      </div>
      <figure className="lg:w-1/2 sm:w-3/4">
        <img
          src="/coverImage/cover.jpg"
          alt="Cover photo"
        />
      </figure>
    </div>
  )
}