import React, { useEffect, useState, useRef } from 'react';

import FeatIllustration from '../images/chatBlack.jpeg';
import FeatAvatar from '../images/features-avatar.jpg';
import Tabs from './Tabs';
import LoveCHat from '../pages/LiveChat';
import MainEvent from './Match';
import Axios from "axios";




function FeaturesHome() {
  const [MessageList, setMessafeList] = useState([])
  const reversedData = [...MessageList].reverse();
  const [fetchDataTrigger, setFetchDataTrigger] = useState(0);
  const fetchDataIntervalId = useRef();






  return (
    <section   style={{position:'absolute',marginLeft:'-30%'}}>
    
  <Tabs style={{position:'absolute'}} />
  <MainEvent  style={{position:'absolute'}}/>
  <LoveCHat style={{position:'absolute'}} />



    </section>
  );
}

export default FeaturesHome;
