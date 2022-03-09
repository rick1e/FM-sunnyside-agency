import { useState } from 'react';

import './App.css';

import Blurb from './components/Blurb/Blurb.component'
import Testimonial from './components/Testimonial/Testimonial.component';
import Descriptor from './components/Descriptor/Descriptor.component';

import graphicDesign from './assets/image-graphic-design.jpg'
import photography from './assets/image-photography.jpg'
import transform from './assets/image-transform.jpg'
import standOut from './assets/image-stand-out.jpg'
import header from './assets/image-header.jpg'


import cones from './assets/image-gallery-cone.jpg'
import milkbottles from './assets/image-gallery-milkbottles.jpg'
import orange from './assets/image-gallery-orange.jpg'
import sugarcubes from './assets/image-gallery-sugarcubes.jpg'

import arrowDown from './assets/icon-arrow-down.svg'

import facebook from './assets/icon-facebook.svg'
import instagram from './assets/icon-instagram.svg'
import pinterest from './assets/icon-pinterest.svg'
import twitter from './assets/icon-twitter.svg'

import hamburger from './assets/icon-hamburger.svg'

import emily from './assets/image-emily.jpg';
import thomas from './assets/image-thomas.jpg';
import jennie from './assets/image-jennie.jpg';



function App() {
  const [showMenu, setShowMenu] = useState(true)

  return (
    <div className="App">
      <div className="Hero">
        <img src={header} alt="header" style={{ maxWidth: 1440 }} />
        <div className="header">
          <div className="header-left">
            <span>
              sunnyside
            </span>
            <img onClick={() => { setShowMenu(!showMenu) }} src={hamburger} alt={"hamburger"} />
          </div>
          <div className={showMenu ? "header-right" : "header-right hidden"}>

            <span className="nav-item">
              About
          </span>
            <span className="nav-item">
              Services
          </span>
            <span className="nav-item last">
              Projects
          </span>
            <span className="contact">
              CONTACT
          </span>
          </div>

        </div>
        <div className="heroText">
          WE ARE CREATIVES
        <img className="arrow-down" src={arrowDown} alt="arrowDown" />
        </div>


      </div>
      <div className="container">
        <div className="item">
          <Blurb
            title="Transform your brand"
            body="We are a full-service creative agency specializing in helping brands grow fast. 
            Engage your clients through compelling visuals that do most of the marketing for you."
            highlightColour="#FAD400"
          >
          </Blurb>
        </div>
        <div className="item">
          <img src={transform} alt={"Transform"} />
        </div>
      </div>
      <div className="container reverse">
        <div className="item">
          <Blurb
            title="Stand out to the right audience"
            body="Using a collaborative formula of designers, researchers, 
            photographers, videographers, and copywriters, we’ll build and
             extend your brand in digital places."
            highlightColour="#FE7867"
          >
          </Blurb>
        </div>
        <div className="item">
          <img src={standOut} alt={"Stand out"} />
        </div>
      </div>
      <div className="container">
        <Descriptor
        body="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
        title="Graphic design"
        color="#25564B"
        image={graphicDesign}
        >
        </Descriptor>
        <Descriptor
        body="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        title="Photography"
        color="#19536B"
        image={photography}
        >
        </Descriptor>
      </div>
      <div className="testimonials">

        <h1>
        CLIENT TESTIMONIALS
        </h1>

        <div className="testimonial-items">
          <Testimonial
            image={emily}
            body="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
            name="Emily R."
            role="Marketing Director"
            >
            </Testimonial>
            <Testimonial
            image={thomas}
            body="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
            name="Thomas S."
            role=" Chief Operating Officer"
            >
            </Testimonial>
            <Testimonial
            image={jennie}
            body="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
            name="Jennie F."
            role="Business Owner"
            >
            </Testimonial>
          </div>
      </div>
      <div className="image-spread">
        <img src={cones} alt={"cones"} />
        <img src={milkbottles} alt={"milk bottles"} />
        <img src={orange} alt={"oranges"} />
        <img src={sugarcubes} alt={"sugar cubes"} />
      </div>
      <div className="footer">
        <div className="footer-logo">
          <span>
            sunnyside
          </span>
        </div>
        <div className="footer-nav">
        <span>
          About
        </span>
        <span>
          Services
        </span>
        <span>
          Projects
        </span>
      </div>
      <div className="footer-social">
        <img src={facebook} alt={"facebook"} />
        <img src={instagram} alt={"instagram"} />
        <img src={twitter} alt={"twitter"} />
        <img src={pinterest} alt={"pinterest"} />
      </div>
      
      </div>
    </div>
  );
}

export default App;
