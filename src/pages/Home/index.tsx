import "./styles.scss";

import BottomList from "./components/BottomList";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Layout from "../../layout/MainLayout";
import RelaySplash from "../../assets/images/splash-image.png";

export default function Home() {
  const goToSite = (str) => {
    window.open(str, "_blank");
  };

  return (
    <Layout hasSnow={true}>
      {/*
        <div className="container">
          <Hero goToSite={goToSite} />
          <BottomList goToSite={goToSite} />
        </div>
        <Carousel />
        <Footer />
      */}
      <div style={{ margin: 'auto', display: 'block', width: '600px', maxWidth: '90%'}}>
        <h1 style={{ fontSize: '1.75rem', color: '#fff', textAlign: 'center', marginTop: '8rem'}}>Simple, fast, cross-chain token transfers between the world's leading blockchains.</h1>
        <img src={RelaySplash} alt={"Relay Splash"} style={{ display: 'block', margin: 'auto', opacity: '.75', marginTop: '2rem', width: '460px', maxWidth: '100%'}} />
        <h3 style={{
          display: 'block',
          textAlign: 'center',
          color: '#6752F7',
          marginTop: '2rem',
          fontSize: '1.25rem'
        }}>Coming Soon</h3>
      </div>
    </Layout>
  );
}
