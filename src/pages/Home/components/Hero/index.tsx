import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Hero = ({ goToSite }) => (
  <div className="hero">
    <div className="columns fullhd-columns">
      <div className="hero-content column animated fadeInDownTiny d300 delay100">
        <img src="/zero-logo-text.png" alt="logo text white" />
        <h1>
          Instant crypto swaps, freezingly low fees
          <span className="block"> on the world's first <span className="purple">Multi-DEX</span> platform</span>
        </h1>
        <ul className="button-list">
          <li className="button is-primary" onClick={() => goToSite('https://app.0.exchange')}>
            Launch App
          <FontAwesomeIcon icon="rocket" size="sm" />
          </li>
          <li className="text-link blue"
            onClick={() => goToSite('https://medium.com/@OfficialZeroDex/')}>
            Read Our Blog
          </li>
        </ul>
      </div>
      <ul className="socials-list column is-2">
        <li className="animated fadeInRightMicro d300 delay250" onClick={() => goToSite('https://www.facebook.com/ZeroExchange-105556548092263')}>
          <FontAwesomeIcon icon={['fab', 'facebook']} />
        </li>
        <li className="animated fadeInRightMicro d300 delay200" onClick={() => goToSite('https://twitter.com/officialzerodex')}>
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </li>
        <li className="animated fadeInRightMicro d300 delay150" onClick={() => goToSite('https://discord.gg/XtZTNVTX5T')}>
          <FontAwesomeIcon icon={['fab', 'discord']} />
        </li>
        <li className="animated fadeInRightMicro d300 delay100" onClick={() => goToSite('https://t.me/ZeroExchangeCommunity')}>
          <FontAwesomeIcon icon={['fab', 'telegram']} />
        </li>
      </ul>
    </div>
  </div>
)

export default Hero
