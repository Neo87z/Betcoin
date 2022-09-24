import React, { useEffect, useState, useRef } from 'react';

import FeatIllustration from '../images/chatBlack.jpeg';
import FeatAvatar from '../images/features-avatar.jpg';
import Tabs from '../partials/Tabs';
import LoveCHat from '../pages/LiveChat';
import MainEvent from '../partials/Match';
import Axios from "axios";




function FeaturesHome() {
  const [MessageList, setMessafeList] = useState([])
  const reversedData = [...MessageList].reverse();
  const [fetchDataTrigger, setFetchDataTrigger] = useState(0);
  const fetchDataIntervalId = useRef();






  return (
    <section  >

      <div className="max-w-6xl mx-auto px-4 sm:px-6" >
        <div class="ui three column very relaxed grid">
          <div style={{ width:'700px',marginLeft:'-470px', marginTop:'-80px'}} class="column">
          <Tabs />
          </div>
          <div style={{ width:'700px',marginTop:'-80px',marginLeft:'-50px'}} class="column">
          
            <MainEvent />
          </div>
          <div style={{ width:'10px',marginTop:'-68px',marginTop:'-150px',marginLeft:'-70px'}} class="column">
            <LoveCHat />
          </div>

        </div>

      </div>
    




    </section>
  );
}

export default FeaturesHome;
