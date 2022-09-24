import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import TabsImage01 from '../images/Clevv.jpg';
import HeroImage01 from '../images/hero-image-01.jpg';
import Main1 from '../images/Match1.png';

import Main2 from '../images/jagu.png';
import Bet2 from '../images/Mariners.jpg';

import Bet3 from '../images/Huston.jpg';

import Bet4 from '../images/Cardinals.jpg';





function Tabs() {
  

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab - 1]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section style={{ marginTop: '-135px', marginLeft: '-50%', width: '500px' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12" data-aos-id-tabs>
            <h2 style={{ marginTop: '-40px' }} className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">Main Event</h2>

          </div>

          {/* Section content */}
          <div >

            {/* Tabs buttons */}
            <div className="flex flex-wrap justify-center -m-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">
            </div>

            {/* Tabs items */}
            <div className="relative flex flex-col mt-16" data-aos="fade-up" ref={tabs}>
              <br></br>
              <div style={{ width: '100px', marginLeft: '20px' }}>
                <img className="w-full h-full object-cover" src={Main1} width="516" height="387" alt="Tabs 01" />

              </div>
              <br></br>
              <p className="text-lg text-gray-400">Cleveland Browns</p>
              <h2 style={{ marginTop: '-95px', marginLeft: '200px' }} className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">VS</h2>
              <div style={{ width: '100px', marginLeft: '320px', marginTop: '-100px' }}>
                <img className="w-full h-full object-cover" src={Main2} width="516" height="387" alt="Tabs 01" />

              </div>
              <p style={{ marginLeft: '270px' ,marginTop:'28px'}} className="text-lg text-gray-400">Jacksonville Jaguars</p>
              <br></br><br></br>
              <h2 style={{  marginLeft: '50px',marginLeft:'140px'}} className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">24</h2>
              <h2 style={{  marginTop: '-70px',marginLeft:'220px'}} className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">-</h2>
              <h2 style={{  marginLeft: '260px',marginTop:'-61px' }} className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">13</h2>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Tabs;
