import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import TabsImage01 from '../images/tabs-image-01.jpg';
import HeroImage01 from '../images/hero-image-01.jpg';
import { Link } from 'react-router-dom';

import NewsImage01 from '../images/news-01.jpg';
import NewsImage02 from '../images/news-02.jpg';
import NewsImage03 from '../images/news-03.jpg';
import NewsAuthor01 from '../images/news-author-01.jpg';
import NewsAuthor02 from '../images/news-author-02.jpg';
import NewsAuthor03 from '../images/news-author-03.jpg';
import Axios from "axios";
function Tabs() {
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
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20  border-gray-800">

          <div className="max-w-3xl mx-auto text-center pb-12" data-aos-id-tabs>
            <h2 className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">Live CHat</h2>

          </div>

          <div className="grid gap-12 md:grid-cols-1 md:gap-x-6 md:gap-y-8 items-start">
            <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
            

                <div style={{ width: '100%', height: '500px', overflow: 'auto', margin: '20px', textAlign: 'justify', padding: '20px' }}>
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

             
            </article>

          </div>


        </div>
      </div>
    </section >
  );
}

export default Tabs;
