import "./styles.scss";
import RelayWhiteLogo from "../../../../assets/images/relay-logo-circle-white.svg";

const Footer = () => {
  return (
    <footer className="home_footer">
      <div className="container container-footer">
        <div className="container-footer-icon-wrap">
          <img src={RelayWhiteLogo} alt={""} />
        </div>
        <ul>
          <li>
            <a
              href="https://www.coingecko.com/en/coins/0-exchange"
              target="_blank"
              rel="noreferrer"
            >
              coingecko
            </a>
          </li>
          <li>
            <a
              href="https://coinmarketcap.com/currencies/zero-exchange/"
              target="_blank"
              rel="noreferrer"
            >
              coinmarketcap
            </a>
          </li>
          <li>
            <a
              href="https://www.dextools.io/app/uniswap/pair-explorer/0x40f0e70a7d565985b967bcdb0ba5801994fc2e80"
              target="_blank"
              rel="noreferrer"
            >
              dextools
            </a>
          </li>
          <li>
            <a
              href="https://github.com/zeroexchange"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/ZeroExchange-105556548092263"
              target="_blank"
              rel="noreferrer"
            >
              facebook
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/officialzerodex"
              target="_blank"
              rel="noreferrer"
            >
              twitter
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/XtZTNVTX5T"
              target="_blank"
              rel="noreferrer"
            >
              discord
            </a>
          </li>
          <li>
            <a
              href="https://t.me/ZeroExchangeCommunity"
              target="_blank"
              rel="noreferrer"
            >
              telegram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
