import "./styles.scss";

import {
  BarIcon,
  CloseIcon,
} from "../../pages/Home/components/MenuIcons/index";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import RelayIcon from "../../assets/images/relay-icon.svg";
import RelayType from "../../assets/images/relay-type.svg";

export default function Header() {
  const history = useHistory();
  const location = useLocation();

  const [stickyHeader, setStickyHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pathname, setPathname] = useState(location.pathname);

  history.listen((location) => {
    setPathname(location.pathname);
  });

  const handleScroll = () => {
    const offset = window.pageYOffset;
    if (offset && offset > 40) {
      setStickyHeader(true);
    } else {
      setStickyHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleClick = (str) => {
    history.push(str);
  };

  const goToSite = (str) => {
    window.open(str, "_blank");
  };

  return (
    <div
      id="Header"
      className={`animated fadeInDownTiny d300 ${stickyHeader ? "sticky" : ""}`}
    >
      <div className="container">
        <div className="header-container">
          <div className="header-logo" onClick={() => handleClick("/")}>
            <img src={RelayIcon} alt={"Relay Icon"} />
          </div>
          <div className="header-logo-type" onClick={() => handleClick("/")}>
            <img src={RelayType} alt={"Relay"} />
          </div>

          {/*

          <ul className="link-list">
            <li
              onClick={() => handleClick("/partners")}
              className="is-hidden-touch"
            >
              Launch your token
            </li>
            <li
              onClick={() => goToSite("https://app.0.exchange")}
              className="is-hidden-touch"
            >
              Use App
            </li>
            <li
              className="menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <CloseIcon /> : <BarIcon />}
            </li>
          </ul>
          */}
        </div>

        {mobileMenuOpen && (
          <ul className="mobile-menu animated fadeInUpTiny d250">
            <li
              onClick={() => goToSite("https://medium.com/@OfficialZeroDex/")}
            >
              Blog
            </li>
            <li
              onClick={() =>
                goToSite(
                  "https://0exchangestatic.blob.core.windows.net/whitepaper/0Whitepaper.pdf"
                )
              }
              className={`${pathname === "/learn-more" ? "active" : ""}`}
            >
              Whitepaper
            </li>
            <li
              onClick={() => goToSite("/0_Liquidity_Mining.pdf")}
              className={`${pathname === "/learn-more" ? "active" : ""}`}
            >
              Liquidity Mining
            </li>
            <li
              onClick={() => goToSite("/partners")}
              className="is-hidden-desktop"
            >
              Launch your token
            </li>
            <li
              onClick={() => goToSite("https://app.0.exchange")}
              className="is-hidden-desktop"
            >
              Use App
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
