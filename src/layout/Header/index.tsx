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



          <ul className="link-list">
            <li
              onClick={() => goToSite("https://app.relaychain.com")}
              className="is-hidden-touch"
            >
              Use App
            </li>
            <li className="is-hidden-touch"
              onClick={() => handleClick('/whitepaper')}>
              Whitepaper
            </li>
            <li
              className="menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <CloseIcon /> : <BarIcon />}
            </li>
          </ul>
        </div>

        {mobileMenuOpen && (
          <ul className="mobile-menu animated fadeInUpTiny d250">
            <li
              onClick={() => goToSite("https://medium.com/@Relay_Chain")}
            >
              Blog
            </li>
            <li
              onClick={() =>
                goToSite(
                  "https://docs.relaychain.com"
                )
              }
            >
              Docs
            </li>
            <li
              onClick={() =>
                goToSite(
                  "https://t.me/relaychainannouncements"
                )
              }
            >
              Announcements
            </li>
            <li
              onClick={() => goToSite("https://app.relaychain.com")}
              className="is-hidden-desktop"
            >
              Use App
            </li>
            <li className="is-hidden-desktop"
              onClick={() => goToSite('https://relaychainassets.blob.core.windows.net/$web/whitepaper/Relay_Bridging_as_a_Service_DEFI_WP.pdf')}>
              Whitepaper
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
