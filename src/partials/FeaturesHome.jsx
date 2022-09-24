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
    <section  style={{marginLeft:'-70%',marginTop:'-100px'}}>

      <div className="max-w-6xl mx-auto px-4 sm:px-6" >
        <div class="ui three column very relaxed grid">
          <div  style={{width:'28%', position:'absolute',marginLeft:'-16%'}} class="column">
            <Tabs />
          </div>
          <div style={{width:'30%',position:'absolute',marginLeft:'11%'}} class="column">

            <MainEvent />
          </div>
          <div style={{width:'25%',position:'absolute',marginLeft:'42%'}} class="column">
            <LoveCHat />
          </div>

        </div>

      </div>





    </section>
  );
}

export default FeaturesHome;
