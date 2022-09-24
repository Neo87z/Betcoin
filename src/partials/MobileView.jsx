import React, { useEffect, useState, useRef } from 'react';

import FeatIllustration from '../images/chatBlack.jpeg';
import FeatAvatar from '../images/features-avatar.jpg';
import Tabs from './MobileTab';
import LoveCHat from '../pages/mobileChat';
import MainEvent from './mobileMatch';
import Axios from "axios";




function FeaturesHome() {
  const [MessageList, setMessafeList] = useState([])
  const reversedData = [...MessageList].reverse();
  const [fetchDataTrigger, setFetchDataTrigger] = useState(0);
  const fetchDataIntervalId = useRef();






  return (
    <section style={{ position: 'absolute', marginLeft: '-5%', width: '100%' }}>

      <Tabs style={{ position: 'absolute' }} />
      <MainEvent style={{ position: 'absolute' }} />
      <LoveCHat style={{ position: 'absolute' }} />



    </section>
  );
}

export default FeaturesHome;
