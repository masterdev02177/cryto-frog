import React, { useEffect, useState } from 'react';
import Routes from "./routes";
import { Link, useHistory } from "react-router-dom";
import './App.css';
import bannerImg from "./assets/gif.gif";
import frog1 from "./assets/frogs1.png";
import frog2 from "./assets/frogs2.png";
import frog3 from "./assets/frogs3.png";
import frog4 from "./assets/frogs4.png";
import frog5 from "./assets/frogs5.png";
import frog6 from "./assets/frogs6.png";
 
function App() {

  const history = useHistory();
  const [path, setPath] = useState("");

  window.addEventListener("load", () => {
    
    if(window.location.pathname === "/contact"){
      setPath(window.location.pathname);
    }
  });


  const checkPath = () => {
    history.listen((location) => {
      setPath(location.pathname);
    });
  }


  useEffect(() => {
    checkPath();
  }, []);


  const showContact = path;
  let _contact;
  if(showContact !== "/contact"){
    _contact = (<li><Link to="/contact">Contact Me</Link></li>)
  }


  return (
    <div className="App">
     <main>
        <nav className="navbar navbar-expand navbar-dark ">
          <div className="container">
            <a href="#home" className="navbar-brand">
              <h2>CYBER FROGS</h2>
            </a>
            <div className="ms-auto navbar-nav">
              <a
                href="https://discord.gg/EkTxRBwHGF"
                data-rr-ui-event-key="https://discord.gg/EkTxRBwHGF"
                className="nav-link"
              >
                Discord
              </a>
              <a
                href="https://twitter.com/CyberFrogsNFT"
                data-rr-ui-event-key="https://twitter.com/CyberFrogsNFT"
                className="nav-link"
              >
                Twitter
              </a>
            </div>
          </div>
        </nav>
        <div className="hero text-white container-fluid">
          <div id="top" className="container">
            <div className="justify-content-center align-items-center text-center py-5 row">
              <div className="col-md col-12">
                <h2 className="pb-2 text-center display-2">
                  WHAT ARE CYBER FROGS?
                </h2>
                <p className="">
                  Cyber Frogs are a collection of 8888 randomly generated Frogs
                  stored on the Solana blockchain, made with over 130 unique
                  traits of varying rarity. Each Cyber Frog is non-sequentially
                  minted and provably unique.
                </p>
                <h2 className="display-4">SOLD OUT!</h2>
              </div>
              <div className="col-md col-12">
                <img src={bannerImg} className="mb-5 img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero text-white text-center container-fluid">
          <h2 className="display-2">Secondary Marketplaces</h2>
          <div className="container">
            <div className="justify-content-center align-items-center py-5 row">
              <div className="col-md-3 col-sm-6 col-6">
                <a href="https://solanart.io/collections/cyberfrogs">
                  <button className="btn btn-lg btn-purple m-3">
                    <h2>solanart.io</h2>
                  </button>
                </a>
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <a href="https://magiceden.io/marketplace?collection_symbol=cyber_frogs">
                  <button className="btn btn-lg btn-purple m-3">
                    <h2>magiceden.io</h2>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero text-white container-fluid">
          <div className="container">
            <div className="justify-content-center align-items-center py-5 text-center row">
              <div className="col-10">
                <h2 className="display-2 pb-2 text-center">ORIGINS</h2>
                <p>
                  Neo Tokyo 2132 - After the global economy came to a halt and
                  markets crashed, the world has entered turbulent times.
                </p>
                <p>
                  8,888 Cyber Frogs are all that's left in Neo Tokyo. Gangs of
                  Cyber Frogs have formed and began to take control over large
                  districts of the city whilst everyday citizens are forced to
                  live in the chaos.
                </p>
                <p>Will the police be able to restore order in the city?</p>
                <p>Which side will you be on?</p>
              </div>
            </div>
          </div>
        </div>
        <section className="showcase py-5">
          <div className="container-fluid">
            <div className="row">
              <div className="pb-4 col-md-4 col-4">
                <img src={frog1} className="rounded img-fluid" />
              </div>
              <div className="pb-4 col-md-4 col-4">
                <img src={frog2} className="rounded img-fluid" />
              </div>
              <div className="pb-4 col-md-4 col-4">
                <img src={frog3} className="rounded img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <div className="hero text-white container-fluid">
          <div className="container">
            <div className="justify-content-center align-items-center text-center py-5 row">
              <div className="col-10">
                <h2 className="display-2 pb-2 text-center">ROADMAP</h2>
                <h2 className="text-center">0% Sold</h2>
                <p>
                  Minting opens and Cyber Frogs begin wreaking havoc in Neo
                  Tokyo.
                </p>
                <p>
                  Verified Cyber Frogs can enter the exclusive Neo Tokyo
                  Underground community for giveaways.
                </p>
                <h2 className="text-center pt-3">25% Sold</h2>
                <p>10 Cyber Frogs airdropped to random holders.</p>
                <p>40 SOL added to community wallet.</p>
                <h2 className="text-center pt-3">50% Sold</h2>
                <p>40 SOL added to community wallet.</p>
                <p>
                  Huge Giveaway will be launched for Cyber Frog holders - You
                  don't want to miss this!
                </p>
                <h2 className="text-center pt-3">75% Sold</h2>
                <p>
                  Exclusive merch will be launched for verified Cyber Frogs
                  holders.
                </p>
                <p>40 SOL added to Community wallet.</p>
                <h2 className="text-center pt-3">100% Sold</h2>
                <p>All Cyber Frogs are alive. </p>
                <p>
                  We will work on derivative Cyber Frogs for holders and
                  exclusive partnerships to expand the Cyber Frog universe.
                </p>
                <p>
                  Police and gangs begin fighting for control of Neo Tokyo!
                  Expect post-launch interactive activities to fight other Cyber
                  Frogs for prizes!!
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="showcase py-5">
          <div className="container-fluid">
            <div className="row">
              <div className="pb-4 col-md-4 col-6">
                <img src={frog4} className="rounded img-fluid" />
              </div>
              <div className="pb-4 col-md-4 col-6">
                <img src={frog5} className="rounded img-fluid" />
              </div>
              <div className="pb-4 col-md-4 col-6">
                <img src={frog6} className="rounded img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <div className="hero text-white container-fluid">
          <div className="container">
            <div className="justify-content-center align-items-center py-5 text-center row">
              <div className="col-10">
                <h2 className="display-2 pb-2 text-center">FAQ</h2>
                <h2>How can I buy a Cyber frog?</h2>
                <p>
                  You can mint Cyber Frogs directly on our site! At the top of
                  this page click "Connect Wallet" and then there will be a
                  button to purchase your frog once the sale is live!
                </p>
                <h2 className=" pt-3">What is the mint cost?</h2>
                <p>It costs 1 SOL per Cyber Frog.</p>
                <h2 className=" pt-3">When will Cyber Frogs release?</h2>
                <p>
                  Cyber Frogs will launch on Monday October 4th at 9:00 PM UTC
                </p>
                <h2 className=" pt-3">Is there a resale market?</h2>
                <p>
                  Yes! We are currently on MagicEden and will be getting on
                  Solanart ASAP after our main sale is completed!
                </p>
                <h2 className=" pt-3">Which wallet should I use?</h2>
                <p>
                  Phantom, Solflare and Sollet all work well. If you own a
                  different wallet, feel free to reach out on Twitter or Discord
                  to check if it's compatible.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a href="#top">
            <button className="btn btn-lg btn-purple mb-5 text-center">
              <h2>BACK TO TOP</h2>
            </button>
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
