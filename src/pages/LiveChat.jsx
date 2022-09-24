import React, { useEffect, useState, useRef } from 'react';

import FeatIllustration from '../images/chatBlack.jpeg';
import FeatAvatar from '../images/features-avatar.jpg';
import Tabs from '../partials/Tabs';
import MainEvent from '../partials/Match';
import Axios from "axios";




function FeaturesHome() {
  const [MessageList, setMessafeList] = useState([])
  const reversedData = [...MessageList].reverse();
  const [fetchDataTrigger, setFetchDataTrigger] = useState(0);
  const fetchDataIntervalId = useRef();


  useEffect(() => {
    setFetchDataInterval(1000)
    Axios.get('https://asdasdasdasd2222.herokuapp.com/rooms/TestData').then((response) => {
      setMessafeList(response.data)
      console.log(response.data)
    })
    // Clean up for unmount to prevent memory leak
    return () => clearInterval(fetchDataIntervalId.current);
  }, [fetchDataTrigger]);

  const setFetchDataInterval = (interval) => {
    // Clear old interval
    if (fetchDataIntervalId.current) {
      clearInterval(fetchDataIntervalId.current);
      fetchDataIntervalId.current = undefined;
    }

    // Set new interval
    if (interval > 0) {
      fetchDataIntervalId.current = setInterval(() => {
        setFetchDataTrigger(Date.now());
      }, interval);
    }
  };




  return (
    <section  >

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20  border-gray-800">


          {/* Items */}
          <div className="grid gap-20" data-aos-id-features-home>

            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}

              <div style={{ width: '600px' }} className="max-w-xl md:max-w-none border-t border-gray-800 md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up" data-aos-anchor="[data-aos-id-features-home]">


                <div className="relative">
                  <div className="max-w-3xl mx-auto text-center pb-12" data-aos-id-tabs>

                    <h2 style={{ marginTop: '70px' }} className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">Live Chat</h2>

                  </div>



                  {/*   <svg style={{ marginTop: '50px', marginLeft: '10px' }} className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto" width="540" height="520" viewBox="0 0 540 520" xmlns="http://www.w3.org/2000/svg">
                    <g className="fill-current text-purple-600">
                      <circle className="pulse" cx="270" cy="260" r="64" />
                      <circle className="pulse pulse-1" cx="270" cy="260" r="64" />
                      <circle className="pulse pulse-2" cx="270" cy="260" r="64" />
                      <circle className="pulse pulse-3" cx="270" cy="260" r="64" />
                    </g>
                  </svg>*/}
                </div>
                <div style={{ height: '450px', overflow: 'auto', margin: '20px', textAlign: 'justify', padding: '20px' }}>
                  <div className="max-w-3xl mx-auto -my-4 md:-my-6" data-aos-id-timeline>

                    {/* 1st item */}
                    {reversedData.map((val, key) => {
                      console.log(val)
                      return <div>

                        <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-anchor="[data-aos-id-timeline]">
                          <div className="pl-2">

                            <div className="flex items-center mb-3">
                              <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">{val.Sender}</div>

                              <div className="absolute left-12 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                              <div className="absolute left-12 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                            </div>

                            <p style={{ marginLeft: '30px' }} className="text-lg text-gray-400">{val.Message}</p>
                          </div>
                        </div>

                      </div>
                    })}



                  </div>


                </div>
              </div>





            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesHome;
