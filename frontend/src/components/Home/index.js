import React from 'react';
import "./home.css";
import rosesLeft from "../../coverImage/rosesLeft.png"
import rosesRight from "../../coverImage/rosesRight.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


export default function Home() {

  return (
    <div className="home card">
      <div className="flex items-start sm:items-center">
        <img className="w-20 sm:w-1/5" src={rosesLeft} />
        <div className="home-header card-body flex flex-col items-center about-section sm:p-0 px-0">
          <h1 className="sm:text-3xl text-center font-bold">Anthony and Anabel</h1>
          <h1 className="text-sm sm:text-xl">May 26, 2024</h1>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <p className="text-sm sm:text-xl">Temecula, CA</p>
          </div>
        </div>
        <img className="w-20 sm:w-1/5" src={rosesRight} />
      </div>
      <figure>
        <img
          src="../../coverImage/cover.jpg"
          alt="Engagement day"
        />
      </figure>
    </div>
  )
}