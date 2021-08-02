import "./styles.scss";

import RelayWhiteLogo from "../../../../assets/images/relay-logo-circle-white.svg";

const Footer = () => {
  return (
    <footer className="home_footer">
      <div className="container container-footer">
        <ul>
          {/*
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
          */}
          <li>
            <a
              href="https://www.reddit.com/r/RelayChain/"
              target="_blank"
              rel="noreferrer"
            >
              reddit
            </a>
          </li>
          <li>
            <a
              href="https://github.com/RelayChain"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UC8q_XLKQtI-x5PUa4Rg3RrQ"
              target="_blank"
              rel="noreferrer"
            >
              youtube
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/relay_chain"
              target="_blank"
              rel="noreferrer"
            >
              twitter
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/sm6sbUFY"
              target="_blank"
              rel="noreferrer"
            >
              discord
            </a>
          </li>
          <li>
            <a
              href="https://t.me/relaychaincommunity"
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
