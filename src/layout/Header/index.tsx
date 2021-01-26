import './styles.scss';

import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header(props) {

  const history = useHistory();
  const location = useLocation();

  const [stickyHeader, setStickyHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pathname, setPathname] = useState(location.pathname);

  history.listen((location, action) => {
    setPathname(location.pathname);
  });

  const handleScroll = (e) => {
    const offset = window.pageYOffset;
    if (offset && offset > 40) {
      setStickyHeader(true);
    } else {
      setStickyHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  });

  const handleClick = (str) => {
    history.push(str);
  };

  const goToSite = (str) => {
    window.open(str, "_blank");
  }

  return (
    <div id="Header" className={`animated fadeInDownTiny d300 ${stickyHeader ? "sticky" : ""}`}>
      <div className="container">
        <div className="header-container">

          <div className="logo" onClick={() => handleClick('/')}>
            <img src="/logo-zero-512.png" alt="logo" />
          </div>

          <ul className="link-list">
            <li className="is-hidden-touch">
              <a href='mailto:hello@zero.exchange'>
                Contact Us
                <FontAwesomeIcon icon="envelope" size="sm" />
              </a>
            </li>
            <li onClick={() => goToSite("/Zero_Whitepaper_Final.pdf")}
              className={`is-hidden-touch ${pathname === '/learn-more' ? 'active' : ''}`}>
              Learn More
              <FontAwesomeIcon icon="question" size="sm" />
            </li>
            <li onClick={() => goToSite("https://app.zero.exchange")} className="is-hidden-touch">
              Launch App
              <FontAwesomeIcon icon="rocket" size="sm" />
            </li>
            <li className="menu-toggle is-hidden-desktop" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              { mobileMenuOpen ? <FontAwesomeIcon icon="times" size="sm" /> :
                <FontAwesomeIcon icon="bars" size="sm" />
              }
            </li>
          </ul>

        </div>

        { mobileMenuOpen &&
          <ul className="mobile-menu animated fadeInUpTiny d250 is-hidden-desktop">
            <li onClick={() => handleClick('/learn-more')}
              className={`${pathname === '/learn-more' ? 'active' : ''}`}>
              <FontAwesomeIcon icon="question" size="sm" />
              Learn More
            </li>
            <li>
              <FontAwesomeIcon icon="envelope" size="sm" />
              <a href='mailto:hello@zero.exchange'>
                Contact Us
              </a>
            </li>
            <li onClick={() => goToSite("https://app.zero.exchange")}>
              <FontAwesomeIcon icon="rocket" size="sm" />
              Launch App
            </li>
          </ul>
        }

      </div>
    </div>
  )
}
