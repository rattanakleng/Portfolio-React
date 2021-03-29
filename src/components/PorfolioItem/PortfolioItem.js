/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

const PortfolioCard = ({
  description,
  livepageLink,
  repoLink,
  projectName,
  imgLink,
  livePageName,
  repoLinkName
}) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 p-4">
      <div className="card  p-0 m-2 rounded-lg">
        <img
          src={imgLink}
          className="card-img-top"
          alt="Porfolio Thumnail"
        />

        <div class="card-body p-0 bg-light">
          <h4 className="card-title text-center bg-blue text-light p-2">
            {projectName}
          </h4>
          <p className="card-text px-4">{description}</p>
        </div>

        <div className="card-body bg-light">
          <a href={livepageLink} target="_blank" className="card-link">
            {livePageName}
          </a>
          <a href={repoLink} target="_blank" className="card-link">
            {repoLinkName}
          </a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard

// Question how to covert <a> to <Link> with target="_blank"
/*
import React from 'react'
import { Link } from 'react-router-dom'

function openLInkHangler(event, link) {
  event.preventDefault()
  window.open(link)
}

const PortfolioCard = ({
  description,
  livepageLink,
  repoLink,
  projectName,
  imgLink,
}) => {
  return (
    <div className="card col-lg-4 col-md-6">
      <img src={imgLink} className="card-img-top" alt="Porfolio Thumnail" />

      <div class="card-body">
        <h4 className="card-title text-center">{projectName}</h4>
        <p className="card-text">{description}</p>
      </div>

      <div className="card-body">
        <Link
          to="route"
          target="_blank"
          onClick={openLinkHandler(livePageLink)}
        >
          Live Page
        </Link>
        <Link to="route" target="_blank" onClick={openLinkHandler(repoLink)}>
          Repository
        </Link>
      </div>
    </div>
  )
}

export default PortfolioCard
*/
