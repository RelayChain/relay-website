import React from 'react'
import './styles.scss'
import firstSlide from './../../styles/whitepaper/0.jpg'
import relayLogo from './../../styles/whitepaper/logo.svg'
import twitterLogo from './../../styles/whitepaper/twitter.svg'
import youtubeLogo from './../../styles/whitepaper/youtube.svg'
import btcLogo from "./../../styles/whitepaper/partners/bitcoincom.png"
import zokioLogo from "./../../styles/whitepaper/partners/zokyo.svg"
import avaxLogo from "./../../styles/whitepaper/partners/avalaunch.png"
import bridgeLogo from "./../../styles/whitepaper/partners/Bridge.png"
import halbornLogo from "./../../styles/whitepaper/partners/halborn_logo.png"
import chartExLogo from "./../../styles/whitepaper/partners/ChartExLogo.png"
import moonbeanLogo from "./../../styles/whitepaper/partners/Moonbeam.png"
import chainLinkLogo from "./../../styles/whitepaper/partners/Chainlink.png"
import web3Logo from "./../../styles/whitepaper/partners/web3api.png"
import kaironLogo from "./../../styles/whitepaper/partners/kairon.svg"
import starterLogo from "./../../styles/whitepaper/partners/starter.png"
import gondolaLogo from "./../../styles/whitepaper/partners/Gondola_Logo-06.png"
import postLogo1 from './../../styles/whitepaper/post_image_1.jpg'
import postLogo2 from './../../styles/whitepaper/post_image_2.png'
import postLogo3 from './../../styles/whitepaper/post_image_3.png'
import postLogo4 from './../../styles/whitepaper/post_image_4.jpg'
import postLogo5 from './../../styles/whitepaper/post_image_5.jpg'
import postLogo6 from './../../styles/whitepaper/post_image_6.jpg'
import postLogo7 from './../../styles/whitepaper/post_image_7.png'
import postLogo from './../../styles/whitepaper/post_image_9.png'
import postLogo10 from './../../styles/whitepaper/post_image_10.png'
import postLogo11 from './../../styles/whitepaper/post_image_11.png'
import postLogo12 from './../../styles/whitepaper/post_image_12.png'
import postLogo13 from './../../styles/whitepaper/post_image_13.png'
import postLogo14 from './../../styles/whitepaper/post_image_14.png'
import postLogo15 from './../../styles/whitepaper/post_image_15.png'
import postLogo16 from './../../styles/whitepaper/post_image_16.png'
import bottomBgLogo from './../../styles/whitepaper/bottom_bg_2.jpg'
import arrowLogo from './../../styles/whitepaper/arrow_up.svg'
import leftLogo from './../../styles/whitepaper/left_bg.jpg'
import quickSwapLogo from './../../styles/whitepaper/quickswap_logo.png'
import useScrollPosition from '../../hooks/useScrollPosition'
import avax_logo from './../../styles/whitepaper/avax_logo.svg'
import heco_logo from './../../styles/whitepaper/heco_logo.svg'
import bsc_logo from './../../styles/whitepaper/bsc_logo.svg'
import ethereum_logo from './../../styles/whitepaper/ethereum_logo.svg'
import ksm_dot_logo from './../../styles/whitepaper/ksm_dot_logo.svg'
import matic_logo from './../../styles/whitepaper/matic_logo.svg'

export default function Whitepaper() {
  const scrollPosition = useScrollPosition()
  return (
    <div className="container-wp" >
      <div className="wrapper">
        <section className="slide first">
          <div className="container" >
            <div className="content" >
              <div className="image">
                <img src={firstSlide} alt="" />
              </div>
              <div className="logo-r">
                <img src={relayLogo} alt="" />
              </div>
              <div className="text">
                <h1>RelayChain</h1>
                <h2>Bridging DeFi</h2>
                <h4>White Paper Version 1.0</h4>
                <h4 className="letter-spacing">August 2nd, 2021</h4>
              </div>
            </div>
          </div>
        </section>
        <section className="stars">
          <div className="container">
            <div className="content center">
              <div className="text">
                <p className="bold uppercase">
                  Blockchain technology is rapidly evolving, and many more chains will be created in the coming years. It is important to recognize that bridge services will play a key role in transporting assets between popular blockchains and enabling specialized blockchains to interconnect.
                </p>
              </div>
              <div className="logo-r">
                <img src={relayLogo} alt="" />
              </div>
              <div className="text">
                <h2 className="uppercase letter-spacing">What is Relay?</h2>
                <p>Relay allows traders to reach many markets simultaneously by integrating cross-chain swaps into popular DEX, CEX, dApps and wallets, bringing new arbitrage opportunities and increased exposure to lucrative trades. For the rest of us, Relay means we can move crypto between blockchains with simplicity, security and speed, making cross-chain DeFi accessible to the masses. Because Relay is a service, you might not even know you’re using it, yet Relay is the premiere bridge of DeFi, unifying the decentralized world and rewarding the holders who help.Relay allows traders to reach many markets simultaneously by integrating cross-chain swaps into popular DEX, CEX, dApps and wallets, bringing new arbitrage opportunities and increased exposure to lucrative trades. For the rest of us, Relay means we can move crypto between blockchains with simplicity, security and speed, making cross-chain DeFi accessible to the masses. Because Relay is a service, you might not even know you’re using it, yet Relay is the premiere bridge of DeFi, unifying the decentralized world and rewarding the holders who help.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="content left_image">
              <div className="image">
                <img src={leftLogo} alt="" />
              </div>
              <div className="text">
                <h2 className="sub" id="navigation">Table of <span>contents</span></h2>

                <ul>
                  <li className="mb30"><span className="bold"><a href="#nav_1">Relay Background: (TL;DR)</a></span>
                    <ul>
                      <li><a href="#nav_2">DEFI 2020 - Multiple Chains, One Zero Exchange</a></li>
                      <li><a href="#nav_3">DEFI 2021 - Multiple Exchanges, One Relay Bridge</a></li>
                    </ul>
                  </li>

                  <li className="mb30"><span className="bold"><a href="#nav_4">Cross Chain Swaps and Arbitrage Explained:</a></span>
                    <ul>
                      <li><a href="#nav_5">From Wallet, to Relay, and back again. (About Decentralized Swaps)</a></li>
                      <li><a href="#nav_6">DeFi arbitrage opportunities increase the efficiency of crypto-markets</a></li>
                    </ul>
                  </li>

                  <li className="mb30"><span className="bold"><a href="#nav_7">The Relay Model (BaaS):</a></span>
                    <ul>
                      <li><a href="#nav_8">Bridging as a Service (the RELAY model)</a></li>
                      <li><a href="#nav_9">Cross-chain transactions using native token liquidity</a></li>
                      <li><a href="#nav_10">The Relay Chain</a></li>
                    </ul>
                  </li>

                  <li className="mb30"><span className="bold"><a href="#nav_11">The Relay Ecosystem:</a></span>
                    <ul>
                      <li><a href="#nav_12">A Complete DeFi Bridge (security, speed, insurance, ticketing, single-sid-ed-staking, stable-coin pools & liquidity)</a></li>
                      <li><a href="#nav_13">BaaS and Technical Partners</a></li>
                      <li><a href="#nav_14">Insurance & Security Audits</a></li>
                    </ul>
                  </li>

                  <li className="mb30"><span className="bold"><a href="#nav_15">The Revenue Architecture:</a></span>
                    <ul>
                      <li><a href="#nav_16">A positive feedback loop between price & utility</a></li>
                      <li><a href="#nav_17">Estimating the Cross-Chain Market</a></li>
                      <li><a href="#nav_18">Because Math (the network effect of bridging multiple chains)</a></li>
                      <li><a href="#nav_19">Monthly Bridge revenue simulation</a></li>
                      <li><a href="#nav_20">Monthly Liquidity Pool revenue estimates</a></li>
                    </ul>
                  </li>

                  <li className="mb30"><span className="bold"><a href="#nav_21">The Tokenomics:</a></span>
                    <ul>
                      <li><a href="#nav_22">$RELAY allocation</a></li>
                      <li><a href="#nav_23">$RELAY vesting details</a></li>
                      <li><a href="#nav_24">$Zero-to-$RELAY proportional swap details</a></li>
                    </ul>
                  </li>

                  <li><span className="bold"><a href="#nav_25">The Future:</a></span>
                    <ul>
                      <li><a href="#nav_26">Roadmap</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <hr />
        </div>
        <section>
          <div className="container">
            <div className="content">
              <div className="text">
                <h2 className="sub" id="nav_1">
                  Relay
                  <span>Background (TL;DR)</span>
                </h2>
                <h3 className="blue" id="nav_2">Q1 2020 - Multiple Chains,</h3>
                <h3 className="blue mb10">One Zero Exchange</h3>
                <p className="mb30">Toward the end of 2020, it became clear that Ethereum would not be the only smart-chain pow- ering DeFi. For all of the innovation that Ethereum delivered, the high fees, slow transactions, and frequency of failed trades crippled DeFi participation. Users began seeking solutions to Ethereum’s outdated performance on 3rd generation blockchains (e.g. Binance Smart Chain, Avalanche, Poly- gon, Solana, Fantom, Cosmos, etc.).</p>

                <p className="mb30">Unfortunately, each of these new blockchains was an island, isolating user value and reducing trad- ing opportunities. Consequently the demand for all tokens to be accessible between all block- chains became one of the largest problems in crypto. DeFi participants needed the ability to move capital between chains with ease, security, and speed.</p>
                <p className="mb30">Enter Zero Exchange: a multi-cross-chain DEX with liquidity mining that seamlessly integrates an IDO platform for DeFi project launches. Zero Exchange was successfully bootstrapped by an anon- ymous development team that invested 60 of their own ETH as the initial liquidity. Within months the project was growing fast and leading the cross-chain gold rush, being the first to:</p>

                <ul className="icon-r mb30">
                  <li>Build a DEX on the Avalanche chain.</li>
                  <li>Build a bridge between the Ethereum and Avalanche chains.</li>
                  <li>Build a bridge between the Avalanche and BSC chains.</li>
                  <li>Build a bridge between Avalanche and Polygon chains.</li>
                  <li>Build a bridge to Kusama/DOT parachains in partnership with Moonbeam.</li>
                  <li>Integrate Zero with ChartEx giving users high-performance charting.</li>
                  <li>Establish partnerships with MoonBeam, ChartEx, Chainlink, Web3API, Bridge Mutual, and Kairon Labs.</li>
                </ul>
                <p className="mb30">Even while Zero Exchange was successfully connecting ETH, MATIC, AVAX, and BSC (with 70mil TVL and over 1bil in transactions), the crypto market promptly crashed. It became obvious Zero’s liquidity farming and IDO launches would not support growth in a bear market. A higher utility business model was needed.</p>

                <h3 className="blue" id="nav_3">Q2 2021 - Multiple Exchanges,</h3>
                <h3 className="blue mb10">One Relay Chain</h3>

                <p className="mb30">Zero Exchange recognized they could quickly capitalize on their strongest asset: cross-chain bridg- ing, thus becoming the first “Bridging as a Service” (BaaS) provider. This pivot demanded a rebrand- ing and a new tokenomics model, as the team realized that <i>a positive feedback loop could be estab- lished between liquidity, volume and the bridge’s native token value.</i></p>

                <h4 className="bold right mb30"><i>On August 2nd, 2021 Zero Exchange became Relay with a 100:1 proportional token swap honoring all Zero Exchange holders without incurring dilution or inflation of their relative amounts. See the Tokenomics section for more details.</i></h4>

                <p className="mb50">This pivot to Bridging as a Service allows dApps, Decentralized Exchanges and even Centralized Exchanges to use Relay to seamlessly provide their users with cross-chain swaps. Because the BaaS model is new, Relay has both the first mover and structural advantages (having already built the technology and tested it on Zero Exchange for almost a year). Further, by incorporating Relay into DeFi applications, adoptance is virtually frictionless.</p>
                <h2 className="sub" id="nav_4"><span>Cross Chain Swaps and Arbitrage Explained</span></h2>
                <p className="mb30">As more and more blockchains are operational, there is an unprecedented demand to move capital efficiently from chain-to-chain. Bridges are paramount to solving the issue of fragmented liquidity across chains.</p>
                <p className="mb30">Cross-chain swaps enable tokens to be transferred from one blockchain to another without [ledger-entry] conflicts between chains, ensuring that transaction value remains the same. A “bridge” that carries out cross-chain transactions needs to be secure and fast to have utility for DeFi.</p>

                <div className="post_image bg">
                  <img src={bottomBgLogo} alt="" />
                </div>

                <p className="mb30" id="nav_5">To accomplish cross-chain transfers a user wallet sends tokens to the Relay bridge contract. The bridge contract accesses (liquid) Relay tokens on the target chain and swaps them for the desired token asset, which is then sent to the trader’s wallet address.</p>


                <div className="post_image">
                  <a  data-lightbox="image-1">
                    <img src={postLogo1} alt="image-1" /></a>
                </div>

                <p className="mb30" id="nav_6">Cross-chain arbitrage is a less risky trading strategy that involves purchasing assets that are under- valued on one blockchain and quickly selling those assets on another blockchain where the asset value is priced higher. In general terms arbitrage allows markets to equalize the price of goods between regions so that the markets truly represent “fair value” of the assets.</p>


                <div className="post_image text_image w80">
                  <div>
                    <h2>Arbitrage <br />Opportunity</h2>
                  </div>
                  <a data-lightbox="image-2">
                    <img src={postLogo2} alt="image-2" /></a>
                </div>


                <p className="mb50">Cross-chain bridging produces a situation where native assets from Ethereum move to Avax or BSC and are subject to different supply and demand pressures, creating arbitrage opportunities. The fastest bridge will attract the most trading volume because it enables the most successful arbitrage trades. <i>Because of its speed, RELAY offers new arbitrage possibilities to traders wanting to access price discrepancy between blockchains, decentralized exchanges and dApps.</i></p>

                <h2 className="sub" id="nav_7"><span>The RELAY Model</span> (Bridging as a Service)</h2>

                <p className="mb30" id="nav_8">Blockchain technology is rapidly evolving, and many more networks will be created in the coming years. It is important to recognize that bridge services will play a key role in transporting assets be- tween popular blockchains and enabling specialized blockchains to interconnect.</p>

                <p className="mb30">Relay offers a seamless bridge that operates across a growing list of smart chains where it is being integrated directly into native DeFi applications, dApps, and DEXs. This is Bridging as a Service (BaaS).</p>


                <div className="post_image">
                  <a data-lightbox="image-3">
                    <img src={postLogo3} alt="image-3" /></a>
                </div>

                <p className="mb30">Nodes on the Relay network quickly and securely shuttle transactions between different block- chains. <span className="bold">Because the Relay API is built for seamless integration into dApps and DEXs, any trad- ing platform can adopt Relay and immediately provide cross-chain opportunities to its users.</span></p>

                <h3 className="blue" id="nav_9">Cross-chain transactions</h3>
                <h3 className="blue mb10">use $RELAY token liquidity</h3>

                <div className="post_image">
                  <a data-lightbox="image-4">
                    <img src={postLogo4} alt="image-4" /></a>
                </div>

                <div className="post_image">
                  <a data-lightbox="image-5">
                    <img src={postLogo5} alt="image-5" /></a>
                </div>

                <h3 className="blue mb10" id="nav_10">The Relay Chain</h3>

                <p className="mb30">Relayer nodes enforce the conditions required for successful cross-chain transactions (wallet, num- ber of tokens minted, burned, locked & unlocked).</p>

                <p className="mb30">To increase the Bridge’s security through decentralization there are multiple Relayers. Each transac- tion is sent to all the available Relayers followed by a vote. If consensus is reached, the Bridge seeks finality for the transaction. This avoids rogue (compromised) Relayer nodes from diverting funds into a bad actor’s wallet.</p>

                <div className="post_image">
                  <a data-lightbox="image-6">
                    <img src={postLogo6} alt="image-6" /></a>
                </div>

                <p className="bold w80">Voting system between the 6 relayers:</p>
                <ul className="icon-r mb30 w80">
                  <li>Current threshold is 4/6 votes to confirm a cross chain transaction</li>
                </ul>

                <p className="bold w80">Objective:</p>
                <ul className="icon-r w80 mb30">
                  <li>Validate the destination wallet: Avoid a “rogue” relayer diverting funds to a different destination wallet.</li>
                  <li>Validate the amount of tokens to mint on the destination chain so that it exactly matches the amount of tokens locked on the origin chain.</li>
                </ul>
                The Relay Ecosystem:
                <p className="mb30">Presently the Relay Chain includes five well-known Relayers — Bitcoin.com Exchange, Zokyo, Char- tEx, Avalaunch, and Bridge Mutual, all of which increase the Bridge’s security and reliability.</p>

                <div className="logo-r">
                  <img src={relayLogo} alt="" />
                </div>

                <div className="partners first mb50">
                  <div className="item"><img src={btcLogo} alt="" /></div>
                  <div className="item"><img src={zokioLogo} alt="" /></div>
                  <div className="item"><img src={avaxLogo} alt="" /></div>
                  <div className="item"><img src={bridgeLogo} alt="" /></div>
                  <div className="item"><img src={chartExLogo} alt="" /></div>
                </div>

                <p className="mb30">dApps and exchanges that use the Relay BaaS gain exposure to an ever growing number of bridged blockchains.</p>

                <h2 className="sub span" id="nav_11">The Relay Ecosystem:</h2>

                <div className="post_image">
                  <a data-lightbox="image-7">
                    <img src={postLogo7} alt="image-7" /></a>
                </div>

                <h3 className="blue mb10" id="nav_12">A Complete DeFi Bridge:</h3>
                <p className="mb20">There are many moving pieces that must seamlessly work together to build a robust multi-chain bridge. Relay has them all:</p>

                <ul className="icon-r mb50">
                  <li>Fast and effective bridging technology that adapts to the changing conditions of each
                    block- chain and automatically handles gas fees across all involved chains and wallets
                  </li>
                  <li>Bulletproof smart-contracts (audited first by Zokyo and more recently by Halborn)</li>
                  <li>Tokenomics that enrich our partners, holders, and bridge users ($RELAY)</li>
                  <li>DEX liquidity partners (<span className="tag_blue">SOON</span>, Quickswap, <span className="tag_blue">SOON</span>)</li>
                  <li>Native asset conversion (Gondola Finance)</li>
                  <li>Insurance (Bridge Mutual)</li>
                  <li>Ticketing and Support workflow</li>
                  <li>Participating Community</li>
                </ul>


                <div className="columns three mb50">
                  <div>
                    <h3 className="blue mb10" id="nav_13">BaaS Partners</h3>
                    <ul className="logos">
                      <li className="logo-r">
                        <img src={quickSwapLogo} alt="" />
                      </li>
                      <li><div className="soon"><span className="tag_blue" style={{ width: "27%" }}></span>SOON</div></li>
                      <li><div className="soon"><span className="tag_blue" style={{ width: "50%" }}></span>SOON</div></li>
                      <li><div className="soon"><span className="tag_blue" style={{ width: "50%" }}></span>SOON</div></li>
                      <li><div className="soon"><span className="tag_blue" style={{ width: "35%" }}></span>SOON</div></li>
                      <li><div className="soon"><span className="tag_blue" style={{ width: "43%" }}></span>SOON</div></li>
                      <li><div className="soon"><span className="tag_blue" style={{ width: "27%" }}></span>SOON</div></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="blue mb10">Relay Chains</h3>
                    <ul className="logos">
                      <li className="logo-r">
                        <img src={avax_logo} alt="" />
                        <span>Avax</span>
                      </li>
                      <li><div className="soon"><span className="tag_blue" style={{ width: "27%" }}></span>SOON</div></li>
                      <li className="logo-r">
                        <img src={heco_logo} alt="" />
                      </li>
                      <li className="logo-r">
                        <img src={bsc_logo} alt="" />
                        <span>BSC</span>
                      </li>
                      <li className="logo-r">
                        <img src={ethereum_logo} alt="" />
                        <span>ETH</span>
                      </li>
                      <li className="logo-r">
                        <img src={ksm_dot_logo} alt="" />
                        <span>KSM/DOT</span>
                      </li>
                      <li className="logo-r">
                        <img src={matic_logo} alt="" />
                        <span>MATIC/POLYGON</span>
                      </li>
                      <li><div className="soon"><span className="tag_blue" style={{ width: "27%" }}></span>SOON</div></li>
                      <li><div className="soon"><span className="tag_blue" style={{ width: "43%" }}></span>SOON</div></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="blue mb10">dApps</h3>
                    <ul className="logos">
                      <li className="logo-r">
                        <img src="./../../styles/whitepaper/qidao_logo.png" alt="" />
                        <span>QiDao</span>
                      </li>
                    </ul>
                  </div>
                </div>


                <h3 className="blue mb10">Technical partners</h3>
                <div className="partners mb50">
                  <div className="item"><img src={btcLogo} alt="" /></div>
                  <div className="item"><img src={zokioLogo} alt="" /></div>
                  <div className="item"><img src={avaxLogo} alt="" /></div>
                  <div className="item"><img src={bridgeLogo} alt="" /></div>
                  <div className="item"><img src={halbornLogo} alt="" /></div>
                  <div className="item"><img src={chartExLogo} alt="" /></div>
                  <div className="item"><img src={moonbeanLogo} alt="" /></div>
                  <div className="item"><img src={chainLinkLogo} alt="" /></div>
                  <div className="item"><img src={web3Logo} alt="" /></div>
                  <div className="item"><img src={kaironLogo} alt="" /></div>
                  <div className="item"><img src={starterLogo} alt="" /></div>
                  <div className="item"><img src={gondolaLogo} alt="" /></div>
                </div>

                <h3 className="blue mb10" id="nav_14">Insurance</h3>

                <p className="mb30">The importance of Relay as a trusted bridge service connecting some of the largest players in DeFi underpins the need for insurance. Our partnership with Bridge Mutual brings on-chain insurance to cross-chain swaps making trades of all sizes safe and secure. Relay has jump started a collateral coverage pool with Bridge Mutual wherein users will be able to buy policies against the staked collateral at a small premium.</p>

                <h3 className="blue mb10">Security</h3>

                <p className="mb30">All Relay contracts and code have undergone an extensive audit by the excellent team at Halborn Security, plus a previous audit performed by Zokyo in early 2021. The combined Relay dev team has more than 30 years experience in blockchain.</p>

                <h2 className="sub" id="nav_15"><span>The Revenue Architecture:</span></h2>

                <h4 className="mb30 bold">
                  TL;DR - $RELAY holders earn Gas Fees from their staked $RELAY while simultaneously experiencing an increase in the $RELAY token value proportional to the volume of the bridged transactions and buyback rate.
                </h4>

                <div className="post_image">
                  <a data-lightbox="image-9">
                    <img src={postLogo} alt="image-9" /></a>
                </div>

                <h3 className="blue mb10" id="nav_16">A positive feedback loop</h3>

                <p className="mb30">The team designed the Relay bridge to allow a positive feedback loop between the $RELAY to- ken price and the volume of rewards generated by the Bridge, meaning that as Relay becomes more popular, $RELAY holders benefit both in increased rewards and increased market interest around holding $RELAY. This is further compounded by the low supply of the $RELAY token (only 10,000,000 Total Supply) which catalyzes accumulation and HODLing.</p>

                <h4 className="bold mb30">Without farming emissions to suppress $RELAY price, there is prac- tically no limit to its growth potential. Metcalfe’s Law (wherein val- ue increases hyper-exponentially with the number of participating nodes or networks) gives Relay an extreme first mover advantage backed up by its already proven structural advantages.</h4>

                <p className="mb50">$RELAY token holders can provide liquidity for cross-chain swaps and earn native gas fee tokens from each bridge transaction performed. This means that by providing liquidity with $RELAY, the bridge fees from AVAX, ETH, BNB, MATIC, HT, DOT, SOL, etc., are split among $RELAY liquidity pro- viders. This is a new use of a Liquidity Pool and rewarding with tokens that investors usually seek in their crypto portfolio.</p>

                <h4 className="mb30">Is this even fair?</h4>

                <p className="mb30">Yes.<br />
                  Relay provides a high value service at low cost to DeFi users while driving its own positive feedback of price. Because liquidity (TVL) increases with the project’s increased use, the bridge fees can be reduced to remain competitive with future bridging technologies. Interlocking this many reinforc- ing factors creates an upward value spiral:</p>

                <p className="bold mb50">More value = more liquidity = cheaper+better+faster swaps = more users = more value, and</p>

                <h3 className="blue mb10" id="nav_17">Estimating the Cross-Chain market:</h3>

                <p className="mb30">The total revenue Relay can possibly capture is calculated from a percentage of the total bridge transactions occurring across all DEX and dApp projects linked to Relay. We cannot assume a competitor-free landscape will exist for very long, so our estimates of Total Accessible Volume (TAV) and captured revenue are conservative.</p>

                <h3 className="blue mb10" id="nav_18">Because Math: Bridge count vs. Chain count</h3>

                <p className="mb30">To understand the Volume of transactions within Relay, we must keep in mind there is a bridge for each connection between different blockchains. This means that a single bridge is a cross chain path between two blockchains. So the total volume of the RelayChain is a multiple of the total number of bridges running between chains. When a new chain is added to Relay, it bridges con- nections to all the existing chains which logarithmically increases the transaction volume and sub- sequent revenue potentials.</p>

                <p className="mb30">Illustrations shown below demonstrate how Relay transaction volume scales:</p>

                <div className="post_image">
                  <a data-lightbox="image-10">
                    <img src={postLogo10} alt="image-10" /></a>
                </div>

                <p className="mb30">Equation to calculate the number of bridges as a function of the number of chains:</p>

                <p className="mb30">Bridge total = <span className="formula"><span>[ n* ( n - 1 ) ]</span><span>2</span></span>
                  (“n”equals number of chains)</p>

                <div className="post_image">
                  <a data-lightbox="image-11">
                    <img src={postLogo11} alt="image-11" /></a>
                </div>

                <p className="mb30">The compounding relationship between the number of blockchains and the possible number of unique bridge combinations is shown below:</p>

                <div className="post_image">
                  <a data-lightbox="image-12">
                    <img src={postLogo12} alt="image-12" /></a>
                </div>

                <h3 className="mb30">Estimating volume between 2 blockchains</h3>

                <p className="mb30">2 chains = 1 bridge</p>

                <p className="mb30">Let’s assume the following theoretical transaction volumes for all services cross chaining via the same two blockchains:</p>

                <ul className="icon-r mb30">
                  <li>25 000 transactions/day</li>
                  <li>Around 750,000 transactions/month</li>
                </ul>

                <p className="mb30">Of the total transactions going cross-chain, Relay can capture a percentage of the total market. We assume 10% market capture as a minimum and work towards being the most trusted bridge in crypto responsible for {'\>'} 50%. As bridging is a new service, and the average Ethereum trade is in excess of $3000, we estimate a $10 bridge fee to be reasonable for customers securely moving assets between chains.</p>

                <h3 className="blue mb10" id="nav_19">Monthly bridge revenue simulation</h3>
                <p className="mb30">Based on a $10 transaction fee, the following table represents the market yield as more blockchains are added to the Relay service:</p>

                <div className="post_image">
                  <a data-lightbox="image-13">
                    <img src={postLogo13} alt="image-13" /></a>
                </div>

                <p className="mb30 center bold">Market share and revenue (in $)</p>

                <div className="post_image">
                  <a data-lightbox="image-14">
                    <img src={postLogo14} alt="image-14" /></a>
                </div>

                <h3 className="blue mb30" id="nav_20">Relay liquidity pools revenue estimates</h3>

                <ul className="mb30">
                  <li>Based on:

                    <ul>
                      <li>• 50% of bridge revenue</li>
                      <li>• Distributed over 21 pools</li>
                    </ul>
                  </li>
                </ul>

                <div className="post_image">
                  <a data-lightbox="image-15">
                    <img src={postLogo15} alt="image-15" /></a>
                </div>

                <h2 className="sub" id="nav_21"><span>Relay Tokenomics</span></h2>
                <h3 className="blue mb30" id="nav_22">$RELAY</h3>

                <div className="columns two mb30 relay">
                  <div className="bold">Supply:</div>
                  <div>10 million tokens</div>

                  <div className="bold">Initial price:</div>
                  <div>$ZERO price multiplied by 100</div>

                  <div className="bold">Initial market cap:</div>
                  <div>Same as $ZERO (proportional swap)</div>
                </div>

                <div className="post_image">
                  <a data-lightbox="image-16">
                    <img src={postLogo16} alt="image-16" /></a>
                </div>

                <ul className="icon-r mb30" id="nav_23">
                  <li>Advisors - tokens are fully locked, if an advisor is signed, they receive 10% of their
                    tokens after 30 days, 15% after 60 days, and the remaining 25% each quarter thereafter.
                  </li>
                  <li>IDO - Initial DEX Offering, helps enable us to bootstrap liquidity on the initial RELAY
                    pools.
                  </li>
                  <li>Legacy Zero Holders - Snapshots already taken in June 2021. Weighted based on current
                    ZERO holdings. Linearly vests each day for 6 months. Fully vested 12/2021.
                  </li>
                  <li>ZERO to RELAY Swap - 100 ZERO can be swapped for 1 RELAY. 30-days to claim. Anything un-
                    claimed is burnt.
                  </li>
                  <li>Network Growth Fund - Linearly vests each day for 2 years. Helps incentivize developers
                    and partners to build on/with RELAY. Fully vested 6/2023.
                  </li>
                  <li>Community Incentives - As needed (for liquidity mining for example) — 24 hour time clock to withdraw any funds from the incentives contract. Community will be notified of the withdrawal and an event will be broadcast on blockchain.</li>
                  <li>Team - 6 month cliff. Linearly vests each day for 1 year after the expiration of the 6 month cliff. Fully vested 12/2022.</li>
                  <li>Marketing - Linearly vests each day for 2 years. Fully vested 6/2023</li>
                </ul>


                <h3 className="blue mb10" id="nav_24">The swap from $ZERO</h3>
                <p className="mb30">$ZERO holders will be able to claim $RELAY tokens in exchange for their $ZERO tokens at a 100:1 ($ZERO:$RELAY) ratio, regardless of the price of $ZERO or $RELAY at the time of the claim. The swap is proportional for all holders and does not reduce holders’ relative percentages.</p>

                <h2 className="sub" id="nav_25"><span>The Future:</span></h2>
                <p className="mb30">RELAY is a decentralized project with contributions from a global community working tirelessly to connect every critical blockchain. As RELAY grows, the community does, too.</p>

                <h3 className="blue mb30" id="nav_26">Roadmap</h3>

                <ul className="icon-r mb30">
                  <li>Continuous onboarding of new chains: Moonriver, Cosmos, Fantom, Solana, and Near (Aurora)</li>
                  <li>Marketing Marketing Marketing</li>
                  <li>Implement the Relay Vault</li>
                  <li>Rollout Dynamic Bridge Fees</li>
                  <li>B2B: Forge partnerships with the largest chains and liquidity providers</li>
                  <li>Q4 MEV solutions with <span className="tag_blue" style={{ width: "130px" }}>Soon</span></li>
                  <li>Continue forming new partnerships to integrate best-in-breed solutions</li>
                </ul>

                <p className="mb30">As more and more blockchains become operational, there is a pressing need to move assets and capital efficiently from chain to chain. Asset interoperability is paramount to solving the issue of fragmented liquidity across chains, and Relay is leading the race to bridge all of DeFi.</p>

              </div>

              <div className="post_image bg">
                <img src={bottomBgLogo} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="slide first">
          <div className="container">
            <div className="content">
              <div className="logo-r">
                <img src={relayLogo} alt="" />
              </div>
              <div className="text">
                <h1>RelayChain</h1>
                <h2>Bridging DeFi</h2>

                <ul className="socials mb50">
                  <li><a href="https://twitter.com/relay_chain" target="_blank">
                    <img src={twitterLogo} alt="" /></a></li>
                  <li><a href="https://www.youtube.com/channel/UC8q_XLKQtI-x5PUa4Rg3RrQ" target="_blank">
                    <img src={youtubeLogo} alt="" /></a></li>
                </ul>

                <h4>White Paper Version 1.0</h4>
                <h4 className="letter-spacing">August 2nd, 2021</h4>
              </div>

            </div>
          </div>
        </section>
      </div>

      <a href="#navigation" id="#arrow" className={scrollPosition > 2700 ? "back_to_nav-show" : "back_to_nav"} title="Back to nav">
        <img src={arrowLogo} alt="" />
      </a>
    </div>
  )
}
