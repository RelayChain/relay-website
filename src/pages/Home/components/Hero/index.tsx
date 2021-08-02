import "./styles.scss";

import RelayType from "../../../../assets/images/relay-type.svg";

const Hero = ({ goToSite }) => (
  <div className="hero-wrap">
    <div className="hero__content animated fadeInDownTiny d300 delay100 ">

      <img src={RelayType} alt={"Relay"} />

      <p className="hero-desciption">
        Cross-chain token transfers on the world's top blockchains using Relay's fast, secure <span>chain bridge</span>
      </p>
      <ul className="button-list hero_button_wrap">
        <li
          className="button launch_button "
          onClick={() => goToSite("https://app.relaychain.com")}
        >
          Launch Relay
          <span className="rocket-icon">
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.1823 17.1134C22.5767 18.7086 16.4106 25.4289 14.6753 27.2051C14.5401 27.3434 14.3074 27.2239 14.3325 27.0321C14.5007 25.7452 14.7769 22.7416 13.927 21.3675L11.9365 22.9364C11.6025 23.1997 11.1566 23.2762 10.7621 23.1173C10.4321 22.9843 10.0387 22.8127 9.74778 22.6447C9.45686 22.4767 9.11148 22.2219 8.83135 22.0026C8.49645 21.7404 8.33976 21.316 8.40076 20.8951L8.76729 18.366C7.18069 18.2861 4.74058 19.99 3.6708 20.8041C3.51186 20.925 3.28695 20.7715 3.35257 20.5829C4.18225 18.1982 7.27776 10.1105 10.3316 12.5535C10.4985 12.2292 10.6806 11.8957 10.8786 11.553C13.8592 6.39035 18.7922 3.65824 20.2303 4.48854C21.6684 5.31883 21.7688 10.957 18.7882 16.1196C18.586 16.4698 18.384 16.8009 18.1823 17.1134ZM16.494 10.96C17.2882 11.4186 18.3038 11.1465 18.7624 10.3522C19.2209 9.55798 18.9488 8.54238 18.1545 8.08382C17.3603 7.62526 16.3447 7.89739 15.8861 8.69164C15.4276 9.48588 15.6997 10.5015 16.494 10.96Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="28"
                    height="28"
                    fill="white"
                    transform="translate(0 0.0411377)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
        </li>
      </ul>
    </div>
    <div className="relative-wrapper-img animated fadeInDownTiny d300 delay150">
      <div className="devices-img">
      <img src="/devices.png" alt="Devices" />
      </div>
      <img src="/phone.png" className="phone-img" alt="Phone" />
      <img src="/tablet.png" className="tablet-img" alt="Tablet" />
    </div>
  </div>
);

export default Hero;
